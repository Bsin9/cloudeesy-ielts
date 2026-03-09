/**
 * @param {{ title: string, body: string, source?: string }} props
 */
export function PassageView({ title, body, source }) {
  return (
    <div>
      <h2 style={{ fontSize: "1.125rem", fontWeight: 800, color: "var(--color-brand-navy)",
        marginBottom: "1rem", paddingBottom: "0.625rem",
        borderBottom: "2px solid var(--color-brand-teal)" }}>
        {title}
      </h2>
      <div style={{ fontSize: "0.9rem", lineHeight: 1.85, color: "var(--color-brand-navy)" }}>
        {body.split("\n\n").map((para, i) => (
          <p key={i} style={{ marginBottom: "1rem" }}>{para}</p>
        ))}
      </div>
      {source && (
        <p style={{ fontSize: "0.75rem", color: "var(--color-brand-gray)", marginTop: "1rem",
          fontStyle: "italic" }}>Source: {source}</p>
      )}
    </div>
  );
}
