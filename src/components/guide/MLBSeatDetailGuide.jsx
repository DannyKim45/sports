import { motion } from "framer-motion";

export default function MLBSeatDetailGuide({ rateYourSeatsUrl, stadiumName }) {
  if (!rateYourSeatsUrl) return null;

  return (
    <motion.div
      className="seat-detail-guide mlb-seat-guide"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3>📸 좌석 상세 정보 (필수 확인!)</h3>

      <div className="guide-intro">
        <p className="guide-highlight baseball-highlight">
          ⚾ 야외 경기장이라 좌석 위치가 특히 중요합니다!
        </p>
        <p>
          Rate Your Seats는 티켓 구매 전 <strong>반드시</strong> 확인해야 할 귀중한 정보를 제공합니다.
          특히 야구 경기는 <strong>야외 구장</strong>에서 진행되므로 날씨와 시야 정보가 매우 중요합니다:
        </p>
      </div>

      <div className="feature-list baseball-features">
        <div className="feature-item highlight-feature">
          <span className="feature-icon">☀️🌧️</span>
          <div>
            <strong>날씨 영향 정보</strong>
            <p>햇빛 직사광선 여부, 비를 피할 수 있는 지붕 유무 확인 가능</p>
            <span className="feature-badge important">야구장 필수 확인!</span>
          </div>
        </div>

        <div className="feature-item highlight-feature">
          <span className="feature-icon">🚧</span>
          <div>
            <strong>시야 장애물 정보</strong>
            <p>기둥, 펜스, 그물망 등 경기 관람을 방해하는 요소 사전 확인</p>
            <span className="feature-badge important">반드시 체크!</span>
          </div>
        </div>

        <div className="feature-item">
          <span className="feature-icon">📷</span>
          <div>
            <strong>실제 좌석 사진</strong>
            <p>각 좌석에서 직접 찍은 경기장 시야 사진 - 낮/밤 경기 차이까지!</p>
          </div>
        </div>

        <div className="feature-item">
          <span className="feature-icon">⭐</span>
          <div>
            <strong>SeatScore® 평점</strong>
            <p>시야각, 편의성, 가격 대비 가치, 날씨 보호 등 종합 평가</p>
          </div>
        </div>

        <div className="feature-item">
          <span className="feature-icon">💬</span>
          <div>
            <strong>관람객 리뷰</strong>
            <p>실제 관람객들의 좌석 후기 - "햇볕이 너무 뜨거웠다", "비가 와도 괜찮았다" 등</p>
          </div>
        </div>

        <div className="feature-item">
          <span className="feature-icon">🎯</span>
          <div>
            <strong>시야 각도 분석</strong>
            <p>홈플레이트와의 거리, 각도, 그라운드 레벨/높이 정보</p>
          </div>
        </div>
      </div>

      <div className="guide-cta">
        <a
          href={rateYourSeatsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="detail-guide-button baseball-button"
        >
          <span className="button-icon">🔍</span>
          <div>
            <div className="button-title">{stadiumName} 좌석 상세 보기</div>
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
                <strong>날씨 & 시야 체크</strong>
                <p>리뷰에서 "sun", "shade", "rain", "obstruction" 등의 키워드를 검색하세요</p>
              </div>
            </div>
            <div className="step">
              <span className="step-number">4</span>
              <div>
                <strong>평점 및 리뷰 확인</strong>
                <p>SeatScore 별점과 다른 관람객들의 솔직한 리뷰를 읽어보세요</p>
              </div>
            </div>
            <div className="step">
              <span className="step-number">5</span>
              <div>
                <strong>티켓 가격 비교</strong>
                <p>"Buy Tickets" 버튼으로 여러 판매처의 가격을 비교할 수 있습니다</p>
              </div>
            </div>
          </div>
        </details>
      </div>

      <div className="pro-tip baseball-tip">
        <div className="tip-header">
          <strong>⚾ 야구장 좌석 선택 필수 팁</strong>
        </div>
        <ul>
          <li>
            <strong>☀️ 데이 게임:</strong> 오후 경기는 햇빛이 매우 강합니다.
            1루/3루 측면 좌석은 시간대별로 직사광선을 받을 수 있으니
            Rate Your Seats에서 "sun" 리뷰를 꼭 확인하세요!
          </li>
          <li>
            <strong>🌧️ 비 대비:</strong> 대부분의 좌석이 야외 노출입니다.
            상층부 일부 좌석만 지붕 아래이므로 비 예보 시 이 정보는 필수입니다.
          </li>
          <li>
            <strong>🚧 시야 장애물:</strong> 펜스, 그물망, 기둥 등이 경기 관람을 방해할 수 있습니다.
            특히 저렴한 좌석은 사진으로 미리 확인하는 것이 중요합니다.
          </li>
          <li>
            <strong>📏 높이 차이:</strong> Field Level과 Upper Deck의 경험이 완전히 다릅니다.
            실제 사진을 보고 자신이 원하는 시야를 선택하세요.
          </li>
        </ul>
      </div>

      <div className="warning-box">
        <span className="warning-icon">⚠️</span>
        <div>
          <strong>주의:</strong> 티켓 판매 사이트의 좌석 배치도만으로는
          날씨 영향, 시야 장애물, 실제 경기장 분위기를 알 수 없습니다.
          <strong>꼭 Rate Your Seats에서 실제 사진과 리뷰를 확인하세요!</strong>
        </div>
      </div>
    </motion.div>
  );
}
