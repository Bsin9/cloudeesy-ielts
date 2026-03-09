/**
 * @param {{ topic: string, bullets: string[] }} props
 */
export function CueCard({ topic, bullets = [] }) {
  return (
    <div style={{
      background: "linear-gradient(135deg, var(--color-brand-teal) 0%, var(--color-brand-navy) 100%)",
      borderRadius: "var(--radius-lg)", padding: "1.75rem", color: "#fff",
    }}>
      <p style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", opacity: 0.7,
        marginBottom: "0.625rem" }}>DESCRIBE…</p>
      <h2 style={{ fontSize: "1.25rem", fontWeight: 800, marginBottom: "1.25rem", lineHeight: 1.3 }}>
        {topic}
      </h2>
      <p style={{ fontSize: "0.8rem", opacity: 0.8, marginBottom: "0.625rem", fontWeight: 600 }}>
        You should say:
      </p>
      <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        {bullets.map((b, i) => (
          <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem",
            fontSize: "0.875rem", opacity: 0.9 }}>
            <span style={{ marginTop: "0.125rem", flexShrink: 0 }}>•</span>
            {b}
          </li>
        ))}
      </ul>
    </div>
  );
}
