/**
 * Speaking session engine — phase machine logic.
 */

/** Speaking phase order */
export const PHASES = ["intro", "prep", "talk", "followup", "done"];

/** Phase timer durations in seconds */
export const PHASE_DURATIONS = {
  prep:    60,   // 1 minute preparation
  talk:    120,  // 2 minutes talk
};

/** Phase labels for display */
export const PHASE_LABELS = {
  intro:    "Introduction",
  prep:     "Preparation",
  talk:     "Speaking",
  followup: "Follow-up Questions",
  done:     "Complete",
};

/** Get the next phase */
export function nextPhase(current) {
  const idx = PHASES.indexOf(current);
  return idx === -1 || idx === PHASES.length - 1 ? "done" : PHASES[idx + 1];
}

/** Speaking Part 2 tips shown during prep */
export const PREP_TIPS = [
  "Make notes on each bullet point on the cue card",
  "Think of 1–2 specific examples for each point",
  "Plan a clear introduction and a short conclusion",
  "Don't try to memorise — speak naturally from your notes",
];
