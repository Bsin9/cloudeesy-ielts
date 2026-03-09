/**
 * @param {{ value: string, onChange: (v: string) => void, placeholder?: string }} props
 */
export function GapFillQuestion({ value, onChange, placeholder = "Type your answer…" }) {
  return (
    <input
      className="input-field"
      type="text"
      value={value ?? ""}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      aria-label="Gap fill answer"
    />
  );
}
