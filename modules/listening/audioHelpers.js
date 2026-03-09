/**
 * Audio helpers — utilities for the simulated/real audio player.
 */

/** Format seconds to mm:ss */
export function formatTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

/** Compute playback percentage for a progress bar */
export function playbackPct(current, duration) {
  if (!duration) return 0;
  return Math.min(100, (current / duration) * 100);
}

/** IELTS listening section labels */
export const SECTION_LABELS = {
  1: "Section 1 — Social / Transactional",
  2: "Section 2 — Social / General",
  3: "Section 3 — Educational / Training",
  4: "Section 4 — Academic Monologue",
};
