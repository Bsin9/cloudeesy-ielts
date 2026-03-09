import { fetcher, post } from "./fetcher.js";

/**
 * Submit a completed session
 * @param {string} sessionId
 * @param {{ answers: Record<string,string>, timeSpent: number }} payload
 */
export function submitSession(sessionId, payload) {
  return post(`/api/sessions/${sessionId}/submit`, payload);
}

/** Get session metadata */
export function getSession(sessionId) {
  return fetcher(`/api/sessions/${sessionId}`);
}

/** Get lessons for a module */
export function getModuleLessons(moduleId) {
  return fetcher(`/api/modules/${moduleId}/lessons`);
}
