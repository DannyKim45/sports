import { useEffect, useRef, useCallback } from "react";

/**
 * Custom hook for polling data at regular intervals
 * @param {Function} callback - Function to call on each poll
 * @param {number} interval - Polling interval in milliseconds
 * @param {boolean} enabled - Whether polling is enabled
 */
export default function usePolling(callback, interval = 60000, enabled = true) {
  const savedCallback = useRef();
  const intervalRef = useRef();

  // Remember the latest callback
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval
  useEffect(() => {
    if (!enabled) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      return;
    }

    function tick() {
      if (savedCallback.current) {
        savedCallback.current();
      }
    }

    intervalRef.current = setInterval(tick, interval);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [interval, enabled]);

  // Manual trigger function
  const trigger = useCallback(() => {
    if (savedCallback.current) {
      savedCallback.current();
    }
  }, []);

  return trigger;
}
