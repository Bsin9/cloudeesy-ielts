/**
 * @typedef {"tfng"|"mcq"|"gap_fill"|"matching"} QuestionType
 *
 * @typedef {Object} QuestionOption
 * @property {string} label
 * @property {string} text
 *
 * @typedef {Object} Question
 * @property {string} id
 * @property {QuestionType} type
 * @property {string} text
 * @property {QuestionOption[]} [options]
 * @property {string} answer
 * @property {string} explanation
 *
 * @typedef {Object} Session
 * @property {string} id
 * @property {string} title
 * @property {"reading"|"writing"|"listening"|"speaking"} module
 * @property {number} duration   - seconds
 * @property {Question[]} questions
 *
 * @typedef {Object} SessionResult
 * @property {string} sessionId
 * @property {Record<string,string>} answers
 * @property {number} timeSpent
 * @property {string} submittedAt
 *
 * @typedef {"intro"|"questions"|"review"} SessionPhase
 */

export {};
