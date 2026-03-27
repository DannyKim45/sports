import { useState, useEffect } from "react";
import { fetchPlayerCurrentStats } from "../services/mlbApi";

/**
 * Fetches live current season stats for a player.
 * Falls back to the hardcoded stats on error.
 */
export function useMLBPlayerStats(player) {
  const [liveStats, setLiveStats] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!player?.mlbId) return;
    let cancelled = false;
    setLoading(true);
    setLiveStats(null);

    fetchPlayerCurrentStats(player.mlbId)
      .then(({ hitting, pitching }) => {
        if (cancelled) return;
        const position = player.position;
        const isTwoWay = position === "DH / Pitcher";
        const isPitcher = !isTwoWay && (
          position === "SP" || position === "RP" ||
          position === "P" || position?.includes("Pitcher")
        );

        let resolved = null;
        if (isTwoWay) {
          // Merge hitting + pitching into one object for Ohtani
          resolved = { ...(hitting || {}), ...(pitching || {}) };
          if (hitting) {
            resolved.battingAvg = hitting.battingAvg;
            resolved.homeRuns = hitting.homeRuns;
            resolved.rbi = hitting.rbi;
            resolved.stolenBases = hitting.stolenBases;
            resolved.hits = hitting.hits;
            resolved.doubles = hitting.doubles;
            resolved.triples = hitting.triples;
          }
          if (pitching) {
            resolved.era = pitching.era;
            resolved.wins = pitching.wins;
            resolved.losses = pitching.losses;
            resolved.saves = pitching.saves;
            resolved.inningsPitched = pitching.inningsPitched;
            resolved.strikeouts = pitching.strikeouts;
            resolved.whip = pitching.whip;
          }
        } else if (isPitcher) {
          resolved = pitching;
        } else {
          resolved = hitting;
        }

        setLiveStats(resolved);
      })
      .catch(() => {
        if (!cancelled) setLiveStats(null);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => { cancelled = true; };
  }, [player?.mlbId]);

  return { liveStats, loading };
}
