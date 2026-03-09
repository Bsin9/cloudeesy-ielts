/**
 * @param {{ options: string[], value: string, onChange: (v: string) => void }} props
 */
export function MatchingHeadingsQuestion({ options = [], value, onChange }) {
  return (
    <select
      className="input-field"
      value={value ?? ""}
      onChange={(e) => onChange(e.target.value)}
      aria-label="Matching headings"
    >
      <option value="">— Select a heading —</option>
      {options.map((opt, i) => (
        <option key={i} value={opt}>{opt}</option>
      ))}
    </select>
  );
}
