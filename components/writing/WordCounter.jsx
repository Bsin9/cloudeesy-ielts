/**
 * @param {{ count: number, min: number, max: number, color: string }} props
 */
export function WordCounter({ count, min, max, color }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
      <span style={{ fontSize: "0.875rem", fontWeight: 700, color }}>
        {count} words
      </span>
      <span style={{ fontSize: "0.75rem", color: "var(--color-brand-gray)" }}>
        {count < min ? `${min - count} more needed` : count > max ? `${count - max} over` : "✓ In range"}
      </span>
    </div>
  );
}
