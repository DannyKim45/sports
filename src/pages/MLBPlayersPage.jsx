import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { mlbStarPlayers } from "../data/mlbPlayers";

export default function MLBPlayersPage() {
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [activeTab, setActiveTab] = useState('stats');

  useEffect(() => {
    document.title = "MLB 스타 선수 | Sports Athletes";
  }, []);

  const handlePlayerClick = (player) => {
    setSelectedPlayer(player);
    setActiveTab('stats');
  };

  const handleCloseModal = () => {
    setSelectedPlayer(null);
  };

  return (
    <div className="page-container players-page">
      {/* Header */}
      <motion.div
        className="page-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div>
          <h1>MLB 스타 선수</h1>
          <p className="page-subtitle">
            메이저리그 최고의 선수들을 만나보세요
          </p>
        </div>
      </motion.div>

      {/* Players Grid */}
      <div className="players-grid">
        {mlbStarPlayers.map((player, index) => (
          <motion.div
            key={player.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <div className="player-card" onClick={() => handlePlayerClick(player)}>
              <div className="player-card-image">
                <img src={player.image} alt={player.name} />
                <div className="player-card-overlay">
                  <div className="player-number">#{player.number}</div>
                </div>
              </div>
              <div className="player-card-info">
                <h3 className="player-name">{player.nameKo || player.name}</h3>
                <p className="player-team">{player.team}</p>
                <p className="player-position">
                  {player.position}
                  <span className="divider">•</span>
                  {player.country}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Player Detail Modal */}
      <AnimatePresence>
        {selectedPlayer && (
          <>
            {/* Backdrop */}
            <motion.div
              className="modal-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseModal}
            />

            {/* Modal Content */}
            <motion.div
              className="player-modal"
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }}
              transition={{ duration: 0.3 }}
            >
              <button className="modal-close" onClick={handleCloseModal}>
                ×
              </button>

              <div className="player-modal-content">
                {/* Player Header */}
                <div className="player-header">
                  <div className="player-image-large">
                    <img src={selectedPlayer.image} alt={selectedPlayer.name} />
                    <div className="player-number-large">
                      #{selectedPlayer.number}
                    </div>
                  </div>

                  <div className="player-info-main">
                    <h2 className="player-name-large">{selectedPlayer.nameKo || selectedPlayer.name}</h2>
                    <div className="player-team-info">
                      <span className="team-name">{selectedPlayer.team}</span>
                      <span className="position-badge">{selectedPlayer.position}</span>
                    </div>

                    <div className="player-details-grid">
                      <div className="detail-item">
                        <span className="detail-label">생년월일</span>
                        <span className="detail-value">
                          {new Date(selectedPlayer.birthDate).toLocaleDateString('ko-KR', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </span>
                      </div>
                      <div className="detail-item">
                        <span className="detail-label">국적</span>
                        <span className="detail-value">{selectedPlayer.country}</span>
                      </div>
                      <div className="detail-item">
                        <span className="detail-label">신장</span>
                        <span className="detail-value">{selectedPlayer.height}</span>
                      </div>
                      <div className="detail-item">
                        <span className="detail-label">체중</span>
                        <span className="detail-value">{selectedPlayer.weight}</span>
                      </div>
                      <div className="detail-item">
                        <span className="detail-label">타석</span>
                        <span className="detail-value">{selectedPlayer.bats}</span>
                      </div>
                      <div className="detail-item">
                        <span className="detail-label">투구</span>
                        <span className="detail-value">{selectedPlayer.throws}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="player-description">
                  <p>{selectedPlayer.description}</p>
                </div>

                {/* Tab Navigation */}
                <div className="player-tabs">
                  <button
                    className={`player-tab ${activeTab === 'stats' ? 'active' : ''}`}
                    onClick={() => setActiveTab('stats')}
                  >
                    📊 통계 & 업적
                  </button>
                  {selectedPlayer.highlights && selectedPlayer.highlights.length > 0 && (
                    <button
                      className={`player-tab ${activeTab === 'highlights' ? 'active' : ''}`}
                      onClick={() => setActiveTab('highlights')}
                    >
                      🎥 하이라이트
                    </button>
                  )}
                  {selectedPlayer.personalStories && selectedPlayer.personalStories.length > 0 && (
                    <button
                      className={`player-tab ${activeTab === 'stories' ? 'active' : ''}`}
                      onClick={() => setActiveTab('stories')}
                    >
                      📖 개인사
                    </button>
                  )}
                </div>

                {/* Tab Content */}
                <div className="player-tab-content">
                  {/* Stats & Achievements Tab */}
                  {activeTab === 'stats' && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="mlb-stats-display">
                        <h3>주요 통산 기록</h3>
                        <div className="stats-grid">
                          <div className="stat-item">
                            <span className="stat-label">타율</span>
                            <span className="stat-value">{selectedPlayer.stats.battingAvg?.toFixed(3) || 'N/A'}</span>
                          </div>
                          <div className="stat-item">
                            <span className="stat-label">홈런</span>
                            <span className="stat-value">{selectedPlayer.stats.homeRuns || 'N/A'}</span>
                          </div>
                          <div className="stat-item">
                            <span className="stat-label">타점</span>
                            <span className="stat-value">{selectedPlayer.stats.rbi || 'N/A'}</span>
                          </div>
                          <div className="stat-item">
                            <span className="stat-label">도루</span>
                            <span className="stat-value">{selectedPlayer.stats.stolenBases || 'N/A'}</span>
                          </div>
                          {selectedPlayer.stats.era && (
                            <>
                              <div className="stat-item">
                                <span className="stat-label">평균자책점</span>
                                <span className="stat-value">{selectedPlayer.stats.era.toFixed(2)}</span>
                              </div>
                              <div className="stat-item">
                                <span className="stat-label">탈삼진</span>
                                <span className="stat-value">{selectedPlayer.stats.strikeouts}</span>
                              </div>
                            </>
                          )}
                        </div>
                      </div>

                      <div className="player-achievements">
                        <h3>커리어 업적</h3>
                        <ul className="achievements-list">
                          {selectedPlayer.achievements.map((achievement, index) => (
                            <li key={index}>
                              <span className="achievement-icon">🏆</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}

                  {/* Highlights Tab */}
                  {activeTab === 'highlights' && selectedPlayer.highlights && selectedPlayer.highlights.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="player-highlights"
                    >
                      <div className="highlights-grid">
                        {selectedPlayer.highlights.map((highlight, index) => (
                          <div key={index} className="highlight-item">
                            <div className="video-wrapper">
                              <iframe
                                src={`https://www.youtube.com/embed/${highlight.videoId}`}
                                title={highlight.title}
                                style={{ border: 0 }}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                              />
                            </div>
                            <div className="highlight-info">
                              <h4>{highlight.title}</h4>
                              <p>{highlight.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Personal Stories Tab */}
                  {activeTab === 'stories' && selectedPlayer.personalStories && selectedPlayer.personalStories.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="player-personal-story"
                    >
                      <div className="personal-story-content">
                        {selectedPlayer.personalStories.map((story, index) => (
                          <div key={index} className="story-item">
                            <h4>{story.title}</h4>
                            <p>{story.content}</p>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
