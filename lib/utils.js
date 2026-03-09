import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/** Merge Tailwind classes safely */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

/** Format ISO date to "14 Mar 2026" */
export function formatDate(iso) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

/** Days until a target ISO date string */
export function daysUntil(iso) {
  const diff = new Date(iso).getTime() - Date.now();
  return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
}

/** Map a numeric band (e.g. 7) to label "Good User" */
export function bandToLabel(band) {
  if (band >= 9)   return "Expert User";
  if (band >= 8)   return "Very Good User";
  if (band >= 7)   return "Good User";
  if (band >= 6)   return "Competent User";
  if (band >= 5)   return "Modest User";
  if (band >= 4)   return "Limited User";
  return "Extremely Limited";
}

/** Strip dangerous HTML characters */
export function sanitize(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}

/** Truncate string with ellipsis */
export function truncate(str, maxLen = 100) {
  if (str.length <= maxLen) return str;
  return str.slice(0, maxLen).trimEnd() + "…";
}

/** Pluralise a word */
export function pluralise(count, singular, plural = `${singular}s`) {
  return count === 1 ? singular : plural;
}

/** Clamp a number between min and max */
export function clamp(val, min, max) {
  return Math.min(Math.max(val, min), max);
}
