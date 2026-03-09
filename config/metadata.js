/**
 * SEO metadata per page — consumed by Next.js generateMetadata()
 */

const BASE_URL = process.env.NEXT_PUBLIC_APP_URL || "https://www.riseiq.ca";
const APP_NAME = "RiseIQ IELTS";

export const META = {
  default: {
    title: `${APP_NAME} — IELTS General Training Practice`,
    description:
      "Prepare for IELTS General Training with interactive reading, writing, listening, and speaking practice. Targeted feedback and band-score tracking.",
    openGraph: {
      title: APP_NAME,
      description: "Smart IELTS prep for every band goal.",
      url: BASE_URL,
      siteName: APP_NAME,
      type: "website",
    },
    twitter: { card: "summary_large_image", site: "@riseiq" },
    keywords: ["IELTS", "IELTS General Training", "IELTS preparation", "band score", "IELTS practice"],
  },

  pages: {
    dashboard:  { title: `Dashboard | ${APP_NAME}` },
    reading:    { title: `Reading Practice | ${APP_NAME}` },
    writing:    { title: `Writing Practice | ${APP_NAME}` },
    listening:  { title: `Listening Practice | ${APP_NAME}` },
    speaking:   { title: `Speaking Practice | ${APP_NAME}` },
    mockTest:   { title: `Full Mock Test | ${APP_NAME}` },
    progress:   { title: `My Progress | ${APP_NAME}` },
    profile:    { title: `Profile & Settings | ${APP_NAME}` },
    login:      { title: `Sign In | ${APP_NAME}` },
    signup:     { title: `Create Account | ${APP_NAME}` },
    forgotPw:   { title: `Reset Password | ${APP_NAME}` },
  },
};
