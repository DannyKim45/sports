import { motion } from "framer-motion";

export default function MLBPromoSection({ promotionInfo }) {
  if (!promotionInfo) {
    return (
      <div className="promo-calendar">
        <h3>프로모션 일정</h3>
        <p className="no-promos">프로모션 정보가 없습니다</p>
      </div>
    );
  }

  return (
    <motion.div
      className="promo-calendar mlb-promo-section"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3>🎁 프로모션 일정</h3>
      <div className="mlb-promo-content">
        <p className="promo-description">
          {promotionInfo.teamName}의 2026 시즌 프로모션 일정을 확인하세요.
          <br />
          보블헤드, 유니폼, 모자 등 다양한 기념품 증정 이벤트와 테마 나이트를 놓치지 마세요!
        </p>
        <a
          href={promotionInfo.url}
          target="_blank"
          rel="noopener noreferrer"
          className="promo-button"
        >
          <span className="promo-button-icon">🎟️</span>
          <span className="promo-button-text">프로모션 보러가기</span>
          <span className="promo-button-arrow">→</span>
        </a>
      </div>
    </motion.div>
  );
}
