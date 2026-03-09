import { bandToLabel } from "@/lib/utils.js";

/**
 * @param {{ currentBand: number, targetBand: number }} props
 */
export function ExamReadinessIndicator({ currentBand, targetBand }) {
  const pct = Math.min(100, Math.round((currentBand / targetBand) * 100));
  const gap = (targetBand - currentBand).toFixed(1);

  return (
    <div style={{
      background: "linear-gradient(135deg, var(--color-brand-navy) 0%, var(--color-brand-navy-light) 100%)",
      borderRadius: "var(--radius-lg)", padding: "1.5rem", color: "#fff", marginBottom: "1.5rem",
    }}>
      <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.7)", fontWeight: 600,
        letterSpacing: "0.08em", marginBottom: "0.5rem" }}>EXAM READINESS</p>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "1rem" }}>
        <div>
          <p style={{ fontSize: "2.5rem", fontWeight: 900, lineHeight: 1 }}>{currentBand}</p>
          <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.7)" }}>{bandToLabel(currentBand)}</p>
        </div>
        <div style={{ textAlign: "right" }}>
          <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.7)" }}>Target</p>
          <p style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--color-brand-teal-light)" }}>{targetBand}</p>
          <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.6)" }}>Gap: {gap} bands</p>
        </div>
      </div>
      <div style={{ height: "6px", background: "rgba(255,255,255,0.15)", borderRadius: "3px" }}>
        <div style={{ height: "100%", width: `${pct}%`, background: "var(--color-brand-teal)",
          borderRadius: "3px", transition: "width 0.8s ease" }} />
      </div>
      <p style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.5)", marginTop: "0.375rem", textAlign: "right" }}>
        {pct}% of target
      </p>
    </div>
  );
}
