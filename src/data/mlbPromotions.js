/**
 * MLB Team Promotional Pages
 * Links to official team promotion schedules
 */

export const mlbPromotions = {
  LAD: {
    url: "https://www.mlb.com/dodgers/tickets/promotions",
    teamName: "Los Angeles Dodgers"
  },
  NYY: {
    url: "https://www.mlb.com/yankees/tickets/specials",
    teamName: "New York Yankees"
  },
  BOS: {
    url: "https://www.mlb.com/redsox/tickets/promotions",
    teamName: "Boston Red Sox"
  },
  SF: {
    url: "https://www.mlb.com/giants/tickets/promotions",
    teamName: "San Francisco Giants"
  },
  CHC: {
    url: "https://www.mlb.com/cubs/tickets/theme-games",
    teamName: "Chicago Cubs"
  },
  LAA: {
    url: "https://www.mlb.com/angels/tickets/promotions",
    teamName: "Los Angeles Angels"
  },
  SEA: {
    url: "https://www.mlb.com/mariners/tickets/theme-games",
    teamName: "Seattle Mariners"
  },
  NYM: {
    url: "https://www.mlb.com/mets/tickets/promotions",
    teamName: "New York Mets"
  },
  ATL: {
    url: "https://www.mlb.com/braves/tickets/promotions",
    teamName: "Atlanta Braves"
  },
  PHI: {
    url: "https://www.mlb.com/phillies/tickets/promotions",
    teamName: "Philadelphia Phillies"
  },
  SD: {
    url: "https://www.mlb.com/padres/tickets/promotions",
    teamName: "San Diego Padres"
  },
  WSH: {
    url: "https://www.mlb.com/nationals/tickets/promotions",
    teamName: "Washington Nationals"
  },
  ARI: {
    url: "https://www.mlb.com/dbacks/tickets/promotions",
    teamName: "Arizona Diamondbacks"
  },
  COL: {
    url: "https://www.mlb.com/rockies/tickets/promotions",
    teamName: "Colorado Rockies"
  },
  TEX: {
    url: "https://www.mlb.com/rangers/tickets/promotions",
    teamName: "Texas Rangers"
  },
  HOU: {
    url: "https://www.mlb.com/astros/tickets/promotions",
    teamName: "Houston Astros"
  },
  STL: {
    url: "https://www.mlb.com/cardinals/tickets/promotions",
    teamName: "St. Louis Cardinals"
  },
  CIN: {
    url: "https://www.mlb.com/reds/tickets/promotions",
    teamName: "Cincinnati Reds"
  },
  PIT: {
    url: "https://www.mlb.com/pirates/tickets/promotions",
    teamName: "Pittsburgh Pirates"
  },
  MIL: {
    url: "https://www.mlb.com/brewers/tickets/promotions",
    teamName: "Milwaukee Brewers"
  },
  DET: {
    url: "https://www.mlb.com/tigers/tickets/promotions",
    teamName: "Detroit Tigers"
  },
  CLE: {
    url: "https://www.mlb.com/guardians/tickets/promotions",
    teamName: "Cleveland Guardians"
  },
  CWS: {
    url: "https://www.mlb.com/whitesox/tickets/promotions",
    teamName: "Chicago White Sox"
  },
  MIN: {
    url: "https://www.mlb.com/twins/tickets/promotions",
    teamName: "Minnesota Twins"
  },
  KC: {
    url: "https://www.mlb.com/royals/tickets/promotions",
    teamName: "Kansas City Royals"
  },
  OAK: {
    url: "https://www.mlb.com/athletics/tickets/promotions",
    teamName: "Oakland Athletics"
  },
  TB: {
    url: "https://www.mlb.com/rays/tickets/promotions",
    teamName: "Tampa Bay Rays"
  },
  TOR: {
    url: "https://www.mlb.com/bluejays/tickets/promotions",
    teamName: "Toronto Blue Jays"
  },
  BAL: {
    url: "https://www.mlb.com/orioles/tickets/promotions",
    teamName: "Baltimore Orioles"
  },
  MIA: {
    url: "https://www.mlb.com/marlins/tickets/promotions",
    teamName: "Miami Marlins"
  }
};

/**
 * Get promotion info by team
 */
export function getMLBPromotionsByTeam(teamAbbrev) {
  return mlbPromotions[teamAbbrev] || null;
}
