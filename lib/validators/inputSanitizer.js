/**
 * Input sanitisation helpers — used in API route handlers.
 */

/** Strip HTML/script injection from a string */
export function sanitizeString(str, maxLen = 5000) {
  if (typeof str !== "string") return "";
  return str
    .slice(0, maxLen)
    .replace(/<[^>]*>/g, "")
    .replace(/javascript:/gi, "")
    .trim();
}

/** Validate an email address */
export function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/** Validate a band score (0–9, steps of 0.5) */
export function isValidBand(band) {
  const n = Number(band);
  return !isNaN(n) && n >= 0 && n <= 9 && n % 0.5 === 0;
}

/** Strip keys not in allowList from an object */
export function allowKeys(obj, allowList) {
  return Object.fromEntries(
    Object.entries(obj).filter(([k]) => allowList.includes(k))
  );
}
