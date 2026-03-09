/**
 * Speaking module UI helpers.
 */

/** Phase step colour */
export function phaseColor(phase) {
  const map = {
    intro:    "var(--color-brand-gray)",
    prep:     "var(--color-brand-gold)",
    talk:     "var(--color-brand-teal)",
    followup: "var(--color-brand-navy)",
    done:     "var(--color-brand-green)",
  };
  return map[phase] ?? "var(--color-brand-gray)";
}

/** The 4 IELTS speaking assessment criteria */
export const SPEAKING_CRITERIA = [
  { key: "fc",  label: "Fluency & Coherence",          desc: "Did you speak smoothly with logical flow?" },
  { key: "lr",  label: "Lexical Resource",             desc: "Did you use a range of vocabulary?" },
  { key: "gr",  label: "Grammatical Range & Accuracy", desc: "Did you use varied, accurate grammar?" },
  { key: "p",   label: "Pronunciation",                desc: "Was your pronunciation clear and intelligible?" },
];
