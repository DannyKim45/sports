import { motion } from "framer-motion";
import { useState } from "react";

export default function PromoCalendar({ promotions }) {
  if (!promotions || promotions.length === 0) {
    return (
      <div className="promo-calendar">
        <h3>예정된 프로모션</h3>
        <p className="no-promos">예정된 프로모션이 없습니다</p>
      </div>
    );
  }

  const formatDate = (dateStr) => {
    const date = new Date(dateStr + 'T00:00:00');
    return date.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'short'
    });
  };

  const [imageErrors, setImageErrors] = useState({});

  const handleImageError = (index) => {
    setImageErrors(prev => ({ ...prev, [index]: true }));
  };

  const getPromoIcon = (promoName) => {
    const name = promoName.toLowerCase();
    if (name.includes('bobblehead') || name.includes('figurine')) return '🎎';
    if (name.includes('jersey') || name.includes('shirt')) return '👕';
    if (name.includes('hat') || name.includes('beanie') || name.includes('toque')) return '🧢';
    if (name.includes('scarf')) return '🧣';
    if (name.includes('ring')) return '💍';
    if (name.includes('towel')) return '🏳️';
    if (name.includes('blanket')) return '🛏️';
    if (name.includes('poster')) return '🖼️';
    if (name.includes('stick')) return '🏒';
    if (name.includes('kids') || name.includes('youth')) return '👶';
    if (name.includes('military') || name.includes('cancer')) return '🎗️';
    if (name.includes('valentine')) return '💝';
    if (name.includes('patrick')) return '☘️';
    return '🎁';
  };

  return (
    <div className="promo-calendar">
      <h3>예정된 프로모션</h3>
      <div className="promo-list">
        {promotions.map((promo, index) => {
          const PromoContent = (
            <>
              {promo.image && !imageErrors[index] ? (
                <div className="promo-image">
                  <img
                    src={promo.image}
                    alt={promo.promo}
                    loading="lazy"
                    onError={() => handleImageError(index)}
                  />
                </div>
              ) : (
                <div className="promo-icon-large">
                  <span>{getPromoIcon(promo.promo)}</span>
                </div>
              )}
              <div className="promo-content">
                <div className="promo-date">
                  <span className="promo-icon">📅</span>
                  {formatDate(promo.date)}
                </div>
                <div className="promo-details">
                  <h4 className="promo-title">{promo.promo}</h4>
                  <p className="promo-description">{promo.description}</p>
                </div>
              </div>
              {promo.link && (
                <div className="promo-link-icon">
                  <span>→</span>
                </div>
              )}
            </>
          );

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              {promo.link ? (
                <a
                  href={promo.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="promo-item promo-item-link"
                >
                  {PromoContent}
                </a>
              ) : (
                <div className="promo-item">
                  {PromoContent}
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
