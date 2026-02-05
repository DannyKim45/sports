/**
 * NHL Stadium Information
 * Arena details, capacity, and seating info
 */

export const stadiums = {
  EDM: {
    name: "Rogers Place",
    city: "Edmonton, AB",
    capacity: 18347,
    opened: 2016,
    address: "10220 104 Ave NW, Edmonton, AB T5J 0H6",
    sections: {
      lower: { rows: 20, price: "$150-300" },
      club: { rows: 8, price: "$250-450" },
      upper: { rows: 22, price: "$75-150" }
    },
    parkingInfo: "Multiple parkades available, $20-35 per game",
    publicTransit: "LRT stops directly at arena entrance",
    rateYourSeatsUrl: "https://www.rateyourseats.com/tickets/edmonton-oilers"
  },
  TOR: {
    name: "Scotiabank Arena",
    city: "Toronto, ON",
    capacity: 18800,
    opened: 1999,
    address: "40 Bay St, Toronto, ON M5J 2X2",
    sections: {
      lower: { rows: 22, price: "$200-500" },
      club: { rows: 10, price: "$350-750" },
      upper: { rows: 26, price: "$100-250" }
    },
    parkingInfo: "Downtown parking available, $30-50 per game",
    publicTransit: "Union Station TTC - 5 minute walk",
    rateYourSeatsUrl: "https://www.rateyourseats.com/tickets/toronto-maple-leafs"
  },
  COL: {
    name: "Ball Arena",
    city: "Denver, CO",
    capacity: 18007,
    opened: 1999,
    address: "1000 Chopper Cir, Denver, CO 80204",
    sections: {
      lower: { rows: 20, price: "$140-280" },
      club: { rows: 8, price: "$220-400" },
      upper: { rows: 24, price: "$65-140" }
    },
    parkingInfo: "On-site parking lots, $25-40 per game",
    publicTransit: "RTD Light Rail - short walk from stations",
    rateYourSeatsUrl: "https://www.rateyourseats.com/tickets/colorado-avalanche",
    seatingMapImage: "https://www.ballarena.com/media/hyghgjil/h-ba-master-map-c_2025.png"
  },
  WSH: {
    name: "Capital One Arena",
    city: "Washington, DC",
    capacity: 18573,
    opened: 1997,
    address: "601 F St NW, Washington, DC 20004",
    sections: {
      lower: { rows: 21, price: "$160-320" },
      club: { rows: 9, price: "$280-500" },
      upper: { rows: 25, price: "$80-160" }
    },
    parkingInfo: "Downtown DC parking, $30-45 per game",
    publicTransit: "Gallery Place Metro station - directly connected",
    rateYourSeatsUrl: "https://www.rateyourseats.com/tickets/washington-capitals"
  },
  PIT: {
    name: "PPG Paints Arena",
    city: "Pittsburgh, PA",
    capacity: 18387,
    opened: 2010,
    address: "1001 5th Ave, Pittsburgh, PA 15219",
    sections: {
      lower: { rows: 20, price: "$145-290" },
      club: { rows: 8, price: "$240-420" },
      upper: { rows: 23, price: "$70-145" }
    },
    parkingInfo: "Multiple lots nearby, $20-35 per game",
    publicTransit: "Multiple bus lines, T station at Steel Plaza",
    rateYourSeatsUrl: "https://www.rateyourseats.com/tickets/pittsburgh-penguins"
  },
  BOS: {
    name: "TD Garden",
    city: "Boston, MA",
    capacity: 17565,
    opened: 1995,
    address: "100 Legends Way, Boston, MA 02114",
    sections: {
      lower: { rows: 18, price: "$180-350" },
      club: { rows: 8, price: "$300-550" },
      upper: { rows: 24, price: "$90-180" }
    },
    parkingInfo: "Limited parking, $40-60 per game",
    publicTransit: "North Station T stop - inside building",
    rateYourSeatsUrl: "https://www.rateyourseats.com/tickets/boston-bruins"
  },
  NYR: {
    name: "Madison Square Garden",
    city: "New York, NY",
    capacity: 18006,
    opened: 1968,
    address: "4 Pennsylvania Plaza, New York, NY 10001",
    sections: {
      lower: { rows: 20, price: "$220-500" },
      club: { rows: 10, price: "$400-800" },
      upper: { rows: 25, price: "$120-250" }
    },
    parkingInfo: "Very limited, use public transit recommended",
    publicTransit: "Penn Station - directly below arena",
    rateYourSeatsUrl: "https://www.rateyourseats.com/tickets/new-york-rangers"
  },
  BUF: {
    name: "KeyBank Center",
    city: "Buffalo, NY",
    capacity: 19070,
    opened: 1996,
    address: "1 Seymour H Knox III Plaza, Buffalo, NY 14203",
    sections: {
      lower: { rows: 20, price: "$100-250" },
      club: { rows: 8, price: "$180-350" },
      upper: { rows: 24, price: "$50-100" }
    },
    parkingInfo: "Multiple lots available, $15-30 per game",
    publicTransit: "Metro Rail - Marine Midland station nearby",
    rateYourSeatsUrl: "https://www.rateyourseats.com/tickets/buffalo-sabres"
  },
  DET: {
    name: "Little Caesars Arena",
    city: "Detroit, MI",
    capacity: 19515,
    opened: 2017,
    address: "2645 Woodward Ave, Detroit, MI 48201",
    sections: {
      lower: { rows: 21, price: "$120-280" },
      club: { rows: 9, price: "$200-400" },
      upper: { rows: 23, price: "$60-130" }
    },
    parkingInfo: "Parking structures nearby, $20-40 per game",
    publicTransit: "QLine streetcar stops at arena",
    rateYourSeatsUrl: "https://www.rateyourseats.com/tickets/detroit-red-wings"
  },
  FLA: {
    name: "Amerant Bank Arena",
    city: "Sunrise, FL",
    capacity: 19250,
    opened: 1998,
    address: "1 Panther Pkwy, Sunrise, FL 33323",
    sections: {
      lower: { rows: 20, price: "$110-260" },
      club: { rows: 8, price: "$190-380" },
      upper: { rows: 22, price: "$55-120" }
    },
    parkingInfo: "Arena parking lots, $20-30 per game",
    publicTransit: "Limited public transit, driving recommended",
    rateYourSeatsUrl: "https://www.rateyourseats.com/tickets/florida-panthers"
  },
  MTL: {
    name: "Bell Centre",
    city: "Montreal, QC",
    capacity: 21302,
    opened: 1996,
    address: "1909 Avenue des Canadiens-de-Montréal, Montreal, QC H3B 5E8",
    sections: {
      lower: { rows: 22, price: "$150-350" },
      club: { rows: 10, price: "$280-550" },
      upper: { rows: 25, price: "$80-170" }
    },
    parkingInfo: "Downtown parking, $25-45 per game",
    publicTransit: "Metro Bonaventure and Lucien-L'Allier stations",
    rateYourSeatsUrl: "https://www.rateyourseats.com/tickets/montreal-canadiens"
  },
  OTT: {
    name: "Canadian Tire Centre",
    city: "Ottawa, ON",
    capacity: 18652,
    opened: 1996,
    address: "1000 Palladium Dr, Ottawa, ON K2V 1A5",
    sections: {
      lower: { rows: 20, price: "$100-240" },
      club: { rows: 8, price: "$170-340" },
      upper: { rows: 22, price: "$50-110" }
    },
    parkingInfo: "Free parking at arena",
    publicTransit: "OC Transpo buses on game days",
    rateYourSeatsUrl: "https://www.rateyourseats.com/tickets/ottawa-senators"
  },
  TBL: {
    name: "Amalie Arena",
    city: "Tampa, FL",
    capacity: 19092,
    opened: 1996,
    address: "401 Channelside Dr, Tampa, FL 33602",
    sections: {
      lower: { rows: 21, price: "$130-290" },
      club: { rows: 9, price: "$220-420" },
      upper: { rows: 23, price: "$65-140" }
    },
    parkingInfo: "Multiple lots nearby, $25-40 per game",
    publicTransit: "TECO Line Streetcar nearby",
    rateYourSeatsUrl: "https://www.rateyourseats.com/tickets/tampa-bay-lightning"
  },
  CAR: {
    name: "PNC Arena",
    city: "Raleigh, NC",
    capacity: 18680,
    opened: 1999,
    address: "1400 Edwards Mill Rd, Raleigh, NC 27607",
    sections: {
      lower: { rows: 20, price: "$110-260" },
      club: { rows: 8, price: "$190-370" },
      upper: { rows: 22, price: "$55-120" }
    },
    parkingInfo: "Arena parking lots, $15-30 per game",
    publicTransit: "Limited public transit",
    rateYourSeatsUrl: "https://www.rateyourseats.com/tickets/carolina-hurricanes"
  },
  CBJ: {
    name: "Nationwide Arena",
    city: "Columbus, OH",
    capacity: 18500,
    opened: 2000,
    address: "200 W Nationwide Blvd, Columbus, OH 43215",
    sections: {
      lower: { rows: 20, price: "$100-230" },
      club: { rows: 8, price: "$170-330" },
      upper: { rows: 22, price: "$50-105" }
    },
    parkingInfo: "Arena District parking, $15-30 per game",
    publicTransit: "COTA bus service",
    rateYourSeatsUrl: "https://www.rateyourseats.com/tickets/columbus-blue-jackets"
  },
  NJD: {
    name: "Prudential Center",
    city: "Newark, NJ",
    capacity: 16514,
    opened: 2007,
    address: "25 Lafayette St, Newark, NJ 07102",
    sections: {
      lower: { rows: 20, price: "$120-270" },
      club: { rows: 8, price: "$200-390" },
      upper: { rows: 22, price: "$60-130" }
    },
    parkingInfo: "Multiple lots nearby, $25-40 per game",
    publicTransit: "Newark Penn Station - short walk",
    rateYourSeatsUrl: "https://www.rateyourseats.com/tickets/new-jersey-devils"
  },
  NYI: {
    name: "UBS Arena",
    city: "Elmont, NY",
    capacity: 17250,
    opened: 2021,
    address: "2400 Hempstead Tpke, Elmont, NY 11003",
    sections: {
      lower: { rows: 20, price: "$140-300" },
      club: { rows: 9, price: "$230-450" },
      upper: { rows: 22, price: "$70-150" }
    },
    parkingInfo: "Arena parking lots, $30-50 per game",
    publicTransit: "LIRR - Elmont-UBS Arena station",
    rateYourSeatsUrl: "https://www.rateyourseats.com/tickets/new-york-islanders"
  },
  PHI: {
    name: "Wells Fargo Center",
    city: "Philadelphia, PA",
    capacity: 19537,
    opened: 1996,
    address: "3601 S Broad St, Philadelphia, PA 19148",
    sections: {
      lower: { rows: 21, price: "$130-280" },
      club: { rows: 9, price: "$210-410" },
      upper: { rows: 23, price: "$60-135" }
    },
    parkingInfo: "Sports Complex parking, $20-35 per game",
    publicTransit: "SEPTA Broad Street Line - NRG station",
    rateYourSeatsUrl: "https://www.rateyourseats.com/tickets/philadelphia-flyers"
  },
  CHI: {
    name: "United Center",
    city: "Chicago, IL",
    capacity: 19717,
    opened: 1994,
    address: "1901 W Madison St, Chicago, IL 60612",
    sections: {
      lower: { rows: 21, price: "$140-300" },
      club: { rows: 9, price: "$230-450" },
      upper: { rows: 24, price: "$65-145" }
    },
    parkingInfo: "Multiple lots nearby, $25-45 per game",
    publicTransit: "CTA buses, short walk from Blue Line",
    rateYourSeatsUrl: "https://www.rateyourseats.com/tickets/chicago-blackhawks"
  },
  DAL: {
    name: "American Airlines Center",
    city: "Dallas, TX",
    capacity: 18532,
    opened: 2001,
    address: "2500 Victory Ave, Dallas, TX 75219",
    sections: {
      lower: { rows: 20, price: "$120-270" },
      club: { rows: 8, price: "$200-390" },
      upper: { rows: 22, price: "$55-125" }
    },
    parkingInfo: "Victory Park parking, $20-40 per game",
    publicTransit: "DART Rail - Victory station",
    rateYourSeatsUrl: "https://www.rateyourseats.com/tickets/dallas-stars"
  },
  MIN: {
    name: "Xcel Energy Center",
    city: "St. Paul, MN",
    capacity: 17954,
    opened: 2000,
    address: "199 W Kellogg Blvd, St Paul, MN 55102",
    sections: {
      lower: { rows: 20, price: "$110-250" },
      club: { rows: 8, price: "$180-360" },
      upper: { rows: 22, price: "$55-115" }
    },
    parkingInfo: "Multiple ramps nearby, $15-30 per game",
    publicTransit: "Metro Green Line - Union Depot",
    rateYourSeatsUrl: "https://www.rateyourseats.com/tickets/minnesota-wild"
  },
  NSH: {
    name: "Bridgestone Arena",
    city: "Nashville, TN",
    capacity: 17159,
    opened: 1996,
    address: "501 Broadway, Nashville, TN 37203",
    sections: {
      lower: { rows: 19, price: "$115-260" },
      club: { rows: 8, price: "$190-370" },
      upper: { rows: 21, price: "$55-120" }
    },
    parkingInfo: "Downtown parking, $20-35 per game",
    publicTransit: "WeGo buses serve downtown",
    rateYourSeatsUrl: "https://www.rateyourseats.com/tickets/nashville-predators",
    seatingMapImage: "https://www.bridgestonearena.com/assets/img/ADAseating_v2-5f332e4c40.jpg"
  },
  STL: {
    name: "Enterprise Center",
    city: "St. Louis, MO",
    capacity: 18096,
    opened: 1994,
    address: "1401 Clark Ave, St Louis, MO 63103",
    sections: {
      lower: { rows: 20, price: "$100-240" },
      club: { rows: 8, price: "$170-340" },
      upper: { rows: 22, price: "$50-110" }
    },
    parkingInfo: "Downtown lots, $15-30 per game",
    publicTransit: "MetroLink - Civic Center station",
    rateYourSeatsUrl: "https://www.rateyourseats.com/tickets/st-louis-blues"
  },
  WPG: {
    name: "Canada Life Centre",
    city: "Winnipeg, MB",
    capacity: 15321,
    opened: 2004,
    address: "345 Portage Ave, Winnipeg, MB R3B 2C5",
    sections: {
      lower: { rows: 18, price: "$110-250" },
      club: { rows: 7, price: "$180-350" },
      upper: { rows: 20, price: "$55-115" }
    },
    parkingInfo: "Downtown parking, $15-30 per game",
    publicTransit: "Winnipeg Transit buses",
    rateYourSeatsUrl: "https://www.rateyourseats.com/tickets/winnipeg-jets"
  },
  ARI: {
    name: "Mullett Arena",
    city: "Tempe, AZ",
    capacity: 5000,
    opened: 2022,
    address: "600 E Veterans Way, Tempe, AZ 85281",
    sections: {
      lower: { rows: 15, price: "$150-400" },
      club: { rows: 5, price: "$250-500" },
      upper: { rows: 10, price: "$80-180" }
    },
    parkingInfo: "ASU parking lots, $20-30 per game",
    publicTransit: "Valley Metro Light Rail nearby",
    rateYourSeatsUrl: "https://www.rateyourseats.com/tickets/arizona-coyotes"
  },
  ANA: {
    name: "Honda Center",
    city: "Anaheim, CA",
    capacity: 17174,
    opened: 1993,
    address: "2695 E Katella Ave, Anaheim, CA 92806",
    sections: {
      lower: { rows: 19, price: "$110-260" },
      club: { rows: 8, price: "$190-370" },
      upper: { rows: 21, price: "$55-120" }
    },
    parkingInfo: "On-site parking lots, $25-40 per game",
    publicTransit: "Anaheim Regional Transit (ART)",
    rateYourSeatsUrl: "https://www.rateyourseats.com/tickets/anaheim-ducks"
  },
  CGY: {
    name: "Scotiabank Saddledome",
    city: "Calgary, AB",
    capacity: 19289,
    opened: 1983,
    address: "555 Saddledome Rise SE, Calgary, AB T2G 2W1",
    sections: {
      lower: { rows: 20, price: "$120-270" },
      club: { rows: 8, price: "$200-390" },
      upper: { rows: 22, price: "$60-130" }
    },
    parkingInfo: "Stampede Park parking, $20-35 per game",
    publicTransit: "CTrain - Victoria Park/Stampede station",
    rateYourSeatsUrl: "https://www.rateyourseats.com/tickets/calgary-flames"
  },
  LAK: {
    name: "Crypto.com Arena",
    city: "Los Angeles, CA",
    capacity: 18230,
    opened: 1999,
    address: "1111 S Figueroa St, Los Angeles, CA 90015",
    sections: {
      lower: { rows: 20, price: "$140-300" },
      club: { rows: 9, price: "$230-450" },
      upper: { rows: 23, price: "$70-150" }
    },
    parkingInfo: "Multiple lots nearby, $30-50 per game",
    publicTransit: "LA Metro - Pico station",
    rateYourSeatsUrl: "https://www.rateyourseats.com/tickets/los-angeles-kings"
  },
  SJS: {
    name: "SAP Center",
    city: "San Jose, CA",
    capacity: 17562,
    opened: 1993,
    address: "525 W Santa Clara St, San Jose, CA 95113",
    sections: {
      lower: { rows: 19, price: "$115-260" },
      club: { rows: 8, price: "$190-370" },
      upper: { rows: 21, price: "$55-120" }
    },
    parkingInfo: "Multiple lots nearby, $25-40 per game",
    publicTransit: "VTA Light Rail - SAP Center station",
    rateYourSeatsUrl: "https://www.rateyourseats.com/tickets/san-jose-sharks"
  },
  SEA: {
    name: "Climate Pledge Arena",
    city: "Seattle, WA",
    capacity: 17151,
    opened: 2021,
    address: "334 1st Ave N, Seattle, WA 98109",
    sections: {
      lower: { rows: 19, price: "$140-300" },
      club: { rows: 8, price: "$230-450" },
      upper: { rows: 21, price: "$70-150" }
    },
    parkingInfo: "Limited parking, public transit recommended",
    publicTransit: "Seattle Monorail - Seattle Center station",
    rateYourSeatsUrl: "https://www.rateyourseats.com/tickets/seattle-kraken"
  },
  VAN: {
    name: "Rogers Arena",
    city: "Vancouver, BC",
    capacity: 18910,
    opened: 1995,
    address: "800 Griffiths Way, Vancouver, BC V6B 6G1",
    sections: {
      lower: { rows: 20, price: "$130-290" },
      club: { rows: 9, price: "$220-420" },
      upper: { rows: 23, price: "$65-140" }
    },
    parkingInfo: "Downtown parking, $25-45 per game",
    publicTransit: "SkyTrain - Stadium-Chinatown station",
    rateYourSeatsUrl: "https://www.rateyourseats.com/tickets/vancouver-canucks"
  },
  VGK: {
    name: "T-Mobile Arena",
    city: "Las Vegas, NV",
    capacity: 17500,
    opened: 2016,
    address: "3780 S Las Vegas Blvd, Las Vegas, NV 89158",
    sections: {
      lower: { rows: 19, price: "$150-320" },
      club: { rows: 9, price: "$240-470" },
      upper: { rows: 21, price: "$75-160" }
    },
    parkingInfo: "Strip parking garages, $20-40 per game",
    publicTransit: "The Deuce and SDX bus routes on The Strip",
    rateYourSeatsUrl: "https://www.rateyourseats.com/tickets/vegas-golden-knights"
  }
};

/**
 * NHL Teams List - All 32 Teams
 */
export const nhlTeams = [
  // Atlantic Division
  { abbrev: "BOS", name: "Boston Bruins", division: "Atlantic" },
  { abbrev: "BUF", name: "Buffalo Sabres", division: "Atlantic" },
  { abbrev: "DET", name: "Detroit Red Wings", division: "Atlantic" },
  { abbrev: "FLA", name: "Florida Panthers", division: "Atlantic" },
  { abbrev: "MTL", name: "Montreal Canadiens", division: "Atlantic" },
  { abbrev: "OTT", name: "Ottawa Senators", division: "Atlantic" },
  { abbrev: "TBL", name: "Tampa Bay Lightning", division: "Atlantic" },
  { abbrev: "TOR", name: "Toronto Maple Leafs", division: "Atlantic" },

  // Metropolitan Division
  { abbrev: "CAR", name: "Carolina Hurricanes", division: "Metropolitan" },
  { abbrev: "CBJ", name: "Columbus Blue Jackets", division: "Metropolitan" },
  { abbrev: "NJD", name: "New Jersey Devils", division: "Metropolitan" },
  { abbrev: "NYI", name: "New York Islanders", division: "Metropolitan" },
  { abbrev: "NYR", name: "New York Rangers", division: "Metropolitan" },
  { abbrev: "PHI", name: "Philadelphia Flyers", division: "Metropolitan" },
  { abbrev: "PIT", name: "Pittsburgh Penguins", division: "Metropolitan" },
  { abbrev: "WSH", name: "Washington Capitals", division: "Metropolitan" },

  // Central Division
  { abbrev: "ARI", name: "Arizona Coyotes", division: "Central" },
  { abbrev: "CHI", name: "Chicago Blackhawks", division: "Central" },
  { abbrev: "COL", name: "Colorado Avalanche", division: "Central" },
  { abbrev: "DAL", name: "Dallas Stars", division: "Central" },
  { abbrev: "MIN", name: "Minnesota Wild", division: "Central" },
  { abbrev: "NSH", name: "Nashville Predators", division: "Central" },
  { abbrev: "STL", name: "St. Louis Blues", division: "Central" },
  { abbrev: "WPG", name: "Winnipeg Jets", division: "Central" },

  // Pacific Division
  { abbrev: "ANA", name: "Anaheim Ducks", division: "Pacific" },
  { abbrev: "CGY", name: "Calgary Flames", division: "Pacific" },
  { abbrev: "EDM", name: "Edmonton Oilers", division: "Pacific" },
  { abbrev: "LAK", name: "Los Angeles Kings", division: "Pacific" },
  { abbrev: "SJS", name: "San Jose Sharks", division: "Pacific" },
  { abbrev: "SEA", name: "Seattle Kraken", division: "Pacific" },
  { abbrev: "VAN", name: "Vancouver Canucks", division: "Pacific" },
  { abbrev: "VGK", name: "Vegas Golden Knights", division: "Pacific" }
];

/**
 * Get stadium by team
 */
export function getStadiumByTeam(teamAbbrev) {
  return stadiums[teamAbbrev];
}
