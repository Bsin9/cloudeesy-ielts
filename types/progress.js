/**
 * @typedef {Object} WeeklyActivity
 * @property {string} day
 * @property {number} sessions
 * @property {number} minutes
 *
 * @typedef {Object} ModuleScore
 * @property {string} module
 * @property {number} band
 * @property {number} trend   - positive = improving
 *
 * @typedef {Object} WeakArea
 * @property {string} module
 * @property {string} skill
 * @property {number} accuracy   - 0–100
 *
 * @typedef {Object} Progress
 * @property {string} userId
 * @property {ModuleScore[]} moduleScores
 * @property {WeeklyActivity[]} weeklyActivity
 * @property {WeakArea[]} weakAreas
 * @property {number} streakDays
 * @property {number} totalSessions
 * @property {number} overallBand
 */

export {};
