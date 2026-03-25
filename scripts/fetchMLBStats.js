import axios from 'axios';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const MLB_PLAYERS = [
  { mlbId: 660271, name: "Shohei Ohtani", position: "DH / Pitcher" },
  { mlbId: 592450, name: "Aaron Judge", position: "RF" },
  { mlbId: 665489, name: "Vladimir Guerrero Jr.", position: "1B" },
  { mlbId: 547180, name: "Bryce Harper", position: "1B" },
  { mlbId: 665742, name: "Juan Soto", position: "RF" },
  { mlbId: 663728, name: "Cal Raleigh", position: "C" }
];

async function fetchPlayerStats(playerId, statGroup) {
  try {
    const url = `https://statsapi.mlb.com/api/v1/people/${playerId}/stats?stats=yearByYear&group=${statGroup}`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(`Error fetching ${statGroup} for player ${playerId}:`, error.message);
    return null;
  }
}

function parseNumber(value) {
  if (value === null || value === undefined || value === '.---') return 0;
  const parsed = parseFloat(value);
  return isNaN(parsed) ? 0 : parsed;
}

async function getPlayerSeasonStats(playerId, playerName, position) {
  console.log(`\n📊 Fetching stats for ${playerName}...`);

  const isPitcher = position.includes('Pitcher');

  // Fetch hitting stats
  const hittingData = await fetchPlayerStats(playerId, 'hitting');

  // Fetch pitching stats if applicable
  let pitchingData = null;
  if (isPitcher) {
    pitchingData = await fetchPlayerStats(playerId, 'pitching');
  }

  if (!hittingData || !hittingData.stats || !hittingData.stats[0]) {
    console.log(`❌ No hitting data found for ${playerName}`);
    return null;
  }

  const hittingSplits = hittingData.stats[0].splits || [];
  const pitchingSplits = pitchingData?.stats?.[0]?.splits || [];

  // Filter for regular season only (2018-2024)
  const recentSeasons = hittingSplits
    .filter(s => s.gameType === 'R' && parseInt(s.season) >= 2018 && parseInt(s.season) <= 2024)
    .sort((a, b) => parseInt(b.season) - parseInt(a.season));

  console.log(`   Found ${recentSeasons.length} seasons of data`);

  const seasonBySeasonStats = recentSeasons.map(season => {
    const s = season.stat;
    const pitchingForSeason = pitchingSplits.find(p => p.season === season.season && p.gameType === 'R');
    const p = pitchingForSeason?.stat;

    return {
      season: season.season,
      battingAvg: parseNumber(s.avg),
      homeRuns: parseNumber(s.homeRuns),
      rbi: parseNumber(s.rbi),
      stolenBases: parseNumber(s.stolenBases),
      hits: parseNumber(s.hits),
      doubles: parseNumber(s.doubles),
      triples: parseNumber(s.triples),
      era: p ? parseNumber(p.era) : null,
      wins: p ? parseNumber(p.wins) : null,
      losses: p ? parseNumber(p.losses) : null,
      saves: p ? parseNumber(p.saves) : null,
      inningsPitched: p ? parseNumber(p.inningsPitched) : null,
      strikeouts: p ? parseNumber(p.strikeOuts) : null,
      whip: p ? parseNumber(p.whip) : null
    };
  });

  // Calculate career totals
  const careerStats = {
    battingAvg: parseNumber((seasonBySeasonStats.reduce((sum, s) => sum + (s.hits || 0), 0) /
                             seasonBySeasonStats.reduce((sum, s) => {
                               const season = recentSeasons.find(rs => rs.season === s.season);
                               return sum + (season ? parseNumber(season.stat.atBats) : 0);
                             }, 0)).toFixed(3)),
    homeRuns: seasonBySeasonStats.reduce((sum, s) => sum + (s.homeRuns || 0), 0),
    rbi: seasonBySeasonStats.reduce((sum, s) => sum + (s.rbi || 0), 0),
    stolenBases: seasonBySeasonStats.reduce((sum, s) => sum + (s.stolenBases || 0), 0),
    hits: seasonBySeasonStats.reduce((sum, s) => sum + (s.hits || 0), 0),
    doubles: seasonBySeasonStats.reduce((sum, s) => sum + (s.doubles || 0), 0),
    triples: seasonBySeasonStats.reduce((sum, s) => sum + (s.triples || 0), 0)
  };

  if (isPitcher && pitchingSplits.length > 0) {
    const totalIP = pitchingSplits
      .filter(p => p.gameType === 'R' && parseInt(p.season) >= 2018 && parseInt(p.season) <= 2024)
      .reduce((sum, p) => sum + parseNumber(p.stat.inningsPitched), 0);
    const totalER = pitchingSplits
      .filter(p => p.gameType === 'R' && parseInt(p.season) >= 2018 && parseInt(p.season) <= 2024)
      .reduce((sum, p) => sum + parseNumber(p.stat.earnedRuns), 0);

    careerStats.era = totalIP > 0 ? parseNumber(((totalER * 9) / totalIP).toFixed(2)) : null;
    careerStats.wins = pitchingSplits
      .filter(p => p.gameType === 'R' && parseInt(p.season) >= 2018 && parseInt(p.season) <= 2024)
      .reduce((sum, p) => sum + parseNumber(p.stat.wins), 0);
    careerStats.losses = pitchingSplits
      .filter(p => p.gameType === 'R' && parseInt(p.season) >= 2018 && parseInt(p.season) <= 2024)
      .reduce((sum, p) => sum + parseNumber(p.stat.losses), 0);
    careerStats.saves = pitchingSplits
      .filter(p => p.gameType === 'R' && parseInt(p.season) >= 2018 && parseInt(p.season) <= 2024)
      .reduce((sum, p) => sum + parseNumber(p.stat.saves), 0);
    careerStats.inningsPitched = totalIP;
    careerStats.strikeouts = pitchingSplits
      .filter(p => p.gameType === 'R' && parseInt(p.season) >= 2018 && parseInt(p.season) <= 2024)
      .reduce((sum, p) => sum + parseNumber(p.stat.strikeOuts), 0);

    const totalHits = pitchingSplits
      .filter(p => p.gameType === 'R' && parseInt(p.season) >= 2018 && parseInt(p.season) <= 2024)
      .reduce((sum, p) => sum + parseNumber(p.stat.hits), 0);
    const totalBB = pitchingSplits
      .filter(p => p.gameType === 'R' && parseInt(p.season) >= 2018 && parseInt(p.season) <= 2024)
      .reduce((sum, p) => sum + parseNumber(p.stat.baseOnBalls), 0);
    careerStats.whip = totalIP > 0 ? parseNumber(((totalHits + totalBB) / totalIP).toFixed(2)) : null;
  } else {
    careerStats.era = null;
    careerStats.wins = null;
    careerStats.losses = null;
    careerStats.saves = null;
    careerStats.inningsPitched = null;
    careerStats.strikeouts = null;
    careerStats.whip = null;
  }

  return {
    playerName,
    careerStats,
    seasonBySeasonStats
  };
}

async function main() {
  console.log('🚀 MLB Stats Fetcher - Getting Real Statistics from MLB API\n');

  const results = {};

  for (const player of MLB_PLAYERS) {
    const stats = await getPlayerSeasonStats(player.mlbId, player.name, player.position);
    if (stats) {
      results[player.name] = stats;
    }
    await new Promise(resolve => setTimeout(resolve, 1000)); // Rate limiting
  }

  // Save to file
  const outputPath = path.resolve(__dirname, '../mlb-stats-output.json');
  fs.writeFileSync(outputPath, JSON.stringify(results, null, 2));

  console.log(`\n✅ Stats saved to: ${outputPath}`);
  console.log('\n📋 Summary:');

  Object.entries(results).forEach(([name, data]) => {
    console.log(`\n${name}:`);
    console.log(`   Career: ${data.careerStats.battingAvg} AVG, ${data.careerStats.homeRuns} HR, ${data.careerStats.rbi} RBI`);
    console.log(`   Seasons: ${data.seasonBySeasonStats.length} years of data`);
  });
}

main();
