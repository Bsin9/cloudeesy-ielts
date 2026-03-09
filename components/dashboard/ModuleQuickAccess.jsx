import Link from "next/link";
import { ROUTES } from "@/config/routes.js";

const MODULES = [
  { id: "reading",   icon: "📖", label: "Reading",   href: ROUTES.PRACTICE.READING,   color: "var(--color-brand-teal)" },
  { id: "writing",   icon: "✍️", label: "Writing",   href: ROUTES.PRACTICE.WRITING,   color: "#6C63FF" },
  { id: "listening", icon: "🎧", label: "Listening", href: ROUTES.PRACTICE.LISTENING, color: "var(--color-brand-gold)" },
  { id: "speaking",  icon: "🎤", label: "Speaking",  href: ROUTES.PRACTICE.SPEAKING,  color: "#E94E77" },
];

/**
 * @param {{ scores?: Record<string,number> }} props
 */
export function ModuleQuickAccess({ scores = {} }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "0.75rem", marginBottom: "1.5rem" }}>
      {MODULES.map((m) => (
        <Link key={m.id} href={m.href} style={{ textDecoration: "none" }}>
          <div className="card card-hover" style={{ padding: "1rem", display: "flex", alignItems: "center", gap: "0.875rem" }}>
            <div style={{ width: "2.5rem", height: "2.5rem", borderRadius: "0.625rem", flexShrink: 0,
              background: `${m.color}1A`, display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "1.25rem" }}>
              {m.icon}
            </div>
            <div>
              <p style={{ fontWeight: 700, fontSize: "0.875rem", color: "var(--color-brand-navy)" }}>{m.label}</p>
              {scores[m.id] != null && (
                <p style={{ fontSize: "0.75rem", color: "var(--color-brand-gray)" }}>
                  Band <strong style={{ color: m.color }}>{scores[m.id]}</strong>
                </p>
              )}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
