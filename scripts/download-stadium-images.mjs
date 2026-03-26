/**
 * MLB 구장 이미지 자동 다운로드 스크립트
 * Wikipedia API를 통해 각 구장의 대표 이미지를 가져옵니다.
 *
 * 실행 방법: node scripts/download-stadium-images.mjs
 */

import { createWriteStream, mkdirSync, existsSync } from "fs";
import { pipeline } from "stream/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUTPUT_DIR = path.resolve(__dirname, "../public/images/stadiums");

// 구장명 → { wikipedia 검색 제목, 로컬 파일명 }
const STADIUMS = [
  { wiki: "Dodger Stadium",                    file: "dodger-stadium.jpg" },
  { wiki: "Yankee Stadium",                    file: "yankee-stadium.jpg" },
  { wiki: "Fenway Park",                       file: "fenway-park.jpg" },
  { wiki: "Oracle Park",                       file: "oracle-park.jpg" },
  { wiki: "Wrigley Field",                     file: "wrigley-field.jpg" },
  { wiki: "Angel Stadium",                     file: "angel-stadium.jpg" },
  { wiki: "T-Mobile Park",                     file: "tmobile-park.jpg" },
  { wiki: "Citi Field",                        file: "citi-field.jpg" },
  { wiki: "Truist Park",                       file: "truist-park.jpg" },
  { wiki: "Citizens Bank Park",                file: "citizens-bank-park.jpg" },
  { wiki: "Petco Park",                        file: "petco-park.jpg" },
  { wiki: "Nationals Park",                    file: "nationals-park.jpg" },
  { wiki: "Chase Field",                       file: "chase-field.jpg" },
  { wiki: "Coors Field",                       file: "coors-field.jpg" },
  { wiki: "Globe Life Field",                  file: "globe-life-field.jpg" },
  { wiki: "Minute Maid Park (baseball)",        file: "minute-maid-park.jpg" },
  { wiki: "Busch Stadium",                     file: "busch-stadium.jpg" },
  { wiki: "Great American Ball Park",          file: "great-american-ball-park.jpg" },
  { wiki: "PNC Park",                          file: "pnc-park.jpg" },
  { wiki: "American Family Field",             file: "american-family-field.jpg" },
  { wiki: "Comerica Park",                     file: "comerica-park.jpg" },
  { wiki: "Progressive Field",                 file: "progressive-field.jpg" },
  { wiki: "Guaranteed Rate Field",             file: "guaranteed-rate-field.jpg" },  // → fallback: US Cellular Field
  { wiki: "Target Field",                      file: "target-field.jpg" },
  { wiki: "Kauffman Stadium",                  file: "kauffman-stadium.jpg" },
  { wiki: "Oakland Coliseum",                  file: "oakland-coliseum.jpg" },
  { wiki: "Tropicana Field",                   file: "tropicana-field.jpg" },
  { wiki: "Rogers Centre",                     file: "rogers-centre.jpg" },
  { wiki: "Oriole Park at Camden Yards",       file: "oriole-park.jpg" },
  { wiki: "loanDepot park",                    file: "loandepot-park.jpg" },
];

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const HEADERS = {
  "User-Agent": "MLBStadiumImageDownloader/1.0 (educational; contact: localhost)",
};

/**
 * fetch with retry on 429
 */
async function fetchWithRetry(url, options = {}, maxRetries = 5) {
  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    const res = await fetch(url, { ...options, headers: HEADERS });
    if (res.status === 429) {
      const waitSec = Math.pow(2, attempt + 1); // 2, 4, 8, 16, 32초
      process.stdout.write(` [429 재시도 ${attempt + 1}/${maxRetries} (${waitSec}s)]`);
      await sleep(waitSec * 1000);
      continue;
    }
    return res;
  }
  throw new Error("최대 재시도 초과 (429)");
}

/**
 * Wikipedia API로 구장 대표 이미지 URL 가져오기
 */
async function getWikipediaImageUrl(title, thumbSize = 1200) {
  const params = new URLSearchParams({
    action: "query",
    titles: title,
    prop: "pageimages",
    pithumbsize: thumbSize,
    format: "json",
    origin: "*",
  });

  const url = `https://en.wikipedia.org/w/api.php?${params}`;
  const res = await fetchWithRetry(url);

  if (!res.ok) throw new Error(`Wikipedia API 오류: ${res.status}`);

  const data = await res.json();
  const pages = data?.query?.pages;
  if (!pages) return null;

  const page = Object.values(pages)[0];
  return page?.thumbnail?.source ?? null;
}

/**
 * URL에서 이미지 다운로드
 */
async function downloadImage(imageUrl, destPath) {
  const res = await fetchWithRetry(imageUrl);
  if (!res.ok) throw new Error(`이미지 다운로드 실패: ${res.status} (${imageUrl})`);

  const fileStream = createWriteStream(destPath);
  await pipeline(res.body, fileStream);
}

async function main() {
  if (!existsSync(OUTPUT_DIR)) {
    mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  console.log(`저장 경로: ${OUTPUT_DIR}`);
  console.log(`총 ${STADIUMS.length}개 구장 이미지를 다운로드합니다.\n`);

  let success = 0;
  let failed = 0;
  const failedList = [];

  for (const { wiki, file } of STADIUMS) {
    const destPath = path.join(OUTPUT_DIR, file);

    // 이미 파일이 있으면 건너뜀
    if (existsSync(destPath)) {
      console.log(`[SKIP] ${file} (이미 존재)`);
      success++;
      continue;
    }

    process.stdout.write(`[...] ${wiki}`);

    try {
      // 1단계: Wikipedia API로 이미지 URL 조회
      const imageUrl = await getWikipediaImageUrl(wiki);
      await sleep(500); // API 요청 후 대기

      if (!imageUrl) {
        console.log(` → Wikipedia 이미지 없음`);
        failed++;
        failedList.push({ wiki, file, reason: "Wikipedia 이미지 없음" });
        continue;
      }

      // 2단계: 이미지 다운로드
      await downloadImage(imageUrl, destPath);
      console.log(` → ${file} 완료`);
      success++;

      // 다음 요청 전 대기 (1.5초)
      await sleep(1500);
    } catch (err) {
      console.log(` → 실패: ${err.message}`);
      failed++;
      failedList.push({ wiki, file, reason: err.message });
      await sleep(2000); // 실패 후 좀 더 대기
    }
  }

  console.log(`\n========================================`);
  console.log(`결과: ${success}/${STADIUMS.length} 성공, ${failed} 실패`);

  if (failedList.length > 0) {
    console.log(`\n실패 목록:`);
    for (const { wiki, file, reason } of failedList) {
      console.log(`  - ${wiki} (${file}): ${reason}`);
    }
    console.log(`\n실패한 구장은 public/images/stadiums/ 에 직접 이미지를 추가하세요.`);
  }
}

main().catch((err) => {
  console.error("스크립트 오류:", err);
  process.exit(1);
});
