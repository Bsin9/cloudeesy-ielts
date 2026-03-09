/**
 * @param {{ questions: string[], activeIdx: number, onNext: () => void }} props
 */
export function FollowUpQuestions({ questions = [], activeIdx = 0, onNext }) {
  if (!questions.length) return null;
  const isLast = activeIdx >= questions.length - 1;

  return (
    <div>
      <div className="card" style={{ padding: "1.25rem", marginBottom: "0.75rem",
        border: "2px solid var(--color-brand-teal-pale)" }}>
        <p style={{ fontSize: "0.7rem", fontWeight: 700, color: "var(--color-brand-teal)",
          letterSpacing: "0.08em", marginBottom: "0.5rem" }}>
          FOLLOW-UP {activeIdx + 1}/{questions.length}
        </p>
        <p style={{ fontWeight: 700, color: "var(--color-brand-navy)", fontSize: "1rem", lineHeight: 1.5 }}>
          {questions[activeIdx]}
        </p>
      </div>
      <button className={isLast ? "btn-secondary" : "btn-primary"}
        style={{ width: "100%", justifyContent: "center" }}
        onClick={onNext}>
        {isLast ? "Finish Session ✓" : "Next Question →"}
      </button>
    </div>
  );
}
