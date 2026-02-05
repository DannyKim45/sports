/**
 * My MLB Game Attendance Records
 * 직접 관람한 MLB 경기 기록
 *
 * 이미지/비디오 파일 추가 방법:
 * 1. public/images/mlb-games/ 폴더에 파일 업로드
 * 2. 아래 경로를 실제 파일명으로 변경
 */

export const myMLBGameRecords = [
  {
    id: 1,
    date: "2024-04-15",
    homeTeam: {
      name: "Los Angeles Dodgers",
      abbrev: "LAD",
      logo: "https://www.mlbstatic.com/team-logos/119.svg"
    },
    awayTeam: {
      name: "San Francisco Giants",
      abbrev: "SF",
      logo: "https://www.mlbstatic.com/team-logos/137.svg"
    },
    score: {
      home: 6,
      away: 4
    },
    venue: "Dodger Stadium, Los Angeles",
    section: "Loge Box 140, Row C",
    coverImage: "/images/ohtani.jpg", // TODO: 실제 대표 이미지로 교체
    images: [
      "/images/ohtani.jpg", // TODO: 실제 사진으로 교체
      "/images/ohtani.jpg",
      "/images/ohtani.jpg",
      "/images/ohtani.jpg"
    ],
    videos: [
      // TODO: 실제 비디오 파일을 /public/videos/mlb-games/ 폴더에 업로드하고 경로 추가
      // "/videos/mlb-games/dodgers-game1.mp4"
    ],
    story: `드디어 오타니 선수의 다저스 데뷔 시즌 경기를 직접 관람했습니다.
Dodger Stadium의 웅장함과 LA 팬들의 열기가 정말 대단했습니다.
오타니 선수가 홈런을 치는 순간은 평생 잊지 못할 것 같습니다.
경기 후 Dodger Dog를 먹으며 여운을 즐기는 시간도 좋았습니다.`,
    highlights: [
      "오타니의 시즌 3호 홈런",
      "9회말 극적인 역전",
      "Dodger Stadium의 환상적인 일몰",
      "팬들의 'Let's Go Dodgers!' 응원"
    ],
    mood: "⚾",
    weather: "맑음, 섭씨 24도 (완벽한 야구 날씨)",
    withWhom: "친구들과 함께",
    foodAndDrink: "Dodger Dog, Nacho Helmet, Beer",
    memorableQuote: "This is Dodger Baseball!",
    pitchers: {
      home: "Tyler Glasnow",
      away: "Logan Webb"
    },
    attendance: "52,000명 (만석)"
  },
  {
    id: 2,
    date: "2023-09-10",
    homeTeam: {
      name: "New York Yankees",
      abbrev: "NYY",
      logo: "https://www.mlbstatic.com/team-logos/147.svg"
    },
    awayTeam: {
      name: "Boston Red Sox",
      abbrev: "BOS",
      logo: "https://www.mlbstatic.com/team-logos/111.svg"
    },
    score: {
      home: 5,
      away: 3
    },
    venue: "Yankee Stadium, Bronx",
    section: "Main Level 124, Row 15",
    coverImage: "/images/ohtani.jpg", // TODO: 실제 대표 이미지로 교체
    images: [
      "/images/ohtani.jpg", // TODO: 실제 사진으로 교체
      "/images/ohtani.jpg",
      "/images/ohtani.jpg"
    ],
    videos: [
      // TODO: 실제 비디오 파일 경로 추가
    ],
    story: `Yankees vs Red Sox 라이벌전을 직접 관람하는 꿈을 이뤘습니다.
양키 스타디움의 역사와 전통이 느껴지는 분위기가 압도적이었습니다.
경기 전 Monument Park를 방문해 전설적인 선수들의 기념비를 보는 것도 감동적이었습니다.
Aaron Judge의 홈런에 구장이 흔들릴 정도로 열광하는 모습을 보며 야구의 매력에 빠졌습니다.`,
    highlights: [
      "Aaron Judge의 결승 홈런",
      "Monument Park 방문",
      "Yankees vs Red Sox 라이벌전 분위기",
      "경기 후 브롱크스 투어"
    ],
    mood: "🏆",
    weather: "흐림, 섭씨 18도",
    withWhom: "가족과 함께",
    foodAndDrink: "New York Style Hot Dog, Pretzel, Soda",
    memorableQuote: "Let's Go Yankees!",
    pitchers: {
      home: "Gerrit Cole",
      away: "Brayan Bello"
    },
    attendance: "46,000명"
  },
  {
    id: 3,
    date: "2016-06-25",
    homeTeam: {
      name: "Seattle Mariners",
      abbrev: "SEA",
      logo: "https://www.mlbstatic.com/team-logos/136.svg"
    },
    awayTeam: {
      name: "St. Louis Cardinals",
      abbrev: "STL",
      logo: "https://www.mlbstatic.com/team-logos/138.svg"
    },
    score: { home: 5, away: 4 },
    venue: "Safeco Field, Seattle",
    section: "",
    coverImage: "/images/mlb-games/mariners-game1-cover.jpg",
    images: [
      "/images/mlb-games/mariners-game1-1.jpg",
      "/images/mlb-games/mariners-game1-2.jpg",
      "/images/mlb-games/mariners-game1-3.jpg",
      "/images/mlb-games/mariners-game1-4.jpg",
      "/images/mlb-games/mariners-game1-5.jpg",
      "/images/mlb-games/mariners-game1-6.jpg",
      "/images/mlb-games/mariners-game1-7.jpg",
      "/images/mlb-games/mariners-game1-8.jpg",
      "/images/mlb-games/mariners-game1-9.jpg"
    ],
    videos: [
      "/videos/mlb-games/mariners-game1.mp4",
      "/videos/mlb-games/mariners-game2.mp4"
    ],
    story: `2016년 시애틀 여행 중 Safeco Field에서 매리너스와 카디널스의 접전을 관람했습니다.
매리너스가 5-4로 극적인 승리를 거둔 경기였습니다.
시애틀의 아름다운 야구장에서 펼쳐진 박진감 넘치는 경기를 직접 관람하는 특별한 경험이었습니다.`,
    highlights: [
      "매리너스의 5-4 역전승",
      "Safeco Field의 멋진 분위기",
      "시애틀 여행의 하이라이트"
    ],
    mood: "⚾",
    weather: "맑음",
    withWhom: "",
    foodAndDrink: "Garlic Fries",
    memorableQuote: "Go Mariners!",
    pitchers: { home: "TBD", away: "TBD" },
    attendance: ""
  },
  {
    id: 4,
    date: "2024-06-10",
    homeTeam: {
      name: "San Francisco Giants",
      abbrev: "SF",
      logo: "https://www.mlbstatic.com/team-logos/137.svg"
    },
    awayTeam: {
      name: "San Diego Padres",
      abbrev: "SD",
      logo: "https://www.mlbstatic.com/team-logos/135.svg"
    },
    score: { home: 4, away: 2 },
    venue: "Oracle Park, San Francisco",
    section: "View Box 316",
    coverImage: "/images/ohtani.jpg",
    images: ["/images/ohtani.jpg", "/images/ohtani.jpg"],
    videos: [],
    story: `샌프란시스코 자이언츠 경기 관람`,
    highlights: ["Oracle Park 바다 전망", "McCovey Cove"],
    mood: "⚾",
    weather: "서늘함",
    withWhom: "가족",
    foodAndDrink: "Garlic Fries, Crab Sandwich",
    memorableQuote: "Beautiful park!",
    pitchers: { home: "Logan Webb", away: "Yu Darvish" },
    attendance: "38,000명"
  },
  {
    id: 5,
    date: "2024-07-05",
    homeTeam: {
      name: "Los Angeles Angels",
      abbrev: "LAA",
      logo: "https://www.mlbstatic.com/team-logos/108.svg"
    },
    awayTeam: {
      name: "Oakland Athletics",
      abbrev: "OAK",
      logo: "https://www.mlbstatic.com/team-logos/133.svg"
    },
    score: { home: 6, away: 4 },
    venue: "Angel Stadium, Anaheim",
    section: "Terrace Level 410",
    coverImage: "/images/ohtani.jpg",
    images: ["/images/ohtani.jpg", "/images/ohtani.jpg"],
    videos: [],
    story: `LA 애인절스 경기 관람`,
    highlights: ["Angel Stadium 분위기"],
    mood: "⚾",
    weather: "맑음",
    withWhom: "친구",
    foodAndDrink: "Hot Dog",
    memorableQuote: "Angels!",
    pitchers: { home: "Patrick Sandoval", away: "Paul Blackburn" },
    attendance: "35,000명"
  },
  {
    id: 6,
    date: "2024-07-20",
    homeTeam: {
      name: "Arizona Diamondbacks",
      abbrev: "ARI",
      logo: "https://www.mlbstatic.com/team-logos/109.svg"
    },
    awayTeam: {
      name: "Colorado Rockies",
      abbrev: "COL",
      logo: "https://www.mlbstatic.com/team-logos/115.svg"
    },
    score: { home: 7, away: 5 },
    venue: "Chase Field, Phoenix",
    section: "Upper Deck 305",
    coverImage: "/images/ohtani.jpg",
    images: ["/images/ohtani.jpg", "/images/ohtani.jpg"],
    videos: [],
    story: `애리조나 다이아몬드백스 경기 관람`,
    highlights: ["실내 에어컨", "더위 피할 수 있어 좋았음"],
    mood: "⚾",
    weather: "실내 경기장",
    withWhom: "가족",
    foodAndDrink: "Nachos",
    memorableQuote: "Cool inside!",
    pitchers: { home: "Zac Gallen", away: "Kyle Freeland" },
    attendance: "32,000명"
  },
  {
    id: 7,
    date: "2024-08-01",
    homeTeam: {
      name: "Colorado Rockies",
      abbrev: "COL",
      logo: "https://www.mlbstatic.com/team-logos/115.svg"
    },
    awayTeam: {
      name: "Los Angeles Dodgers",
      abbrev: "LAD",
      logo: "https://www.mlbstatic.com/team-logos/119.svg"
    },
    score: { home: 3, away: 5 },
    venue: "Coors Field, Denver",
    section: "Rockpile 401",
    coverImage: "/images/ohtani.jpg",
    images: ["/images/ohtani.jpg"],
    videos: [],
    story: `콜로라도 록키스 홈 경기 관람`,
    highlights: ["고지대 야구장", "로키산맥 전망"],
    mood: "⚾",
    weather: "맑음",
    withWhom: "친구들",
    foodAndDrink: "Rocky Mountain Oysters",
    memorableQuote: "High altitude baseball!",
    pitchers: { home: "German Marquez", away: "Tyler Glasnow" },
    attendance: "45,000명"
  },
  {
    id: 8,
    date: "2024-08-15",
    homeTeam: {
      name: "Texas Rangers",
      abbrev: "TEX",
      logo: "https://www.mlbstatic.com/team-logos/140.svg"
    },
    awayTeam: {
      name: "Houston Astros",
      abbrev: "HOU",
      logo: "https://www.mlbstatic.com/team-logos/117.svg"
    },
    score: { home: 5, away: 4 },
    venue: "Globe Life Field, Arlington",
    section: "Lower Box 20",
    coverImage: "/images/ohtani.jpg",
    images: ["/images/ohtani.jpg"],
    videos: [],
    story: `텍사스 레인저스 경기 관람`,
    highlights: ["새 구장", "실내 구장 시원함"],
    mood: "⚾",
    weather: "실내",
    withWhom: "가족",
    foodAndDrink: "BBQ Brisket Sandwich",
    memorableQuote: "Texas baseball!",
    pitchers: { home: "Nathan Eovaldi", away: "Framber Valdez" },
    attendance: "40,000명"
  },
  {
    id: 9,
    date: "2024-09-01",
    homeTeam: {
      name: "St. Louis Cardinals",
      abbrev: "STL",
      logo: "https://www.mlbstatic.com/team-logos/138.svg"
    },
    awayTeam: {
      name: "Milwaukee Brewers",
      abbrev: "MIL",
      logo: "https://www.mlbstatic.com/team-logos/158.svg"
    },
    score: { home: 4, away: 3 },
    venue: "Busch Stadium, St. Louis",
    section: "Infield Box 248",
    coverImage: "/images/ohtani.jpg",
    images: ["/images/ohtani.jpg"],
    videos: [],
    story: `세인트루이스 카디널스 경기 관람`,
    highlights: ["Gateway Arch 전망", "카디널스 전통"],
    mood: "⚾",
    weather: "맑음",
    withWhom: "친구",
    foodAndDrink: "St. Louis Style Pizza",
    memorableQuote: "Cardinals nation!",
    pitchers: { home: "Miles Mikolas", away: "Corbin Burnes" },
    attendance: "43,000명"
  },
  {
    id: 10,
    date: "2024-09-10",
    homeTeam: {
      name: "Chicago White Sox",
      abbrev: "CWS",
      logo: "https://www.mlbstatic.com/team-logos/145.svg"
    },
    awayTeam: {
      name: "Minnesota Twins",
      abbrev: "MIN",
      logo: "https://www.mlbstatic.com/team-logos/142.svg"
    },
    score: { home: 2, away: 4 },
    venue: "Guaranteed Rate Field, Chicago",
    section: "Upper Deck 532",
    coverImage: "/images/ohtani.jpg",
    images: ["/images/ohtani.jpg"],
    videos: [],
    story: `시카고 화이트삭스 경기 관람`,
    highlights: ["시카고 남부", "클래식한 구장"],
    mood: "⚾",
    weather: "흐림",
    withWhom: "혼자",
    foodAndDrink: "Chicago Dog",
    memorableQuote: "South Side!",
    pitchers: { home: "Dylan Cease", away: "Pablo Lopez" },
    attendance: "25,000명"
  },
  {
    id: 11,
    date: "2024-09-15",
    homeTeam: {
      name: "Chicago Cubs",
      abbrev: "CHC",
      logo: "https://www.mlbstatic.com/team-logos/112.svg"
    },
    awayTeam: {
      name: "St. Louis Cardinals",
      abbrev: "STL",
      logo: "https://www.mlbstatic.com/team-logos/138.svg"
    },
    score: { home: 5, away: 3 },
    venue: "Wrigley Field, Chicago",
    section: "Bleachers",
    coverImage: "/images/ohtani.jpg",
    images: ["/images/ohtani.jpg"],
    videos: [],
    story: `시카고 컵스 경기 관람, 역사적인 Wrigley Field`,
    highlights: ["Wrigley Field 역사", "아이비 담장", "옥상 좌석"],
    mood: "⚾",
    weather: "맑음",
    withWhom: "친구들",
    foodAndDrink: "Old Style Beer, Hot Dog",
    memorableQuote: "Go Cubs Go!",
    pitchers: { home: "Justin Steele", away: "Jack Flaherty" },
    attendance: "38,000명"
  },
  {
    id: 12,
    date: "2024-10-01",
    homeTeam: {
      name: "Atlanta Braves",
      abbrev: "ATL",
      logo: "https://www.mlbstatic.com/team-logos/144.svg"
    },
    awayTeam: {
      name: "Philadelphia Phillies",
      abbrev: "PHI",
      logo: "https://www.mlbstatic.com/team-logos/143.svg"
    },
    score: { home: 6, away: 2 },
    venue: "Truist Park, Atlanta",
    section: "Terrace 323",
    coverImage: "/images/ohtani.jpg",
    images: ["/images/ohtani.jpg"],
    videos: [],
    story: `애틀랜타 브레이브스 경기 관람`,
    highlights: ["The Battery 쇼핑몰", "치밥 응원"],
    mood: "⚾",
    weather: "따뜻함",
    withWhom: "가족",
    foodAndDrink: "Waffle House, Chick-fil-A",
    memorableQuote: "Chop chop!",
    pitchers: { home: "Spencer Strider", away: "Zack Wheeler" },
    attendance: "41,000명"
  },
  {
    id: 13,
    date: "2023-08-20",
    homeTeam: {
      name: "Washington Nationals",
      abbrev: "WSH",
      logo: "https://www.mlbstatic.com/team-logos/120.svg"
    },
    awayTeam: {
      name: "Atlanta Braves",
      abbrev: "ATL",
      logo: "https://www.mlbstatic.com/team-logos/144.svg"
    },
    score: { home: 3, away: 5 },
    venue: "Nationals Park, Washington D.C.",
    section: "Outfield 237",
    coverImage: "/images/ohtani.jpg",
    images: ["/images/ohtani.jpg"],
    videos: [],
    story: `워싱턴 네셔널스 경기 관람`,
    highlights: ["국회의사당 전망", "Racing Presidents"],
    mood: "⚾",
    weather: "맑음",
    withWhom: "친구",
    foodAndDrink: "Ben's Chili Bowl Half-Smoke",
    memorableQuote: "DC baseball!",
    pitchers: { home: "Josiah Gray", away: "Spencer Strider" },
    attendance: "28,000명"
  },
  {
    id: 14,
    date: "2023-09-15",
    homeTeam: {
      name: "New York Mets",
      abbrev: "NYM",
      logo: "https://www.mlbstatic.com/team-logos/121.svg"
    },
    awayTeam: {
      name: "Philadelphia Phillies",
      abbrev: "PHI",
      logo: "https://www.mlbstatic.com/team-logos/143.svg"
    },
    score: { home: 4, away: 3 },
    venue: "Citi Field, Queens",
    section: "Field Level 126",
    coverImage: "/images/ohtani.jpg",
    images: ["/images/ohtani.jpg"],
    videos: [],
    story: `뉴욕 메츠 경기 관람`,
    highlights: ["Citi Field 분위기", "Queens 음식"],
    mood: "⚾",
    weather: "맑음",
    withWhom: "친구들",
    foodAndDrink: "Shake Shack, Pastrami Sandwich",
    memorableQuote: "Let's Go Mets!",
    pitchers: { home: "Kodai Senga", away: "Aaron Nola" },
    attendance: "35,000명"
  },
  {
    id: 15,
    date: "2023-07-10",
    homeTeam: {
      name: "Boston Red Sox",
      abbrev: "BOS",
      logo: "https://www.mlbstatic.com/team-logos/111.svg"
    },
    awayTeam: {
      name: "Tampa Bay Rays",
      abbrev: "TB",
      logo: "https://www.mlbstatic.com/team-logos/139.svg"
    },
    score: { home: 5, away: 4 },
    venue: "Fenway Park, Boston",
    section: "Grandstand 32",
    coverImage: "/images/ohtani.jpg",
    images: ["/images/ohtani.jpg"],
    videos: [],
    story: `보스턴 레드삭스 경기 관람, 역사적인 Fenway Park`,
    highlights: ["Green Monster", "Sweet Caroline", "Fenway Frank"],
    mood: "⚾",
    weather: "맑음",
    withWhom: "가족",
    foodAndDrink: "Fenway Frank, Lobster Roll",
    memorableQuote: "Sweet Caroline!",
    pitchers: { home: "Brayan Bello", away: "Shane McClanahan" },
    attendance: "37,000명"
  }
];

/**
 * 팀별 필터링
 */
export function getMLBGamesByTeam(teamAbbrev) {
  return myMLBGameRecords.filter(
    game => game.homeTeam.abbrev === teamAbbrev || game.awayTeam.abbrev === teamAbbrev
  );
}

/**
 * 날짜순 정렬
 */
export function sortMLBGamesByDate(ascending = false) {
  return [...myMLBGameRecords].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return ascending ? dateA - dateB : dateB - dateA;
  });
}

/**
 * 게임 ID로 찾기
 */
export function getMLBGameById(id) {
  return myMLBGameRecords.find(game => game.id === id);
}

/**
 * Stadium Visits Only (경기는 안 보고 구장만 방문)
 */
export const stadiumVisitsOnly = [
  {
    id: 'visit-1',
    stadium: "Minute Maid Park",
    team: "Houston Astros",
    teamAbbrev: "HOU",
    logo: "https://www.mlbstatic.com/team-logos/117.svg",
    location: "Houston, TX",
    visitDate: "2023-05-10",
    image: "/images/ohtani.jpg",
    description: "경기는 관람하지 않았지만 구장 외부를 구경하고 주변을 둘러봤습니다.",
    highlights: [
      "Minute Maid Park 외관",
      "구장 주변 탐방",
      "휴스턴 다운타운"
    ]
  },
  {
    id: 'visit-2',
    stadium: "Comerica Park",
    team: "Detroit Tigers",
    teamAbbrev: "DET",
    logo: "https://www.mlbstatic.com/team-logos/116.svg",
    location: "Detroit, MI",
    visitDate: "2023-06-05",
    image: "/images/ohtani.jpg",
    description: "경기는 관람하지 않았지만 구장 외부를 구경하고 호랑이 조각상을 봤습니다.",
    highlights: [
      "호랑이 조각상",
      "구장 외관",
      "디트로이트 다운타운"
    ]
  }
];
