import { fetcher, post } from "./fetcher.js";

/** Fetch the authenticated user's progress summary */
export function getProgress() {
  return fetcher("/api/user/progress");
}

/** Fetch weak areas for the current user */
export function getWeakAreas() {
  return fetcher("/api/user/weak-areas");
}
