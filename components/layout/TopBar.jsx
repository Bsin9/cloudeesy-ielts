import { Avatar } from "@/components/ui/Avatar.jsx";
import { daysUntil } from "@/lib/utils.js";

/**
 * Dashboard top bar with exam countdown and user info.
 * @param {{ user: { name: string, examDate?: string } }} props
 */
export function TopBar({ user }) {
  const days = user?.examDate ? daysUntil(user.examDate) : null;

  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 20,
      background: "#fff", borderBottom: "1px solid var(--color-brand-gray-light)",
      padding: "0 1.5rem", height: "3.5rem",
      display: "flex", alignItems: "center", justifyContent: "space-between",
    }}>
      {/* Left: Page title placeholder — overridden per page */}
      <div />

      <div style={{ display: "flex", alignItems: "center", gap: "1.25rem" }}>
        {days !== null && (
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem",
            background: "var(--color-brand-teal-pale)", padding: "0.375rem 0.875rem",
            borderRadius: "var(--radius-full)" }}>
            <span style={{ fontSize: "0.875rem" }}>📅</span>
            <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--color-brand-teal)" }}>
              {days}d to exam
            </span>
          </div>
        )}
        {user && <Avatar name={user.name} size={32} />}
      </div>
    </header>
  );
}
