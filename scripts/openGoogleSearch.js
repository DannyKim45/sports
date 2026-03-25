import { exec } from 'child_process';
import { starPlayers } from '../src/data/players.js';
import { mlbStarPlayers } from '../src/data/mlbPlayers.js';

/**
 * Generate Google Images search URL for action photos
 */
const getSearchUrl = (playerName, sport, position) => {
  let query = `${playerName} ${sport}`;

  // Add position-specific keywords
  if (sport === 'NHL') {
    if (position.includes('Defense')) {
      query += ' body check defensive play';
    } else if (position.includes('Goalie')) {
      query += ' save goaltending';
    } else {
      query += ' shooting skating action goal';
    }
  } else if (sport === 'MLB') {
    if (position.includes('Pitcher') || position === 'P') {
      query += ' pitching throwing mound';
    } else if (position.includes('Catcher') || position === 'C') {
      query += ' catching gear equipment';
    } else {
      query += ' batting swing hitting';
    }
  }

  query += ' action photo high quality';

  return `https://www.google.com/search?q=${encodeURIComponent(query)}&tbm=isch&tbs=isz:l`;
};

/**
 * Open browser for manual image selection
 */
const openBrowser = (url) => {
  const command = process.platform === 'darwin'
    ? `open "${url}"`
    : process.platform === 'win32'
    ? `start "" "${url}"`
    : `xdg-open "${url}"`;

  exec(command, (error) => {
    if (error) {
      console.error(`❌ Failed to open browser: ${error.message}`);
    }
  });
};

/**
 * Generate download instructions
 */
const showInstructions = (player, filename) => {
  console.log(`\n📸 ${player.name}`);
  console.log(`   Position: ${player.position}`);
  console.log(`   Target file: public/images/${filename}`);
  console.log(`   ⏸️  Press Enter when ready to continue...`);
};

/**
 * Interactive NHL player image download
 */
const downloadNHLActions = async () => {
  console.log('\n🏒 ═══════════════════════════════════════════');
  console.log('   NHL Action Photos - Manual Download');
  console.log('═══════════════════════════════════════════\n');

  console.log('📋 Instructions:');
  console.log('   1. Google Images will open for each player');
  console.log('   2. Find a good action photo (skating, shooting, checking)');
  console.log('   3. Right-click → Save image as...');
  console.log('   4. Save to: public/images/{filename}');
  console.log('   5. Press Enter to continue to next player\n');

  for (const player of starPlayers) {
    const filename = player.image.split('/').pop();
    const url = getSearchUrl(player.name, 'NHL', player.position);

    showInstructions(player, filename);
    openBrowser(url);

    // Wait for user input
    await new Promise(resolve => {
      process.stdin.once('data', () => resolve());
    });
  }

  console.log('\n✅ NHL players complete!\n');
};

/**
 * Interactive MLB player image download
 */
const downloadMLBActions = async () => {
  console.log('\n⚾ ═══════════════════════════════════════════');
  console.log('   MLB Action Photos - Manual Download');
  console.log('═══════════════════════════════════════════\n');

  console.log('📋 Instructions:');
  console.log('   1. Google Images will open for each player');
  console.log('   2. Find action photo (batting, pitching, catching)');
  console.log('   3. Right-click → Save image as...');
  console.log('   4. Save to: public/images/{filename}');
  console.log('   5. Press Enter to continue to next player\n');

  for (const player of mlbStarPlayers) {
    const filename = player.image.split('/').pop();
    const url = getSearchUrl(player.name, 'MLB', player.position);

    showInstructions(player, filename);
    openBrowser(url);

    // Wait for user input
    await new Promise(resolve => {
      process.stdin.once('data', () => resolve());
    });
  }

  console.log('\n✅ MLB players complete!\n');
};

/**
 * Main function
 */
const main = async () => {
  console.log('\n🖼️  Sports Action Photos - Manual Download Helper');
  console.log('   This tool opens Google Images for each player\n');

  console.log('⚠️  COPYRIGHT NOTICE:');
  console.log('   - You are responsible for verifying image licenses');
  console.log('   - For commercial use, obtain proper licenses');
  console.log('   - Personal/educational use may be allowed under fair use\n');

  // Enable stdin (only if in TTY mode)
  if (process.stdin.isTTY) {
    process.stdin.setRawMode(false);
  }
  process.stdin.resume();
  process.stdin.setEncoding('utf8');

  const args = process.argv.slice(2);
  const downloadType = args[0] || 'all';

  try {
    if (downloadType === 'all') {
      await downloadNHLActions();
      await downloadMLBActions();
    } else if (downloadType === 'nhl') {
      await downloadNHLActions();
    } else if (downloadType === 'mlb') {
      await downloadMLBActions();
    } else {
      console.log('Usage:');
      console.log('  npm run download-action-images       # All players');
      console.log('  npm run download-action-images:nhl   # NHL only');
      console.log('  npm run download-action-images:mlb   # MLB only');
      process.exit(0);
    }

    console.log('✨ All done!\n');
    process.exit(0);
  } catch (error) {
    console.error('\n❌ Error:', error.message);
    process.exit(1);
  }
};

main();
