import { useState, useEffect, useCallback } from "react";
import { getGamesByDate } from "../services/nhlApi";
import usePolling from "./usePolling";

/**
 * Custom hook to fetch and manage NHL games data
 * @param {Date|string|null} selectedDate - Date object, YYYY-MM-DD string, or null
 * @param {boolean} enablePolling - Whether to enable auto-refresh
 * @param {number} pollingInterval - Polling interval in milliseconds (default: 60000)
 */
export default function useNHLGames(selectedDate = null, enablePolling = true, pollingInterval = 60000) {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);

  // Convert Date to string if needed
  const getDateString = (date) => {
    if (!date) return null;
    if (typeof date === 'string') return date;
    if (date instanceof Date) {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    }
    return null;
  };

  // Fetch games function
  const fetchGames = useCallback(async () => {
    try {
      setError(null);
      const dateStr = getDateString(selectedDate);
      const data = await getGamesByDate(dateStr);
      setGames(data);
      setLastUpdated(new Date());
      setLoading(false);
    } catch (err) {
      console.error("Failed to fetch games:", err);
      setError(err.message || "Failed to load games");
      setLoading(false);
    }
  }, [selectedDate]);

  // Initial fetch
  useEffect(() => {
    fetchGames();
  }, [fetchGames]);

  // Set up polling for live updates (only for today's date)
  const isToday = selectedDate === new Date().toISOString().split('T')[0] || !selectedDate;
  usePolling(fetchGames, pollingInterval, enablePolling && isToday);

  // Manual refresh function
  const refresh = useCallback(async () => {
    setLoading(true);
    await fetchGames();
  }, [fetchGames]);

  return {
    games,
    loading,
    error,
    lastUpdated,
    refresh
  };
}
