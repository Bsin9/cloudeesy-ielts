import { PREP_TIPS } from "@/modules/speaking/speakingEngine.js";

/**
 * @param {{ phase: string }} props
 */
export function SpeakingTips({ phase }) {
  if (phase !== "prep") return null;

  return (
    <div style={{ background: "var(--color-brand-teal-pale)", borderRadius: "var(--radius-md)",
      padding: "1rem", marginTop: "1rem" }}>
      <p style={{ fontWeight: 700, color: "var(--color-brand-teal)", fontSize: "0.8rem",
        marginBottom: "0.625rem" }}>✏️ Preparation Tips</p>
      <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.375rem" }}>
        {PREP_TIPS.map((tip, i) => (
          <li key={i} style={{ fontSize: "0.8rem", color: "var(--color-brand-navy)" }}>
            • {tip}
          </li>
        ))}
      </ul>
    </div>
  );
}
