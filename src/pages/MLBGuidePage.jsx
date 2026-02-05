import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { mlbStadiums } from "../data/mlbStadiums";
import { getMLBPromotionsByTeam } from "../data/mlbPromotions";
import MLBSeatDetailGuide from "../components/guide/MLBSeatDetailGuide";
import MLBPromoSection from "../components/guide/MLBPromoSection";

export default function MLBGuidePage() {
  const [selectedStadium, setSelectedStadium] = useState(mlbStadiums[0]);

  useEffect(() => {
    document.title = "MLB 관람 가이드 | Sports Athletes";
  }, []);

  const handleStadiumChange = (e) => {
    const stadium = mlbStadiums.find(s => s.id === parseInt(e.target.value));
    setSelectedStadium(stadium);
  };

  const promotions = getMLBPromotionsByTeam(selectedStadium.teamAbbrev);

  return (
    <div className="page-container attendance-page">
      {/* Header */}
      <motion.div
        className="page-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1>MLB 관람 가이드</h1>
        <p className="page-subtitle">
          메이저리그 야구장 관람을 위한 완벽 가이드
        </p>
      </motion.div>

      {/* Stadium Selector */}
      <motion.div
        className="team-selector"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <label htmlFor="stadium-select" className="team-selector-label">
          구장 선택
        </label>
        <select
          id="stadium-select"
          className="team-select"
          value={selectedStadium.id}
          onChange={handleStadiumChange}
        >
          {mlbStadiums.map(stadium => (
            <option key={stadium.id} value={stadium.id}>
              {stadium.name} - {stadium.team}
            </option>
          ))}
        </select>
      </motion.div>

      {/* Stadium Info */}
      <motion.div
        className="arena-info-card"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        key={selectedStadium.id}
      >
        {/* Stadium Image */}
        <div className="arena-image">
          <img src={selectedStadium.image} alt={selectedStadium.name} />
        </div>

        {/* Stadium Header */}
        <div className="arena-header">
          <h2>{selectedStadium.name}</h2>
          <p className="arena-subtitle">{selectedStadium.team}</p>
          <p className="arena-description">{selectedStadium.description}</p>
        </div>

        {/* Stadium Details */}
        <div className="arena-details">
          <div className="detail-row">
            <span className="detail-icon">📍</span>
            <div className="detail-content">
              <span className="detail-label">위치</span>
              <span className="detail-value">{selectedStadium.location}</span>
            </div>
          </div>

          <div className="detail-row">
            <span className="detail-icon">👥</span>
            <div className="detail-content">
              <span className="detail-label">수용 인원</span>
              <span className="detail-value">{selectedStadium.capacity.toLocaleString()}명</span>
            </div>
          </div>

          <div className="detail-row">
            <span className="detail-icon">📅</span>
            <div className="detail-content">
              <span className="detail-label">개장 연도</span>
              <span className="detail-value">{selectedStadium.opened}년</span>
            </div>
          </div>

          <div className="detail-row">
            <span className="detail-icon">🌱</span>
            <div className="detail-content">
              <span className="detail-label">구장 표면</span>
              <span className="detail-value">{selectedStadium.surface}</span>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="arena-section">
          <h3>🌟 주요 특징</h3>
          <ul className="feature-list">
            {selectedStadium.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>

        {/* Seating Guide */}
        <div className="arena-section">
          <h3>🎫 좌석 가이드</h3>
          <div className="seating-sections">
            {Object.entries(selectedStadium.seatingGuide).map(([key, section]) => (
              <div key={key} className="seating-section">
                <div className="seating-section-header">
                  <h4>{section.name}</h4>
                  <span className="price-indicator">{section.price}</span>
                </div>
                <p className="seating-description">{section.description}</p>
                <div className="seating-sections-list">
                  {section.sections.map((sec, idx) => (
                    <span key={idx} className="section-badge">{sec}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Food */}
        <div className="arena-section">
          <h3>🍔 추천 음식</h3>
          <div className="food-grid">
            {selectedStadium.food.map((item, index) => (
              <div key={index} className="food-item">
                <span className="food-icon">⚾</span>
                <span className="food-name">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tips */}
        <div className="arena-section">
          <h3>💡 관람 팁</h3>
          <ul className="tips-list">
            {selectedStadium.tips.map((tip, index) => (
              <li key={index}>{tip}</li>
            ))}
          </ul>
        </div>

        {/* Transportation */}
        <div className="arena-section">
          <h3>🚗 교통 정보</h3>
          <div className="transport-info">
            <div className="transport-item">
              <span className="transport-label">주차</span>
              <span className="transport-value">{selectedStadium.parkingInfo}</span>
            </div>
            <div className="transport-item">
              <span className="transport-label">대중교통</span>
              <span className="transport-value">{selectedStadium.publicTransport}</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Seat Detail Guide */}
      <MLBSeatDetailGuide
        rateYourSeatsUrl={selectedStadium.rateYourSeatsUrl}
        stadiumName={selectedStadium.name}
      />

      {/* Promotions */}
      <MLBPromoSection promotionInfo={promotions} />

      {/* General Tips */}
      <motion.div
        className="general-tips-card"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <h2>⚾ MLB 관람 일반 팁</h2>
        <div className="tips-grid">
          <div className="tip-card">
            <h4>티켓 구매</h4>
            <p>공식 MLB 사이트나 팀 웹사이트에서 구매하는 것이 가장 안전합니다. StubHub, SeatGeek 같은 리셀 사이트도 이용 가능합니다.</p>
          </div>
          <div className="tip-card">
            <h4>도착 시간</h4>
            <p>경기 시작 1시간 전 도착을 권장합니다. 주차, 보안 검색, 구장 탐방 시간을 고려하세요.</p>
          </div>
          <div className="tip-card">
            <h4>날씨 대비</h4>
            <p>야외 구장은 날씨 변화에 대비하세요. 자외선 차단제, 모자, 가벼운 재킷을 준비하는 것이 좋습니다.</p>
          </div>
          <div className="tip-card">
            <h4>음식과 음료</h4>
            <p>구장마다 특색 있는 음식이 있습니다. 미리 조사하고 맛보는 것도 MLB 관람의 즐거움입니다.</p>
          </div>
          <div className="tip-card">
            <h4>7회 전통</h4>
            <p>7회 중간에는 "Take Me Out to the Ball Game"을 함께 부르는 전통이 있습니다. 꼭 참여해보세요!</p>
          </div>
          <div className="tip-card">
            <h4>파울볼 주의</h4>
            <p>1루선과 3루선 쪽 좌석은 파울볼이 날아올 수 있습니다. 경기에 집중하고 항상 주의하세요.</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
