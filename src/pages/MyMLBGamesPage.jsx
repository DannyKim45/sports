import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { myMLBGameRecords, stadiumVisitsOnly } from "../data/myMLBGames";

export default function MyMLBGamesPage() {
  const [selectedGame, setSelectedGame] = useState(null);
  const [filter, setFilter] = useState('all');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    document.title = "나의 MLB 관람 기록 | Sports Athletes";
  }, []);

  const handleGameClick = (game) => {
    setSelectedGame(game);
    setCurrentImageIndex(0);
  };

  const handleCloseModal = () => {
    setSelectedGame(null);
  };

  // 필터링된 게임 목록
  const filteredGames = filter === 'all'
    ? myMLBGameRecords
    : myMLBGameRecords.filter(game =>
        game.homeTeam.abbrev === filter || game.awayTeam.abbrev === filter
      );

  // 이미지 캐러셀 네비게이션
  const nextImage = () => {
    if (selectedGame) {
      setCurrentImageIndex((prev) =>
        prev === selectedGame.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedGame) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedGame.images.length - 1 : prev - 1
      );
    }
  };

  return (
    <div className="page-container my-games-page">
      {/* Hero Section */}
      <motion.div
        className="my-games-hero"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>나의 MLB 관람 기록</h1>
        <p className="page-subtitle">직접 경험한 메이저리그의 감동</p>
        <div className="games-stats">
          <div className="stat-badge">
            <span className="stat-number">15</span>
            <span className="stat-label">경기 관람</span>
          </div>
          <div className="stat-badge">
            <span className="stat-number">17</span>
            <span className="stat-label">방문 구장</span>
          </div>
        </div>
      </motion.div>

      {/* Filter Buttons */}
      <div className="games-filter">
        <button
          className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          전체 (15)
        </button>
      </div>

      {/* Games Grid */}
      <div className="section-title">
        <h2>⚾ 경기 관람 기록</h2>
      </div>
      <div className="my-games-grid">
        {filteredGames.map((game, index) => (
          <motion.div
            key={game.id}
            className="my-game-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            onClick={() => handleGameClick(game)}
          >
            <div className="game-card-image">
              <img
                src={game.coverImage}
                alt={game.isMultiGame ? game.teamName : `${game.homeTeam.name} vs ${game.awayTeam.name}`}
              />
              <div className="game-card-overlay">
                <span className="game-mood">{game.mood}</span>
              </div>
            </div>

            <div className="game-card-content">
              {game.isMultiGame ? (
                <>
                  <div className="multi-game-badge">
                    {game.visitCount}차례 관람
                  </div>
                  <div className="team-name-large">
                    <img src={game.teamLogo} alt={game.teamName} className="team-logo-small" />
                    <span>{game.teamName}</span>
                  </div>
                  <div className="game-venue">
                    🏟️ Coors Field & More
                  </div>
                </>
              ) : (
                <>
                  <div className="game-date">
                    {new Date(game.date).toLocaleDateString('ko-KR', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </div>

                  <div className="game-matchup">
                    <div className="team">
                      <img src={game.awayTeam.logo} alt={game.awayTeam.name} className="team-logo-small" />
                      <span className="team-name-small">{game.awayTeam.abbrev}</span>
                      <span className="team-score-large">{game.score.away}</span>
                    </div>
                    <span className="vs">@</span>
                    <div className="team">
                      <span className="team-score-large">{game.score.home}</span>
                      <span className="team-name-small">{game.homeTeam.abbrev}</span>
                      <img src={game.homeTeam.logo} alt={game.homeTeam.name} className="team-logo-small" />
                    </div>
                  </div>

                  <div className="game-venue">
                    📍 {game.venue}
                  </div>
                </>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Stadium Visits Only */}
      {stadiumVisitsOnly.length > 0 && (
        <>
          <div className="section-title" style={{ marginTop: '3rem' }}>
            <h2>🏟️ 구장 방문 기록 (경기 미관람)</h2>
          </div>
          <div className="my-games-grid">
            {stadiumVisitsOnly.map((visit, index) => (
              <motion.div
                key={visit.id}
                className="my-game-card stadium-visit-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="game-card-image">
                  <img src={visit.image} alt={visit.stadium} />
                  <div className="game-card-overlay">
                    <span className="game-mood">🏟️</span>
                  </div>
                </div>

                <div className="game-card-content">
                  <div className="game-date">
                    {new Date(visit.visitDate).toLocaleDateString('ko-KR', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </div>

                  <div className="stadium-visit-info">
                    <div className="team-logo-container">
                      <img src={visit.logo} alt={visit.team} className="team-logo-large" />
                    </div>
                    <div className="stadium-name">{visit.stadium}</div>
                    <div className="team-name">{visit.team}</div>
                  </div>

                  <div className="game-venue">
                    📍 {visit.location}
                  </div>

                  <div className="visit-description">
                    {visit.description}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </>
      )}

      {/* Game Detail Modal */}
      <AnimatePresence>
        {selectedGame && (
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
              className="game-detail-modal"
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }}
              transition={{ duration: 0.3 }}
            >
              <button className="modal-close" onClick={handleCloseModal}>
                ×
              </button>

              <div className="game-detail-content">
                {selectedGame.isMultiGame ? (
                  /* Multi-Game Header */
                  <div className="game-detail-header">
                    <div className="multi-game-header">
                      <img src={selectedGame.teamLogo} alt={selectedGame.teamName} className="team-logo-large" />
                      <h2>{selectedGame.teamName}</h2>
                      <div className="multi-game-subtitle">{selectedGame.visitCount}차례 관람 기록</div>
                    </div>

                    {/* Games List */}
                    <div className="multi-games-list">
                      <h3>📅 관람 경기</h3>
                      {selectedGame.games.map((game, idx) => (
                        <div key={idx} className="multi-game-item">
                          <div className="multi-game-date">
                            {new Date(game.date).toLocaleDateString('ko-KR', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric',
                              weekday: 'short'
                            })}
                          </div>
                          <div className="multi-game-matchup">
                            <div className="multi-game-team">
                              <img src={game.awayTeam.logo} alt={game.awayTeam.name} />
                              <span>{game.awayTeam.abbrev}</span>
                              <span className="multi-game-score">{game.score.away}</span>
                            </div>
                            <span className="multi-game-at">@</span>
                            <div className="multi-game-team">
                              <span className="multi-game-score">{game.score.home}</span>
                              <span>{game.homeTeam.abbrev}</span>
                              <img src={game.homeTeam.logo} alt={game.homeTeam.name} />
                            </div>
                            <span className={`multi-game-result ${game.result === '승리' ? 'win' : 'lose'}`}>
                              {game.result}
                            </span>
                          </div>
                          <div className="multi-game-venue">📍 {game.venue}</div>
                          {game.special && <div className="multi-game-special">{game.special}</div>}
                        </div>
                      ))}
                    </div>

                    <div className="game-detail-info">
                      <span>🌡️ {selectedGame.weather}</span>
                      <span>👥 {selectedGame.attendance}</span>
                    </div>
                  </div>
                ) : (
                  /* Single Game Header */
                  <div className="game-detail-header">
                    <div className="game-detail-date">
                      {new Date(selectedGame.date).toLocaleDateString('ko-KR', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                        weekday: 'long'
                      })}
                    </div>

                    <div className="game-detail-matchup">
                      <div className="team-detail">
                        <img src={selectedGame.awayTeam.logo} alt={selectedGame.awayTeam.name} />
                        <div>
                          <div className="team-name-detail">{selectedGame.awayTeam.name}</div>
                          <div className="team-score-detail">{selectedGame.score.away}</div>
                        </div>
                      </div>
                      <span className="vs-detail">@</span>
                      <div className="team-detail">
                        <div>
                          <div className="team-name-detail">{selectedGame.homeTeam.name}</div>
                          <div className="team-score-detail">{selectedGame.score.home}</div>
                        </div>
                        <img src={selectedGame.homeTeam.logo} alt={selectedGame.homeTeam.name} />
                      </div>
                    </div>

                    <div className="game-detail-info">
                      <span>📍 {selectedGame.venue}</span>
                      <span>🎫 {selectedGame.section}</span>
                      <span>🌡️ {selectedGame.weather}</span>
                      <span>👥 {selectedGame.attendance}</span>
                    </div>

                    {/* Pitchers */}
                    {selectedGame.pitchers && (
                      <div className="pitchers-matchup">
                        <div className="pitcher-info">
                          <span className="pitcher-label">선발 투수</span>
                          <div className="pitcher-names">
                            <span>{selectedGame.pitchers.away}</span>
                            <span className="vs-small">vs</span>
                            <span>{selectedGame.pitchers.home}</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Korean Players Section */}
                {selectedGame.koreanPlayers && (
                  <div className="korean-players-section">
                    <h3>🇰🇷 한국인 선수 출전</h3>
                    <div className="korean-players-grid">
                      <div className="korean-player-card">
                        <div className="player-team-badge">{selectedGame.homeTeam.abbrev}</div>
                        <div className="player-name">{selectedGame.koreanPlayers.mariners.name}</div>
                        <div className="player-position">{selectedGame.koreanPlayers.mariners.position}</div>
                        <div className="player-number">#{selectedGame.koreanPlayers.mariners.number}</div>
                        <div className="player-note">{selectedGame.koreanPlayers.mariners.note}</div>
                      </div>
                      <div className="korean-player-card">
                        <div className="player-team-badge">{selectedGame.awayTeam.abbrev}</div>
                        <div className="player-name">{selectedGame.koreanPlayers.cardinals.name}</div>
                        <div className="player-position">{selectedGame.koreanPlayers.cardinals.position}</div>
                        <div className="player-number">#{selectedGame.koreanPlayers.cardinals.number}</div>
                        <div className="player-note">{selectedGame.koreanPlayers.cardinals.note}</div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Single Korean Player Section */}
                {selectedGame.koreanPlayer && (
                  <div className="korean-players-section">
                    <h3>🇰🇷 한국인 선수 활약</h3>
                    <div className="korean-players-grid single-player">
                      <div className="korean-player-card featured">
                        <div className="player-team-badge">{selectedGame.koreanPlayer.team}</div>
                        <div className="player-name">{selectedGame.koreanPlayer.name}</div>
                        <div className="player-position">{selectedGame.koreanPlayer.position}</div>
                        <div className="player-number">#{selectedGame.koreanPlayer.number}</div>
                        {selectedGame.koreanPlayer.performance && (
                          <div className="player-performance">{selectedGame.koreanPlayer.performance}</div>
                        )}
                        <div className="player-note">{selectedGame.koreanPlayer.note}</div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Image Gallery */}
                <div className="game-gallery">
                  <h3>📸 사진</h3>
                  <div className="gallery-carousel">
                    <button className="carousel-btn prev" onClick={prevImage}>‹</button>
                    <div className="carousel-image">
                      <img
                        src={selectedGame.images[currentImageIndex]}
                        alt={`Game moment ${currentImageIndex + 1}`}
                      />
                    </div>
                    <button className="carousel-btn next" onClick={nextImage}>›</button>
                  </div>
                  <div className="carousel-indicators">
                    {selectedGame.images.map((_, index) => (
                      <button
                        key={index}
                        className={`indicator ${index === currentImageIndex ? 'active' : ''}`}
                        onClick={() => setCurrentImageIndex(index)}
                      />
                    ))}
                  </div>
                </div>

                {/* Videos */}
                {selectedGame.videos && selectedGame.videos.length > 0 && (
                  <div className="game-videos">
                    <h3>🎥 영상</h3>
                    <div className="videos-grid">
                      {selectedGame.videos.map((video, index) => (
                        <video key={index} controls>
                          <source src={video} type="video/mp4" />
                          브라우저가 비디오를 지원하지 않습니다.
                        </video>
                      ))}
                    </div>
                  </div>
                )}

                {/* Story */}
                <div className="game-story">
                  <h3>📖 나의 이야기</h3>
                  <p>{selectedGame.story}</p>
                </div>

                {/* Highlights */}
                <div className="game-highlights-list">
                  <h3>✨ 특별한 순간들</h3>
                  <ul>
                    {selectedGame.highlights.map((highlight, index) => (
                      <li key={index}>{highlight}</li>
                    ))}
                  </ul>
                </div>

                {/* Additional Info */}
                <div className="game-additional-info">
                  <div className="info-item">
                    <span className="info-label">함께한 사람</span>
                    <span className="info-value">{selectedGame.withWhom}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">먹거리</span>
                    <span className="info-value">{selectedGame.foodAndDrink}</span>
                  </div>
                  <div className="info-item quote">
                    <span className="quote-mark">"</span>
                    <span className="quote-text">{selectedGame.memorableQuote}</span>
                    <span className="quote-mark">"</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
