"use client";
import { Card } from "@/components/ui/Card.jsx";

/**
 * Simple inline bar chart — no external chart library needed for 7 bars.
 * @param {{ data: Array<{ day: string, sessions: number, minutes: number }> }} props
 */
export function WeeklyProgressChart({ data = [] }) {
  const maxMinutes = Math.max(...data.map((d) => d.minutes), 1);

  return (
    <Card>
      <h3 style={{ fontWeight: 700, color: "var(--color-brand-navy)", marginBottom: "1.25rem" }}>
        This Week
      </h3>
      <div style={{ display: "flex", alignItems: "flex-end", gap: "0.5rem", height: "80px" }}>
        {data.map((d) => {
          const pct = (d.minutes / maxMinutes) * 100;
          return (
            <div key={d.day} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "0.25rem" }}>
              <div style={{ width: "100%", display: "flex", flexDirection: "column", justifyContent: "flex-end", height: "60px" }}>
                <div
                  title={`${d.minutes} min, ${d.sessions} sessions`}
                  style={{
                    width: "100%", background: d.sessions > 0 ? "var(--color-brand-teal)" : "var(--color-brand-gray-light)",
                    borderRadius: "0.25rem 0.25rem 0 0",
                    height: `${Math.max(pct, d.sessions > 0 ? 8 : 0)}%`,
                    transition: "height 0.5s ease",
                  }} />
              </div>
              <span style={{ fontSize: "0.65rem", color: "var(--color-brand-gray)", fontWeight: 600 }}>
                {d.day.slice(0, 3)}
              </span>
            </div>
          );
        })}
      </div>
    </Card>
  );
}
