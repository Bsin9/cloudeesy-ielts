"use client";
import { useState } from "react";
import { Badge } from "@/components/ui/Badge.jsx";

/**
 * @param {{ sample: string }} props
 */
export function SampleAnswerPanel({ sample }) {
  const [open, setOpen] = useState(false);
  if (!sample) return null;

  return (
    <div className="card" style={{ overflow: "hidden" }}>
      <button className="btn-ghost"
        style={{ width: "100%", justifyContent: "space-between", padding: "1rem 1.25rem", borderRadius: 0 }}
        onClick={() => setOpen((v) => !v)}>
        <span style={{ fontWeight: 700, color: "var(--color-brand-navy)", display: "flex", alignItems: "center", gap: "0.5rem" }}>
          📄 Sample Band 7 Answer
          <Badge variant="teal">reveal</Badge>
        </span>
        <span>{open ? "▲" : "▼"}</span>
      </button>
      {open && (
        <div style={{ padding: "0 1.25rem 1.25rem" }}>
          <div style={{ padding: "1rem", background: "var(--color-brand-gray-light)", borderRadius: "0.5rem",
            fontSize: "0.875rem", lineHeight: 1.8, color: "var(--color-brand-navy)", whiteSpace: "pre-wrap" }}>
            {sample}
          </div>
        </div>
      )}
    </div>
  );
}
