/**
 * @param {{ value: number, max?: number, color?: string, height?: string, label?: string }} props
 */
export function ProgressBar({ value, max = 100, color, height = "8px", label }) {
  const pct = Math.min(100, Math.round((value / max) * 100));
  return (
    <div>
      {label && (
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.75rem",
          color: "var(--color-brand-gray)", marginBottom: "0.25rem" }}>
          <span>{label}</span>
          <span>{pct}%</span>
        </div>
      )}
      <div className="progress-bar" style={{ height }} role="progressbar"
        aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100}>
        <div className="progress-fill" style={{ width: `${pct}%`, background: color }} />
      </div>
    </div>
  );
}
