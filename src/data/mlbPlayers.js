/**
 * MLB Star Players Data
 */

export const mlbStarPlayers = [
  {
    id: 1,
    mlbId: 660271, // Official MLB player ID for API
    name: "Shohei Ohtani",
    nameKo: "쇼헤이 오타니",
    team: "Los Angeles Dodgers",
    teamAbbrev: "LAD",
    position: "DH / Pitcher",
    number: 17,
    image: "/images/ohtani.jpg",
    country: "Japan",
    birthDate: "1994-07-05",
    height: "6'4\"",
    weight: "210 lbs",
    bats: "Left",
    throws: "Right",
    description: "역사상 가장 위대한 이도류 선수. 투수로도, 타자로도 메이저리그 최고 수준의 실력을 자랑하며 야구 역사를 새로 쓰고 있습니다.",
    personalStories: [
      {
        title: "700억 달러의 특별한 계약",
        content: "2023년 다저스와 10년 7억 달러 계약을 맺으며 스포츠 역사상 최대 계약을 체결했습니다. 특이하게도 연봉의 97%를 계약 종료 후 2034년부터 받기로 하여 팀이 더 좋은 선수들을 영입할 수 있도록 배려했습니다. 이는 우승에 대한 그의 강한 열망을 보여줍니다."
      },
      {
        title: "매일 같은 일상의 반복",
        content: "오타니는 극도로 규칙적인 생활을 합니다. 매일 같은 시간에 일어나고, 같은 루틴으로 훈련하며, 같은 음식을 먹습니다. 그의 통역사 이페이는 '오타니는 로봇 같다'고 표현할 정도로 철저한 자기 관리를 실천합니다."
      },
      {
        title: "완벽주의자의 데이터 분석",
        content: "모든 타석과 투구를 영상으로 기록하고 분석합니다. 자신의 스윙 각도, 구속, 회전수 등 모든 데이터를 체크하며, 0.1도의 차이도 놓치지 않습니다. 이러한 분석력이 그를 최고의 선수로 만들었습니다."
      },
      {
        title: "조용한 리더십",
        content: "화려한 퍼포먼스나 말보다는 플레이로 보여주는 스타일입니다. 경기 후 인터뷰에서도 항상 겸손하며, '팀의 승리가 가장 중요하다'는 말을 반복합니다. 이러한 태도가 동료들에게 큰 영감을 줍니다."
      }
    ],
    achievements: [
      "2x AL MVP (2021, 2023)",
      "3x All-Star",
      "2x Silver Slugger Award",
      "AL Rookie of the Year (2018)",
      "50 홈런 - 50 도루 달성 (MLB 역사상 최초)"
    ],
    stats: {
      battingAvg: 0.282,
      homeRuns: 280,
      rbi: 669,
      stolenBases: 165,
      hits: 1050,
      doubles: 192,
      triples: 45,
      era: 3.00,
      wins: 39,
      losses: 20,
      saves: 0,
      inningsPitched: 527.5,
      strikeouts: 670,
      whip: 1.08
    },
    currentSeasonStats: {
      battingAvg: 0.000,
      homeRuns: 0,
      rbi: 0,
      stolenBases: 0,
      hits: 0,
      doubles: 0,
      triples: 0,
      era: 0.00,
      wins: 0,
      losses: 0,
      saves: 0,
      inningsPitched: 0,
      strikeouts: 0,
      whip: 0.00
    },
    seasonBySeasonStats: [
      { season: "2025", battingAvg: 0.282, homeRuns: 55, rbi: 102, stolenBases: 20, hits: 172, doubles: 25, triples: 9, era: 2.87, wins: 1, losses: 1, saves: 0, inningsPitched: 47, strikeouts: 62, whip: 1.04 },
      { season: "2024", battingAvg: 0.31, homeRuns: 54, rbi: 130, stolenBases: 59, hits: 197, doubles: 38, triples: 7, era: null, wins: null, losses: null, saves: null, inningsPitched: null, strikeouts: null, whip: null },
      { season: "2023", battingAvg: 0.304, homeRuns: 44, rbi: 95, stolenBases: 20, hits: 151, doubles: 26, triples: 8, era: 3.14, wins: 10, losses: 5, saves: 0, inningsPitched: 132, strikeouts: 167, whip: 1.06 },
      { season: "2022", battingAvg: 0.273, homeRuns: 34, rbi: 95, stolenBases: 11, hits: 160, doubles: 30, triples: 6, era: 2.33, wins: 15, losses: 9, saves: 0, inningsPitched: 166, strikeouts: 219, whip: 1.01 },
      { season: "2021", battingAvg: 0.257, homeRuns: 46, rbi: 100, stolenBases: 26, hits: 138, doubles: 26, triples: 8, era: 3.18, wins: 9, losses: 2, saves: 0, inningsPitched: 130.1, strikeouts: 156, whip: 1.09 },
      { season: "2020", battingAvg: 0.19, homeRuns: 7, rbi: 24, stolenBases: 7, hits: 29, doubles: 6, triples: 0, era: 37.8, wins: 0, losses: 1, saves: 0, inningsPitched: 1.2, strikeouts: 3, whip: 6.6 },
      { season: "2019", battingAvg: 0.286, homeRuns: 18, rbi: 62, stolenBases: 12, hits: 110, doubles: 20, triples: 5, era: null, wins: null, losses: null, saves: null, inningsPitched: null, strikeouts: null, whip: null },
      { season: "2018", battingAvg: 0.285, homeRuns: 22, rbi: 61, stolenBases: 10, hits: 93, doubles: 21, triples: 2, era: 3.31, wins: 4, losses: 2, saves: 0, inningsPitched: 51.2, strikeouts: 63, whip: 1.16 }
    ],
    highlights: [
      {
        title: "50-50 클럽 달성 순간",
        videoId: "YOUR_YOUTUBE_VIDEO_ID_1",
        description: "MLB 역사상 최초로 50홈런-50도루를 달성한 역사적 순간"
      },
      {
        title: "오타니 2023 시즌 하이라이트",
        videoId: "YOUR_YOUTUBE_VIDEO_ID_2",
        description: "2023년 MVP 시즌의 최고의 순간들"
      }
    ]
  },
  {
    id: 2,
    mlbId: 592450, // Official MLB player ID
    name: "Aaron Judge",
    nameKo: "애런 저지",
    team: "New York Yankees",
    teamAbbrev: "NYY",
    position: "RF",
    number: 99,
    image: "/images/judge.jpg",
    country: "USA",
    birthDate: "1992-04-26",
    height: "6'7\"",
    weight: "282 lbs",
    bats: "Right",
    throws: "Right",
    description: "양키스의 주장이자 메이저리그 최고의 파워 히터. 2022년 아메리칸리그 신기록 62홈런을 달성하며 MVP를 수상했습니다.",
    achievements: [
      "2022 AL MVP",
      "AL Rookie of the Year (2017)",
      "5x All-Star",
      "2022 AL 홈런왕 (62개)",
      "Silver Slugger Award"
    ],
    stats: {
      battingAvg: 0.294,
      homeRuns: 368,
      rbi: 830,
      stolenBases: 65,
      hits: 1205,
      doubles: 203,
      triples: 7,
      era: null,
      wins: null,
      losses: null,
      saves: null,
      inningsPitched: null,
      strikeouts: null,
      whip: null
    },
    currentSeasonStats: {
      battingAvg: 0.000,
      homeRuns: 0,
      rbi: 0,
      stolenBases: 0,
      hits: 0,
      doubles: 0,
      triples: 0,
      era: null,
      wins: null,
      losses: null,
      saves: null,
      inningsPitched: null,
      strikeouts: null,
      whip: null
    },
    seasonBySeasonStats: [
      { season: "2025", battingAvg: 0.331, homeRuns: 53, rbi: 114, stolenBases: 12, hits: 179, doubles: 30, triples: 2, era: null, wins: null, losses: null, saves: null, inningsPitched: null, strikeouts: null, whip: null },
      { season: "2024", battingAvg: 0.322, homeRuns: 58, rbi: 144, stolenBases: 10, hits: 180, doubles: 36, triples: 1, era: null, wins: null, losses: null, saves: null, inningsPitched: null, strikeouts: null, whip: null },
      { season: "2023", battingAvg: 0.267, homeRuns: 37, rbi: 75, stolenBases: 3, hits: 98, doubles: 16, triples: 0, era: null, wins: null, losses: null, saves: null, inningsPitched: null, strikeouts: null, whip: null },
      { season: "2022", battingAvg: 0.311, homeRuns: 62, rbi: 131, stolenBases: 16, hits: 177, doubles: 28, triples: 0, era: null, wins: null, losses: null, saves: null, inningsPitched: null, strikeouts: null, whip: null },
      { season: "2021", battingAvg: 0.287, homeRuns: 39, rbi: 98, stolenBases: 6, hits: 158, doubles: 24, triples: 0, era: null, wins: null, losses: null, saves: null, inningsPitched: null, strikeouts: null, whip: null },
      { season: "2020", battingAvg: 0.257, homeRuns: 9, rbi: 22, stolenBases: 0, hits: 26, doubles: 3, triples: 0, era: null, wins: null, losses: null, saves: null, inningsPitched: null, strikeouts: null, whip: null },
      { season: "2019", battingAvg: 0.272, homeRuns: 27, rbi: 55, stolenBases: 3, hits: 103, doubles: 18, triples: 1, era: null, wins: null, losses: null, saves: null, inningsPitched: null, strikeouts: null, whip: null },
      { season: "2018", battingAvg: 0.278, homeRuns: 27, rbi: 67, stolenBases: 6, hits: 115, doubles: 22, triples: 0, era: null, wins: null, losses: null, saves: null, inningsPitched: null, strikeouts: null, whip: null },
      { season: "2017", battingAvg: 0.284, homeRuns: 52, rbi: 114, stolenBases: 9, hits: 154, doubles: 24, triples: 3, era: null, wins: null, losses: null, saves: null, inningsPitched: null, strikeouts: null, whip: null },
      { season: "2016", battingAvg: 0.179, homeRuns: 4, rbi: 10, stolenBases: 0, hits: 15, doubles: 2, triples: 0, era: null, wins: null, losses: null, saves: null, inningsPitched: null, strikeouts: null, whip: null }
    ],
    personalStories: [
      {
        title: "양키스의 주장",
        content: "2022년 오프시즌 양키스와 9년 3억 6천만 달러 계약을 맺고 팀의 주장으로 임명되었습니다. 역대 16번째 양키스 주장이라는 명예를 안았습니다."
      }
    ]
  },
  {
    id: 3,
    mlbId: 665489, // Official MLB player ID
    name: "Vladimir Guerrero Jr.",
    nameKo: "블라디미르 게레로 주니어",
    team: "Toronto Blue Jays",
    teamAbbrev: "TOR",
    position: "1B",
    number: 27,
    image: "/images/guerrero.jpg",
    country: "Canada",
    birthDate: "1999-03-16",
    height: "6'0\"",
    weight: "245 lbs",
    bats: "Right",
    throws: "Right",
    description: "명예의 전당 선수 블라디미르 게레로의 아들. 강력한 타격과 뛰어난 야구 센스로 블루제이스의 프랜차이즈 스타로 자리매김했습니다.",
    achievements: [
      "2x All-Star",
      "Silver Slugger Award",
      "AL 타율왕 후보"
    ],
    stats: {
      battingAvg: 0.288,
      homeRuns: 183,
      rbi: 591,
      stolenBases: 26,
      hits: 1077,
      doubles: 211,
      triples: 6,
      era: null,
      wins: null,
      losses: null,
      saves: null,
      inningsPitched: null,
      strikeouts: null,
      whip: null
    },
    currentSeasonStats: {
      battingAvg: 0.000,
      homeRuns: 0,
      rbi: 0,
      stolenBases: 0,
      hits: 0,
      doubles: 0,
      triples: 0,
      era: null,
      wins: null,
      losses: null,
      saves: null,
      inningsPitched: null,
      strikeouts: null,
      whip: null
    },
    seasonBySeasonStats: [
      { season: "2025", battingAvg: 0.292, homeRuns: 23, rbi: 84, stolenBases: 6, hits: 172, doubles: 34, triples: 0, era: null, wins: null, losses: null, saves: null, inningsPitched: null, strikeouts: null, whip: null },
      { season: "2024", battingAvg: 0.323, homeRuns: 30, rbi: 103, stolenBases: 2, hits: 199, doubles: 44, triples: 1, era: null, wins: null, losses: null, saves: null, inningsPitched: null, strikeouts: null, whip: null },
      { season: "2023", battingAvg: 0.264, homeRuns: 26, rbi: 94, stolenBases: 5, hits: 159, doubles: 30, triples: 0, era: null, wins: null, losses: null, saves: null, inningsPitched: null, strikeouts: null, whip: null },
      { season: "2022", battingAvg: 0.274, homeRuns: 32, rbi: 97, stolenBases: 8, hits: 175, doubles: 35, triples: 0, era: null, wins: null, losses: null, saves: null, inningsPitched: null, strikeouts: null, whip: null },
      { season: "2021", battingAvg: 0.311, homeRuns: 48, rbi: 111, stolenBases: 4, hits: 188, doubles: 29, triples: 1, era: null, wins: null, losses: null, saves: null, inningsPitched: null, strikeouts: null, whip: null },
      { season: "2020", battingAvg: 0.262, homeRuns: 9, rbi: 33, stolenBases: 1, hits: 58, doubles: 13, triples: 2, era: null, wins: null, losses: null, saves: null, inningsPitched: null, strikeouts: null, whip: null },
      { season: "2019", battingAvg: 0.272, homeRuns: 15, rbi: 69, stolenBases: 0, hits: 126, doubles: 26, triples: 2, era: null, wins: null, losses: null, saves: null, inningsPitched: null, strikeouts: null, whip: null }
    ],
    personalStories: [
      {
        title: "아버지의 DNA",
        content: "전설적인 타자 블라디미르 게레로의 아들로 태어나 아버지의 재능을 물려받았습니다. 아버지처럼 강력한 파워와 넓은 타격 존을 자랑합니다."
      }
    ]
  },
  {
    id: 4,
    mlbId: 547180, // Official MLB player ID
    name: "Bryce Harper",
    nameKo: "브라이스 하퍼",
    team: "Philadelphia Phillies",
    teamAbbrev: "PHI",
    position: "1B",
    number: 3,
    image: "/images/harper.jpg",
    country: "USA",
    birthDate: "1992-10-16",
    height: "6'2\"",
    weight: "210 lbs",
    bats: "Left",
    throws: "Right",
    description: "2015 내셔널리그 MVP. 필리스의 간판 스타로 2019년 13년 3억 3천만 달러 계약을 맺으며 팀에 헌신했습니다.",
    achievements: [
      "2x NL MVP (2015, 2021)",
      "8x All-Star",
      "NL Rookie of the Year (2012)",
      "Silver Slugger Award"
    ],
    stats: {
      battingAvg: 0.28,
      homeRuns: 363,
      rbi: 1051,
      stolenBases: 152,
      hits: 1801,
      doubles: 401,
      triples: 24,
      era: null,
      wins: null,
      losses: null,
      saves: null,
      inningsPitched: null,
      strikeouts: null,
      whip: null
    },
    currentSeasonStats: {
      battingAvg: 0.000,
      homeRuns: 0,
      rbi: 0,
      stolenBases: 0,
      hits: 0,
      doubles: 0,
      triples: 0,
      era: null,
      wins: null,
      losses: null,
      saves: null,
      inningsPitched: null,
      strikeouts: null,
      whip: null
    },
    seasonBySeasonStats: [
      { season: "2025", battingAvg: 0.261, homeRuns: 27, rbi: 75, stolenBases: 12, hits: 131, doubles: 32, triples: 0, era: null, wins: null, losses: null, saves: null, inningsPitched: null, strikeouts: null, whip: null },
      { season: "2024", battingAvg: 0.285, homeRuns: 30, rbi: 87, stolenBases: 7, hits: 157, doubles: 42, triples: 0, era: null, wins: null, losses: null, saves: null, inningsPitched: null, strikeouts: null, whip: null },
      { season: "2023", battingAvg: 0.293, homeRuns: 21, rbi: 72, stolenBases: 11, hits: 134, doubles: 29, triples: 1, era: null, wins: null, losses: null, saves: null, inningsPitched: null, strikeouts: null, whip: null },
      { season: "2022", battingAvg: 0.286, homeRuns: 18, rbi: 65, stolenBases: 11, hits: 106, doubles: 28, triples: 1, era: null, wins: null, losses: null, saves: null, inningsPitched: null, strikeouts: null, whip: null },
      { season: "2021", battingAvg: 0.309, homeRuns: 35, rbi: 84, stolenBases: 13, hits: 151, doubles: 42, triples: 1, era: null, wins: null, losses: null, saves: null, inningsPitched: null, strikeouts: null, whip: null },
      { season: "2020", battingAvg: 0.268, homeRuns: 13, rbi: 33, stolenBases: 8, hits: 51, doubles: 9, triples: 2, era: null, wins: null, losses: null, saves: null, inningsPitched: null, strikeouts: null, whip: null },
      { season: "2019", battingAvg: 0.26, homeRuns: 35, rbi: 114, stolenBases: 15, hits: 149, doubles: 36, triples: 1, era: null, wins: null, losses: null, saves: null, inningsPitched: null, strikeouts: null, whip: null },
      { season: "2018", battingAvg: 0.249, homeRuns: 34, rbi: 100, stolenBases: 13, hits: 137, doubles: 34, triples: 0, era: null, wins: null, losses: null, saves: null, inningsPitched: null, strikeouts: null, whip: null },
      { season: "2017", battingAvg: 0.319, homeRuns: 29, rbi: 87, stolenBases: 4, hits: 134, doubles: 27, triples: 1, era: null, wins: null, losses: null, saves: null, inningsPitched: null, strikeouts: null, whip: null },
      { season: "2016", battingAvg: 0.243, homeRuns: 24, rbi: 86, stolenBases: 21, hits: 123, doubles: 24, triples: 2, era: null, wins: null, losses: null, saves: null, inningsPitched: null, strikeouts: null, whip: null },
      { season: "2015", battingAvg: 0.33, homeRuns: 42, rbi: 99, stolenBases: 6, hits: 172, doubles: 38, triples: 1, era: null, wins: null, losses: null, saves: null, inningsPitched: null, strikeouts: null, whip: null },
      { season: "2014", battingAvg: 0.273, homeRuns: 13, rbi: 32, stolenBases: 2, hits: 96, doubles: 10, triples: 2, era: null, wins: null, losses: null, saves: null, inningsPitched: null, strikeouts: null, whip: null },
      { season: "2013", battingAvg: 0.274, homeRuns: 20, rbi: 58, stolenBases: 11, hits: 116, doubles: 24, triples: 3, era: null, wins: null, losses: null, saves: null, inningsPitched: null, strikeouts: null, whip: null },
      { season: "2012", battingAvg: 0.27, homeRuns: 22, rbi: 59, stolenBases: 18, hits: 144, doubles: 26, triples: 9, era: null, wins: null, losses: null, saves: null, inningsPitched: null, strikeouts: null, whip: null }
    ],
    personalStories: [
      {
        title: "필라델피아 사랑",
        content: "2019년 필리스와 13년 계약을 맺으며 '이 도시를 사랑한다'고 말했습니다. 계약 발표 당시 필라델피아 전체가 축제 분위기였습니다."
      }
    ]
  },
  {
    id: 5,
    mlbId: 665742, // Official MLB player ID
    name: "Juan Soto",
    nameKo: "후안 소토",
    team: "New York Mets",
    teamAbbrev: "NYM",
    position: "RF",
    number: 22,
    image: "/images/soto.jpg",
    country: "Dominican Republic",
    birthDate: "1998-10-25",
    height: "6'1\"",
    weight: "224 lbs",
    bats: "Left",
    throws: "Left",
    description: "MLB 최고의 선구안과 타격 능력을 자랑하는 외야수. 2024-25 오프시즌 메츠와 역대급 계약을 맺으며 뉴욕의 새로운 전설이 되었습니다.",
    achievements: [
      "4x All-Star",
      "Silver Slugger Award",
      "World Series Champion (2019)",
      "NL 타율왕 후보"
    ],
    stats: {
      battingAvg: 0.278,
      homeRuns: 271,
      rbi: 759,
      stolenBases: 101,
      hits: 1213,
      doubles: 224,
      triples: 18,
      era: null,
      wins: null,
      losses: null,
      saves: null,
      inningsPitched: null,
      strikeouts: null,
      whip: null
    },
    currentSeasonStats: {
      battingAvg: 0.000,
      homeRuns: 0,
      rbi: 0,
      stolenBases: 0,
      hits: 0,
      doubles: 0,
      triples: 0,
      era: null,
      wins: null,
      losses: null,
      saves: null,
      inningsPitched: null,
      strikeouts: null,
      whip: null
    },
    seasonBySeasonStats: [
      { season: "2025", battingAvg: 0.263, homeRuns: 43, rbi: 105, stolenBases: 38, hits: 152, doubles: 20, triples: 1, era: null, wins: null, losses: null, saves: null, inningsPitched: null, strikeouts: null, whip: null },
      { season: "2024", battingAvg: 0.288, homeRuns: 41, rbi: 109, stolenBases: 7, hits: 166, doubles: 31, triples: 4, era: null, wins: null, losses: null, saves: null, inningsPitched: null, strikeouts: null, whip: null },
      { season: "2023", battingAvg: 0.275, homeRuns: 35, rbi: 109, stolenBases: 12, hits: 156, doubles: 32, triples: 1, era: null, wins: null, losses: null, saves: null, inningsPitched: null, strikeouts: null, whip: null },
      { season: "2022", battingAvg: 0.242, homeRuns: 27, rbi: 62, stolenBases: 6, hits: 127, doubles: 25, triples: 2, era: null, wins: null, losses: null, saves: null, inningsPitched: null, strikeouts: null, whip: null },
      { season: "2021", battingAvg: 0.313, homeRuns: 29, rbi: 95, stolenBases: 9, hits: 157, doubles: 20, triples: 2, era: null, wins: null, losses: null, saves: null, inningsPitched: null, strikeouts: null, whip: null },
      { season: "2020", battingAvg: 0.351, homeRuns: 13, rbi: 37, stolenBases: 6, hits: 54, doubles: 14, triples: 0, era: null, wins: null, losses: null, saves: null, inningsPitched: null, strikeouts: null, whip: null },
      { season: "2019", battingAvg: 0.282, homeRuns: 34, rbi: 110, stolenBases: 12, hits: 153, doubles: 32, triples: 5, era: null, wins: null, losses: null, saves: null, inningsPitched: null, strikeouts: null, whip: null },
      { season: "2018", battingAvg: 0.292, homeRuns: 22, rbi: 70, stolenBases: 5, hits: 121, doubles: 25, triples: 1, era: null, wins: null, losses: null, saves: null, inningsPitched: null, strikeouts: null, whip: null }
    ],
    personalStories: [
      {
        title: "전설적인 선구안",
        content: "MLB에서 가장 뛰어난 선구안을 가진 타자 중 한 명입니다. 볼넷 비율이 매우 높으며, 나쁜 공은 절대 휘두르지 않는 것으로 유명합니다."
      },
      {
        title: "메츠와 역대급 계약",
        content: "2024-25 오프시즌 뉴욕 메츠와 15년 7억 6,500만 달러 계약을 체결하며 MLB 역사상 최대 규모의 계약을 맺었습니다. 같은 뉴욕의 라이벌 양키스를 떠나 메츠를 선택한 결정은 큰 화제가 되었습니다."
      }
    ]
  },
  {
    id: 6,
    mlbId: 663728, // Official MLB player ID
    name: "Cal Raleigh",
    nameKo: "칼 랠리",
    team: "Seattle Mariners",
    teamAbbrev: "SEA",
    position: "C",
    number: 29,
    image: "/images/raleigh.jpg",
    country: "USA",
    birthDate: "1996-11-26",
    height: "6'2\"",
    weight: "235 lbs",
    bats: "Switch",
    throws: "Right",
    description: "시애틀의 간판 포수. 'Big Dumper'라는 별명으로 팬들의 사랑을 받으며 강력한 파워와 훌륭한 수비를 자랑합니다.",
    achievements: [
      "All-Star",
      "Gold Glove Award 후보",
      "시애틀 매리너스 프랜차이즈 기록"
    ],
    stats: {
      battingAvg: 0.226,
      homeRuns: 153,
      rbi: 376,
      stolenBases: 21,
      hits: 489,
      doubles: 95,
      triples: 2,
      era: null,
      wins: null,
      losses: null,
      saves: null,
      inningsPitched: null,
      strikeouts: null,
      whip: null
    },
    currentSeasonStats: {
      battingAvg: 0.000,
      homeRuns: 0,
      rbi: 0,
      stolenBases: 0,
      hits: 0,
      doubles: 0,
      triples: 0,
      era: null,
      wins: null,
      losses: null,
      saves: null,
      inningsPitched: null,
      strikeouts: null,
      whip: null
    },
    seasonBySeasonStats: [
      { season: "2025", battingAvg: 0.247, homeRuns: 60, rbi: 125, stolenBases: 14, hits: 147, doubles: 24, triples: 0, era: null, wins: null, losses: null, saves: null, inningsPitched: null, strikeouts: null, whip: null },
      { season: "2024", battingAvg: 0.22, homeRuns: 34, rbi: 100, stolenBases: 6, hits: 120, doubles: 16, triples: 0, era: null, wins: null, losses: null, saves: null, inningsPitched: null, strikeouts: null, whip: null },
      { season: "2023", battingAvg: 0.232, homeRuns: 30, rbi: 75, stolenBases: 0, hits: 119, doubles: 23, triples: 1, era: null, wins: null, losses: null, saves: null, inningsPitched: null, strikeouts: null, whip: null },
      { season: "2022", battingAvg: 0.211, homeRuns: 27, rbi: 63, stolenBases: 1, hits: 78, doubles: 20, triples: 1, era: null, wins: null, losses: null, saves: null, inningsPitched: null, strikeouts: null, whip: null },
      { season: "2021", battingAvg: 0.18, homeRuns: 2, rbi: 13, stolenBases: 0, hits: 25, doubles: 12, triples: 0, era: null, wins: null, losses: null, saves: null, inningsPitched: null, strikeouts: null, whip: null }
    ],
    personalStories: [
      {
        title: "Big Dumper",
        content: "팬들이 붙여준 'Big Dumper'라는 독특한 별명으로 유명합니다. 이 별명은 시애틀에서 큰 사랑을 받으며 그의 트레이드마크가 되었습니다."
      }
    ]
  }
];

/**
 * Get player by ID
 */
export function getMLBPlayerById(id) {
  return mlbStarPlayers.find(player => player.id === id);
}

/**
 * Get all players by team
 */
export function getMLBPlayersByTeam(teamAbbrev) {
  return mlbStarPlayers.filter(player => player.teamAbbrev === teamAbbrev);
}
