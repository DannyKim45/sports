import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import useNHLGames from "../hooks/useNHLGames";
import useOnlineStatus from "../hooks/useOnlineStatus";
import GameCard from "../components/games/GameCard";
import DatePicker from "../components/games/DatePicker";
import LoadingSpinner from "../components/shared/LoadingSpinner";

export default function TodaysGamesPage() {
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    document.title = "NHL 경기 일정 | Sports Athletes";
  }, []);
  const { games, loading, error, lastUpdated, refresh } = useNHLGames(selectedDate, true, 60000);
  const isOnline = useOnlineStatus();

  const handleRefresh = async () => {
    await refresh();
  };

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
  };

  const formatLastUpdated = (date) => {
    if (!date) return "";
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };

  return (
    <div className="page-container games-page">
      {/* Offline Banner */}
      <AnimatePresence>
        {!isOnline && (
          <motion.div
            className="offline-banner"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            <span className="offline-icon">📡</span>
            <span>오프라인 상태입니다. 데이터가 최신이 아닐 수 있습니다.</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <motion.div
        className="page-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div>
          <h1>NHL 경기 일정</h1>
          <p className="page-subtitle">
            실시간 점수 및 일정
            {lastUpdated && ` • ${formatLastUpdated(lastUpdated)} 업데이트`}
          </p>
        </div>
        <button
          className="refresh-button"
          onClick={handleRefresh}
          disabled={loading}
        >
          <span className={loading ? "spinning" : ""}>↻</span>
          새로고침
        </button>
      </motion.div>

      {/* Date Picker */}
      <DatePicker
        selectedDate={selectedDate}
        onDateChange={handleDateChange}
      />

      {/* Loading State */}
      {loading && games.length === 0 && (
        <LoadingSpinner text="경기 정보를 불러오는 중..." />
      )}

      {/* Error State */}
      {error && !loading && (
        <motion.div
          className="error-message-enhanced"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="error-icon-large">⚠️</div>
          <h3>경기 정보를 불러올 수 없습니다</h3>
          <p className="error-text">{error}</p>
          <div className="error-actions-inline">
            <button onClick={handleRefresh} className="retry-button primary">
              <span>↻</span> 다시 시도
            </button>
            <button
              onClick={() => window.location.reload()}
              className="retry-button secondary"
            >
              페이지 새로고침
            </button>
          </div>
        </motion.div>
      )}

      {/* Games Grid */}
      {!loading && !error && games.length > 0 && (
        <div className="games-grid">
          {games.map((game, index) => (
            <GameCard key={game.id} game={game} index={index} />
          ))}
        </div>
      )}

      {/* No Games State */}
      {!loading && !error && games.length === 0 && (
        <motion.div
          className="empty-state-enhanced"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="empty-state-icon">🏒</div>
          <h3>예정된 경기가 없습니다</h3>
          <p>
            선택한 날짜에 예정된 NHL 경기가 없습니다.
            다른 날짜를 선택하여 경기 일정을 확인해보세요.
          </p>
          <div className="empty-state-action">
            <button
              className="refresh-button"
              onClick={() => handleDateChange(new Date().toISOString().split('T')[0])}
            >
              오늘로 이동
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
}
