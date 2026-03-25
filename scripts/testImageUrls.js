import axios from 'axios';

/**
 * Test if NHL/MLB image URLs work
 */

const testNHLImage = async (playerId, teamAbbrev) => {
  // Known NHL image URL patterns
  const patterns = [
    `https://assets.nhle.com/mugs/nhl/20242025/${teamAbbrev}/${playerId}.png`,
    `https://assets.nhle.com/mugs/nhl/20232024/${teamAbbrev}/${playerId}.png`,
    `https://cms.nhl.bamgrid.com/images/headshots/current/168x168/${playerId}.jpg`,
    `https://cms.nhl.bamgrid.com/images/headshots/current/168x168/${playerId}@2x.jpg`,
  ];

  console.log(`\n🏒 Testing NHL Player ID: ${playerId} (${teamAbbrev})`);

  for (const url of patterns) {
    try {
      const response = await axios.head(url, { timeout: 5000 });
      if (response.status === 200) {
        console.log(`✅ WORKING: ${url}`);
        return url;
      }
    } catch (error) {
      console.log(`❌ Failed: ${url.substring(0, 80)}...`);
    }
  }

  return null;
};

const testMLBImage = async (playerId) => {
  // Known MLB image URL patterns
  const patterns = [
    `https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:67:current.png/w_213,q_auto:best/v1/people/${playerId}/headshot/67/current`,
    `https://securea.mlb.com/mlb/images/players/head_shot/${playerId}.jpg`,
    `https://img.mlbstatic.com/mlb-photos/image/upload/v1/people/${playerId}/headshot/silo/current`,
  ];

  console.log(`\n⚾ Testing MLB Player ID: ${playerId}`);

  for (const url of patterns) {
    try {
      const response = await axios.head(url, { timeout: 5000 });
      if (response.status === 200) {
        console.log(`✅ WORKING: ${url}`);
        return url;
      }
    } catch (error) {
      console.log(`❌ Failed: ${url.substring(0, 80)}...`);
    }
  }

  return null;
};

const main = async () => {
  console.log('🔍 Testing Official Sports Image URLs\n');
  console.log('=' .repeat(60));

  // Test NHL - Connor McDavid
  const nhlUrl = await testNHLImage(8478402, 'EDM');

  // Test NHL - Auston Matthews
  await testNHLImage(8479318, 'TOR');

  // Test MLB - Shohei Ohtani (ID: 660271)
  const mlbUrl = await testMLBImage(660271);

  console.log('\n' + '='.repeat(60));
  console.log('\n📊 Summary:\n');

  if (nhlUrl) {
    console.log('✅ NHL: Working image URL pattern found!');
    console.log(`   Pattern: ${nhlUrl}`);
  } else {
    console.log('❌ NHL: No working pattern found');
  }

  if (mlbUrl) {
    console.log('✅ MLB: Working image URL pattern found!');
    console.log(`   Pattern: ${mlbUrl}`);
  } else {
    console.log('❌ MLB: No working pattern found');
  }

  console.log('\n');
};

main().catch(console.error);
