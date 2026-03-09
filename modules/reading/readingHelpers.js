/**
 * Reading module UI helpers — formatting, label generation.
 */

/** Human-readable label for a question type */
export function questionTypeLabel(type) {
  const map = {
    tfng:     "True / False / Not Given",
    mcq:      "Multiple Choice",
    gap_fill: "Gap Fill",
    matching: "Matching Headings",
  };
  return map[type] ?? type;
}

/** TFNG badge colour */
export function tfngColor(value) {
  if (value === "True")      return "var(--color-brand-green)";
  if (value === "False")     return "var(--color-brand-red)";
  if (value === "Not Given") return "var(--color-brand-gold)";
  return "var(--color-brand-gray)";
}
