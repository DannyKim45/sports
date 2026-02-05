/**
 * NHL Star Players Data
 * Player IDs from NHL API for future integration
 */

export const starPlayers = [
  {
    id: 8478402,
    name: "Connor McDavid",
    team: "Edmonton Oilers",
    teamAbbrev: "EDM",
    position: "Center",
    number: 97,
    image: "/images/mcdavid.jpg",
    country: "Canada",
    birthDate: "1997-01-13",
    height: "6'1\"",
    weight: "194 lbs",
    shoots: "Left",
    description: "Widely considered the best player in the world, McDavid is a generational talent with unmatched speed and vision. The 2015 1st overall pick has redefined what's possible at center ice.",
    achievements: [
      "3x Hart Trophy (MVP)",
      "5x Art Ross Trophy (Points Leader)",
      "4x Ted Lindsay Award",
      "2023 Conn Smythe Trophy",
      "Multiple 100+ point seasons"
    ],
    stats: {
      gamesPlayed: 645,
      goals: 335,
      assists: 578,
      points: 913,
      plusMinus: 85,
      pim: 230
    },
    currentSeasonStats: {
      gamesPlayed: 48,
      goals: 22,
      assists: 48,
      points: 70,
      plusMinus: 12,
      pim: 18
    },
    seasonBySeasonStats: [
      { season: "2024-25", gamesPlayed: 48, goals: 22, assists: 48, points: 70, plusMinus: 12, pim: 18 },
      { season: "2023-24", gamesPlayed: 76, goals: 32, assists: 100, points: 132, plusMinus: 19, pim: 36 },
      { season: "2022-23", gamesPlayed: 82, goals: 64, assists: 89, points: 153, plusMinus: 22, pim: 36 },
      { season: "2021-22", gamesPlayed: 80, goals: 44, assists: 79, points: 123, plusMinus: 8, pim: 26 },
      { season: "2020-21", gamesPlayed: 56, goals: 33, assists: 72, points: 105, plusMinus: 21, pim: 16 },
      { season: "2019-20", gamesPlayed: 64, goals: 34, assists: 63, points: 97, plusMinus: 9, pim: 18 },
      { season: "2018-19", gamesPlayed: 78, goals: 41, assists: 75, points: 116, plusMinus: 1, pim: 26 },
      { season: "2017-18", gamesPlayed: 82, goals: 41, assists: 67, points: 108, plusMinus: 20, pim: 26 },
      { season: "2016-17", gamesPlayed: 82, goals: 30, assists: 70, points: 100, plusMinus: 27, pim: 26 },
      { season: "2015-16", gamesPlayed: 45, goals: 16, assists: 32, points: 48, plusMinus: -1, pim: 18 }
    ]
  },
  {
    id: 8479318,
    name: "Auston Matthews",
    team: "Toronto Maple Leafs",
    teamAbbrev: "TOR",
    position: "Center",
    number: 34,
    image: "/images/matthews.jpg",
    country: "USA",
    birthDate: "1997-09-17",
    height: "6'3\"",
    weight: "220 lbs",
    shoots: "Left",
    description: "Elite goal scorer with one of the deadliest shots in the NHL. The 2016 1st overall pick from Arizona has become the face of the Maple Leafs franchise.",
    achievements: [
      "2022 Hart Trophy (MVP)",
      "2x Maurice Richard Trophy (Goals Leader)",
      "Calder Trophy (Rookie of the Year)",
      "Multiple 60+ goal seasons",
      "5x All-Star"
    ],
    stats: {
      gamesPlayed: 562,
      goals: 368,
      assists: 283,
      points: 651,
      plusMinus: 78,
      pim: 156
    },
    currentSeasonStats: {
      gamesPlayed: 47,
      goals: 38,
      assists: 28,
      points: 66,
      plusMinus: 8,
      pim: 12
    },
    seasonBySeasonStats: [
      { season: "2024-25", gamesPlayed: 47, goals: 38, assists: 28, points: 66, plusMinus: 8, pim: 12 },
      { season: "2023-24", gamesPlayed: 81, goals: 69, assists: 38, points: 107, plusMinus: 22, pim: 22 },
      { season: "2022-23", gamesPlayed: 78, goals: 40, assists: 45, points: 85, plusMinus: 18, pim: 20 },
      { season: "2021-22", gamesPlayed: 73, goals: 60, assists: 46, points: 106, plusMinus: 17, pim: 22 },
      { season: "2020-21", gamesPlayed: 52, goals: 41, assists: 25, points: 66, plusMinus: 4, pim: 14 },
      { season: "2019-20", gamesPlayed: 70, goals: 47, assists: 33, points: 80, plusMinus: 10, pim: 20 },
      { season: "2018-19", gamesPlayed: 68, goals: 37, assists: 36, points: 73, plusMinus: 14, pim: 20 },
      { season: "2017-18", gamesPlayed: 62, goals: 34, assists: 29, points: 63, plusMinus: 4, pim: 16 },
      { season: "2016-17", gamesPlayed: 82, goals: 40, assists: 29, points: 69, plusMinus: -2, pim: 14 }
    ]
  },
  {
    id: 8477492,
    name: "Nathan MacKinnon",
    team: "Colorado Avalanche",
    teamAbbrev: "COL",
    position: "Center",
    number: 29,
    image: "/images/mackinnon.jpg",
    country: "Canada",
    birthDate: "1995-09-01",
    height: "6'0\"",
    weight: "200 lbs",
    shoots: "Right",
    description: "Dynamic two-way center with explosive speed and elite playmaking ability. Led the Avalanche to the 2022 Stanley Cup Championship.",
    personalStories: [
      {
        title: "극도의 훈련 중독자",
        content: "MacKinnon은 NHL에서 가장 헌신적인 훈련으로 유명합니다. 시즌 중에도 매일 아침 5시 30분에 일어나 빙상 훈련을 하며, 개인 트레이너와 영양사를 고용해 철저하게 자기 관리를 합니다. 그의 집 지하에는 전문 체육관이 있으며, 식단은 그램 단위로 계량됩니다."
      },
      {
        title: "Sidney Crosby의 어린 시절 친구",
        content: "Nova Scotia 출신인 MacKinnon은 같은 지역 출신인 Sidney Crosby와 어릴 때부터 알고 지냈습니다. Crosby의 부모님이 운영하는 링크에서 훈련했으며, Crosby는 그의 멘토이자 롤모델이었습니다. 두 선수는 여름마다 함께 훈련하며 친밀한 관계를 유지하고 있습니다."
      },
      {
        title: "어머니 Kathy, 가장 든든한 조력자",
        content: "MacKinnon의 어머니 Kathy는 Nova Scotia에서 2,500마일 떨어진 Denver를 4-6주마다 방문하여 아들의 일상을 전담합니다. 생활비 관리부터 식사 준비, 빨래까지 모든 것을 챙기며 MacKinnon이 오직 하키에만 집중할 수 있도록 돕습니다. MacKinnon은 '어머니는 내가 지금의 위치에 있는 가장 큰 이유 중 한 명'이라며, 자신의 따뜻한 성격도 어머니로부터 물려받았다고 말합니다. 미래에 결혼할 사람도 어머니와 같은 인품을 가진 사람이기를 바란다고 밝혔습니다."
      },
      {
        title: "겸손한 계약, 팀 우선주의",
        content: "2016년 7년 $44.1M 계약을 맺었을 때, 많은 전문가들은 그의 실력에 비해 저평가된 계약이라고 평가했습니다. MacKinnon은 '팀이 좋은 선수들을 영입할 수 있도록 돕고 싶었다'며 의도적으로 낮은 금액을 수락했습니다. 이러한 희생정신이 결국 2022년 스탠리컵 우승으로 이어졌습니다."
      },
      {
        title: "2016-17 시즌, 인생의 전환점",
        content: "Avalanche가 샐러리 캡 시대 최저 점수인 48점으로 시즌을 마친 2016-17 시즌은 MacKinnon에게 전환점이 되었습니다. 그는 자신의 초창기를 '어리고 어리석었던' 시절이라 표현하며, 훈련 태도와 생활 습관의 문제를 인정했습니다. '평범함은 자연스럽게 나와 맞지 않는다'는 깨달음 후, 그는 예전의 헌신적 태도를 되찾았고 팀 전체의 영양 관리와 훈련 방식까지 지도하는 진정한 리더로 성장했습니다. 코치 Bednar는 '그가 개인을 넘어 팀 전체를 생각하는 큰 그림 사고를 발전시켰다'고 평가했습니다."
      },
      {
        title: "완벽주의를 넘어선 성숙",
        content: "플레이오프 탈락 후 MacKinnon은 심각한 우울증을 겪었고, '나 자신에게 너무 가혹했으며 매일 밤 경기를 되돌아보며 잠을 이루지 못했다'고 고백했습니다. 이후 정신 건강 관리의 중요성을 깨닫고 스포츠 심리학자와 정기적으로 상담하며, 외부의 평가(Hart Trophy 투표 등)에 집착하기보다 가족과 팀원들의 신뢰에 집중하는 법을 배웠습니다. 이러한 내적 성장이 2022년 스탠리컵 우승의 원동력이 되었습니다."
      },
      {
        title: "소박한 일상",
        content: "수백만 달러를 버는 슈퍼스타임에도 불구하고 MacKinnon은 매우 검소한 생활을 합니다. 2020년까지 대학생이 쓸 법한 오래된 차를 몰고 다녔으며, 팀 동료 Landeskog가 '좀 제대로 된 차를 사라'고 농담할 정도였습니다. 그는 '돈을 버는 것보다 우승하는 게 더 중요하다'는 철학을 가지고 있습니다."
      }
    ],
    highlights: [
      {
        title: "네이선 매케넌 2025-26 시즌 베스트 하이라이트",
        videoId: "nIJGS0pbgQI",
        description: "2025-26 시즌 현재까지의 최고의 NHL 플레이 모음"
      },
      {
        title: "통산 1000점 달성 축하 세레모니",
        videoId: "ssrwNXVHKT4",
        description: "NHL 커리어 1000점을 달성한 매케넌을 축하하는 애벌런치 팀의 감동적인 순간"
      },
      {
        title: "위대함을 목격하다 - 피크 액세스",
        videoId: "Ed_QXMe4TIo",
        description: "매케넌의 경기 플레이와 훈련 과정을 심층적으로 담은 특별 다큐멘터리"
      },
      {
        title: "콜로라도 애벌런치 2022 스탠리컵 우승 다큐",
        videoId: "7nyHIjfHXaI",
        description: "애벌런치의 2022 스탠리컵 우승 여정을 담은 공식 우승 필름"
      },
      {
        title: "2022 플레이오프 전체 득점 장면",
        videoId: "2a_t3LZFvCg",
        description: "스탠리컵 우승까지 애벌런치가 기록한 모든 골 하이라이트 총정리"
      },
      {
        title: "MVP급 경기력을 만드는 매케넌의 끈질긴 피트니스 루틴",
        videoId: "GeWg504KOz4",
        description: "네이선 매케넌의 철저한 훈련 루틴과 MVP 수준의 경기력을 유지하는 비결"
      }
    ],
    achievements: [
      "2022 Stanley Cup Champion",
      "2024 Hart Trophy (MVP)",
      "Calder Trophy (2014)",
      "Lady Byng Trophy (2020)",
      "Multiple 100+ point seasons"
    ],
    stats: {
      gamesPlayed: 765,
      goals: 312,
      assists: 478,
      points: 790,
      plusMinus: 142,
      pim: 298
    },
    currentSeasonStats: {
      gamesPlayed: 46,
      goals: 24,
      assists: 49,
      points: 73,
      plusMinus: 18,
      pim: 20
    },
    seasonBySeasonStats: [
      { season: "2024-25", gamesPlayed: 46, goals: 24, assists: 49, points: 73, plusMinus: 18, pim: 20 },
      { season: "2023-24", gamesPlayed: 82, goals: 51, assists: 89, points: 140, plusMinus: 36, pim: 40 },
      { season: "2022-23", gamesPlayed: 71, goals: 42, assists: 69, points: 111, plusMinus: 29, pim: 36 },
      { season: "2021-22", gamesPlayed: 65, goals: 32, assists: 56, points: 88, plusMinus: 24, pim: 36 },
      { season: "2020-21", gamesPlayed: 48, goals: 20, assists: 45, points: 65, plusMinus: 25, pim: 22 },
      { season: "2019-20", gamesPlayed: 69, goals: 35, assists: 58, points: 93, plusMinus: 12, pim: 36 },
      { season: "2018-19", gamesPlayed: 82, goals: 41, assists: 58, points: 99, plusMinus: 19, pim: 48 },
      { season: "2017-18", gamesPlayed: 74, goals: 39, assists: 58, points: 97, plusMinus: 18, pim: 28 },
      { season: "2016-17", gamesPlayed: 82, goals: 33, assists: 53, points: 86, plusMinus: 11, pim: 32 },
      { season: "2015-16", gamesPlayed: 82, goals: 21, assists: 31, points: 52, plusMinus: -6, pim: 20 },
      { season: "2014-15", gamesPlayed: 68, goals: 24, assists: 14, points: 38, plusMinus: -11, pim: 30 },
      { season: "2013-14", gamesPlayed: 82, goals: 24, assists: 39, points: 63, plusMinus: 14, pim: 26 }
    ]
  },
  {
    id: 8471214,
    name: "Alex Ovechkin",
    team: "Washington Capitals",
    teamAbbrev: "WSH",
    position: "Left Wing",
    number: 8,
    image: "/images/ovechkin.jpg",
    country: "Russia",
    birthDate: "1985-09-17",
    height: "6'3\"",
    weight: "239 lbs",
    shoots: "Right",
    description: "The greatest goal scorer of this generation, chasing Wayne Gretzky's all-time record. His one-timer from the left circle is the most iconic shot in modern hockey.",
    achievements: [
      "2018 Stanley Cup Champion",
      "3x Hart Trophy (MVP)",
      "9x Maurice Richard Trophy (Goals Leader)",
      "Calder Trophy (2006)",
      "800+ career goals"
    ],
    stats: {
      gamesPlayed: 1426,
      goals: 853,
      assists: 705,
      points: 1558,
      plusMinus: 145,
      pim: 1440
    },
    currentSeasonStats: {
      gamesPlayed: 45,
      goals: 19,
      assists: 22,
      points: 41,
      plusMinus: -2,
      pim: 30
    },
    seasonBySeasonStats: [
      { season: "2024-25", gamesPlayed: 45, goals: 19, assists: 22, points: 41, plusMinus: -2, pim: 30 },
      { season: "2023-24", gamesPlayed: 79, goals: 31, assists: 34, points: 65, plusMinus: -12, pim: 58 },
      { season: "2022-23", gamesPlayed: 73, goals: 42, assists: 33, points: 75, plusMinus: 6, pim: 48 },
      { season: "2021-22", gamesPlayed: 77, goals: 50, assists: 40, points: 90, plusMinus: 26, pim: 34 },
      { season: "2020-21", gamesPlayed: 45, goals: 24, assists: 19, points: 43, plusMinus: 13, pim: 16 },
      { season: "2019-20", gamesPlayed: 68, goals: 48, assists: 19, points: 67, plusMinus: 9, pim: 40 },
      { season: "2018-19", gamesPlayed: 81, goals: 51, assists: 38, points: 89, plusMinus: 3, pim: 50 },
      { season: "2017-18", gamesPlayed: 82, goals: 49, assists: 38, points: 87, plusMinus: 3, pim: 50 },
      { season: "2016-17", gamesPlayed: 82, goals: 33, assists: 36, points: 69, plusMinus: 6, pim: 50 },
      { season: "2015-16", gamesPlayed: 79, goals: 50, assists: 21, points: 71, plusMinus: 21, pim: 54 }
    ]
  },
  {
    id: 8480069,
    name: "Cale Makar",
    team: "Colorado Avalanche",
    teamAbbrev: "COL",
    position: "Defense",
    number: 8,
    image: "/images/makar.jpg",
    country: "Canada",
    birthDate: "1998-10-30",
    height: "5'11\"",
    weight: "187 lbs",
    shoots: "Right",
    description: "Revolutionary offensive defenseman who skates like a forward. Won the Conn Smythe Trophy in his third season while leading the Avalanche to the Cup.",
    achievements: [
      "2022 Stanley Cup Champion",
      "2022 Conn Smythe Trophy",
      "2022 Norris Trophy",
      "Calder Trophy (2020)",
      "Multiple All-Star selections"
    ],
    stats: {
      gamesPlayed: 345,
      goals: 98,
      assists: 245,
      points: 343,
      plusMinus: 125,
      pim: 102
    },
    currentSeasonStats: {
      gamesPlayed: 47,
      goals: 12,
      assists: 37,
      points: 49,
      plusMinus: 22,
      pim: 18
    },
    seasonBySeasonStats: [
      { season: "2024-25", gamesPlayed: 47, goals: 12, assists: 37, points: 49, plusMinus: 22, pim: 18 },
      { season: "2023-24", gamesPlayed: 77, goals: 29, assists: 62, points: 91, plusMinus: 31, pim: 24 },
      { season: "2022-23", gamesPlayed: 60, goals: 16, assists: 45, points: 61, plusMinus: 21, pim: 20 },
      { season: "2021-22", gamesPlayed: 77, goals: 28, assists: 58, points: 86, plusMinus: 48, pim: 32 },
      { season: "2020-21", gamesPlayed: 44, goals: 8, assists: 36, points: 44, plusMinus: 20, pim: 12 },
      { season: "2019-20", gamesPlayed: 57, goals: 12, assists: 37, points: 49, plusMinus: -3, pim: 14 },
      { season: "2018-19", gamesPlayed: 10, goals: 2, assists: 10, points: 12, plusMinus: 6, pim: 2 }
    ]
  },
  {
    id: 8471675,
    name: "Sidney Crosby",
    team: "Pittsburgh Penguins",
    teamAbbrev: "PIT",
    position: "Center",
    number: 87,
    image: "/images/crosby.jpg",
    country: "Canada",
    birthDate: "1987-08-07",
    height: "5'11\"",
    weight: "200 lbs",
    shoots: "Left",
    description: "Future Hall of Famer and one of the greatest players of all time. 'Sid the Kid' has been the face of the NHL for nearly two decades with his complete two-way game.",
    achievements: [
      "3x Stanley Cup Champion",
      "2x Hart Trophy (MVP)",
      "2x Conn Smythe Trophy",
      "2x Olympic Gold Medals",
      "1500+ career points"
    ],
    stats: {
      gamesPlayed: 1272,
      goals: 592,
      assists: 1004,
      points: 1596,
      plusMinus: 210,
      pim: 934
    },
    currentSeasonStats: {
      gamesPlayed: 44,
      goals: 14,
      assists: 28,
      points: 42,
      plusMinus: 5,
      pim: 24
    },
    seasonBySeasonStats: [
      { season: "2024-25", gamesPlayed: 44, goals: 14, assists: 28, points: 42, plusMinus: 5, pim: 24 },
      { season: "2023-24", gamesPlayed: 82, goals: 42, assists: 52, points: 94, plusMinus: 17, pim: 36 },
      { season: "2022-23", gamesPlayed: 82, goals: 33, assists: 60, points: 93, plusMinus: 10, pim: 46 },
      { season: "2021-22", gamesPlayed: 69, goals: 31, assists: 53, points: 84, plusMinus: 18, pim: 38 },
      { season: "2020-21", gamesPlayed: 55, goals: 24, assists: 38, points: 62, plusMinus: 16, pim: 28 },
      { season: "2019-20", gamesPlayed: 41, goals: 16, assists: 33, points: 49, plusMinus: 5, pim: 14 },
      { season: "2018-19", gamesPlayed: 82, goals: 35, assists: 59, points: 94, plusMinus: 9, pim: 40 },
      { season: "2017-18", gamesPlayed: 82, goals: 29, assists: 60, points: 89, plusMinus: 5, pim: 46 },
      { season: "2016-17", gamesPlayed: 75, goals: 44, assists: 45, points: 89, plusMinus: 18, pim: 52 },
      { season: "2015-16", gamesPlayed: 80, goals: 36, assists: 49, points: 85, plusMinus: 21, pim: 58 }
    ]
  },
  {
    id: 8477934,
    name: "Leon Draisaitl",
    team: "Edmonton Oilers",
    teamAbbrev: "EDM",
    position: "Center",
    number: 29,
    image: "/images/draisaitl.jpg",
    country: "Germany",
    birthDate: "1995-10-27",
    height: "6'2\"",
    weight: "208 lbs",
    shoots: "Left",
    description: "Elite two-way center and McDavid's dynamic partner. The best German-born player in NHL history, combining size, skill, and hockey IQ.",
    achievements: [
      "2020 Hart Trophy (MVP)",
      "2020 Art Ross Trophy",
      "2020 Ted Lindsay Award",
      "Multiple 50+ goal seasons",
      "Multiple 100+ point seasons"
    ],
    stats: {
      gamesPlayed: 719,
      goals: 368,
      assists: 479,
      points: 847,
      plusMinus: 98,
      pim: 442
    },
    currentSeasonStats: {
      gamesPlayed: 48,
      goals: 27,
      assists: 35,
      points: 62,
      plusMinus: 10,
      pim: 34
    },
    seasonBySeasonStats: [
      { season: "2024-25", gamesPlayed: 48, goals: 27, assists: 35, points: 62, plusMinus: 10, pim: 34 },
      { season: "2023-24", gamesPlayed: 81, goals: 41, assists: 65, points: 106, plusMinus: 10, pim: 56 },
      { season: "2022-23", gamesPlayed: 80, goals: 52, assists: 76, points: 128, plusMinus: 7, pim: 66 },
      { season: "2021-22", gamesPlayed: 80, goals: 55, assists: 55, points: 110, plusMinus: 7, pim: 54 },
      { season: "2020-21", gamesPlayed: 56, goals: 31, assists: 53, points: 84, plusMinus: 21, pim: 20 },
      { season: "2019-20", gamesPlayed: 71, goals: 43, assists: 67, points: 110, plusMinus: 12, pim: 28 },
      { season: "2018-19", gamesPlayed: 82, goals: 50, assists: 55, points: 105, plusMinus: 18, pim: 72 },
      { season: "2017-18", gamesPlayed: 78, goals: 25, assists: 45, points: 70, plusMinus: 10, pim: 36 },
      { season: "2016-17", gamesPlayed: 82, goals: 29, assists: 48, points: 77, plusMinus: 16, pim: 26 },
      { season: "2015-16", gamesPlayed: 82, goals: 29, assists: 22, points: 51, plusMinus: -7, pim: 28 },
      { season: "2014-15", gamesPlayed: 37, goals: 9, assists: 10, points: 19, plusMinus: -4, pim: 22 }
    ]
  }
];

/**
 * Get player by ID
 */
export function getPlayerById(id) {
  return starPlayers.find(player => player.id === id);
}

/**
 * Get all players by team
 */
export function getPlayersByTeam(teamAbbrev) {
  return starPlayers.filter(player => player.teamAbbrev === teamAbbrev);
}
