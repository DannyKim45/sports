import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function MLBStatTable({ stats, currentSeasonStats, seasonBySeasonStats, position }) {
  const [activeTab, setActiveTab] = useState("current");

  // 투수인지 타자인지 확인
  const isPitcher = position && (position.includes("Pitcher") || position === "P");

  // 타자 통계 렌더링 (시즌별)
  const renderBatterStats = (seasonData, isCareer = false) => (
    <table className="traditional-stat-table">
      <thead>
        <tr>
          {isCareer && <th>시즌</th>}
          <th>AVG</th>
          <th>HR</th>
          <th>RBI</th>
          <th>SB</th>
          <th>H</th>
          <th>2B</th>
          <th>3B</th>
        </tr>
      </thead>
      <tbody>
        {isCareer ? (
          // 시즌별 + 합계
          <>
            {seasonBySeasonStats && seasonBySeasonStats.map((season, index) => (
              <tr key={index}>
                <td className="season-label">{season.season}</td>
                <td>{season.battingAvg?.toFixed(3) || '.000'}</td>
                <td>{season.homeRuns || 0}</td>
                <td>{season.rbi || 0}</td>
                <td>{season.stolenBases || 0}</td>
                <td>{season.hits || 0}</td>
                <td>{season.doubles || 0}</td>
                <td>{season.triples || 0}</td>
              </tr>
            ))}
            {/* 통산 합계 */}
            <tr className="total-row">
              <td className="season-label"><strong>통산 합계</strong></td>
              <td><strong>{stats.battingAvg?.toFixed(3) || '.000'}</strong></td>
              <td><strong>{stats.homeRuns || 0}</strong></td>
              <td><strong>{stats.rbi || 0}</strong></td>
              <td><strong>{stats.stolenBases || 0}</strong></td>
              <td><strong>{stats.hits || 0}</strong></td>
              <td><strong>{stats.doubles || 0}</strong></td>
              <td><strong>{stats.triples || 0}</strong></td>
            </tr>
          </>
        ) : (
          // 이번 시즌만
          <tr>
            <td><strong>{seasonData.battingAvg?.toFixed(3) || '.000'}</strong></td>
            <td><strong>{seasonData.homeRuns || 0}</strong></td>
            <td><strong>{seasonData.rbi || 0}</strong></td>
            <td><strong>{seasonData.stolenBases || 0}</strong></td>
            <td><strong>{seasonData.hits || 0}</strong></td>
            <td><strong>{seasonData.doubles || 0}</strong></td>
            <td><strong>{seasonData.triples || 0}</strong></td>
          </tr>
        )}
      </tbody>
    </table>
  );

  // 투수 통계 렌더링 (시즌별)
  const renderPitcherStats = (seasonData, isCareer = false) => (
    <table className="traditional-stat-table">
      <thead>
        <tr>
          {isCareer && <th>시즌</th>}
          <th>ERA</th>
          <th>W</th>
          <th>L</th>
          <th>SV</th>
          <th>IP</th>
          <th>SO</th>
          <th>WHIP</th>
        </tr>
      </thead>
      <tbody>
        {isCareer ? (
          // 시즌별 + 합계
          <>
            {seasonBySeasonStats && seasonBySeasonStats.map((season, index) => (
              <tr key={index}>
                <td className="season-label">{season.season}</td>
                <td>{season.era?.toFixed(2) || '0.00'}</td>
                <td>{season.wins || 0}</td>
                <td>{season.losses || 0}</td>
                <td>{season.saves || 0}</td>
                <td>{season.inningsPitched || 0}</td>
                <td>{season.strikeouts || 0}</td>
                <td>{season.whip?.toFixed(2) || '0.00'}</td>
              </tr>
            ))}
            {/* 통산 합계 */}
            <tr className="total-row">
              <td className="season-label"><strong>통산 합계</strong></td>
              <td><strong>{stats.era?.toFixed(2) || '0.00'}</strong></td>
              <td><strong>{stats.wins || 0}</strong></td>
              <td><strong>{stats.losses || 0}</strong></td>
              <td><strong>{stats.saves || 0}</strong></td>
              <td><strong>{stats.inningsPitched || 0}</strong></td>
              <td><strong>{stats.strikeouts || 0}</strong></td>
              <td><strong>{stats.whip?.toFixed(2) || '0.00'}</strong></td>
            </tr>
          </>
        ) : (
          // 이번 시즌만
          <tr>
            <td><strong>{seasonData.era?.toFixed(2) || '0.00'}</strong></td>
            <td><strong>{seasonData.wins || 0}</strong></td>
            <td><strong>{seasonData.losses || 0}</strong></td>
            <td><strong>{seasonData.saves || 0}</strong></td>
            <td><strong>{seasonData.inningsPitched || 0}</strong></td>
            <td><strong>{seasonData.strikeouts || 0}</strong></td>
            <td><strong>{seasonData.whip?.toFixed(2) || '0.00'}</strong></td>
          </tr>
        )}
      </tbody>
    </table>
  );

  // 이도류 선수 통계 렌더링
  const renderTwoWayStats = (seasonData, isCareer = false) => (
    <>
      <h4 className="stat-section-title">⚾ 타격 기록</h4>
      {renderBatterStats(seasonData, isCareer)}

      <h4 className="stat-section-title pitcher-section">⚡ 투구 기록</h4>
      {renderPitcherStats(seasonData, isCareer)}
    </>
  );

  return (
    <div className="stat-table">
      <h3 className="stat-table-title">선수 통계</h3>

      {/* Tab Navigation */}
      <div className="stat-tabs">
        <button
          className={`stat-tab ${activeTab === "current" ? "active" : ""}`}
          onClick={() => setActiveTab("current")}
        >
          이번 시즌 (2026)
        </button>
        <button
          className={`stat-tab ${activeTab === "career" ? "active" : ""}`}
          onClick={() => setActiveTab("career")}
        >
          시즌별 기록
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
          {activeTab === "current" ? (
            // 이번 시즌 통계
            currentSeasonStats ? (
              position === "DH / Pitcher" ? (
                renderTwoWayStats(currentSeasonStats, false)
              ) : isPitcher ? (
                renderPitcherStats(currentSeasonStats, false)
              ) : (
                renderBatterStats(currentSeasonStats, false)
              )
            ) : (
              <div className="no-stats">이번 시즌 통계가 없습니다.</div>
            )
          ) : (
            // 통산 기록
            stats ? (
              position === "DH / Pitcher" ? (
                renderTwoWayStats(stats, true)
              ) : isPitcher ? (
                renderPitcherStats(stats, true)
              ) : (
                renderBatterStats(stats, true)
              )
            ) : (
              <div className="no-stats">통산 기록이 없습니다.</div>
            )
          )}
        </motion.div>
      </AnimatePresence>

      {/* Legend */}
      <div className="stat-legend">
        {!isPitcher || position === "DH / Pitcher" ? (
          <>
            <div className="legend-item">
              <span className="legend-key">AVG</span>
              <span className="legend-label">타율</span>
            </div>
            <div className="legend-item">
              <span className="legend-key">HR</span>
              <span className="legend-label">홈런</span>
            </div>
            <div className="legend-item">
              <span className="legend-key">RBI</span>
              <span className="legend-label">타점</span>
            </div>
            <div className="legend-item">
              <span className="legend-key">SB</span>
              <span className="legend-label">도루</span>
            </div>
            <div className="legend-item">
              <span className="legend-key">H</span>
              <span className="legend-label">안타</span>
            </div>
            <div className="legend-item">
              <span className="legend-key">2B</span>
              <span className="legend-label">2루타</span>
            </div>
            <div className="legend-item">
              <span className="legend-key">3B</span>
              <span className="legend-label">3루타</span>
            </div>
          </>
        ) : null}

        {isPitcher || position === "DH / Pitcher" ? (
          <>
            <div className="legend-item">
              <span className="legend-key">ERA</span>
              <span className="legend-label">평균자책점</span>
            </div>
            <div className="legend-item">
              <span className="legend-key">W</span>
              <span className="legend-label">승</span>
            </div>
            <div className="legend-item">
              <span className="legend-key">L</span>
              <span className="legend-label">패</span>
            </div>
            <div className="legend-item">
              <span className="legend-key">SV</span>
              <span className="legend-label">세이브</span>
            </div>
            <div className="legend-item">
              <span className="legend-key">IP</span>
              <span className="legend-label">이닝</span>
            </div>
            <div className="legend-item">
              <span className="legend-key">SO</span>
              <span className="legend-label">탈삼진</span>
            </div>
            <div className="legend-item">
              <span className="legend-key">WHIP</span>
              <span className="legend-label">출루허용률</span>
            </div>
          </>
        ) : null}
      </div>

      {/* Detailed Stat Explanations */}
      <div className="stat-explanations">
        {!isPitcher || position === "DH / Pitcher" ? (
          <>
            <div className="stat-explanation-item">
              <h4>⚾ AVG (타율)</h4>
              <p>
                <strong>계산 방식:</strong> 안타(H) ÷ 타수(AB)
              </p>
              <p className="explanation-detail">
                타자의 안타 생산 능력을 나타냅니다.
                .300 이상이면 우수한 타자, .250~.299는 평균, .250 미만은 부진으로 평가됩니다.
              </p>
            </div>
            <div className="stat-explanation-item">
              <h4>💪 RBI (타점)</h4>
              <p>
                <strong>의미:</strong> Runs Batted In (타점)
              </p>
              <p className="explanation-detail">
                타자의 타격으로 주자를 홈으로 불러들인 횟수입니다.
                클러치 능력과 득점 기여도를 보여주는 중요한 지표입니다.
              </p>
            </div>
          </>
        ) : null}

        {isPitcher || position === "DH / Pitcher" ? (
          <>
            <div className="stat-explanation-item">
              <h4>📊 ERA (평균자책점)</h4>
              <p>
                <strong>계산 방식:</strong> (자책점 × 9) ÷ 이닝
              </p>
              <p className="explanation-detail">
                투수가 9이닝당 내준 평균 자책점을 나타냅니다.
                3.00 미만이면 우수, 3.00~4.00은 평균, 4.00 이상은 부진으로 평가됩니다.
              </p>
            </div>
            <div className="stat-explanation-item">
              <h4>⚖️ WHIP (출루허용률)</h4>
              <p>
                <strong>계산 방식:</strong> (피안타 + 볼넷) ÷ 이닝
              </p>
              <p className="explanation-detail">
                이닝당 허용한 주자 수를 나타냅니다.
                1.00 미만이면 최고 수준, 1.00~1.30은 우수, 1.30 이상은 평범으로 평가됩니다.
              </p>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}
