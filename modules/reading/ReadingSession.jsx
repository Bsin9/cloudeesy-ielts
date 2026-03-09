"use client";
import { useCallback } from "react";
import { useSessionState } from "@/hooks/useSession.js";
import { useTimer }        from "@/hooks/useTimer.js";
import { scoreSession }    from "./readingEngine.js";
import { PassageView }     from "@/components/reading/PassageView.jsx";
import { ReadingQuestion } from "@/components/reading/ReadingQuestion.jsx";
import { SessionResults }  from "@/components/session/SessionResults.jsx";
import { AnswerReview }    from "@/components/session/AnswerReview.jsx";
import { ExplanationPanel }from "@/components/session/ExplanationPanel.jsx";
import { ProgressBar }     from "@/components/ui/ProgressBar.jsx";
import { Badge }           from "@/components/ui/Badge.jsx";
import { TimerDisplay }    from "@/components/ui/Timer.jsx";

/**
 * @param {{ session: { id: string, title: string, duration: number, passage: object, questions: object[] } }} props
 */
export function ReadingSession({ session }) {
  const questions = session.questions ?? [];

  const { state, setAnswer, setActiveQ, setPhase, submit, toggle, answered } = useSessionState({
    phase: "questions",
    answers: {},
    submitted: false,
    showPassage: true,
    activeQ: 0,
  });

  const handleExpire = useCallback(() => { if (!state.submitted) submit(); }, [state.submitted, submit]);
  const timer = useTimer({ initialSeconds: session.duration ?? 1200, onExpire: handleExpire, autoStart: true });

  const progress = Math.round((answered / questions.length) * 100);

  if (state.submitted) {
    const { correct, total, band, results } = scoreSession(questions, state.answers);
    return (
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "1.5rem" }}>
        <SessionResults correct={correct} total={total} band={band} module="reading" />
        <div>
          {results.map((r, i) => (
            <div key={r.id}>
              <AnswerReview question={questions[i]} userAnswer={r.userAnswer} isCorrect={r.correct} idx={i} />
              {!r.correct && <ExplanationPanel explanation={questions[i].explanation} />}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 360px", gap: "1.5rem",
      maxWidth: "1200px", margin: "0 auto", padding: "1.5rem" }}>
      {/* Passage */}
      <div className="card" style={{ padding: "1.5rem", overflowY: "auto", maxHeight: "80vh" }}>
        <PassageView title={session.passage?.title ?? session.title}
          body={session.passage?.body ?? ""} source={session.passage?.source} />
      </div>

      {/* Questions panel */}
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {/* Timer */}
        <div className="card" style={{ padding: "1rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center",
            marginBottom: "0.625rem" }}>
            <TimerDisplay display={timer.display} isCritical={timer.isCritical} isLow={timer.isLow} />
            <span style={{ fontSize: "0.75rem", color: "var(--color-brand-gray)" }}>
              {answered}/{questions.length}
            </span>
          </div>
          <ProgressBar value={answered} max={questions.length} height="4px" />
        </div>

        {/* Q nav dots */}
        <div className="card" style={{ padding: "1rem" }}>
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
            {questions.map((q, i) => {
              const isAnswered = !!(state.answers[q.id] ?? "").trim();
              const isActive   = state.activeQ === i;
              return (
                <button key={q.id} onClick={() => setActiveQ(i)} style={{
                  width: "2rem", height: "2rem", borderRadius: "50%", border: "none",
                  fontWeight: 700, fontSize: "0.75rem", cursor: "pointer",
                  background: isActive ? "var(--color-brand-teal)"
                    : isAnswered ? "var(--color-brand-teal-pale)" : "var(--color-brand-gray-light)",
                  color: isActive ? "#fff" : isAnswered ? "var(--color-brand-teal)" : "var(--color-brand-gray)",
                }}>{i + 1}</button>
              );
            })}
          </div>
        </div>

        {/* Active question */}
        {(() => {
          const q = questions[state.activeQ];
          if (!q) return null;
          return (
            <div className="card" style={{ padding: "1.25rem", flex: 1 }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem" }}>
                <Badge variant="teal">Q{state.activeQ + 1}</Badge>
                <Badge variant="gray">{q.type === "gap_fill" ? "Gap Fill" : q.type === "tfng" ? "TFNG" : "MCQ"}</Badge>
              </div>
              <p style={{ fontWeight: 600, color: "var(--color-brand-navy)", marginBottom: "1.25rem", lineHeight: 1.6 }}>
                {q.text}
              </p>
              <ReadingQuestion question={q} value={state.answers[q.id] ?? ""} onChange={(v) => setAnswer(q.id, v)} />
              <div style={{ display: "flex", gap: "0.5rem", marginTop: "1.25rem" }}>
                {state.activeQ > 0 && (
                  <button className="btn-secondary" style={{ flex: 1 }}
                    onClick={() => setActiveQ(state.activeQ - 1)}>← Prev</button>
                )}
                {state.activeQ < questions.length - 1 ? (
                  <button className="btn-primary" style={{ flex: 1 }}
                    onClick={() => setActiveQ(state.activeQ + 1)}>Next →</button>
                ) : (
                  <button className="btn-primary" style={{ flex: 1 }} onClick={submit}>Submit ✓</button>
                )}
              </div>
            </div>
          );
        })()}
      </div>
    </div>
  );
}
