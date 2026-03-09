"use client";
import { useCallback } from "react";
import { useSessionState } from "@/hooks/useSession.js";
import { useTimer }        from "@/hooks/useTimer.js";
import { scoreListening }  from "./listeningEngine.js";
import { AudioPlayer }     from "@/components/listening/AudioPlayer.jsx";
import { ListeningQuestion }from "@/components/listening/ListeningQuestion.jsx";
import { TranscriptReveal } from "@/components/listening/TranscriptReveal.jsx";
import { SectionProgress }  from "@/components/listening/SectionProgress.jsx";
import { SessionResults }   from "@/components/session/SessionResults.jsx";
import { AnswerReview }     from "@/components/session/AnswerReview.jsx";
import { ExplanationPanel } from "@/components/session/ExplanationPanel.jsx";
import { TimerDisplay }     from "@/components/ui/Timer.jsx";
import { ProgressBar }      from "@/components/ui/ProgressBar.jsx";
import { Badge }            from "@/components/ui/Badge.jsx";
import { SECTION_LABELS }   from "@/modules/listening/audioHelpers.js";

/**
 * @param {{ session: { id: string, title: string, duration: number,
 *   audioDuration?: number, sections?: object[], questions: object[] } }} props
 */
export default function ListeningSession({ session }) {
  const questions = session.questions ?? [];
  const sections  = session.sections  ?? [];

  const { state, setAnswer, setActiveQ, submit, answered } = useSessionState({
    phase:       "questions",
    answers:     {},
    submitted:   false,
    showPassage: false,
    activeQ:     0,
  });

  const handleExpire = useCallback(() => {
    if (!state.submitted) submit();
  }, [state.submitted, submit]);

  const timer = useTimer({
    initialSeconds: session.duration ?? 1800,
    onExpire: handleExpire,
    autoStart: true,
  });

  const progress = Math.round((answered / questions.length) * 100);

  /* ── Results view ─────────────────────────────────────────── */
  if (state.submitted) {
    const { correct, total, band, results } = scoreListening(questions, state.answers);
    return (
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "1.5rem" }}>
        <SessionResults correct={correct} total={total} band={band} module="listening" />

        {/* Transcript reveal after submission */}
        {session.transcript && (
          <div style={{ marginBottom: "1rem" }}>
            <TranscriptReveal transcript={session.transcript} />
          </div>
        )}

        <div>
          {results.map((r, i) => (
            <div key={r.id}>
              <AnswerReview
                question={questions[i]}
                userAnswer={r.userAnswer}
                isCorrect={r.correct}
                idx={i}
              />
              {!r.correct && <ExplanationPanel explanation={questions[i].explanation} />}
            </div>
          ))}
        </div>
      </div>
    );
  }

  /* ── Active session view ──────────────────────────────────── */
  const currentSection = sections.find((s) =>
    s.questionIds?.includes(questions[state.activeQ]?.id)
  ) ?? sections[0];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem",
      maxWidth: "900px", margin: "0 auto", padding: "1.5rem" }}>

      {/* Audio player */}
      <AudioPlayer
        src={session.audioSrc}
        duration={session.audioDuration ?? 600}
        sectionLabel={currentSection
          ? (SECTION_LABELS[currentSection.id] ?? currentSection.label ?? currentSection.id)
          : undefined}
      />

      {/* Timer + progress */}
      <div className="card" style={{ padding: "1rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center",
          marginBottom: "0.625rem" }}>
          <TimerDisplay display={timer.display} isCritical={timer.isCritical} isLow={timer.isLow} />
          <span style={{ fontSize: "0.75rem", color: "var(--color-brand-gray)" }}>
            {answered}/{questions.length} answered
          </span>
        </div>
        <ProgressBar value={answered} max={questions.length} height="4px" />
      </div>

      {/* Section progress */}
      {sections.length > 0 && (
        <SectionProgress
          sections={sections}
          questions={questions}
          answers={state.answers}
          activeQ={state.activeQ}
        />
      )}

      {/* Question nav dots */}
      <div className="card" style={{ padding: "1rem" }}>
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
          {questions.map((q, i) => {
            const isAnswered = !!(state.answers[q.id] ?? "").trim();
            const isActive   = state.activeQ === i;
            return (
              <button key={q.id} onClick={() => setActiveQ(i)} style={{
                width: "2rem", height: "2rem", borderRadius: "50%", border: "none",
                fontWeight: 700, fontSize: "0.75rem", cursor: "pointer",
                background: isActive  ? "var(--color-brand-teal)"
                  : isAnswered ? "var(--color-brand-teal-pale)" : "var(--color-brand-gray-light)",
                color: isActive ? "#fff" : isAnswered
                  ? "var(--color-brand-teal)" : "var(--color-brand-gray)",
              }}>
                {i + 1}
              </button>
            );
          })}
        </div>
      </div>

      {/* Active question */}
      {(() => {
        const q = questions[state.activeQ];
        if (!q) return null;
        return (
          <div className="card" style={{ padding: "1.25rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem" }}>
              <Badge variant="teal">Q{state.activeQ + 1}</Badge>
              <Badge variant="gray">
                {q.type === "gap_fill" ? "Gap Fill" : q.type === "tfng" ? "TFNG" : "MCQ"}
              </Badge>
            </div>
            <p style={{ fontWeight: 600, color: "var(--color-brand-navy)",
              marginBottom: "1.25rem", lineHeight: 1.6 }}>
              {q.text}
            </p>
            <ListeningQuestion
              question={q}
              value={state.answers[q.id] ?? ""}
              onChange={(v) => setAnswer(q.id, v)}
            />
            <div style={{ display: "flex", gap: "0.5rem", marginTop: "1.25rem" }}>
              {state.activeQ > 0 && (
                <button className="btn-secondary" style={{ flex: 1 }}
                  onClick={() => setActiveQ(state.activeQ - 1)}>← Prev</button>
              )}
              {state.activeQ < questions.length - 1 ? (
                <button className="btn-primary" style={{ flex: 1 }}
                  onClick={() => setActiveQ(state.activeQ + 1)}>Next →</button>
              ) : (
                <button className="btn-primary" style={{ flex: 1 }} onClick={submit}>
                  Submit ✓
                </button>
              )}
            </div>
          </div>
        );
      })()}
    </div>
  );
}
