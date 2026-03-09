"use client";
import { useState, useCallback } from "react";
import { useTimer }          from "@/hooks/useTimer.js";
import {
  PHASES, PHASE_LABELS, PHASE_DURATIONS, nextPhase, PREP_TIPS,
} from "./speakingEngine.js";
import { CueCard }           from "@/components/speaking/CueCard.jsx";
import { RecordingUI }       from "@/components/speaking/RecordingUI.jsx";
import { FollowUpQuestions } from "@/components/speaking/FollowUpQuestions.jsx";
import { SpeakingTips }      from "@/components/speaking/SpeakingTips.jsx";
import { SessionResults }    from "@/components/session/SessionResults.jsx";
import { TimerDisplay }      from "@/components/ui/Timer.jsx";
import { ProgressBar }       from "@/components/ui/ProgressBar.jsx";
import { Badge }             from "@/components/ui/Badge.jsx";

/**
 * @param {{ session: { id: string, title: string, cueCard: object,
 *   followUpQuestions: string[] } }} props
 */
export function SpeakingSession({ session }) {
  const [phase,    setPhase]    = useState("intro");
  const [done,     setDone]     = useState(false);
  const [notes,    setNotes]    = useState("");
  const [recording, setRecording] = useState(false);

  const phaseLabel    = PHASE_LABELS[phase] ?? phase;
  const phaseDuration = PHASE_DURATIONS[phase] ?? 0;

  const advancePhase = useCallback(() => {
    const np = nextPhase(phase);
    if (np === "done") {
      setDone(true);
    } else {
      setPhase(np);
    }
  }, [phase]);

  const timer = useTimer({
    initialSeconds: phaseDuration,
    onExpire: advancePhase,
    autoStart: phase === "prep" || phase === "talk",
  });

  function handleStartPhase(p) {
    const np = p ?? nextPhase(phase);
    if (np === "done") { setDone(true); return; }
    setPhase(np);
  }

  if (done) {
    return (
      <div style={{ maxWidth: "700px", margin: "0 auto", padding: "1.5rem" }}>
        <SessionResults
          correct={1}
          total={1}
          band="Practice"
          module="speaking"
        />
        <div className="card" style={{ padding: "1.5rem", marginTop: "1rem" }}>
          <p style={{ fontWeight: 700, color: "var(--color-brand-navy)", marginBottom: "0.75rem" }}>
            Speaking Part 2 — Complete
          </p>
          <p style={{ fontSize: "0.875rem", color: "var(--color-brand-gray)", lineHeight: 1.7 }}>
            Well done for completing the practice. In a real exam your response would be scored by
            an examiner on Fluency &amp; Coherence, Lexical Resource, Grammatical Range &amp; Accuracy,
            and Pronunciation.
          </p>
          <div style={{ marginTop: "1rem" }}>
            <p style={{ fontWeight: 700, fontSize: "0.8125rem", color: "var(--color-brand-navy)",
              marginBottom: "0.5rem" }}>
              Self-assessment checklist
            </p>
            {[
              "Did I speak for the full 1–2 minutes?",
              "Did I cover all the bullet points on the cue card?",
              "Did I use a range of vocabulary?",
              "Was my speech fluent with minimal long pauses?",
            ].map((q) => (
              <label key={q} style={{ display: "flex", alignItems: "center", gap: "0.625rem",
                fontSize: "0.875rem", color: "var(--color-brand-navy)", marginBottom: "0.5rem",
                cursor: "pointer" }}>
                <input type="checkbox" />
                {q}
              </label>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: "1.5rem",
      maxWidth: "1100px", margin: "0 auto", padding: "1.5rem" }}>

      {/* Left — phase content */}
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>

        {/* Intro */}
        {phase === "intro" && (
          <div className="card" style={{ padding: "2rem", textAlign: "center" }}>
            <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🎤</div>
            <h2 style={{ color: "var(--color-brand-navy)", fontWeight: 800, marginBottom: "0.5rem" }}>
              Speaking Part 2
            </h2>
            <p style={{ color: "var(--color-brand-gray)", lineHeight: 1.7, marginBottom: "1.5rem",
              maxWidth: "480px", margin: "0 auto 1.5rem" }}>
              You will have <strong>1 minute</strong> to prepare, then speak for
              <strong> 1–2 minutes</strong> on the topic below. You may make notes during preparation.
            </p>
            <CueCard cueCard={session.cueCard} showBullets={false} />
            <button className="btn-primary" style={{ marginTop: "1.5rem" }}
              onClick={() => handleStartPhase("prep")}>
              Start Preparation (1 min) →
            </button>
          </div>
        )}

        {/* Prep */}
        {phase === "prep" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <CueCard cueCard={session.cueCard} showBullets />
            <div className="card" style={{ padding: "1.25rem" }}>
              <p style={{ fontWeight: 700, color: "var(--color-brand-navy)", marginBottom: "0.5rem",
                fontSize: "0.875rem" }}>
                Your preparation notes
              </p>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Jot down key ideas, examples, vocabulary…"
                style={{
                  width: "100%", minHeight: "120px", padding: "0.75rem",
                  border: "1px solid var(--color-brand-gray-mid)", borderRadius: "var(--radius-sm)",
                  fontFamily: "inherit", fontSize: "0.875rem", resize: "vertical",
                  color: "var(--color-brand-navy)", boxSizing: "border-box",
                }}
              />
            </div>
            <button className="btn-primary" onClick={() => handleStartPhase("talk")}>
              Start Speaking →
            </button>
          </div>
        )}

        {/* Talk */}
        {phase === "talk" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <CueCard cueCard={session.cueCard} showBullets />
            {notes && (
              <div className="card" style={{ padding: "1rem",
                background: "var(--color-brand-gray-light)" }}>
                <p style={{ fontWeight: 600, fontSize: "0.75rem", color: "var(--color-brand-gray)",
                  marginBottom: "0.375rem" }}>YOUR NOTES</p>
                <p style={{ fontSize: "0.875rem", color: "var(--color-brand-navy)",
                  whiteSpace: "pre-wrap" }}>{notes}</p>
              </div>
            )}
            <RecordingUI
              isRecording={recording}
              onToggle={() => setRecording((v) => !v)}
            />
            <button className="btn-secondary" onClick={() => handleStartPhase("followup")}>
              Finish Speaking →
            </button>
          </div>
        )}

        {/* Follow-up */}
        {phase === "followup" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <FollowUpQuestions questions={session.followUpQuestions ?? []} />
            <button className="btn-primary" onClick={() => setDone(true)}>
              Finish Session ✓
            </button>
          </div>
        )}
      </div>

      {/* Right — timer + tips */}
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {/* Phase indicator */}
        <div className="card" style={{ padding: "1rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center",
            marginBottom: "0.625rem" }}>
            <Badge variant="teal">{phaseLabel}</Badge>
            {phaseDuration > 0 && (
              <TimerDisplay display={timer.display} isCritical={timer.isCritical} isLow={timer.isLow} />
            )}
          </div>
          {phaseDuration > 0 && (
            <ProgressBar value={timer.remaining} max={phaseDuration} height="4px" />
          )}
          {/* Phase steps */}
          <div style={{ display: "flex", gap: "0.375rem", marginTop: "0.875rem", flexWrap: "wrap" }}>
            {PHASES.filter((p) => p !== "done").map((p) => (
              <span key={p} style={{
                fontSize: "0.65rem", fontWeight: 700, padding: "0.2rem 0.5rem",
                borderRadius: "var(--radius-full)",
                background: p === phase ? "var(--color-brand-teal)" : "var(--color-brand-gray-light)",
                color: p === phase ? "#fff" : "var(--color-brand-gray)",
              }}>
                {PHASE_LABELS[p]}
              </span>
            ))}
          </div>
        </div>

        {/* Tips */}
        <SpeakingTips tips={PREP_TIPS} phase={phase} />
      </div>
    </div>
  );
}
