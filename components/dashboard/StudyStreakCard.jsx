import { Card } from "@/components/ui/Card.jsx";

/**
 * @param {{ currentStreak: number, longestStreak: number, activeDays: number, totalMinutes: number }} props
 */
export function StudyStreakCard({ currentStreak, longestStreak, activeDays, totalMinutes }) {
  const stats = [
    { label: "Current Streak", value: `${currentStreak}d`, icon: "🔥" },
    { label: "Longest Streak", value: `${longestStreak}d`, icon: "🏆" },
    { label: "Active Days",    value: activeDays,           icon: "📅" },
    { label: "Study Time",     value: `${Math.round(totalMinutes / 60)}h`, icon: "⏱️" },
  ];

  return (
    <Card>
      <h3 style={{ fontWeight: 700, color: "var(--color-brand-navy)", marginBottom: "1rem" }}>
        Study Activity
      </h3>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
        {stats.map((s) => (
          <div key={s.label} style={{ background: "var(--color-brand-gray-light)", borderRadius: "0.5rem",
            padding: "0.75rem", textAlign: "center" }}>
            <p style={{ fontSize: "1.25rem", marginBottom: "0.125rem" }}>{s.icon}</p>
            <p style={{ fontWeight: 800, fontSize: "1.125rem", color: "var(--color-brand-navy)" }}>{s.value}</p>
            <p style={{ fontSize: "0.7rem", color: "var(--color-brand-gray)" }}>{s.label}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}
