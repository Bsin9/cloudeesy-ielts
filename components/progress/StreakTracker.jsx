import { Card } from "@/components/ui/Card.jsx";

/**
 * @param {{ weeklyActivity: Array<{ day: string, sessions: number }> }} props
 */
export function StreakTracker({ weeklyActivity = [] }) {
  return (
    <Card>
      <h3 style={{ fontWeight: 700, color: "var(--color-brand-navy)", marginBottom: "1rem" }}>
        🔥 Study Streak
      </h3>
      <div style={{ display: "flex", gap: "0.5rem", justifyContent: "space-between" }}>
        {weeklyActivity.map((d) => (
          <div key={d.day} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "0.375rem" }}>
            <div style={{
              width: "2rem", height: "2rem", borderRadius: "50%",
              background: d.sessions > 0 ? "var(--color-brand-teal)" : "var(--color-brand-gray-light)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "0.75rem", color: d.sessions > 0 ? "#fff" : "var(--color-brand-gray)", fontWeight: 700,
            }}>
              {d.sessions > 0 ? "✓" : ""}
            </div>
            <span style={{ fontSize: "0.65rem", color: "var(--color-brand-gray)", fontWeight: 600 }}>
              {d.day.slice(0, 2)}
            </span>
          </div>
        ))}
      </div>
    </Card>
  );
}
