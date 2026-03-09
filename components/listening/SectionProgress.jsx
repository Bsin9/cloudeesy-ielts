/**
 * @param {{ currentSection: number, totalSections?: number }} props
 */
export function SectionProgress({ currentSection = 1, totalSections = 4 }) {
  return (
    <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
      {Array.from({ length: totalSections }, (_, i) => (
        <div key={i} style={{
          width: i + 1 === currentSection ? "2rem" : "0.5rem",
          height: "0.5rem", borderRadius: "0.25rem",
          background: i + 1 <= currentSection ? "var(--color-brand-teal)" : "var(--color-brand-gray-light)",
          transition: "all 0.3s",
        }} />
      ))}
      <span style={{ fontSize: "0.75rem", color: "var(--color-brand-gray)", marginLeft: "0.375rem" }}>
        Section {currentSection}/{totalSections}
      </span>
    </div>
  );
}
