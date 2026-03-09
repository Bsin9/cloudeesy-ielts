import Link from "next/link";
import { ROUTES } from "@/config/routes.js";

/**
 * @param {{ correct: number, total: number, band: string, module: string, onReview?: () => void }} props
 */
export function SessionResults({ correct, total, band, module, onReview }) {
  const pct = total ? Math.round((correct / total) * 100) : 0;

  return (
    <div style={{
      background: "linear-gradient(135deg, var(--color-brand-navy) 0%, var(--color-brand-navy-light) 100%)",
      borderRadius: "var(--radius-lg)", padding: "1.75rem", marginBottom: "1.5rem",
    }}>
      <h2 style={{ color: "#fff", fontSize: "1.25rem", fontWeight: 800, marginBottom: "1rem" }}>
        Session Complete 🎉
      </h2>
      <div style={{ display: "flex", gap: "2.5rem", flexWrap: "wrap" }}>
        {[
          { label: "SCORE",        value: `${correct}/${total}` },
          { label: "BAND ESTIMATE",value: band,  highlight: true },
          { label: "ACCURACY",     value: `${pct}%` },
        ].map((s) => (
          <div key={s.label}>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.65rem", fontWeight: 700,
              letterSpacing: "0.08em", marginBottom: "0.25rem" }}>{s.label}</p>
            <p style={{
              fontSize: "2rem", fontWeight: 900,
              color: s.highlight ? "var(--color-brand-teal-light)" : "#fff",
            }}>{s.value}</p>
          </div>
        ))}
      </div>

      <div style={{ display: "flex", gap: "0.75rem", marginTop: "1.5rem", flexWrap: "wrap" }}>
        {onReview && (
          <button className="btn-secondary" onClick={onReview}
            style={{ background: "rgba(255,255,255,0.1)", color: "#fff", border: "1px solid rgba(255,255,255,0.2)" }}>
            Review Answers
          </button>
        )}
        <Link href={ROUTES.PRACTICE[module?.toUpperCase()] ?? ROUTES.DASHBOARD}
          style={{ textDecoration: "none" }}
          className="btn-secondary">
          ← Back to {module}
        </Link>
        <Link href={ROUTES.DASHBOARD} className="btn-primary">
          Dashboard →
        </Link>
      </div>
    </div>
  );
}
