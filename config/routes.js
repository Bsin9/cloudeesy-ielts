/**
 * Centralized route constants — import from here instead of hard-coding paths
 */

export const ROUTES = {
  // Public
  HOME: "/",
  LOGIN: "/login",
  SIGNUP: "/signup",
  FORGOT_PASSWORD: "/forgot-password",

  // Public marketing
  COURSES: "/courses",
  COURSE: (slug) => `/courses/${slug}`,
  PRICING: "/pricing",
  ABOUT: "/about",
  BLOG: "/blog",
  CONTACT: "/contact",

  // Dashboard
  DASHBOARD: "/dashboard",
  MY_COURSES: "/my-courses",

  // Practice modules (IELTS)
  PRACTICE: {
    ROOT: "/practice",
    READING: "/practice/reading",
    WRITING: "/practice/writing",
    LISTENING: "/practice/listening",
    SPEAKING: "/practice/speaking",
  },

  // Session engine
  SESSION: (id) => `/session/${id}`,

  // Other protected pages
  MOCK_TEST: "/mock-test",
  PROGRESS: "/progress",
  PROFILE: "/profile",

  // API
  API: {
    USER_PROGRESS: "/api/user/progress",
    WEAK_AREAS: "/api/user/weak-areas",
    SESSION_SUBMIT: (id) => `/api/sessions/${id}/submit`,
    WRITING_DRAFT: "/api/writing/save-draft",
    MOCK_TESTS: "/api/mock-tests",
    MODULE_LESSONS: (id) => `/api/modules/${id}/lessons`,
    SLACK_NOTIFY: "/api/slack/notify",
  },
};
