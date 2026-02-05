// Always use proxy to avoid CORS issues (NHL API doesn't allow direct browser access)
const NHL_API_BASE = "/api/nhl";

/**
 * Retry helper function
 */
async function retryFetch(url, options = {}, retries = 3, delay = 1000) {
  for (let i = 0; i < retries; i++) {
    try {
      const response = await fetch(url, options);
      if (response.ok) {
        return response;
      }

      // Don't retry on 4xx errors (client errors)
      if (response.status >= 400 && response.status < 500) {
        throw new Error(`NHL API error: ${response.status}`);
      }

      // Retry on 5xx errors (server errors)
      if (i < retries - 1) {
        await new Promise(resolve => setTimeout(resolve, delay * (i + 1)));
        continue;
      }

      throw new Error(`NHL API error: ${response.status}`);
    } catch (error) {
      if (i < retries - 1 && error.name === 'TypeError') {
        // Network error, retry
        await new Promise(resolve => setTimeout(resolve, delay * (i + 1)));
        continue;
      }
      throw error;
    }
  }
}

/**
 * Get NHL games by date
 * @param {string} dateStr - Date in YYYY-MM-DD format (optional, defaults to today)
 */
export async function getGamesByDate(dateStr = null) {
  try {
    // Get date in YYYY-MM-DD format
    const targetDate = dateStr || new Date().toISOString().split('T')[0];

    // Use date-specific endpoint to avoid redirect issues with retry logic
    const response = await retryFetch(
      `${NHL_API_BASE}/schedule/${targetDate}`,
      {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        },
      },
      3, // 3 retries
      1000 // 1 second initial delay
    );

    const data = await response.json();
    console.log("NHL API Response:", data); // Debug log
    return transformGameData(data);
  } catch (error) {
    console.error("Error fetching NHL games:", error);
    console.error("API Base:", NHL_API_BASE); // Debug log

    // Provide more helpful error messages
    if (error.name === 'TypeError' && error.message.includes('fetch')) {
      throw new Error('NHL API에 연결할 수 없습니다. 인터넷 연결을 확인해주세요.');
    } else if (error.message.includes('404')) {
      throw new Error('해당 날짜의 경기 데이터가 없습니다.');
    } else if (error.message.includes('500') || error.message.includes('503')) {
      throw new Error('NHL API가 일시적으로 사용할 수 없습니다. 나중에 다시 시도해주세요.');
    }

    throw error;
  }
}

/**
 * Get today's NHL games with scores (legacy - uses getGamesByDate)
 */
export async function getTodaysGames() {
  return getGamesByDate();
}

/**
 * Get player stats and info
 */
export async function getPlayerInfo(playerId) {
  try {
    const response = await fetch(`${NHL_API_BASE}/player/${playerId}/landing`);

    if (!response.ok) {
      throw new Error(`NHL API error: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching player info:", error);
    throw error;
  }
}

/**
 * Transform raw NHL API game data into a cleaner format
 */
function transformGameData(apiData) {
  if (!apiData || !apiData.gameWeek || !apiData.gameWeek.length) {
    return [];
  }

  const games = [];

  // Process each day in the game week
  apiData.gameWeek.forEach(day => {
    if (!day.games || !day.games.length) return;

    day.games.forEach(game => {
      games.push({
        id: game.id,
        gameDate: game.gameDate,
        startTimeUTC: game.startTimeUTC,
        gameState: game.gameState, // "LIVE", "FUT", "FINAL", "OFF"
        gameScheduleState: game.gameScheduleState,

        // Away team
        awayTeam: {
          id: game.awayTeam.id,
          abbrev: game.awayTeam.abbrev,
          name: game.awayTeam.placeName?.default || game.awayTeam.commonName?.default,
          logo: game.awayTeam.logo,
          score: game.awayTeam.score || 0,
          record: game.awayTeam.record
        },

        // Home team
        homeTeam: {
          id: game.homeTeam.id,
          abbrev: game.homeTeam.abbrev,
          name: game.homeTeam.placeName?.default || game.homeTeam.commonName?.default,
          logo: game.homeTeam.logo,
          score: game.homeTeam.score || 0,
          record: game.homeTeam.record
        },

        // Game details
        period: game.periodDescriptor?.number || 0,
        periodType: game.periodDescriptor?.periodType, // "REG", "OT", "SO"
        clock: game.clock?.timeRemaining || "",
        venue: game.venue?.default,

        // Additional info
        tvBroadcasts: game.tvBroadcasts || [],
        gameOutcome: game.gameOutcome
      });
    });
  });

  return games;
}

/**
 * Format game time for display
 */
export function formatGameTime(startTimeUTC) {
  const gameDate = new Date(startTimeUTC);
  const now = new Date();

  const timeString = gameDate.toLocaleTimeString('ko-KR', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });

  const isToday = gameDate.toDateString() === now.toDateString();

  if (isToday) {
    return `오늘 ${timeString}`;
  }

  const dateString = gameDate.toLocaleDateString('ko-KR', {
    month: 'long',
    day: 'numeric'
  });

  return `${dateString} ${timeString}`;
}

/**
 * Get game status display text
 */
export function getGameStatus(game) {
  switch (game.gameState) {
    case "LIVE":
      if (game.clock) {
        const periodLabel = game.period === 1 ? "1피리어드" :
                           game.period === 2 ? "2피리어드" :
                           game.period === 3 ? "3피리어드" : "연장";
        return `${periodLabel} ${game.clock}`;
      }
      return "생중계";

    case "FINAL":
    case "OFF":
      if (game.periodType === "OT") {
        return "종료/연장";
      } else if (game.periodType === "SO") {
        return "종료/승부샷";
      }
      return "종료";

    case "FUT":
      return formatGameTime(game.startTimeUTC);

    default:
      return game.gameState;
  }
}
