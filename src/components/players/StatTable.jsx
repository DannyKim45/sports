import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function StatTable({ stats, currentSeasonStats, seasonBySeasonStats }) {
  const [activeTab, setActiveTab] = useState("current");

  return (
    <div className="stat-table">
      <h3 className="stat-table-title">선수 통계</h3>

      {/* Tab Navigation */}
      <div className="stat-tabs">
        <button
          className={`stat-tab ${activeTab === "current" ? "active" : ""}`}
          onClick={() => setActiveTab("current")}
        >
          이번 시즌 (2024-25)
        </button>
        <button
          className={`stat-tab ${activeTab === "career" ? "active" : ""}`}
          onClick={() => setActiveTab("career")}
        >
          커리어 전체
        </button>
      </div>

      {/* Animated Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="stat-table-wrapper"
        >
          <table className="traditional-stat-table">
            <thead>
              <tr>
                {activeTab === "career" && <th>시즌</th>}
                <th>GP</th>
                <th>G</th>
                <th>A</th>
                <th>PTS</th>
                <th>+/-</th>
                <th>PIM</th>
              </tr>
            </thead>
            <tbody>
              {activeTab === "current" ? (
                // Current Season - Single Row
                <tr>
                  <td>{currentSeasonStats.gamesPlayed}</td>
                  <td>{currentSeasonStats.goals}</td>
                  <td>{currentSeasonStats.assists}</td>
                  <td>{currentSeasonStats.points}</td>
                  <td className={currentSeasonStats.plusMinus >= 0 ? 'positive' : 'negative'}>
                    {currentSeasonStats.plusMinus > 0 ? `+${currentSeasonStats.plusMinus}` : currentSeasonStats.plusMinus}
                  </td>
                  <td>{currentSeasonStats.pim}</td>
                </tr>
              ) : (
                // Career - Multiple Rows + Total
                <>
                  {seasonBySeasonStats && seasonBySeasonStats.map((season, index) => (
                    <tr key={index}>
                      <td className="season-label">{season.season}</td>
                      <td>{season.gamesPlayed}</td>
                      <td>{season.goals}</td>
                      <td>{season.assists}</td>
                      <td>{season.points}</td>
                      <td className={season.plusMinus >= 0 ? 'positive' : 'negative'}>
                        {season.plusMinus > 0 ? `+${season.plusMinus}` : season.plusMinus}
                      </td>
                      <td>{season.pim}</td>
                    </tr>
                  ))}
                  {/* Career Total Row */}
                  <tr className="total-row">
                    <td className="season-label"><strong>커리어 합계</strong></td>
                    <td><strong>{stats.gamesPlayed}</strong></td>
                    <td><strong>{stats.goals}</strong></td>
                    <td><strong>{stats.assists}</strong></td>
                    <td><strong>{stats.points}</strong></td>
                    <td className={stats.plusMinus >= 0 ? 'positive' : 'negative'}>
                      <strong>{stats.plusMinus > 0 ? `+${stats.plusMinus}` : stats.plusMinus}</strong>
                    </td>
                    <td><strong>{stats.pim}</strong></td>
                  </tr>
                </>
              )}
            </tbody>
          </table>
        </motion.div>
      </AnimatePresence>

      <div className="stat-legend">
        <div className="legend-item">
          <span className="legend-key">GP</span>
          <span className="legend-label">경기 수</span>
        </div>
        <div className="legend-item">
          <span className="legend-key">G</span>
          <span className="legend-label">골</span>
        </div>
        <div className="legend-item">
          <span className="legend-key">A</span>
          <span className="legend-label">어시스트</span>
        </div>
        <div className="legend-item">
          <span className="legend-key">PTS</span>
          <span className="legend-label">포인트</span>
        </div>
        <div className="legend-item">
          <span className="legend-key">+/-</span>
          <span className="legend-label">플러스/마이너스</span>
        </div>
        <div className="legend-item">
          <span className="legend-key">PIM</span>
          <span className="legend-label">페널티 시간</span>
        </div>
      </div>

      {/* Detailed Stat Explanations */}
      <div className="stat-explanations">
        <div className="stat-explanation-item">
          <h4>📊 PTS (포인트)</h4>
          <p>
            <strong>계산 방식:</strong> G (골) + A (어시스트) = PTS
          </p>
          <p className="explanation-detail">
            선수의 공격 기여도를 나타내는 핵심 지표입니다.
            골 1개와 어시스트 1개는 동일하게 1포인트로 계산됩니다.
            NHL에서는 한 골에 최대 2명까지 어시스트를 기록할 수 있습니다.
          </p>
        </div>
        <div className="stat-explanation-item">
          <h4>⚖️ +/- (플러스/마이너스)</h4>
          <p>
            <strong>계산 방식:</strong> 선수가 빙상에 있을 때 우리 팀 득점 - 상대 팀 득점
          </p>
          <p className="explanation-detail">
            동점 상황 또는 우리 팀이 득점했을 때 빙상에 있으면 +1,
            상대 팀이 득점했을 때 빙상에 있으면 -1이 됩니다.
            파워플레이나 숏핸디드 상황은 제외되며,
            팀의 수비 기여도와 전체적인 경기 영향력을 측정하는 지표입니다.
          </p>
        </div>
      </div>
    </div>
  );
}
