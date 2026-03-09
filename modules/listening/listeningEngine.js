/**
 * Listening session engine — pure logic.
 */

/**
 * Score a listening session.
 * @param {Array} questions
 * @param {Record<string,string>} answers
 */
export function scoreListening(questions, answers) {
  let correct = 0;
  const results = questions.map((q) => {
    const user = (answers[q.id] ?? "").trim().toLowerCase();
    const ok = q.type === "mcq"
      ? user === q.answer.toLowerCase()
      : user === q.answer.trim().toLowerCase();
    if (ok) correct++;
    return { id: q.id, correct: ok, userAnswer: answers[q.id] ?? "", correctAnswer: q.answer };
  });
  const total = questions.length;
  const pct   = total ? (correct / total) * 100 : 0;
  return { correct, total, pct, band: pctToBand(pct), results };
}

function pctToBand(pct) {
  if (pct >= 90) return "8.0–9.0";
  if (pct >= 75) return "7.0–7.5";
  if (pct >= 60) return "6.0–6.5";
  if (pct >= 45) return "5.0–5.5";
  return "4.0–4.5";
}
