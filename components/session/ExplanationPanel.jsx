/**
 * @param {{ explanation: string }} props
 */
export function ExplanationPanel({ explanation }) {
  if (!explanation) return null;
  return (
    <p style={{
      marginTop: "0.5rem", padding: "0.625rem 0.875rem",
      background: "var(--color-brand-teal-pale)", borderRadius: "0.5rem",
      fontSize: "0.8rem", color: "var(--color-brand-navy)", lineHeight: 1.6,
    }}>
      💡 {explanation}
    </p>
  );
}
