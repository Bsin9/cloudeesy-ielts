"use client";
import { WordCounter } from "./WordCounter.jsx";
import { useWordCount } from "@/hooks/useWordCount.js";

/**
 * @param {{ value: string, onChange: (v: string) => void, taskType?: string }} props
 */
export function WritingEditor({ value, onChange, taskType = "task2" }) {
  const min  = taskType === "task1" ? 150 : 250;
  const max  = taskType === "task1" ? 200 : 300;
  const wc   = useWordCount(value, min, max);

  return (
    <div>
      <textarea
        className="input-field"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Begin writing your response here…"
        aria-label="Writing response"
        style={{ width: "100%", minHeight: "320px", resize: "vertical", lineHeight: 1.75 }}
      />
      <div style={{ marginTop: "0.5rem", display: "flex", justifyContent: "flex-end" }}>
        <WordCounter count={wc.count} min={min} max={max} color={wc.color} />
      </div>
    </div>
  );
}
