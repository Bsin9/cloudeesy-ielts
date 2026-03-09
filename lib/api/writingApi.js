import { post } from "./fetcher.js";

/**
 * Save a writing draft
 * @param {{ sessionId: string, promptId: string, text: string, wordCount: number }} payload
 */
export function saveDraft(payload) {
  return post("/api/writing/save-draft", payload);
}
