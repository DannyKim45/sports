import { motion } from "framer-motion";

export default function SeatDetailGuide({ rateYourSeatsUrl, teamName }) {
  if (!rateYourSeatsUrl) return null;

  return (
    <motion.div
      className="seat-detail-guide"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3>📸 좌석 상세 정보</h3>

      <div className="guide-intro">
        <p className="guide-highlight">
          실제 좌석에서 찍은 사진과 상세한 시야 정보를 확인하세요!
        </p>
        <p>
          Rate Your Seats는 티켓 구매 사이트에서 제공하지 않는 귀중한 정보를 제공합니다:
        </p>
      </div>

      <div className="feature-list">
        <div className="feature-item">
          <span className="feature-icon">📷</span>
          <div>
            <strong>실제 좌석 사진</strong>
            <p>각 좌석에서 직접 찍은 경기 시야 사진</p>
          </div>
        </div>

        <div className="feature-item">
          <span className="feature-icon">⭐</span>
          <div>
            <strong>SeatScore® 평점</strong>
            <p>시야각, 편의성, 가격 대비 가치 종합 평가</p>
          </div>
        </div>

        <div className="feature-item">
          <span className="feature-icon">💬</span>
          <div>
            <strong>관람객 리뷰</strong>
            <p>실제 관람객들의 좌석 후기와 팁</p>
          </div>
        </div>

        <div className="feature-item">
          <span className="feature-icon">🎯</span>
          <div>
            <strong>시야 각도 분석</strong>
            <p>링크와의 거리, 각도, 시야 장애물 정보</p>
          </div>
        </div>
      </div>

      <div className="guide-cta">
        <a
          href={rateYourSeatsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="detail-guide-button"
        >
          <span className="button-icon">🔍</span>
          <div>
            <div className="button-title">{teamName} 좌석 상세 보기</div>
            <div className="button-subtitle">Rate Your Seats에서 확인하기</div>
          </div>
          <span className="arrow-icon">→</span>
        </a>
      </div>

      <div className="usage-guide">
        <details className="guide-accordion">
          <summary>💡 사이트 사용 방법 (한국어 가이드)</summary>
          <div className="guide-steps">
            <div className="step">
              <span className="step-number">1</span>
              <div>
                <strong>좌석 맵에서 섹션 선택</strong>
                <p>경기장 지도에서 관심 있는 섹션을 클릭하세요</p>
              </div>
            </div>
            <div className="step">
              <span className="step-number">2</span>
              <div>
                <strong>실제 사진 확인</strong>
                <p>"View from Section"을 클릭하면 해당 좌석에서 찍은 실제 사진을 볼 수 있습니다</p>
              </div>
            </div>
            <div className="step">
              <span className="step-number">3</span>
              <div>
                <strong>평점 및 리뷰 확인</strong>
                <p>SeatScore 별점과 다른 관람객들의 리뷰를 읽어보세요</p>
              </div>
            </div>
            <div className="step">
              <span className="step-number">4</span>
              <div>
                <strong>티켓 가격 비교</strong>
                <p>"Buy Tickets" 버튼으로 여러 판매처의 가격을 비교할 수 있습니다</p>
              </div>
            </div>
          </div>
        </details>
      </div>

      <div className="pro-tip">
        <strong>💡 꿀팁:</strong> NHL은 실내 경기지만, 일부 좌석은 조명이나 스코어보드에 가려질 수 있습니다.
        실제 사진으로 시야를 미리 확인하세요!
      </div>
    </motion.div>
  );
}
