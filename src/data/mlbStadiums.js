/**
 * MLB Stadium Information
 */

export const mlbStadiums = [
  {
    id: 1,
    name: "Dodger Stadium",
    team: "Los Angeles Dodgers",
    teamAbbrev: "LAD",
    location: "Los Angeles, CA",
    capacity: 56000,
    opened: 1962,
    surface: "Natural Grass",
    image: "/images/stadiums/dodger-stadium.jpg",
    description: "메이저리그에서 세 번째로 오래된 구장이자 LA의 상징적인 야구장입니다.",
    features: [
      "아름다운 산 전망",
      "유명한 Dodger Dogs",
      "넓은 주차장",
      "역사적인 분위기"
    ],
    seatingGuide: {
      premium: {
        name: "프리미엄 좌석",
        sections: ["Field Box", "Loge Box"],
        price: "$$$$",
        description: "홈플레이트와 가장 가까운 최고급 좌석"
      },
      standard: {
        name: "일반 좌석",
        sections: ["Reserved Level", "Top Deck"],
        price: "$$",
        description: "좋은 시야와 합리적인 가격"
      },
      budget: {
        name: "저렴한 좌석",
        sections: ["Top Deck Reserve"],
        price: "$",
        description: "높은 위치지만 전체적인 경기 관람 가능"
      }
    },
    food: [
      "Dodger Dog (클래식 핫도그)",
      "Elote (멕시칸 스트리트 콘)",
      "Michelada",
      "Nacho Helmet"
    ],
    tips: [
      "경기 시작 1-2시간 전 도착 권장 (주차 혼잡)",
      "일몰 경기는 선글라스 필수",
      "데이 게임은 자외선 차단제 준비",
      "7회말 Take Me Out to the Ball Game 함께 부르기"
    ],
    parkingInfo: "주차 가능, $30-50",
    publicTransport: "Dodger Stadium Express (무료 셔틀) 이용 가능",
    rateYourSeatsUrl: "https://www.rateyourseats.com/tickets/los-angeles-dodgers"
  },
  {
    id: 2,
    name: "Yankee Stadium",
    team: "New York Yankees",
    teamAbbrev: "NYY",
    location: "Bronx, NY",
    capacity: 46537,
    opened: 2009,
    surface: "Natural Grass",
    image: "/images/stadiums/yankee-stadium.jpg",
    description: "야구 역사의 전설이 살아있는 뉴욕 양키스의 홈구장입니다.",
    features: [
      "Monument Park (전설의 선수들 기념)",
      "Great Hall 입구",
      "최첨단 시설",
      "다양한 프리미엄 식당"
    ],
    seatingGuide: {
      premium: {
        name: "프리미엄 좌석",
        sections: ["Legends Suite", "Field Level"],
        price: "$$$$",
        description: "최고의 시야와 프리미엄 서비스"
      },
      standard: {
        name: "일반 좌석",
        sections: ["Main Level", "Terrace Level"],
        price: "$$-$$$",
        description: "좋은 시야의 표준 좌석"
      },
      budget: {
        name: "저렴한 좌석",
        sections: ["Grandstand"],
        price: "$-$$",
        description: "합리적인 가격의 높은 좌석"
      }
    },
    food: [
      "New York Style Hot Dog",
      "Lobel's Steak Sandwich",
      "Garlic Fries",
      "Brother Jimmy's BBQ"
    ],
    tips: [
      "경기 전 Monument Park 방문 추천",
      "지하철 이용이 편리 (4, B, D 라인)",
      "경기 시작 30분 전 입장 마감",
      "Roll Call 전통 체험 (외야석)"
    ],
    parkingInfo: "제한적, 사전 예약 권장",
    publicTransport: "지하철 4, B, D 라인 161st Street-Yankee Stadium역",
    rateYourSeatsUrl: "https://www.rateyourseats.com/tickets/new-york-yankees"
  },
  {
    id: 3,
    name: "Fenway Park",
    team: "Boston Red Sox",
    teamAbbrev: "BOS",
    location: "Boston, MA",
    capacity: 37755,
    opened: 1912,
    surface: "Natural Grass",
    image: "/images/stadiums/fenway-park.jpg",
    description: "MLB에서 가장 오래된 구장이자 보스턴의 자랑입니다.",
    features: [
      "Green Monster (왼쪽 외야 높은 벽)",
      "Pesky's Pole",
      "역사적 분위기",
      "Fenway Frank"
    ],
    seatingGuide: {
      premium: {
        name: "프리미엄 좌석",
        sections: ["Field Box", "Green Monster Seats"],
        price: "$$$$",
        description: "Green Monster 위 좌석은 독특한 경험"
      },
      standard: {
        name: "일반 좌석",
        sections: ["Grandstand", "Right Field Box"],
        price: "$$",
        description: "클래식한 Fenway 경험"
      },
      budget: {
        name: "저렴한 좌석",
        sections: ["Standing Room", "Bleachers"],
        price: "$",
        description: "입석 또는 외야석"
      }
    },
    food: [
      "Fenway Frank",
      "Lobster Roll",
      "Clam Chowder",
      "Samuel Adams Beer"
    ],
    tips: [
      "좁은 좌석이므로 가볍게 짐을 챙기기",
      "역사적인 구장 투어 추천",
      "Sweet Caroline 8회 중간에 함께 부르기",
      "대중교통 이용 권장 (주차 어려움)"
    ],
    parkingInfo: "매우 제한적, 대중교통 권장",
    publicTransport: "Green Line (Kenmore역) 또는 Lansdowne역",
    rateYourSeatsUrl: "https://www.rateyourseats.com/tickets/boston-red-sox"
  },
  {
    id: 4,
    name: "Oracle Park",
    team: "San Francisco Giants",
    teamAbbrev: "SF",
    location: "San Francisco, CA",
    capacity: 41915,
    opened: 2000,
    surface: "Natural Grass",
    image: "/images/stadiums/oracle-park.jpg",
    description: "샌프란시스코 베이가 보이는 아름다운 구장입니다.",
    features: ["McCovey Cove", "바다 전망", "Garlic Fries", "와인 컬렉션"],
    seatingGuide: {
      premium: { name: "프리미엄 좌석", sections: ["Club Level", "Field Club"], price: "$$$$", description: "베이 뷰와 프리미엄 서비스" },
      standard: { name: "일반 좌석", sections: ["View Box", "View Reserved"], price: "$$", description: "좋은 경기 시야" },
      budget: { name: "저렴한 좌석", sections: ["Bleachers"], price: "$", description: "외야석 저렴한 옵션" }
    },
    food: ["Garlic Fries", "Crab Sandwich", "Ghirardelli Sundae", "Craft Beer"],
    tips: ["서늘하므로 재킷 준비", "McCovey Cove 산책 추천", "대중교통 편리"],
    parkingInfo: "제한적, 대중교통 권장",
    publicTransport: "Muni Metro (2nd & King역)",
    rateYourSeatsUrl: "https://www.rateyourseats.com/tickets/san-francisco-giants"
  },
  {
    id: 5,
    name: "Wrigley Field",
    team: "Chicago Cubs",
    teamAbbrev: "CHC",
    location: "Chicago, IL",
    capacity: 41649,
    opened: 1914,
    surface: "Natural Grass",
    image: "/images/stadiums/wrigley-field.jpg",
    description: "MLB에서 두 번째로 오래된 역사적인 구장입니다.",
    features: ["Ivy Walls", "수동 스코어보드", "Rooftop Seats", "7th Inning Stretch"],
    seatingGuide: {
      premium: { name: "프리미엄 좌석", sections: ["Dugout Box", "Field Box"], price: "$$$$", description: "필드에 가장 가까운 좌석" },
      standard: { name: "일반 좌석", sections: ["Terrace Box", "Upper Deck Box"], price: "$$", description: "클래식한 Wrigley 경험" },
      budget: { name: "저렴한 좌석", sections: ["Bleachers"], price: "$-$$", description: "유명한 외야 블리처" }
    },
    food: ["Chicago Style Hot Dog", "Old Style Beer", "Italian Beef", "Deep Dish Pizza"],
    tips: ["Bleacher 문화 체험", "Go Cubs Go 노래 함께 부르기", "대중교통 이용 편리"],
    parkingInfo: "매우 제한적",
    publicTransport: "Red Line (Addison역)",
    rateYourSeatsUrl: "https://www.rateyourseats.com/tickets/chicago-cubs"
  },
  {
    id: 6,
    name: "Angel Stadium",
    team: "Los Angeles Angels",
    teamAbbrev: "LAA",
    location: "Anaheim, CA",
    capacity: 45517,
    opened: 1966,
    surface: "Natural Grass",
    image: "/images/stadiums/angel-stadium.jpg",
    description: "LA 애인절스의 홈구장입니다.",
    features: ["Big A", "Rally Monkey", "Rock Waterfall", "California 분위기"],
    seatingGuide: {
      premium: { name: "프리미엄 좌석", sections: ["Field Box", "Terrace Level"], price: "$$$", description: "필드 가까운 좌석" },
      standard: { name: "일반 좌석", sections: ["View Box"], price: "$$", description: "합리적인 시야" },
      budget: { name: "저렴한 좌석", sections: ["View Level Upper"], price: "$", description: "저렴한 상층부 좌석" }
    },
    food: ["Helmet Nachos", "California Burrito", "Fish Tacos", "Craft Beer"],
    tips: ["주차 편리", "맑은 날씨", "가족 친화적"],
    parkingInfo: "$10-20",
    publicTransport: "Metrolink (Anaheim역)",
    rateYourSeatsUrl: "https://www.rateyourseats.com/tickets/los-angeles-angels"
  },
  {
    id: 7,
    name: "T-Mobile Park",
    team: "Seattle Mariners",
    teamAbbrev: "SEA",
    location: "Seattle, WA",
    capacity: 47929,
    opened: 1999,
    surface: "Natural Grass",
    image: "/images/stadiums/tmobile-park.jpg",
    description: "시애틀 매리너스의 개폐식 지붕 구장입니다.",
    features: ["Retractable Roof", "Garlic Fries", "Sushi", "Pike Place Market 근처"],
    seatingGuide: {
      premium: { name: "프리미엄 좌석", sections: ["Diamond Club", "Field Box"], price: "$$$$", description: "최고급 서비스" },
      standard: { name: "일반 좌석", sections: ["Main Level", "Upper Level"], price: "$$", description: "좋은 시야" },
      budget: { name: "저렴한 좌석", sections: ["Center Field Bleachers"], price: "$", description: "외야 저렴 좌석" }
    },
    food: ["Garlic Fries", "Sushi", "Ichiroll", "Seattle Dogs"],
    tips: ["비 대비 개폐식 지붕", "Pike Place 방문", "대중교통 편리"],
    parkingInfo: "주차 가능",
    publicTransport: "Link Light Rail (Stadium역)",
    rateYourSeatsUrl: "https://www.rateyourseats.com/tickets/seattle-mariners"
  },
  {
    id: 8,
    name: "Citi Field",
    team: "New York Mets",
    teamAbbrev: "NYM",
    location: "Queens, NY",
    capacity: 41922,
    opened: 2009,
    surface: "Natural Grass",
    image: "/images/stadiums/citi-field.jpg",
    description: "뉴욕 메츠의 현대적인 구장입니다.",
    features: ["Jackie Robinson Rotunda", "Shake Shack", "다양한 음식", "현대적 시설"],
    seatingGuide: {
      premium: { name: "프리미엄 좌석", sections: ["Delta Club", "Caesars Club"], price: "$$$$", description: "프리미엄 서비스" },
      standard: { name: "일반 좌석", sections: ["Field Level", "Excelsior Level"], price: "$$-$$$", description: "표준 좌석" },
      budget: { name: "저렴한 좌석", sections: ["Promenade Level"], price: "$-$$", description: "상층부 좌석" }
    },
    food: ["Shake Shack", "Mama's of Corona", "Pastrami Sandwich", "Blue Smoke BBQ"],
    tips: ["지하철 편리", "다양한 음식 옵션", "Jackie Robinson 전시 관람"],
    parkingInfo: "주차 가능, 사전 예약 권장",
    publicTransport: "7 Line (Mets-Willets Point역)",
    rateYourSeatsUrl: "https://www.rateyourseats.com/tickets/new-york-mets"
  },
  {
    id: 9,
    name: "Truist Park",
    team: "Atlanta Braves",
    teamAbbrev: "ATL",
    location: "Atlanta, GA",
    capacity: 41084,
    opened: 2017,
    surface: "Natural Grass",
    image: "/images/stadiums/truist-park.jpg",
    description: "애틀랜타 브레이브스의 신축 구장입니다.",
    features: ["The Battery", "Tomahawk Chop", "현대적 시설", "쇼핑몰 인접"],
    seatingGuide: {
      premium: { name: "프리미엄 좌석", sections: ["Delta Sky360", "Xfinity Rooftop"], price: "$$$$", description: "최상급 경험" },
      standard: { name: "일반 좌석", sections: ["Field Level", "Terrace Level"], price: "$$", description: "좋은 시야" },
      budget: { name: "저렴한 좌석", sections: ["Upper Level"], price: "$", description: "합리적인 가격" }
    },
    food: ["Waffle House", "Chick-fil-A", "Fox Bros BBQ", "H&F Burger"],
    tips: ["The Battery 쇼핑몰 방문", "Tomahawk Chop 응원", "따뜻한 날씨"],
    parkingInfo: "The Battery 주차장 이용",
    publicTransport: "제한적",
    rateYourSeatsUrl: "https://www.rateyourseats.com/tickets/atlanta-braves"
  },
  {
    id: 10,
    name: "Citizens Bank Park",
    team: "Philadelphia Phillies",
    teamAbbrev: "PHI",
    location: "Philadelphia, PA",
    capacity: 42792,
    opened: 2004,
    surface: "Natural Grass",
    image: "/images/stadiums/citizens-bank-park.jpg",
    description: "필라델피아 필리스의 구장입니다.",
    features: ["Liberty Bell", "Ashburn Alley", "Phanatic", "Cheesesteak"],
    seatingGuide: {
      premium: { name: "프리미엄 좌석", sections: ["Diamond Club", "Hall of Fame Club"], price: "$$$$", description: "최고급 좌석" },
      standard: { name: "일반 좌석", sections: ["Field Level", "Terrace Level"], price: "$$", description: "표준 시야" },
      budget: { name: "저렴한 좌석", sections: ["Upper Level"], price: "$", description: "경제적 옵션" }
    },
    food: ["Philly Cheesesteak", "Crab Fries", "Chickie's & Pete's", "Federal Donuts"],
    tips: ["Ashburn Alley 산책", "Phanatic 공연 관람", "Cheesesteak 필수"],
    parkingInfo: "주차장 이용 가능",
    publicTransport: "Broad Street Line (NRG Station)",
    rateYourSeatsUrl: "https://www.rateyourseats.com/tickets/philadelphia-phillies"
  },
  {
    id: 11,
    name: "Petco Park",
    team: "San Diego Padres",
    teamAbbrev: "SD",
    location: "San Diego, CA",
    capacity: 40209,
    opened: 2004,
    surface: "Natural Grass",
    image: "/images/stadiums/petco-park.jpg",
    description: "샌디에고 다운타운의 아름다운 구장입니다.",
    features: ["Park at the Park", "Western Metal Building", "바다 근처", "완벽한 날씨"],
    seatingGuide: {
      premium: { name: "프리미엄 좌석", sections: ["Lexus Premier Club", "Toyota Terrace Club"], price: "$$$$", description: "최고급 경험" },
      standard: { name: "일반 좌석", sections: ["Field", "Terrace"], price: "$$", description: "좋은 시야" },
      budget: { name: "저렴한 좌석", sections: ["Upper View", "Park at the Park"], price: "$", description: "저렴한 옵션" }
    },
    food: ["Fish Tacos", "California Burrito", "Hodad's Burger", "Craft Beer"],
    tips: ["날씨 완벽", "Gaslamp Quarter 방문", "Park at the Park 무료 입장 구역"],
    parkingInfo: "다운타운 주차장 이용",
    publicTransport: "San Diego Trolley",
    rateYourSeatsUrl: "https://www.rateyourseats.com/tickets/san-diego-padres"
  },
  {
    id: 12,
    name: "Nationals Park",
    team: "Washington Nationals",
    teamAbbrev: "WSH",
    location: "Washington, D.C.",
    capacity: 41339,
    opened: 2008,
    surface: "Natural Grass",
    image: "/images/stadiums/nationals-park.jpg",
    description: "워싱턴 D.C.의 구장입니다.",
    features: ["Racing Presidents", "Capitol View", "Navy Yard", "Ben's Chili Bowl"],
    seatingGuide: {
      premium: { name: "프리미엄 좌석", sections: ["Diamond Club", "Infield Club"], price: "$$$$", description: "프리미엄 서비스" },
      standard: { name: "일반 좌석", sections: ["Field Infield", "Gallery"], price: "$$", description: "표준 좌석" },
      budget: { name: "저렴한 좌석", sections: ["Upper Gallery"], price: "$", description: "상층부 저렴" }
    },
    food: ["Ben's Chili Bowl Half-Smoke", "Shake Shack", "District Taco", "Blue Jacket Brewery"],
    tips: ["Metro 편리", "Racing Presidents 관람", "Navy Yard 산책"],
    parkingInfo: "제한적, 대중교통 권장",
    publicTransport: "Green Line (Navy Yard역)",
    rateYourSeatsUrl: "https://www.rateyourseats.com/tickets/washington-nationals"
  },
  {
    id: 13,
    name: "Chase Field",
    team: "Arizona Diamondbacks",
    teamAbbrev: "ARI",
    location: "Phoenix, AZ",
    capacity: 48686,
    opened: 1998,
    surface: "Natural Grass",
    image: "/images/stadiums/chase-field.jpg",
    description: "피닉스의 개폐식 지붕 구장입니다.",
    features: ["Retractable Roof", "Pool Suite", "Air Conditioning", "사막 테마"],
    seatingGuide: {
      premium: { name: "프리미엄 좌석", sections: ["Dugout Club", "Pool Suite"], price: "$$$$", description: "수영장 스위트 독특" },
      standard: { name: "일반 좌석", sections: ["Lower Level", "Upper Level"], price: "$$", description: "에어컨 시원" },
      budget: { name: "저렴한 좌석", sections: ["Upper Reserved"], price: "$", description: "경제적 선택" }
    },
    food: ["Sonoran Hot Dog", "Nachos", "Churro Dog", "Mexican Food"],
    tips: ["여름 에어컨 필수", "Pool Suite 독특 경험", "사막 더위 피하기"],
    parkingInfo: "주차 가능",
    publicTransport: "Light Rail",
    rateYourSeatsUrl: "https://www.rateyourseats.com/tickets/arizona-diamondbacks"
  },
  {
    id: 14,
    name: "Coors Field",
    team: "Colorado Rockies",
    teamAbbrev: "COL",
    location: "Denver, CO",
    capacity: 50144,
    opened: 1995,
    surface: "Natural Grass",
    image: "/images/stadiums/coors-field.jpg",
    description: "고지대에 위치한 콜로라도 록키스의 구장입니다.",
    features: ["Rocky Mountains View", "High Altitude", "Purple Row", "Rooftop"],
    seatingGuide: {
      premium: { name: "프리미엄 좌석", sections: ["Club Level", "Rooftop"], price: "$$$", description: "산 전망 좋음" },
      standard: { name: "일반 좌석", sections: ["Infield Box", "Upper Reserved"], price: "$$", description: "고지대 야구" },
      budget: { name: "저렴한 좌석", sections: ["Rockpile"], price: "$", description: "Rockpile 유명" }
    },
    food: ["Rocky Mountain Oysters", "Biker Jim's Hot Dogs", "Helton Burger", "Colorado Beer"],
    tips: ["고지대 공기 얇음", "산 전망 감상", "Rockpile 저렴"],
    parkingInfo: "다운타운 주차장",
    publicTransport: "Light Rail",
    rateYourSeatsUrl: "https://www.rateyourseats.com/tickets/colorado-rockies"
  },
  {
    id: 15,
    name: "Globe Life Field",
    team: "Texas Rangers",
    teamAbbrev: "TEX",
    location: "Arlington, TX",
    capacity: 40300,
    opened: 2020,
    surface: "Artificial Turf",
    image: "/images/stadiums/globe-life-field.jpg",
    description: "텍사스 레인저스의 신축 실내 구장입니다.",
    features: ["Retractable Roof", "Air Conditioning", "Texas BBQ", "최신 시설"],
    seatingGuide: {
      premium: { name: "프리미엄 좌석", sections: ["Field Club", "Lexus Club"], price: "$$$$", description: "최상급 시설" },
      standard: { name: "일반 좌석", sections: ["Main Level", "Home Run Porch"], price: "$$", description: "에어컨 시원" },
      budget: { name: "저렴한 좌석", sections: ["Upper Level"], price: "$", description: "합리적 가격" }
    },
    food: ["BBQ Brisket", "Tex-Mex", "Chicken Fried Steak", "Shiner Bock"],
    tips: ["여름 에어컨 필수", "BBQ 맛집", "신규 구장"],
    parkingInfo: "주차장 넓음",
    publicTransport: "제한적",
    rateYourSeatsUrl: "https://www.rateyourseats.com/tickets/texas-rangers"
  },
  {
    id: 16,
    name: "Minute Maid Park",
    team: "Houston Astros",
    teamAbbrev: "HOU",
    location: "Houston, TX",
    capacity: 41168,
    opened: 2000,
    surface: "Natural Grass",
    image: "/images/stadiums/minute-maid-park.jpg",
    description: "휴스턴 애스트로스의 개폐식 지붕 구장입니다.",
    features: ["Retractable Roof", "Train", "Crawford Boxes", "Texas BBQ"],
    seatingGuide: {
      premium: { name: "프리미엄 좌석", sections: ["Dugout Club", "Crawford Boxes"], price: "$$$$", description: "홈런존 가까움" },
      standard: { name: "일반 좌석", sections: ["Field Box", "Loge Box"], price: "$$", description: "좋은 시야" },
      budget: { name: "저렴한 좌석", sections: ["Upper Deck"], price: "$", description: "경제적 선택" }
    },
    food: ["BBQ", "Tex-Mex", "Torchy's Tacos", "Saint Arnold Beer"],
    tips: ["기차 운행 관람", "Crawford Boxes 홈런", "에어컨 시원"],
    parkingInfo: "다운타운 주차",
    publicTransport: "METRORail",
    rateYourSeatsUrl: "https://www.rateyourseats.com/tickets/houston-astros"
  },
  {
    id: 17,
    name: "Busch Stadium",
    team: "St. Louis Cardinals",
    teamAbbrev: "STL",
    location: "St. Louis, MO",
    capacity: 45494,
    opened: 2006,
    surface: "Natural Grass",
    image: "/images/stadiums/busch-stadium.jpg",
    description: "세인트루이스 카디널스의 구장입니다.",
    features: ["Gateway Arch View", "Cardinals Nation", "Ballpark Village", "역사와 전통"],
    seatingGuide: {
      premium: { name: "프리미엄 좌석", sections: ["Diamond Club", "Redbird Club"], price: "$$$$", description: "최고급 좌석" },
      standard: { name: "일반 좌석", sections: ["Infield Box", "Terrace Box"], price: "$$", description: "좋은 시야" },
      budget: { name: "저렴한 좌석", sections: ["Upper Deck"], price: "$", description: "합리적 가격" }
    },
    food: ["St. Louis Style Pizza", "Toasted Ravioli", "Gooey Butter Cake", "Budweiser"],
    tips: ["Gateway Arch 전망", "Ballpark Village 방문", "Cardinals 전통"],
    parkingInfo: "다운타운 주차",
    publicTransport: "MetroLink",
    rateYourSeatsUrl: "https://www.rateyourseats.com/tickets/st-louis-cardinals"
  },
  {
    id: 18,
    name: "Great American Ball Park",
    team: "Cincinnati Reds",
    teamAbbrev: "CIN",
    location: "Cincinnati, OH",
    capacity: 42319,
    opened: 2003,
    surface: "Natural Grass",
    image: "/images/stadiums/great-american-ball-park.jpg",
    description: "신시내티 레즈의 구장입니다.",
    features: ["Ohio River View", "Smokestacks", "Reds Hall of Fame", "Riverfront"],
    seatingGuide: {
      premium: { name: "프리미엄 좌석", sections: ["Diamond Seats", "Club Home Plate"], price: "$$$", description: "프리미엄 경험" },
      standard: { name: "일반 좌석", sections: ["Field Box", "View Level"], price: "$$", description: "표준 시야" },
      budget: { name: "저렴한 좌석", sections: ["Upper View"], price: "$", description: "저렴한 옵션" }
    },
    food: ["Skyline Chili", "Cheese Coneys", "Goetta", "Christian Moerlein Beer"],
    tips: ["Ohio River 산책", "Reds Museum 방문", "Skyline Chili 필수"],
    parkingInfo: "Riverfront 주차",
    publicTransport: "제한적",
    rateYourSeatsUrl: "https://www.rateyourseats.com/tickets/cincinnati-reds"
  },
  {
    id: 19,
    name: "PNC Park",
    team: "Pittsburgh Pirates",
    teamAbbrev: "PIT",
    location: "Pittsburgh, PA",
    capacity: 38747,
    opened: 2001,
    surface: "Natural Grass",
    image: "/images/stadiums/pnc-park.jpg",
    description: "피츠버그 파이어리츠의 아름다운 구장입니다.",
    features: ["Roberto Clemente Bridge", "Allegheny River", "Pittsburgh Skyline", "Pierogi Race"],
    seatingGuide: {
      premium: { name: "프리미엄 좌석", sections: ["PBC Level", "Lexus Club"], price: "$$$", description: "스카이라인 뷰" },
      standard: { name: "일반 좌석", sections: ["Infield Box", "Outfield Box"], price: "$$", description: "좋은 전망" },
      budget: { name: "저렴한 좌석", sections: ["Upper Reserved"], price: "$", description: "합리적 가격" }
    },
    food: ["Primanti Bros Sandwich", "Pierogies", "IC Light Beer", "Italian Sausage"],
    tips: ["Clemente Bridge 산책", "스카이라인 감상", "Pierogi Race 관람"],
    parkingInfo: "제한적",
    publicTransport: "시내버스",
    rateYourSeatsUrl: "https://www.rateyourseats.com/tickets/pittsburgh-pirates"
  },
  {
    id: 20,
    name: "American Family Field",
    team: "Milwaukee Brewers",
    teamAbbrev: "MIL",
    location: "Milwaukee, WI",
    capacity: 41900,
    opened: 2001,
    surface: "Natural Grass",
    image: "/images/stadiums/american-family-field.jpg",
    description: "밀워키 브루어스의 개폐식 지붕 구장입니다.",
    features: ["Retractable Roof", "Bernie's Slide", "Sausage Race", "Beer City"],
    seatingGuide: {
      premium: { name: "프리미엄 좌석", sections: ["Dugout Box", "Terrace Club"], price: "$$$", description: "프리미엄 서비스" },
      standard: { name: "일반 좌석", sections: ["Field Infield", "Loge"], price: "$$", description: "표준 좌석" },
      budget: { name: "저렴한 좌석", sections: ["Upper Deck"], price: "$", description: "경제적 선택" }
    },
    food: ["Bratwurst", "Cheese Curds", "Polish Sausage", "Wisconsin Beer"],
    tips: ["Sausage Race 관람", "Bernie's Slide", "Tailgating 문화"],
    parkingInfo: "주차장 넓음",
    publicTransport: "제한적",
    rateYourSeatsUrl: "https://www.rateyourseats.com/tickets/milwaukee-brewers"
  },
  {
    id: 21,
    name: "Comerica Park",
    team: "Detroit Tigers",
    teamAbbrev: "DET",
    location: "Detroit, MI",
    capacity: 41083,
    opened: 2000,
    surface: "Natural Grass",
    image: "/images/stadiums/comerica-park.jpg",
    description: "디트로이트 타이거스의 구장입니다.",
    features: ["Tiger Statues", "Carousel", "Ferris Wheel", "Fountain"],
    seatingGuide: {
      premium: { name: "프리미엄 좌석", sections: ["Comerica Club", "Tiger Den"], price: "$$$", description: "프리미엄 경험" },
      standard: { name: "일반 좌석", sections: ["Lower Box", "Upper Box"], price: "$$", description: "표준 시야" },
      budget: { name: "저렴한 좌석", sections: ["Upper Reserved"], price: "$", description: "합리적 가격" }
    },
    food: ["Detroit Style Pizza", "Coney Dog", "Little Caesars", "Michigan Beer"],
    tips: ["호랑이 조각상", "Carousel 탑승", "Detroit 피자"],
    parkingInfo: "다운타운 주차",
    publicTransport: "QLine",
    rateYourSeatsUrl: "https://www.rateyourseats.com/tickets/detroit-tigers"
  },
  {
    id: 22,
    name: "Progressive Field",
    team: "Cleveland Guardians",
    teamAbbrev: "CLE",
    location: "Cleveland, OH",
    capacity: 34788,
    opened: 1994,
    surface: "Natural Grass",
    image: "/images/stadiums/progressive-field.jpg",
    description: "클리블랜드 가디언스의 구장입니다.",
    features: ["Drum", "Corner Bar", "Kids Clubhouse", "Heritage Park"],
    seatingGuide: {
      premium: { name: "프리미엄 좌석", sections: ["Club Seats", "Terrace Club"], price: "$$$", description: "프리미엄 서비스" },
      standard: { name: "일반 좌석", sections: ["Field Box", "Mezzanine"], price: "$$", description: "좋은 시야" },
      budget: { name: "저렴한 좌석", sections: ["Upper Box"], price: "$", description: "저렴한 옵션" }
    },
    food: ["Polish Boy", "Stadium Mustard", "Bertman Ballpark Mustard", "Great Lakes Brewing"],
    tips: ["드럼 응원", "Heritage Park 방문", "Cleveland 음식"],
    parkingInfo: "다운타운 주차",
    publicTransport: "RTA",
    rateYourSeatsUrl: "https://www.rateyourseats.com/tickets/cleveland-guardians"
  },
  {
    id: 23,
    name: "Guaranteed Rate Field",
    team: "Chicago White Sox",
    teamAbbrev: "CWS",
    location: "Chicago, IL",
    capacity: 40615,
    opened: 1991,
    surface: "Natural Grass",
    image: "/images/stadiums/guaranteed-rate-field.jpg",
    description: "시카고 화이트삭스의 구장입니다.",
    features: ["Exploding Scoreboard", "South Side", "Craft Kave", "Chicago Style"],
    seatingGuide: {
      premium: { name: "프리미엄 좌석", sections: ["Scout Seats", "Goose Island"], price: "$$$", description: "프리미엄 경험" },
      standard: { name: "일반 좌석", sections: ["Lower Box", "Upper Box"], price: "$$", description: "표준 좌석" },
      budget: { name: "저렴한 좌석", sections: ["Upper Deck"], price: "$", description: "합리적 가격" }
    },
    food: ["Chicago Style Hot Dog", "Italian Beef", "Elote", "Craft Beer"],
    tips: ["Exploding Scoreboard", "South Side 분위기", "Chicago 음식"],
    parkingInfo: "주차 가능",
    publicTransport: "Red Line (Sox-35th)",
    rateYourSeatsUrl: "https://www.rateyourseats.com/tickets/chicago-white-sox"
  },
  {
    id: 24,
    name: "Target Field",
    team: "Minnesota Twins",
    teamAbbrev: "MIN",
    location: "Minneapolis, MN",
    capacity: 38544,
    opened: 2010,
    surface: "Natural Grass",
    image: "/images/stadiums/target-field.jpg",
    description: "미네소타 트윈스의 야외 구장입니다.",
    features: ["Skyline View", "Town Ball Tavern", "Minnesota Culture", "Open Air"],
    seatingGuide: {
      premium: { name: "프리미엄 좌석", sections: ["Delta Sky360", "Legends Club"], price: "$$$$", description: "최고급 경험" },
      standard: { name: "일반 좌석", sections: ["Field Box", "Home Run Porch"], price: "$$", description: "좋은 시야" },
      budget: { name: "저렴한 좌석", sections: ["Upper Deck"], price: "$", description: "경제적 선택" }
    },
    food: ["Juicy Lucy", "Kramarczuk's Sausage", "Walleye Sandwich", "Surly Beer"],
    tips: ["야외 구장 날씨 체크", "Minneapolis 스카이라인", "Minnesota 음식"],
    parkingInfo: "다운타운 주차",
    publicTransport: "Light Rail",
    rateYourSeatsUrl: "https://www.rateyourseats.com/tickets/minnesota-twins"
  },
  {
    id: 25,
    name: "Kauffman Stadium",
    team: "Kansas City Royals",
    teamAbbrev: "KC",
    location: "Kansas City, MO",
    capacity: 37903,
    opened: 1973,
    surface: "Natural Grass",
    image: "/images/stadiums/kauffman-stadium.jpg",
    description: "캔자스시티 로열스의 구장입니다.",
    features: ["Fountain", "Royals Hall of Fame", "Crown Vision", "BBQ"],
    seatingGuide: {
      premium: { name: "프리미엄 좌석", sections: ["Diamond Club", "Crown Club"], price: "$$$", description: "프리미엄 서비스" },
      standard: { name: "일반 좌석", sections: ["Field Box", "View Box"], price: "$$", description: "표준 시야" },
      budget: { name: "저렴한 좌석", sections: ["Upper View"], price: "$", description: "합리적 가격" }
    },
    food: ["KC BBQ", "Burnt Ends", "Boulevard Beer", "Gates BBQ"],
    tips: ["분수쇼 관람", "KC BBQ 필수", "넓은 주차장"],
    parkingInfo: "주차장 넓음",
    publicTransport: "제한적",
    rateYourSeatsUrl: "https://www.rateyourseats.com/tickets/kansas-city-royals"
  },
  {
    id: 26,
    name: "Oakland Coliseum",
    team: "Oakland Athletics",
    teamAbbrev: "OAK",
    location: "Oakland, CA",
    capacity: 46847,
    opened: 1966,
    surface: "Natural Grass",
    image: "/images/stadiums/oakland-coliseum.jpg",
    description: "오클랜드 애슬레틱스의 구장입니다.",
    features: ["Mt. Davis", "BART Access", "Affordable Tickets", "Oakland Pride"],
    seatingGuide: {
      premium: { name: "프리미엄 좌석", sections: ["Club Level"], price: "$$", description: "합리적 프리미엄" },
      standard: { name: "일반 좌석", sections: ["Plaza Level", "View Level"], price: "$", description: "저렴한 가격" },
      budget: { name: "저렴한 좌석", sections: ["Upper Reserved"], price: "$", description: "매우 저렴" }
    },
    food: ["Cha Cha Bowl", "Championship Chowder", "Oakland Style BBQ", "Craft Beer"],
    tips: ["BART 편리", "저렴한 티켓", "Oakland 분위기"],
    parkingInfo: "주차 가능",
    publicTransport: "BART (Coliseum역)",
    rateYourSeatsUrl: "https://www.rateyourseats.com/tickets/oakland-athletics"
  },
  {
    id: 27,
    name: "Tropicana Field",
    team: "Tampa Bay Rays",
    teamAbbrev: "TB",
    location: "St. Petersburg, FL",
    capacity: 25000,
    opened: 1990,
    surface: "Artificial Turf",
    image: "/images/stadiums/tropicana-field.jpg",
    description: "탬파베이 레이스의 실내 구장입니다.",
    features: ["Dome", "Rays Tank", "Catwalks", "Air Conditioning"],
    seatingGuide: {
      premium: { name: "프리미엄 좌석", sections: ["Home Plate Club", "Lower Box"], price: "$$", description: "실내 쾌적" },
      standard: { name: "일반 좌석", sections: ["Outfield Box", "Upper Box"], price: "$", description: "저렴한 가격" },
      budget: { name: "저렴한 좌석", sections: ["Upper Reserved"], price: "$", description: "매우 저렴" }
    },
    food: ["Cuban Sandwich", "Grouper Sandwich", "Ybor Gold Beer", "Florida Seafood"],
    tips: ["에어컨 시원", "Rays Tank 방문", "저렴한 티켓"],
    parkingInfo: "주차 가능",
    publicTransport: "제한적",
    rateYourSeatsUrl: "https://www.rateyourseats.com/tickets/tampa-bay-rays"
  },
  {
    id: 28,
    name: "Rogers Centre",
    team: "Toronto Blue Jays",
    teamAbbrev: "TOR",
    location: "Toronto, ON",
    capacity: 49282,
    opened: 1989,
    surface: "Artificial Turf",
    image: "/images/stadiums/rogers-centre.jpg",
    description: "토론토 블루제이스의 개폐식 지붕 구장입니다.",
    features: ["Retractable Roof", "CN Tower View", "Hotel Rooms", "Canada"],
    seatingGuide: {
      premium: { name: "프리미엄 좌석", sections: ["WestJet Flight Deck", "Rogers Club"], price: "$$$", description: "최고급 경험" },
      standard: { name: "일반 좌석", sections: ["100 Level", "200 Level"], price: "$$", description: "좋은 시야" },
      budget: { name: "저렴한 좌석", sections: ["500 Level"], price: "$", description: "합리적 가격" }
    },
    food: ["Poutine", "Peameal Bacon Sandwich", "Canadian Beer", "Tim Hortons"],
    tips: ["CN Tower 근처", "개폐식 지붕", "캐나다 음식"],
    parkingInfo: "다운타운 주차",
    publicTransport: "TTC Subway (Union역)",
    rateYourSeatsUrl: "https://www.rateyourseats.com/tickets/toronto-blue-jays"
  },
  {
    id: 29,
    name: "Oriole Park at Camden Yards",
    team: "Baltimore Orioles",
    teamAbbrev: "BAL",
    location: "Baltimore, MD",
    capacity: 45971,
    opened: 1992,
    surface: "Natural Grass",
    image: "/images/stadiums/oriole-park.jpg",
    description: "볼티모어 오리올스의 역사적인 구장입니다.",
    features: ["Warehouse", "Eutaw Street", "Retro Design", "Inner Harbor"],
    seatingGuide: {
      premium: { name: "프리미엄 좌석", sections: ["Club Boxes", "Field Box"], price: "$$$", description: "프리미엄 경험" },
      standard: { name: "일반 좌석", sections: ["Lower Box", "Upper Box"], price: "$$", description: "좋은 시야" },
      budget: { name: "저렴한 좌석", sections: ["Upper Reserved"], price: "$", description: "합리적 가격" }
    },
    food: ["Crab Cakes", "Boog's BBQ", "Natty Boh Beer", "Maryland Crab"],
    tips: ["Eutaw Street 산책", "Warehouse 감상", "Crab Cakes 필수"],
    parkingInfo: "다운타운 주차",
    publicTransport: "Light Rail",
    rateYourSeatsUrl: "https://www.rateyourseats.com/tickets/baltimore-orioles"
  },
  {
    id: 30,
    name: "loanDepot park",
    team: "Miami Marlins",
    teamAbbrev: "MIA",
    location: "Miami, FL",
    capacity: 36742,
    opened: 2012,
    surface: "Natural Grass",
    image: "/images/stadiums/loandepot-park.jpg",
    description: "마이애미 말린스의 개폐식 지붕 구장입니다.",
    features: ["Retractable Roof", "Home Run Sculpture", "Bobblehead Museum", "Little Havana"],
    seatingGuide: {
      premium: { name: "프리미엄 좌석", sections: ["Club Seats", "Home Plate Club"], price: "$$$", description: "프리미엄 경험" },
      standard: { name: "일반 좌석", sections: ["Field Level", "Mezzanine"], price: "$$", description: "에어컨 쾌적" },
      budget: { name: "저렴한 좌석", sections: ["Upper Deck"], price: "$", description: "합리적 가격" }
    },
    food: ["Cuban Sandwich", "Empanadas", "Croquetas", "Cafecito"],
    tips: ["에어컨 필수", "Cuban 음식", "Bobblehead Museum"],
    parkingInfo: "주차 가능",
    publicTransport: "Metrorail (Little Havana역)",
    rateYourSeatsUrl: "https://www.rateyourseats.com/tickets/miami-marlins"
  }
];

/**
 * Get stadium by team abbreviation
 */
export function getMLBStadiumByTeam(teamAbbrev) {
  return mlbStadiums.find(stadium => stadium.teamAbbrev === teamAbbrev);
}

/**
 * Get all stadiums
 */
export function getAllMLBStadiums() {
  return mlbStadiums;
}
