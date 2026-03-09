/**
 * Writing session engine — pure logic.
 */

/** Minimum / maximum word counts per task type */
export const WORD_LIMITS = {
  task1: { min: 150, recommended: 180 },
  task2: { min: 250, recommended: 280 },
};

/**
 * Assess a writing submission for minimum compliance.
 * @param {{ text: string, taskType: "task1"|"task2" }} submission
 * @returns {{ pass: boolean, wordCount: number, feedback: string[] }}
 */
export function assessWriting(submission) {
  const { text, taskType } = submission;
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  const limit = WORD_LIMITS[taskType];
  const feedback = [];

  if (words < limit.min) {
    feedback.push(`⚠️ Under the minimum word count (${words}/${limit.min}). Aim for at least ${limit.recommended} words.`);
  }
  if (!hasParagraphStructure(text)) {
    feedback.push("📋 Structure your response into clear paragraphs with an introduction and conclusion.");
  }
  if (!hasLinkingLanguage(text)) {
    feedback.push("🔗 Use linking words (Furthermore, However, In addition) to improve cohesion.");
  }

  return { pass: words >= limit.min, wordCount: words, feedback };
}

/** Check for basic paragraph structure */
function hasParagraphStructure(text) {
  return (text.match(/\n\n/g) || []).length >= 1 || text.length > 400;
}

/** Check for linking language presence */
function hasLinkingLanguage(text) {
  const words = /\b(however|furthermore|moreover|therefore|consequently|in addition|firstly|secondly|finally|in conclusion)\b/i;
  return words.test(text);
}
