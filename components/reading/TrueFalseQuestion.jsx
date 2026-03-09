/**
 * @param {{ answer: string, value: string, onChange: (v: string) => void }} props
 */
export function TrueFalseQuestion({ value, onChange }) {
  const OPTIONS = ["True", "False", "Not Given"];
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      {OPTIONS.map((opt) => {
        const selected = value === opt;
        return (
          <button key={opt} onClick={() => onChange(opt)}
            style={{
              display: "flex", alignItems: "center", gap: "0.75rem", padding: "0.625rem 0.875rem",
              borderRadius: "0.5rem", border: "none", cursor: "pointer", textAlign: "left",
              background: selected ? "var(--color-brand-teal-pale)" : "var(--color-brand-gray-light)",
              outline: selected ? "2px solid var(--color-brand-teal)" : "none",
              transition: "all 0.15s",
            }}>
            <span style={{
              width: "1.25rem", height: "1.25rem", borderRadius: "50%", flexShrink: 0,
              background: selected ? "var(--color-brand-teal)" : "#fff",
              border: `2px solid ${selected ? "var(--color-brand-teal)" : "var(--color-brand-gray-mid)"}`,
            }} />
            <span style={{ fontSize: "0.875rem", color: "var(--color-brand-navy)", fontWeight: selected ? 700 : 400 }}>
              {opt}
            </span>
          </button>
        );
      })}
    </div>
  );
}
