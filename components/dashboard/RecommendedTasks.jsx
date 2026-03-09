import Link from "next/link";
import { Card } from "@/components/ui/Card.jsx";
import { ROUTES } from "@/config/routes.js";

const DEFAULT_TASKS = [
  { id: "t1", label: "TFNG Reading Practice",    href: ROUTES.SESSION("s_001"),         module: "reading",   icon: "📖" },
  { id: "t2", label: "Task 1 Letter — Complaint", href: ROUTES.SESSION("wt_task1_001"),  module: "writing",   icon: "✍️" },
  { id: "t3", label: "Listening Section 1",       href: ROUTES.SESSION("ls_001"),        module: "listening", icon: "🎧" },
];

/**
 * @param {{ tasks?: typeof DEFAULT_TASKS }} props
 */
export function RecommendedTasks({ tasks = DEFAULT_TASKS }) {
  return (
    <Card padding="1.25rem">
      <h3 style={{ fontWeight: 700, color: "var(--color-brand-navy)", marginBottom: "0.875rem" }}>
        Recommended for You
      </h3>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        {tasks.map((t) => (
          <Link key={t.id} href={t.href} style={{ textDecoration: "none" }}>
            <div className="card-hover" style={{
              display: "flex", alignItems: "center", gap: "0.75rem",
              padding: "0.625rem 0.875rem", borderRadius: "0.5rem",
              background: "var(--color-brand-gray-light)", transition: "background 0.15s",
            }}>
              <span style={{ fontSize: "1.1rem" }}>{t.icon}</span>
              <span style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--color-brand-navy)", flex: 1 }}>
                {t.label}
              </span>
              <span style={{ color: "var(--color-brand-gray)", fontSize: "0.75rem" }}>→</span>
            </div>
          </Link>
        ))}
      </div>
    </Card>
  );
}
