const MLB_API_BASE = "https://statsapi.mlb.com/api/v1";
const CURRENT_SEASON = new Date().getFullYear();

/**
 * Fetch current season stats for a player
 * Returns { hitting, pitching } — either may be null if unavailable
 */
export async function fetchPlayerCurrentStats(mlbId) {
  const url = `${MLB_API_BASE}/people/${mlbId}/stats?stats=season&season=${CURRENT_SEASON}&group=hitting,pitching`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`MLB API error: ${res.status}`);
  const data = await res.json();

  let hitting = null;
  let pitching = null;

  for (const stat of data.stats || []) {
    const splits = stat.splits || [];
    if (!splits.length) continue;
    const s = splits[0].stat;

    if (stat.group.displayName === "hitting") {
      hitting = {
        battingAvg: parseFloat(s.avg) || 0,
        homeRuns: s.homeRuns ?? 0,
        rbi: s.rbi ?? 0,
        stolenBases: s.stolenBases ?? 0,
        hits: s.hits ?? 0,
        doubles: s.doubles ?? 0,
        triples: s.triples ?? 0,
        gamesPlayed: s.gamesPlayed ?? 0,
        era: null, wins: null, losses: null,
        saves: null, inningsPitched: null,
        strikeouts: null, whip: null,
      };
    } else if (stat.group.displayName === "pitching") {
      pitching = {
        era: parseFloat(s.era) || 0,
        wins: s.wins ?? 0,
        losses: s.losses ?? 0,
        saves: s.saves ?? 0,
        inningsPitched: parseFloat(s.inningsPitched) || 0,
        strikeouts: s.strikeOuts ?? 0,
        whip: parseFloat(s.whip) || 0,
        gamesPlayed: s.gamesPlayed ?? 0,
        battingAvg: null, homeRuns: null, rbi: null,
        stolenBases: null, hits: null, doubles: null, triples: null,
      };
    }
  }

  return { hitting, pitching };
}
