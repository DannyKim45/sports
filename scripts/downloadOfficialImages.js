import axios from 'axios';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const IMAGE_DIR = path.resolve(__dirname, '../public/images');
const CURRENT_NHL_SEASON = '20242025';

// Ensure directories exist
const ensureDirectories = () => {
  const dirs = [
    IMAGE_DIR,
    path.join(IMAGE_DIR, 'players'),
    path.join(IMAGE_DIR, 'stadiums'),
    path.join(IMAGE_DIR, 'teams'),
  ];

  dirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
      console.log(`✅ Created directory: ${dir}`);
    }
  });
};

/**
 * Get NHL player headshot URL
 */
const getNHLPlayerImageUrl = (playerId, teamAbbrev, season = CURRENT_NHL_SEASON) => {
  return `https://assets.nhle.com/mugs/nhl/${season}/${teamAbbrev}/${playerId}.png`;
};

/**
 * Get MLB player headshot URL
 */
const getMLBPlayerImageUrl = (playerId) => {
  return `https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:67:current.png/w_213,q_auto:best/v1/people/${playerId}/headshot/67/current`;
};

/**
 * Download image from URL
 */
const downloadImage = async (url, filepath) => {
  try {
    const response = await axios({
      url,
      method: 'GET',
      responseType: 'stream',
      timeout: 10000,
    });

    const writer = fs.createWriteStream(filepath);
    response.data.pipe(writer);

    return new Promise((resolve, reject) => {
      writer.on('finish', resolve);
      writer.on('error', reject);
    });
  } catch (error) {
    throw new Error(`Failed to download: ${error.message}`);
  }
};

/**
 * Download NHL player image
 */
export const downloadNHLPlayer = async (player) => {
  const filename = player.image.split('/').pop();
  // Download to root images folder to match data file paths
  const filepath = path.join(IMAGE_DIR, filename);

  // Check if file already exists
  if (fs.existsSync(filepath)) {
    console.log(`⏭️  ${player.name} - Already exists`);
    return { success: true, path: filepath, skipped: true };
  }

  const imageUrl = getNHLPlayerImageUrl(player.id, player.teamAbbrev);

  try {
    console.log(`📥 Downloading ${player.name}...`);
    await downloadImage(imageUrl, filepath);
    console.log(`✅ ${player.name} - Downloaded`);
    return { success: true, path: filepath, url: imageUrl };
  } catch (error) {
    console.error(`❌ ${player.name} - Failed: ${error.message}`);
    return { success: false, error: error.message };
  }
};

/**
 * Download MLB player image
 */
export const downloadMLBPlayer = async (player) => {
  const filename = player.image.split('/').pop();
  // Download to root images folder to match data file paths
  const filepath = path.join(IMAGE_DIR, filename);

  // Check if file already exists
  if (fs.existsSync(filepath)) {
    console.log(`⏭️  ${player.name} - Already exists`);
    return { success: true, path: filepath, skipped: true };
  }

  // MLB players need their official ID - check if it exists
  if (!player.mlbId) {
    console.warn(`⚠️  ${player.name} - No MLB ID found, skipping`);
    return { success: false, error: 'No MLB ID' };
  }

  const imageUrl = getMLBPlayerImageUrl(player.mlbId);

  try {
    console.log(`📥 Downloading ${player.name}...`);
    await downloadImage(imageUrl, filepath);
    console.log(`✅ ${player.name} - Downloaded`);
    return { success: true, path: filepath, url: imageUrl };
  } catch (error) {
    console.error(`❌ ${player.name} - Failed: ${error.message}`);
    return { success: false, error: error.message };
  }
};

/**
 * Download all NHL players
 */
const downloadAllNHL = async () => {
  console.log('\n🏒 ═══════════════════════════════════════════');
  console.log('   NHL Player Images');
  console.log('═══════════════════════════════════════════\n');

  const { starPlayers } = await import('../src/data/players.js');

  let success = 0;
  let failed = 0;
  let skipped = 0;

  for (const player of starPlayers) {
    const result = await downloadNHLPlayer(player);
    if (result.skipped) {
      skipped++;
    } else if (result.success) {
      success++;
    } else {
      failed++;
    }

    // Small delay to be respectful
    await new Promise(resolve => setTimeout(resolve, 500));
  }

  console.log('\n📊 NHL Summary:');
  console.log(`   ✅ Downloaded: ${success}`);
  console.log(`   ⏭️  Skipped: ${skipped}`);
  console.log(`   ❌ Failed: ${failed}`);
};

/**
 * Download all MLB players
 */
const downloadAllMLB = async () => {
  console.log('\n⚾ ═══════════════════════════════════════════');
  console.log('   MLB Player Images');
  console.log('═══════════════════════════════════════════\n');

  const { mlbStarPlayers } = await import('../src/data/mlbPlayers.js');

  let success = 0;
  let failed = 0;
  let skipped = 0;

  for (const player of mlbStarPlayers) {
    const result = await downloadMLBPlayer(player);
    if (result.skipped) {
      skipped++;
    } else if (result.success) {
      success++;
    } else {
      failed++;
    }

    // Small delay to be respectful
    await new Promise(resolve => setTimeout(resolve, 500));
  }

  console.log('\n📊 MLB Summary:');
  console.log(`   ✅ Downloaded: ${success}`);
  console.log(`   ⏭️  Skipped: ${skipped}`);
  console.log(`   ❌ Failed: ${failed}`);
};

/**
 * Main function
 */
const main = async () => {
  console.log('\n🚀 Official Sports Image Downloader');
  console.log('   Using official NHL and MLB image sources\n');

  ensureDirectories();

  const args = process.argv.slice(2);
  const downloadType = args[0] || 'all';

  try {
    if (downloadType === 'all') {
      await downloadAllNHL();
      await downloadAllMLB();
    } else if (downloadType === 'nhl') {
      await downloadAllNHL();
    } else if (downloadType === 'mlb') {
      await downloadAllMLB();
    } else {
      console.log('❌ Invalid argument\n');
      console.log('Usage:');
      console.log('  npm run download-images          # Download all images');
      console.log('  npm run download-images:nhl      # Download NHL only');
      console.log('  npm run download-images:mlb      # Download MLB only');
      return;
    }

    console.log('\n✨ Download complete!\n');
  } catch (error) {
    console.error('\n❌ Error:', error.message);
    process.exit(1);
  }
};

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}
