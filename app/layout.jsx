import "./globals.css";

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? "https://riseiq.ca"),
  title: {
    default:  "RiseIQ IELTS — Train Smarter. Score Higher. Start Today.",
    template: "%s | RiseIQ IELTS",
  },
  description:
    "Prepare for IELTS General Training with personalised practice, timed sessions, real feedback, and full mock tests. Band 7+ strategies built in.",
  keywords: [
    "IELTS preparation online",
    "IELTS General Training practice",
    "IELTS band score improvement",
    "IELTS mock test free",
    "IELTS study platform",
  ],
  authors: [{ name: "RiseIQ" }],
  openGraph: {
    type:        "website",
    siteName:    "RiseIQ IELTS",
    title:       "RiseIQ IELTS — Train Smarter. Score Higher.",
    description: "Your personalised IELTS preparation platform. Reading, Writing, Listening, Speaking — all in one place.",
  },
  twitter: {
    card:        "summary_large_image",
    title:       "RiseIQ IELTS — Train Smarter. Score Higher.",
    description: "Personalised IELTS prep. Mock tests. Real feedback. Start free today.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Course",
              "name": "RiseIQ IELTS Preparation",
              "description":
                "Comprehensive IELTS General Training preparation with practice modules, mock tests, and personalised feedback.",
              "provider": { "@type": "Organization", "name": "RiseIQ" },
            }),
          }}
        />
      </head>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
