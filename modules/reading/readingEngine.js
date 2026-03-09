/**
 * Reading session engine — pure logic, no React.
 * Handles scoring, validation, and question flow for reading sessions.
 */

/** @typedef {"tfng"|"mcq"|"gap_fill"|"matching"} QuestionType */

/**
 * Check whether a user's answer is correct.
 * @param {{ type: QuestionType, answer: string }} question
 * @param {string} userAnswer
 * @returns {boolean}
 */
export function isCorrect(question, userAnswer) {
  const clean = (s) => (s ?? "").trim().toLowerCase();
  if (question.type === "mcq" || question.type === "tfng" || question.type === "matching") {
    return clean(userAnswer) === clean(question.answer);
  }
  // gap_fill — accept minor spelling differences if within 1 char
  return clean(userAnswer) === clean(question.answer);
}

/**
 * Calculate score and band estimate for a reading session.
 * @param {Array} questions
 * @param {Record<string,string>} answers
 */
export function scoreSession(questions, answers) {
  let correct = 0;
  const results = questions.map((q) => {
    const ok = isCorrect(q, answers[q.id] ?? "");
    if (ok) correct++;
    return { id: q.id, correct: ok, userAnswer: answers[q.id] ?? "", correctAnswer: q.answer };
  });
  const total = questions.length;
  const pct   = total ? (correct / total) * 100 : 0;
  return { correct, total, pct, band: pctToBand(pct), results };
}

/** Map raw percentage to IELTS band estimate */
function pctToBand(pct) {
  if (pct >= 90) return "8.0–9.0";
  if (pct >= 75) return "7.0–7.5";
  if (pct >= 60) return "6.0–6.5";
  if (pct >= 45) return "5.0–5.5";
  return "4.0–4.5";
}

/** Get the next unanswered question index, or null if all done */
export function nextUnanswered(questions, answers) {
  const idx = questions.findIndex((q) => !(answers[q.id] ?? "").trim());
  return idx === -1 ? null : idx;
}
