import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import DatePicker from "../components/games/DatePicker";
import LoadingSpinner from "../components/shared/LoadingSpinner";

export default function MLBGamesPage() {
  // 현재 날짜를 기본값으로 (오프시즌이면 안내 메시지 표시됨)
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isOffSeason, setIsOffSeason] = useState(false);

  useEffect(() => {
    document.title = "MLB 경기 일정 | Sports Athletes";
  }, []);

  useEffect(() => {
    fetchMLBGames();
  }, [selectedDate]);

  const fetchMLBGames = async () => {
    setLoading(true);
    setError(null);
    setIsOffSeason(false);

    try {
      const dateStr = selectedDate.toISOString().split('T')[0];

      // MLB API 엔드포인트 - decisions 추가
      const response = await fetch(
        `https://statsapi.mlb.com/api/v1/schedule?sportId=1&date=${dateStr}&hydrate=team,linescore,probablePitcher,decisions`
      );

      if (!response.ok) {
        throw new Error('경기 일정을 불러올 수 없습니다.');
      }

      const data = await response.json();
      console.log('MLB API Response:', data); // 디버깅용

      const gamesData = data.dates?.[0]?.games || [];

      setGames(gamesData);

      // 오프시즌 체크 (현재 날짜인데 경기가 없으면)
      const today = new Date();
      const isToday = selectedDate.toDateString() === today.toDateString();
      const currentMonth = today.getMonth(); // 0-11

      // MLB 오프시즌: 11월(10) ~ 2월(1)
      if (isToday && gamesData.length === 0 && (currentMonth >= 10 || currentMonth <= 1)) {
        setIsOffSeason(true);
      }
    } catch (err) {
      console.error('Error fetching MLB games:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleRefresh = () => {
    fetchMLBGames();
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const getGameStatus = (game) => {
    const status = game.status.detailedState;

    if (status === "Final" || status === "Game Over") {
      return "종료";
    } else if (status === "In Progress" || status === "Live") {
      return "경기중";
    } else if (status === "Scheduled" || status === "Pre-Game") {
      const gameTime = new Date(game.gameDate);
      return gameTime.toLocaleTimeString('ko-KR', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      });
    } else if (status === "Postponed") {
      return "연기";
    } else if (status === "Cancelled") {
      return "취소";
    }
    return status;
  };

  const getStatusClass = (game) => {
    const status = game.status.detailedState;
    if (status === "Final" || status === "Game Over") return "final";
    if (status === "In Progress" || status === "Live") return "live";
    if (status === "Postponed" || status === "Cancelled") return "postponed";
    return "scheduled";
  };

  return (
    <div className="page-container games-page">
      {/* Header */}
      <motion.div
        className="page-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div>
          <h1>MLB 경기 일정</h1>
          <p className="page-subtitle">
            메이저리그 베이스볼 경기 일정을 확인하세요
          </p>
        </div>
        <button
          className="refresh-button"
          onClick={handleRefresh}
          aria-label="새로고침"
        >
          🔄 새로고침
        </button>
      </motion.div>

      {/* Date Picker */}
      <DatePicker
        selectedDate={selectedDate}
        onDateChange={handleDateChange}
      />

      {/* Loading State */}
      {loading && <LoadingSpinner />}

      {/* Error State */}
      {error && (
        <motion.div
          className="error-message"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <p>⚠️ {error}</p>
          <button onClick={handleRefresh}>다시 시도</button>
        </motion.div>
      )}

      {/* No Games */}
      {!loading && !error && games.length === 0 && (
        <motion.div
          className="no-games"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {isOffSeason ? (
            <div className="off-season-notice">
              <h3>⚾ MLB 오프시즌입니다</h3>
              <p>현재 MLB는 오프시즌 중입니다.</p>
              <p>정규시즌은 보통 3월 말~4월 초에 시작됩니다.</p>
              <p className="tip">💡 위 날짜 선택기에서 지난 시즌의 날짜를 선택하면 과거 경기를 확인할 수 있습니다.</p>
              <button
                className="season-games-btn"
                onClick={() => setSelectedDate(new Date('2025-07-15'))}
              >
                2025 시즌 경기 보기
              </button>
            </div>
          ) : (
            <p>⚾ 이 날짜에 예정된 경기가 없습니다.</p>
          )}
        </motion.div>
      )}

      {/* Games Grid */}
      {!loading && !error && games.length > 0 && (
        <div className="games-grid">
          {games.map((game, index) => (
            <motion.div
              key={game.gamePk}
              className={`game-card ${getStatusClass(game)}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              {/* Game Status */}
              <div className={`game-status status-${getStatusClass(game)}`}>
                {getGameStatus(game)}
              </div>

              {/* Teams */}
              <div className="game-teams">
                {/* Away Team */}
                <div className="team away">
                  <div className="team-info">
                    <img
                      src={`https://www.mlbstatic.com/team-logos/${game.teams.away.team.id}.svg`}
                      alt={game.teams.away.team.abbreviation}
                      className="team-logo"
                      onError={(e) => { e.target.style.display = 'none'; }}
                    />
                    <div className="team-details">
                      <div className="team-name">{game.teams.away.team.name}</div>
                      <div className="team-record">
                        ({game.teams.away.leagueRecord?.wins || 0}-{game.teams.away.leagueRecord?.losses || 0})
                      </div>
                    </div>
                  </div>
                  <div className={`team-score ${game.teams.away.score !== undefined ? 'show' : ''}`}>
                    {game.teams.away.score !== undefined ? game.teams.away.score : ''}
                  </div>
                </div>

                {/* Home Team */}
                <div className="team home">
                  <div className="team-info">
                    <img
                      src={`https://www.mlbstatic.com/team-logos/${game.teams.home.team.id}.svg`}
                      alt={game.teams.home.team.abbreviation}
                      className="team-logo"
                      onError={(e) => { e.target.style.display = 'none'; }}
                    />
                    <div className="team-details">
                      <div className="team-name">{game.teams.home.team.name}</div>
                      <div className="team-record">
                        ({game.teams.home.leagueRecord?.wins || 0}-{game.teams.home.leagueRecord?.losses || 0})
                      </div>
                    </div>
                  </div>
                  <div className={`team-score ${game.teams.home.score !== undefined ? 'show' : ''}`}>
                    {game.teams.home.score !== undefined ? game.teams.home.score : ''}
                  </div>
                </div>
              </div>

              {/* Game Info */}
              <div className="game-venue">
                📍 {game.venue.name}
                {game.linescore && game.linescore.currentInning && (
                  <span className="inning-info">
                    {` • ${game.linescore.currentInning}회 ${game.linescore.inningHalf === 'Top' ? '초' : '말'}`}
                  </span>
                )}
              </div>

              {/* Decisions - 승리투수, 패전투수, 세이브 */}
              {(game.status.detailedState === "Final" || game.status.detailedState === "Game Over") && game.decisions && (
                <div className="game-decisions">
                  {game.decisions.winner && (
                    <div className="decision-item win">
                      <span className="decision-label">승</span>
                      <span className="decision-name">{game.decisions.winner.fullName}</span>
                    </div>
                  )}
                  {game.decisions.loser && (
                    <div className="decision-item loss">
                      <span className="decision-label">패</span>
                      <span className="decision-name">{game.decisions.loser.fullName}</span>
                    </div>
                  )}
                  {game.decisions.save && (
                    <div className="decision-item save">
                      <span className="decision-label">S</span>
                      <span className="decision-name">{game.decisions.save.fullName}</span>
                    </div>
                  )}
                </div>
              )}

              {/* Pitchers */}
              {game.status.detailedState === "Scheduled" && game.teams.away.probablePitcher && (
                <div className="pitchers-info">
                  <div className="pitcher">
                    <span className="label">선발:</span>
                    <span className="name">{game.teams.away.probablePitcher.fullName}</span>
                  </div>
                  <span className="vs">vs</span>
                  <div className="pitcher">
                    <span className="name">{game.teams.home.probablePitcher?.fullName || 'TBD'}</span>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              {(game.status.detailedState === "Final" || game.status.detailedState === "Game Over" || game.status.detailedState === "In Progress" || game.status.detailedState === "Live") && (
                <div className="game-actions">
                  {/* 스토리 버튼 - 경기 종료 시만 표시 */}
                  {(game.status.detailedState === "Final" || game.status.detailedState === "Game Over") && (
                    <a
                      href={`https://www.mlb.com/stories/game/${game.gamePk}?storylocal=gameday-postgame-wrap-game-embed`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="highlight-button story-button"
                    >
                      <span className="button-icon">📖</span>
                      스토리 보기
                    </a>
                  )}

                  {/* 하이라이트/생중계 버튼 */}
                  <a
                    href={`https://www.mlb.com/gameday/${game.gamePk}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="highlight-button gameday-button"
                  >
                    <span className="button-icon">▶</span>
                    {(game.status.detailedState === "Final" || game.status.detailedState === "Game Over") ? "하이라이트 보기" : "생중계 보기"}
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
