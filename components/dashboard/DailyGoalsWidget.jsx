"use client";
import { useState } from "react";
import { Card } from "@/components/ui/Card.jsx";

const DEFAULT_GOALS = [
  { id: "g1", label: "Complete 1 reading practice", done: false },
  { id: "g2", label: "Write 150+ words for Task 1",  done: false },
  { id: "g3", label: "Review 5 vocabulary words",    done: false },
];

export function DailyGoalsWidget() {
  const [goals, setGoals] = useState(DEFAULT_GOALS);
  const completed = goals.filter((g) => g.done).length;

  function toggle(id) {
    setGoals((prev) => prev.map((g) => g.id === id ? { ...g, done: !g.done } : g));
  }

  return (
    <Card padding="1.25rem">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.875rem" }}>
        <h3 style={{ fontWeight: 700, color: "var(--color-brand-navy)" }}>Today's Goals</h3>
        <span style={{ fontSize: "0.75rem", color: "var(--color-brand-teal)", fontWeight: 700 }}>
          {completed}/{goals.length}
        </span>
      </div>
      <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        {goals.map((g) => (
          <li key={g.id}>
            <button
              onClick={() => toggle(g.id)}
              style={{ display: "flex", alignItems: "center", gap: "0.625rem", background: "none",
                border: "none", cursor: "pointer", padding: "0.25rem 0", width: "100%", textAlign: "left" }}>
              <span style={{
                width: "1.25rem", height: "1.25rem", borderRadius: "50%", flexShrink: 0,
                display: "flex", alignItems: "center", justifyContent: "center",
                border: `2px solid ${g.done ? "var(--color-brand-teal)" : "var(--color-brand-gray-mid)"}`,
                background: g.done ? "var(--color-brand-teal)" : "transparent",
                transition: "all 0.15s",
              }}>
                {g.done && <span style={{ color: "#fff", fontSize: "0.65rem" }}>✓</span>}
              </span>
              <span style={{ fontSize: "0.875rem", color: "var(--color-brand-navy)",
                textDecoration: g.done ? "line-through" : "none",
                opacity: g.done ? 0.5 : 1 }}>
                {g.label}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </Card>
  );
}
