import { motion } from "framer-motion";
import { useState } from "react";

export default function SeatingMap({ stadium }) {
  const [imageError, setImageError] = useState(false);

  if (!stadium) {
    return null;
  }

  // Check if stadium has a seating map image
  const hasSeatingImage = stadium.seatingMapImage && !imageError;

  return (
    <div className="seating-map">
      <h3>경기장 좌석 가이드</h3>

      {hasSeatingImage ? (
        /* Official Seating Map Image */
        <div className="arena-seating-image">
          <img
            src={stadium.seatingMapImage}
            alt={`${stadium.name} Seating Map`}
            onError={() => setImageError(true)}
            loading="lazy"
          />
        </div>
      ) : (
        /* Detailed Arena Visual (SVG Fallback) */
        <div className="arena-visual">
        <svg viewBox="0 0 600 450" className="arena-svg" style={{ maxWidth: '800px' }}>
          {/* Background */}
          <rect width="600" height="450" fill="#0a0a0a" />

          {/* Ice Surface with details */}
          <ellipse cx="300" cy="225" rx="180" ry="110" fill="#e8f4ff" opacity="0.9" />

          {/* Center Ice Circle */}
          <circle cx="300" cy="225" r="30" fill="none" stroke="#0066cc" strokeWidth="3" />
          <circle cx="300" cy="225" r="2" fill="#0066cc" />

          {/* Face-off circles */}
          <circle cx="220" cy="225" r="20" fill="none" stroke="#cc0000" strokeWidth="2" />
          <circle cx="380" cy="225" r="20" fill="none" stroke="#cc0000" strokeWidth="2" />

          {/* Blue lines */}
          <line x1="220" y1="140" x2="220" y2="310" stroke="#0066cc" strokeWidth="3" />
          <line x1="380" y1="140" x2="380" y2="310" stroke="#0066cc" strokeWidth="3" />

          {/* Goal lines */}
          <line x1="150" y1="140" x2="150" y2="310" stroke="#cc0000" strokeWidth="2" />
          <line x1="450" y1="140" x2="450" y2="310" stroke="#cc0000" strokeWidth="2" />

          {/* ICE label */}
          <text x="300" y="230" textAnchor="middle" fill="#0066cc" fontSize="24" fontWeight="bold" opacity="0.5">
            ICE
          </text>

          {/* Lower Bowl Sections */}
          {/* Bottom sections */}
          <motion.path
            d="M 150 340 Q 140 340 140 330 L 140 310 Q 140 300 150 300 L 450 300 Q 460 300 460 310 L 460 330 Q 460 340 450 340 Z"
            fill="rgba(102, 126, 234, 0.25)"
            stroke="rgba(102, 126, 234, 0.6)"
            strokeWidth="2"
            whileHover={{ fill: "rgba(102, 126, 234, 0.45)" }}
          />
          {/* Left sections */}
          <motion.path
            d="M 80 150 Q 70 160 70 225 Q 70 290 80 300 L 110 280 Q 100 270 100 225 Q 100 180 110 170 Z"
            fill="rgba(102, 126, 234, 0.25)"
            stroke="rgba(102, 126, 234, 0.6)"
            strokeWidth="2"
            whileHover={{ fill: "rgba(102, 126, 234, 0.45)" }}
          />
          {/* Right sections */}
          <motion.path
            d="M 520 150 Q 530 160 530 225 Q 530 290 520 300 L 490 280 Q 500 270 500 225 Q 500 180 490 170 Z"
            fill="rgba(102, 126, 234, 0.25)"
            stroke="rgba(102, 126, 234, 0.6)"
            strokeWidth="2"
            whileHover={{ fill: "rgba(102, 126, 234, 0.45)" }}
          />
          {/* Top sections */}
          <motion.path
            d="M 150 110 Q 140 110 140 120 L 140 140 Q 140 150 150 150 L 450 150 Q 460 150 460 140 L 460 120 Q 460 110 450 110 Z"
            fill="rgba(102, 126, 234, 0.25)"
            stroke="rgba(102, 126, 234, 0.6)"
            strokeWidth="2"
            whileHover={{ fill: "rgba(102, 126, 234, 0.45)" }}
          />

          {/* Club Level Sections */}
          {/* Bottom club */}
          <motion.path
            d="M 130 360 Q 120 360 120 350 L 120 340 Q 120 330 130 330 L 470 330 Q 480 330 480 340 L 480 350 Q 480 360 470 360 Z"
            fill="rgba(118, 75, 162, 0.25)"
            stroke="rgba(118, 75, 162, 0.6)"
            strokeWidth="2"
            whileHover={{ fill: "rgba(118, 75, 162, 0.45)" }}
          />
          {/* Left club */}
          <motion.path
            d="M 50 140 Q 40 150 40 225 Q 40 300 50 310 L 70 300 Q 60 290 60 225 Q 60 160 70 150 Z"
            fill="rgba(118, 75, 162, 0.25)"
            stroke="rgba(118, 75, 162, 0.6)"
            strokeWidth="2"
            whileHover={{ fill: "rgba(118, 75, 162, 0.45)" }}
          />
          {/* Right club */}
          <motion.path
            d="M 550 140 Q 560 150 560 225 Q 560 300 550 310 L 530 300 Q 540 290 540 225 Q 540 160 530 150 Z"
            fill="rgba(118, 75, 162, 0.25)"
            stroke="rgba(118, 75, 162, 0.6)"
            strokeWidth="2"
            whileHover={{ fill: "rgba(118, 75, 162, 0.45)" }}
          />
          {/* Top club */}
          <motion.path
            d="M 130 90 Q 120 90 120 100 L 120 110 Q 120 120 130 120 L 470 120 Q 480 120 480 110 L 480 100 Q 480 90 470 90 Z"
            fill="rgba(118, 75, 162, 0.25)"
            stroke="rgba(118, 75, 162, 0.6)"
            strokeWidth="2"
            whileHover={{ fill: "rgba(118, 75, 162, 0.45)" }}
          />

          {/* Upper Bowl Sections */}
          {/* Bottom upper */}
          <motion.path
            d="M 100 385 Q 90 385 90 375 L 90 360 Q 90 350 100 350 L 500 350 Q 510 350 510 360 L 510 375 Q 510 385 500 385 Z"
            fill="rgba(255, 255, 255, 0.15)"
            stroke="rgba(255, 255, 255, 0.35)"
            strokeWidth="2"
            whileHover={{ fill: "rgba(255, 255, 255, 0.25)" }}
          />
          {/* Left upper */}
          <motion.path
            d="M 20 130 Q 10 140 10 225 Q 10 310 20 320 L 40 310 Q 30 300 30 225 Q 30 150 40 140 Z"
            fill="rgba(255, 255, 255, 0.15)"
            stroke="rgba(255, 255, 255, 0.35)"
            strokeWidth="2"
            whileHover={{ fill: "rgba(255, 255, 255, 0.25)" }}
          />
          {/* Right upper */}
          <motion.path
            d="M 580 130 Q 590 140 590 225 Q 590 310 580 320 L 560 310 Q 570 300 570 225 Q 570 150 560 140 Z"
            fill="rgba(255, 255, 255, 0.15)"
            stroke="rgba(255, 255, 255, 0.35)"
            strokeWidth="2"
            whileHover={{ fill: "rgba(255, 255, 255, 0.25)" }}
          />
          {/* Top upper */}
          <motion.path
            d="M 100 65 Q 90 65 90 75 L 90 90 Q 90 100 100 100 L 500 100 Q 510 100 510 90 L 510 75 Q 510 65 500 65 Z"
            fill="rgba(255, 255, 255, 0.15)"
            stroke="rgba(255, 255, 255, 0.35)"
            strokeWidth="2"
            whileHover={{ fill: "rgba(255, 255, 255, 0.25)" }}
          />

          {/* Section Labels */}
          <text x="300" y="55" textAnchor="middle" fill="white" fontSize="14" fontWeight="600">
            상층석
          </text>
          <text x="300" y="85" textAnchor="middle" fill="white" fontSize="12" opacity="0.8">
            클럽석
          </text>
          <text x="300" y="105" textAnchor="middle" fill="white" fontSize="12" opacity="0.8">
            하층석
          </text>

          {/* Section Numbers */}
          <text x="300" y="368" textAnchor="middle" fill="white" fontSize="10" opacity="0.6">101-120</text>
          <text x="300" y="130" textAnchor="middle" fill="white" fontSize="10" opacity="0.6">201-220</text>
          <text x="55" y="225" textAnchor="middle" fill="white" fontSize="10" opacity="0.6">301</text>
          <text x="545" y="225" textAnchor="middle" fill="white" fontSize="10" opacity="0.6">320</text>

          {/* Press Box */}
          <rect x="250" y="50" width="100" height="12" fill="rgba(255, 255, 255, 0.2)" rx="2" />
          <text x="300" y="59" textAnchor="middle" fill="white" fontSize="9" opacity="0.5">PRESS BOX</text>
        </svg>
        </div>
      )}

      {/* Seating Information */}
      <div className="seating-info-grid">
        <div className="seating-section-info lower-info">
          <div className="section-color lower-color"></div>
          <div className="section-details">
            <h4>하층석 (Lower Bowl)</h4>
            <p className="section-desc">링크에 가장 가까운 좌석으로 가격이 가장 높습니다</p>
            <p className="section-desc">경기 액션을 가까이서 생생하게 관람 가능</p>
          </div>
        </div>

        <div className="seating-section-info club-info">
          <div className="section-color club-color"></div>
          <div className="section-details">
            <h4>클럽석 (Club Level)</h4>
            <p className="section-desc">프리미엄 좌석 - 음식과 음료 제공, 독립된 공간</p>
            <p className="section-desc">기업 단체 관람이나 가족 모임에 적합</p>
          </div>
        </div>

        <div className="seating-section-info upper-info">
          <div className="section-color upper-color"></div>
          <div className="section-details">
            <h4>상층석 (Upper Bowl)</h4>
            <p className="section-desc">합리적인 가격으로 전체 링크를 조망</p>
            <p className="section-desc">경기 전체 흐름을 파악하기 좋은 시야</p>
          </div>
        </div>
      </div>

      {/* Ticket Pricing Information */}
      <div className="ticket-pricing-info">
        <h4>💡 티켓 가격 결정 요인</h4>
        <div className="pricing-factors">
          <div className="pricing-factor">
            <span className="factor-icon">📍</span>
            <div>
              <strong>좌석 위치</strong>
              <p>링크에 가까울수록 가격이 높습니다</p>
            </div>
          </div>
          <div className="pricing-factor">
            <span className="factor-icon">🎁</span>
            <div>
              <strong>프로모션 & 기념품 나눔</strong>
              <p>보블헤드, 유니폼 등 기념품을 나눠주는 경기는 가격이 상승합니다</p>
            </div>
          </div>
          <div className="pricing-factor">
            <span className="factor-icon">⭐</span>
            <div>
              <strong>상대 팀</strong>
              <p>인기 팀이나 라이벌 팀 방문 시 가격이 높아집니다</p>
            </div>
          </div>
          <div className="pricing-factor">
            <span className="factor-icon">📅</span>
            <div>
              <strong>요일</strong>
              <p>주말 경기는 평일 경기 대비 가격이 높습니다</p>
            </div>
          </div>
          <div className="pricing-factor">
            <span className="factor-icon">📊</span>
            <div>
              <strong>팀 성적</strong>
              <p>팀 성적이 좋을수록 티켓 수요가 높아 가격이 상승합니다</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
