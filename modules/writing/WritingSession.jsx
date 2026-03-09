"use client";
import { useCallback, useState } from "react";
import { useTimer }         from "@/hooks/useTimer.js";
import { useWordCount }     from "@/hooks/useWordCount.js";
import { assessWriting }    from "./writingEngine.js";
import { WritingPromptCard }from "@/components/writing/WritingPromptCard.jsx";
import { WritingEditor }    from "@/components/writing/WritingEditor.jsx";
import { WordCounter }      from "@/components/writing/WordCounter.jsx";
import { SampleAnswerPanel }from "@/components/writing/SampleAnswerPanel.jsx";
import { FeedbackPlaceholder } from "@/components/writing/FeedbackPlaceholder.jsx";
import { SessionResults }   from "@/components/session/SessionResults.jsx";
import { TimerDisplay }     from "@/components/ui/Timer.jsx";
import { ProgressBar }      from "@/components/ui/ProgressBar.jsx";
import { Badge }            from "@/components/ui/Badge.jsx";

/**
 * @param {{ session: { id: string, title: string, duration: number,
 *   taskType: "task1"|"task2", prompt: object } }} props
 */
export function WritingSession({ session }) {
  const taskType = session.taskType ?? "task2";
  const [text,      setText]      = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [result,    setResult]    = useState(null);
  const [showSample, setShowSample] = useState(false);

  const wordCount = useWordCount(text, taskType);

  const handleExpire = useCallback(() => {
    if (!submitted) handleSubmit();
  }, [submitted, text]);

  const timer = useTimer({
    initialSeconds: session.duration ?? 2400,
    onExpire: handleExpire,
    autoStart: true,
  });

  function handleSubmit() {
    const assessment = assessWriting({ text, taskType });
    setResult(assessment);
    setSubmitted(true);
    timer.pause();
  }

  if (submitted && result) {
    const band = result.pass ? "6.0–7.0" : "4.0–5.5";
    return (
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "1.5rem" }}>
        <SessionResults
          correct={result.pass ? 1 : 0}
          total={1}
          band={band}
          module="writing"
        />

        {/* Word count summary */}
        <div className="card" style={{ padding: "1.25rem", marginBottom: "1rem" }}>
          <p style={{ fontWeight: 700, color: "var(--color-brand-navy)", marginBottom: "0.75rem" }}>
            Submission Summary
          </p>
          <p style={{ fontSize: "0.875rem", color: "var(--color-brand-gray)", marginBottom: "0.5rem" }}>
            Word count: <strong style={{ color: "var(--color-brand-navy)" }}>{result.wordCount}</strong>
          </p>
          {result.feedback.length > 0 && (
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {result.feedback.map((fb, i) => (
                <li key={i} style={{ fontSize: "0.875rem", color: "var(--color-brand-navy)",
                  background: "var(--color-brand-gray-light)", padding: "0.625rem 0.875rem",
                  borderRadius: "var(--radius-sm)" }}>
                  {fb}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Your response */}
        <div className="card" style={{ padding: "1.25rem", marginBottom: "1rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.75rem" }}>
            <p style={{ fontWeight: 700, color: "var(--color-brand-navy)" }}>Your Response</p>
            <button className="btn-secondary"
              style={{ fontSize: "0.75rem", padding: "0.375rem 0.75rem" }}
              onClick={() => setShowSample((v) => !v)}>
              {showSample ? "Hide" : "Show"} Sample Answer
            </button>
          </div>
          <p style={{ whiteSpace: "pre-wrap", lineHeight: 1.7, fontSize: "0.875rem",
            color: "var(--color-brand-navy)" }}>
            {text || <em style={{ color: "var(--color-brand-gray)" }}>No response submitted.</em>}
          </p>
        </div>

        {showSample && session.prompt?.sampleAnswer && (
          <SampleAnswerPanel answer={session.prompt.sampleAnswer} />
        )}
      </div>
    );
  }

  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: "1.5rem",
      maxWidth: "1200px", margin: "0 auto", padding: "1.5rem" }}>

      {/* Left — prompt + editor */}
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <WritingPromptCard prompt={session.prompt} taskType={taskType} />
        <div className="card" style={{ padding: "1.25rem", flex: 1 }}>
          <WritingEditor
            value={text}
            onChange={setText}
            placeholder={taskType === "task1"
              ? "Summarise the information in the graph/chart in your own words…"
              : "Write your essay here. Aim for a clear introduction, 2–3 body paragraphs, and a conclusion…"}
            minHeight="320px"
          />
        </div>
      </div>

      {/* Right — timer + word count + submit */}
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {/* Timer */}
        <div className="card" style={{ padding: "1rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center",
            marginBottom: "0.625rem" }}>
            <TimerDisplay display={timer.display} isCritical={timer.isCritical} isLow={timer.isLow} />
            <Badge variant={taskType === "task1" ? "teal" : "navy"}>
              {taskType === "task1" ? "Task 1" : "Task 2"}
            </Badge>
          </div>
          <ProgressBar value={timer.remaining} max={session.duration ?? 2400} height="4px" />
        </div>

        {/* Word counter */}
        <div className="card" style={{ padding: "1rem" }}>
          <WordCounter
            count={wordCount.count}
            isUnder={wordCount.isUnder}
            isOver={wordCount.isOver}
            isInRange={wordCount.isInRange}
            color={wordCount.color}
            pct={wordCount.pct}
            taskType={taskType}
          />
        </div>

        {/* Tips */}
        <div className="card" style={{ padding: "1rem" }}>
          <p style={{ fontWeight: 700, fontSize: "0.8125rem", color: "var(--color-brand-navy)",
            marginBottom: "0.5rem" }}>
            Quick Tips
          </p>
          {[
            "Plan 5 mins before writing",
            "Leave 5 mins to proofread",
            "Vary your sentence structures",
            "Use formal vocabulary throughout",
          ].map((tip) => (
            <p key={tip} style={{ fontSize: "0.75rem", color: "var(--color-brand-gray)",
              lineHeight: 1.5, marginBottom: "0.25rem" }}>
              • {tip}
            </p>
          ))}
        </div>

        {/* Submit */}
        <button className="btn-primary" style={{ width: "100%" }} onClick={handleSubmit}>
          Submit Essay ✓
        </button>

        {/* AI feedback placeholder */}
        <FeedbackPlaceholder />
      </div>
    </div>
  );
}
