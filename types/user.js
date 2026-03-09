/**
 * @typedef {Object} User
 * @property {string} id
 * @property {string} name
 * @property {string} email
 * @property {"student"|"admin"} role
 * @property {number} targetBand   - e.g. 7.5
 * @property {number} currentBand
 * @property {string} examDate     - ISO date string
 * @property {number} streakDays
 * @property {number} totalSessions
 * @property {string} joinedAt
 */

/**
 * @typedef {Object} AuthSession
 * @property {User & { id: string, role: string, targetBand: number, examDate: string }} user
 * @property {string} expires
 */

export {};
