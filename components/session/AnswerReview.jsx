/**
 * Per-question result row shown after submission.
 * @param {{ question: object, userAnswer: string, isCorrect: boolean, idx: number }} props
 */
export function AnswerReview({ question, userAnswer, isCorrect, idx }) {
  return (
    <div className="card" style={{
      padding: "1.25rem", marginBottom: "0.75rem",
      borderLeft: `4px solid ${isCorrect ? "var(--color-brand-green)" : "var(--color-brand-red)"}`,
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start",
        marginBottom: "0.5rem" }}>
        <span style={{ fontWeight: 600, color: "var(--color-brand-navy)", fontSize: "0.875rem" }}>
          Q{idx + 1}. {question.text}
        </span>
        <span style={{ fontSize: "1.25rem", marginLeft: "0.5rem", flexShrink: 0 }}>
          {isCorrect ? "✅" : "❌"}
        </span>
      </div>
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", fontSize: "0.8rem" }}>
        <span style={{ color: isCorrect ? "var(--color-brand-green)" : "var(--color-brand-red)" }}>
          Your answer: <strong>{userAnswer || "(blank)"}</strong>
        </span>
        {!isCorrect && (
          <span style={{ color: "var(--color-brand-teal)" }}>
            Correct: <strong>{question.answer}</strong>
          </span>
        )}
      </div>
    </div>
  );
}
