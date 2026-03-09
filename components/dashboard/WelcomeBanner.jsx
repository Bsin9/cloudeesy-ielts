import { daysUntil, formatDate } from "@/lib/utils.js";

/**
 * @param {{ name: string, examDate?: string, streakDays?: number }} props
 */
export function WelcomeBanner({ name, examDate, streakDays = 0 }) {
  const firstName = name?.split(" ")[0] ?? "there";
  const days = examDate ? daysUntil(examDate) : null;

  return (
    <div style={{
      display: "flex", justifyContent: "space-between", alignItems: "flex-start",
      flexWrap: "wrap", gap: "1rem", marginBottom: "1.75rem",
    }}>
      <div>
        <h1 style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--color-brand-navy)",
          marginBottom: "0.25rem" }}>
          Welcome back, {firstName} 👋
        </h1>
        {days !== null && (
          <p style={{ color: "var(--color-brand-gray)", fontSize: "0.875rem" }}>
            Your exam is in <strong>{days} days</strong>
            {examDate && ` (${formatDate(examDate)})`} — keep the momentum going!
          </p>
        )}
      </div>
      {streakDays > 0 && (
        <div style={{
          display: "flex", alignItems: "center", gap: "0.5rem",
          background: "linear-gradient(135deg,#FFF7E6,#FCEACB)",
          border: "1px solid var(--color-brand-gold)", borderRadius: "var(--radius-lg)",
          padding: "0.625rem 1rem",
        }}>
          <span style={{ fontSize: "1.5rem" }}>🔥</span>
          <div>
            <p style={{ fontWeight: 800, fontSize: "1.25rem", color: "var(--color-brand-navy)", lineHeight: 1 }}>
              {streakDays}
            </p>
            <p style={{ fontSize: "0.7rem", color: "var(--color-brand-gray)", fontWeight: 600 }}>day streak</p>
          </div>
        </div>
      )}
    </div>
  );
}
