import { motion } from "framer-motion";

export default function DatePicker({ selectedDate, onDateChange }) {
  // Parse selected date or use today
  // selectedDate can be Date object or string
  const currentDate = selectedDate instanceof Date
    ? selectedDate
    : selectedDate
      ? new Date(selectedDate + 'T00:00:00')
      : new Date();

  // Convert Date to string for input value
  const getDateString = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  // Navigate to previous day
  const goToPreviousDay = () => {
    const prevDay = new Date(currentDate);
    prevDay.setDate(prevDay.getDate() - 1);
    onDateChange(prevDay);
  };

  // Navigate to next day
  const goToNextDay = () => {
    const nextDay = new Date(currentDate);
    nextDay.setDate(nextDay.getDate() + 1);
    onDateChange(nextDay);
  };

  // Go to today
  const goToToday = () => {
    onDateChange(new Date());
  };

  // Handle date input change
  const handleDateInputChange = (e) => {
    const dateStr = e.target.value;
    if (dateStr) {
      onDateChange(new Date(dateStr + 'T00:00:00'));
    }
  };

  // Format date for display
  const formatDisplayDate = (date) => {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    const isToday = date.toDateString() === today.toDateString();
    const isYesterday = date.toDateString() === yesterday.toDateString();
    const isTomorrow = date.toDateString() === tomorrow.toDateString();

    if (isToday) return "오늘";
    if (isYesterday) return "어제";
    if (isTomorrow) return "내일";

    return date.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'short'
    });
  };

  // Check if today
  const isToday = currentDate.toDateString() === new Date().toDateString();

  return (
    <motion.div
      className="date-picker"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <button
        className="date-nav-button"
        onClick={goToPreviousDay}
        aria-label="Previous day"
      >
        ←
      </button>

      <div className="date-display">
        <div className="date-label">{formatDisplayDate(currentDate)}</div>
        <input
          type="date"
          className="date-input"
          value={getDateString(currentDate)}
          onChange={handleDateInputChange}
          min="2020-01-01"
          max="2030-12-31"
        />
      </div>

      <button
        className="date-nav-button"
        onClick={goToNextDay}
        aria-label="Next day"
      >
        →
      </button>

      {!isToday && (
        <button
          className="today-button"
          onClick={goToToday}
        >
          오늘
        </button>
      )}
    </motion.div>
  );
}
