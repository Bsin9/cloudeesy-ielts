"use client";
import { useState } from "react";

/**
 * @param {{ lines: string[] }} props
 */
export function TranscriptReveal({ lines = [] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="card" style={{ overflow: "hidden" }}>
      <button className="btn-ghost"
        style={{ width: "100%", justifyContent: "space-between", padding: "1rem 1.25rem", borderRadius: 0 }}
        onClick={() => setOpen((v) => !v)}>
        <span style={{ fontWeight: 700, color: "var(--color-brand-navy)" }}>📜 Transcript</span>
        <span>{open ? "▲" : "▼"}</span>
      </button>
      {open && (
        <div style={{ padding: "0 1.25rem 1.25rem" }}>
          {lines.map((line, i) => (
            <p key={i} style={{ fontSize: "0.875rem", color: "var(--color-brand-navy)",
              lineHeight: 1.7, marginBottom: "0.5rem" }}>
              {line}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}
