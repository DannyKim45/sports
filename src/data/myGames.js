/**
 * My NHL Game Attendance Records
 * 직접 관람한 NHL 경기 기록
 *
 * 이미지/비디오 파일 추가 방법:
 * 1. public/images/games/ 폴더에 파일 업로드
 * 2. 아래 경로를 실제 파일명으로 변경
 */

export const myGameRecords = [
  {
    id: 1,
    date: "2024-01-15",
    homeTeam: {
      name: "Colorado Avalanche",
      abbrev: "COL",
      logo: "https://assets.nhle.com/logos/nhl/svg/COL_light.svg"
    },
    awayTeam: {
      name: "Vegas Golden Knights",
      abbrev: "VGK",
      logo: "https://assets.nhle.com/logos/nhl/svg/VGK_light.svg"
    },
    score: {
      home: 5,
      away: 3
    },
    venue: "Ball Arena, Denver",
    section: "Section 120, Row 5",
    coverImage: "/images/arena.jpg", // TODO: 실제 대표 이미지로 교체하세요
    images: [
      "/images/arena.jpg", // TODO: 실제 사진으로 교체하세요
      "/images/arena.jpg",
      "/images/arena.jpg",
      "/images/arena.jpg",
      "/images/arena.jpg"
    ],
    videos: [
      // TODO: 실제 비디오 파일을 /public/videos/games/ 폴더에 업로드하고 경로 추가
      // "/videos/games/col-game1-highlight.mp4"
    ],
    story: `콜로라도 애벌런치의 홈 경기를 직접 관람한 첫 경험이었습니다.
Ball Arena의 분위기는 상상 이상이었고, MacKinnon의 해트트릭을 직접 목격할 수 있었습니다.
특히 3피리어드 마지막 골 장면은 정말 잊을 수 없는 순간이었습니다.`,
    highlights: [
      "MacKinnon 해트트릭 달성",
      "Makar의 환상적인 어시스트",
      "홈팬들의 열정적인 응원",
      "경기 후 선수들과의 하이파이브"
    ],
    mood: "🔥",
    weather: "맑음, 영하 5도",
    withWhom: "친구들과 함께",
    foodAndDrink: "핫도그, 맥주",
    memorableQuote: "이게 진짜 하키구나!"
  },
  {
    id: 2,
    date: "2024-02-20",
    homeTeam: {
      name: "Chicago Blackhawks",
      abbrev: "CHI",
      logo: "https://assets.nhle.com/logos/nhl/svg/CHI_light.svg"
    },
    awayTeam: {
      name: "Detroit Red Wings",
      abbrev: "DET",
      logo: "https://assets.nhle.com/logos/nhl/svg/DET_light.svg"
    },
    score: {
      home: 4,
      away: 2
    },
    venue: "United Center, Chicago",
    section: "Section 215, Row 10",
    coverImage: "/images/arena.jpg", // TODO: 실제 대표 이미지로 교체하세요
    images: [
      "/images/arena.jpg", // TODO: 실제 사진으로 교체하세요
      "/images/arena.jpg",
      "/images/arena.jpg"
    ],
    videos: [
      // TODO: 실제 비디오 파일을 /public/videos/games/ 폴더에 업로드하고 경로 추가
      // "/videos/games/chi-game1-highlight.mp4"
    ],
    story: `시카고 블랙호크스의 전설적인 United Center에서의 경기 관람.
비록 팀 성적은 좋지 않았지만, 역사적인 구장의 분위기와
시카고 팬들의 열정은 정말 인상적이었습니다.
경기장 주변의 먹거리와 문화도 즐길 수 있었던 좋은 경험이었습니다.`,
    highlights: [
      "United Center의 역사적 분위기",
      "국가 제창 시 팬들의 함성",
      "빈티지 저지 착용 팬들",
      "경기 후 다운타운 투어"
    ],
    mood: "🏒",
    weather: "흐림, 영하 10도",
    withWhom: "가족과 함께",
    foodAndDrink: "시카고 스타일 핫도그, 소다",
    memorableQuote: "역사의 현장에 있다는 느낌!"
  }
];

/**
 * 팀별 필터링
 */
export function getGamesByTeam(teamAbbrev) {
  return myGameRecords.filter(
    game => game.homeTeam.abbrev === teamAbbrev || game.awayTeam.abbrev === teamAbbrev
  );
}

/**
 * 날짜순 정렬
 */
export function sortGamesByDate(ascending = false) {
  return [...myGameRecords].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return ascending ? dateA - dateB : dateB - dateA;
  });
}

/**
 * 게임 ID로 찾기
 */
export function getGameById(id) {
  return myGameRecords.find(game => game.id === id);
}
