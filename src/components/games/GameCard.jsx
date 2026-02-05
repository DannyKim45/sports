import { motion } from "framer-motion";
import { getGameStatus } from "../../services/nhlApi";

export default function GameCard({ game, index }) {
  const isLive = game.gameState === "LIVE";
  const isFinal = game.gameState === "FINAL" || game.gameState === "OFF";
  const isFuture = game.gameState === "FUT";

  return (
    <motion.div
      className="game-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      {/* Live indicator */}
      {isLive && (
        <div className="live-indicator">
          <span className="live-dot"></span>
          생중계
        </div>
      )}

      {/* Game status */}
      <div className={`game-status ${isLive ? "live" : ""}`}>
        {getGameStatus(game)}
      </div>

      {/* Teams */}
      <div className="game-teams">
        {/* Away Team */}
        <div className="team away">
          <div className="team-info">
            {game.awayTeam.logo && (
              <img
                src={game.awayTeam.logo}
                alt={game.awayTeam.abbrev}
                className="team-logo"
              />
            )}
            <div className="team-details">
              <div className="team-name">{game.awayTeam.name}</div>
              <div className="team-record">{game.awayTeam.record}</div>
            </div>
          </div>
          <div className={`team-score ${!isFuture ? "show" : ""}`}>
            {!isFuture ? game.awayTeam.score : ""}
          </div>
        </div>

        {/* Home Team */}
        <div className="team home">
          <div className="team-info">
            {game.homeTeam.logo && (
              <img
                src={game.homeTeam.logo}
                alt={game.homeTeam.abbrev}
                className="team-logo"
              />
            )}
            <div className="team-details">
              <div className="team-name">{game.homeTeam.name}</div>
              <div className="team-record">{game.homeTeam.record}</div>
            </div>
          </div>
          <div className={`team-score ${!isFuture ? "show" : ""}`}>
            {!isFuture ? game.homeTeam.score : ""}
          </div>
        </div>
      </div>

      {/* Venue */}
      {game.venue && (
        <div className="game-venue">{game.venue}</div>
      )}

      {/* TV Broadcasts */}
      {game.tvBroadcasts && game.tvBroadcasts.length > 0 && (
        <div className="game-broadcasts">
          {game.tvBroadcasts.map((broadcast, i) => (
            <span key={i} className="broadcast-network">
              {broadcast.network}
            </span>
          ))}
        </div>
      )}

      {/* Highlight Button */}
      {(isFinal || isLive) && (
        <div className="game-actions">
          <a
            href={`https://www.nhl.com/gamecenter/${game.id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="highlight-button"
          >
            <span className="button-icon">▶</span>
            {isFinal ? "하이라이트 보기" : "생중계 보기"}
          </a>
        </div>
      )}
    </motion.div>
  );
}
