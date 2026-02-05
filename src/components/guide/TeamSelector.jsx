import { motion } from "framer-motion";

export default function TeamSelector({ teams, selectedTeam, onTeamChange }) {
  return (
    <motion.div
      className="team-selector"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <label htmlFor="team-select" className="team-selector-label">
        팀 선택
      </label>
      <select
        id="team-select"
        className="team-select"
        value={selectedTeam || ""}
        onChange={(e) => onTeamChange(e.target.value)}
      >
        <option value="">팀을 선택하세요...</option>
        {teams.map((team) => (
          <option key={team.abbrev} value={team.abbrev}>
            {team.name}
          </option>
        ))}
      </select>
    </motion.div>
  );
}
