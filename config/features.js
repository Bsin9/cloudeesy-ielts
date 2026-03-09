/**
 * Feature flags — flip to true/false to gate functionality
 */

export const FEATURES = {
  // Core sessions
  readingEnabled:   true,
  writingEnabled:   true,
  listeningEnabled: true,
  speakingEnabled:  true,

  // Advanced features
  aiWritingFeedback:  false,  // Phase 2: OpenAI feedback integration
  speechRecognition:  false,  // Phase 2: Web Speech API recording
  mockTestTimed:      true,
  streakTracking:     true,
  slackNotifications: Boolean(process.env.SLACK_WEBHOOK_URL),

  // UX
  darkMode:     false,  // Phase 2
  offlineMode:  false,  // Phase 2: service worker
};
