import { Card } from "@/components/ui/Card.jsx";
import { formatDate } from "@/lib/utils.js";

/**
 * @param {{ sessions: Array<{ id: string, module: string, title: string, score?: number, completedAt: string }> }} props
 */
export function RecentActivityFeed({ sessions = [] }) {
  const ICONS = { reading: "📖", writing: "✍️", listening: "🎧", speaking: "🎤" };

  return (
    <Card padding="1.25rem">
      <h3 style={{ fontWeight: 700, color: "var(--color-brand-navy)", marginBottom: "0.875rem" }}>
        Recent Activity
      </h3>
      {sessions.length === 0 ? (
        <p style={{ fontSize: "0.875rem", color: "var(--color-brand-gray)", textAlign: "center", padding: "1rem 0" }}>
          No sessions yet — start practicing!
        </p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.625rem" }}>
          {sessions.slice(0, 5).map((s) => (
            <li key={s.id} style={{ display: "flex", alignItems: "center", gap: "0.75rem",
              padding: "0.5rem 0", borderBottom: "1px solid var(--color-brand-gray-light)" }}>
              <span style={{ fontSize: "1.25rem" }}>{ICONS[s.module] ?? "📋"}</span>
              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{ fontWeight: 600, fontSize: "0.8rem", color: "var(--color-brand-navy)",
                  overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                  {s.title}
                </p>
                <p style={{ fontSize: "0.7rem", color: "var(--color-brand-gray)" }}>
                  {formatDate(s.completedAt)}
                </p>
              </div>
              {s.score != null && (
                <span style={{ fontWeight: 800, color: "var(--color-brand-teal)", fontSize: "0.875rem", flexShrink: 0 }}>
                  B{s.score}
                </span>
              )}
            </li>
          ))}
        </ul>
      )}
    </Card>
  );
}
