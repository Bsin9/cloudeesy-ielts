/**
 * Global fetch wrapper with typed error handling
 * @template T
 * @param {string} url
 * @param {RequestInit} [options]
 * @returns {Promise<T>}
 */
export async function fetcher(url, options = {}) {
  const res = await fetch(url, {
    headers: { "Content-Type": "application/json", ...options.headers },
    ...options,
  });

  if (!res.ok) {
    const error = new Error("API request failed");
    try {
      const body = await res.json();
      error.message = body.error || body.message || `HTTP ${res.status}`;
      error.status = res.status;
      error.body = body;
    } catch {
      error.status = res.status;
    }
    throw error;
  }

  return res.json();
}

/**
 * POST helper
 * @template T
 * @param {string} url
 * @param {unknown} body
 * @returns {Promise<T>}
 */
export function post(url, body) {
  return fetcher(url, { method: "POST", body: JSON.stringify(body) });
}

/**
 * PATCH helper
 */
export function patch(url, body) {
  return fetcher(url, { method: "PATCH", body: JSON.stringify(body) });
}
