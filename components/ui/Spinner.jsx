/**
 * @param {{ size?: number, color?: string, label?: string }} props
 */
export function Spinner({ size = 24, color = "var(--color-brand-teal)", label = "Loading…" }) {
  return (
    <span role="status" aria-label={label} style={{ display: "inline-flex" }}>
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
        style={{ animation: "spin 0.8s linear infinite" }}>
        <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="3" strokeOpacity="0.25" />
        <path d="M12 2a10 10 0 0 1 10 10" stroke={color} strokeWidth="3" strokeLinecap="round" />
      </svg>
    </span>
  );
}
