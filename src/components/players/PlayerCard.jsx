import { motion } from "framer-motion";

export default function PlayerCard({ player, onClick }) {
  return (
    <motion.div
      className="player-card"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      onClick={() => onClick(player)}
    >
      <div className="player-card-image">
        <img src={player.image} alt={player.name} />
        <div className="player-card-overlay">
          <span className="player-number">#{player.number}</span>
        </div>
      </div>

      <div className="player-card-info">
        <h3 className="player-name">{player.name}</h3>
        <p className="player-team">{player.team}</p>
        <div className="player-position">
          <span>{player.position}</span>
          <span className="divider">•</span>
          <span>{player.country}</span>
        </div>
      </div>
    </motion.div>
  );
}
