import Link from "next/link";
import { Card } from "@/components/ui/Card.jsx";
import { ROUTES } from "@/config/routes.js";

/**
 * @param {{ session?: { id: string, module: string, title: string, progressPct?: number } }} props
 */
export function ContinueWhereLeft({ session }) {
  if (!session) return null;
  const ICONS = { reading: "📖", writing: "✍️", listening: "🎧", speaking: "🎤" };

  return (
    <Card padding="1.25rem" style={{ border: "2px solid var(--color-brand-teal-pale)" }}>
      <p style={{ fontSize: "0.7rem", fontWeight: 700, color: "var(--color-brand-teal)",
        letterSpacing: "0.08em", marginBottom: "0.5rem" }}>CONTINUE WHERE YOU LEFT OFF</p>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "1rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
          <span style={{ fontSize: "1.5rem" }}>{ICONS[session.module]}</span>
          <div>
            <p style={{ fontWeight: 700, color: "var(--color-brand-navy)", fontSize: "0.875rem" }}>{session.title}</p>
            {session.progressPct != null && (
              <p style={{ fontSize: "0.7rem", color: "var(--color-brand-gray)" }}>
                {session.progressPct}% complete
              </p>
            )}
          </div>
        </div>
        <Link href={ROUTES.SESSION(session.id)} className="btn-primary" style={{ flexShrink: 0, fontSize: "0.8rem", padding: "0.5rem 1rem" }}>
          Resume →
        </Link>
      </div>
    </Card>
  );
}
