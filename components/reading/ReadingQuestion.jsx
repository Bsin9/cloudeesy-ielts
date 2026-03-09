import { TrueFalseQuestion } from "./TrueFalseQuestion.jsx";
import { GapFillQuestion }   from "./GapFillQuestion.jsx";

/**
 * Renders the correct input widget based on question type.
 * @param {{ question: object, value: string, onChange: (v: string) => void }} props
 */
export function ReadingQuestion({ question, value, onChange }) {
  const type = question.type;

  if (type === "tfng") {
    return <TrueFalseQuestion value={value} onChange={onChange} />;
  }
  if (type === "gap_fill") {
    return <GapFillQuestion value={value} onChange={onChange} />;
  }
  if (type === "mcq") {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        {(question.options ?? []).map((opt) => {
          const selected = value === opt.label;
          return (
            <button key={opt.label} onClick={() => onChange(opt.label)}
              style={{
                display: "flex", alignItems: "center", gap: "0.75rem", padding: "0.625rem 0.875rem",
                borderRadius: "0.5rem", border: "none", cursor: "pointer", textAlign: "left",
                background: selected ? "var(--color-brand-teal-pale)" : "var(--color-brand-gray-light)",
                outline: selected ? "2px solid var(--color-brand-teal)" : "none", transition: "all 0.15s",
              }}>
              <span style={{
                width: "1.5rem", height: "1.5rem", borderRadius: "50%", flexShrink: 0,
                display: "flex", alignItems: "center", justifyContent: "center",
                background: selected ? "var(--color-brand-teal)" : "#fff",
                color: selected ? "#fff" : "var(--color-brand-navy)",
                fontWeight: 700, fontSize: "0.75rem",
                border: `1px solid ${selected ? "var(--color-brand-teal)" : "var(--color-brand-gray-mid)"}`,
              }}>{opt.label}</span>
              <span style={{ fontSize: "0.875rem", color: "var(--color-brand-navy)" }}>{opt.text}</span>
            </button>
          );
        })}
      </div>
    );
  }
  return <GapFillQuestion value={value} onChange={onChange} />;
}
