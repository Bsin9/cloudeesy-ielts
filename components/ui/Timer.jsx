/**
 * Display-only timer component — consumes values from useTimer hook.
 * @param {{ display: string, isCritical?: boolean, isLow?: boolean, label?: string }} props
 */
export function TimerDisplay({ display, isCritical, isLow, label = "TIME REMAINING" }) {
  return (
    <div>
      <p style={{ fontSize: "0.7rem", fontWeight: 600, color: "var(--color-brand-gray)",
        letterSpacing: "0.08em", marginBottom: "0.25rem" }}>
        {label}
      </p>
      <span
        style={{
          fontSize: "1.75rem", fontWeight: 900, fontVariantNumeric: "tabular-nums",
          color: isCritical ? "var(--color-brand-red)"
            : isLow ? "var(--color-brand-gold)"
            : "var(--color-brand-navy)",
        }}
        aria-live="polite" aria-atomic="true"
      >
        {display}
      </span>
    </div>
  );
}
