"use client";
import Link from "next/link";
import { Zap } from "lucide-react";
import { ROUTES } from "@/config/routes.js";

const COURSE_COLS = [
  {
    heading: "Language",
    links: [
      { label: "IELTS General",   href: ROUTES.COURSE("ielts-general") },
      { label: "IELTS Academic",  href: ROUTES.COURSE("ielts-academic") },
      { label: "Business English",href: ROUTES.COURSE("business-english") },
      { label: "French Basics",   href: ROUTES.COURSE("french-basics") },
    ],
  },
  {
    heading: "Data & Cloud",
    links: [
      { label: "Python for Data",      href: ROUTES.COURSE("python-data") },
      { label: "Excel Mastery",        href: ROUTES.COURSE("excel-mastery") },
      { label: "Azure Fundamentals",   href: ROUTES.COURSE("azure-fundamentals") },
      { label: "AWS Essentials",       href: ROUTES.COURSE("aws-essentials") },
    ],
  },
  {
    heading: "AI & Career",
    links: [
      { label: "Prompt Engineering",   href: ROUTES.COURSE("prompt-engineering") },
      { label: "ChatGPT for Work",     href: ROUTES.COURSE("chatgpt-for-work") },
      { label: "Resume Builder",       href: ROUTES.COURSE("resume-builder") },
      { label: "Interview Prep",       href: ROUTES.COURSE("interview-prep") },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About",    href: ROUTES.ABOUT },
      { label: "Pricing",  href: ROUTES.PRICING },
      { label: "Blog",     href: ROUTES.BLOG },
      { label: "Contact",  href: ROUTES.CONTACT },
    ],
  },
];

export function Footer() {
  return (
    <footer style={{
      borderTop: "1px solid rgba(0,0,0,0.07)",
      marginTop: "4rem",
      background: "var(--color-brand-navy)",
      color: "rgba(255,255,255,0.75)",
      padding: "3rem 0 1.5rem",
    }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem" }}>
        {/* Top grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr",
          gap: "2rem",
          marginBottom: "2.5rem",
        }}>
          {/* Brand column */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.625rem", marginBottom: "0.75rem" }}>
              <div style={{
                width: "2rem", height: "2rem", borderRadius: "0.5rem",
                background: "var(--color-brand-teal)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <Zap size={16} color="#fff" />
              </div>
              <span style={{ fontWeight: 800, fontSize: "1.125rem", color: "#fff" }}>
                Rise<span style={{ color: "var(--color-brand-teal)" }}>IQ</span>
              </span>
            </div>
            <p style={{ fontSize: "0.85rem", lineHeight: 1.6, marginBottom: "0.5rem" }}>
              Learn. Grow. Rise.
            </p>
            <p style={{ fontSize: "0.8rem", lineHeight: 1.6, color: "rgba(255,255,255,0.5)" }}>
              AI-powered learning for the skills that matter — language, data, cloud, and career.
            </p>
            <div style={{ marginTop: "1rem" }}>
              <span style={{
                display: "inline-flex", alignItems: "center", gap: "0.35rem",
                background: "rgba(29,184,164,0.15)",
                border: "1px solid rgba(29,184,164,0.3)",
                borderRadius: "9999px", padding: "0.25rem 0.75rem",
                fontSize: "0.7rem", fontWeight: 600, color: "var(--color-brand-teal)",
              }}>
                🧠 Powered by Synapse Brain
              </span>
            </div>
          </div>

          {/* Course columns */}
          {COURSE_COLS.map(({ heading, links }) => (
            <div key={heading}>
              <h4 style={{ fontSize: "0.8rem", fontWeight: 700, color: "#fff",
                letterSpacing: "0.06em", textTransform: "uppercase",
                marginBottom: "0.875rem" }}>
                {heading}
              </h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0,
                display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <Link href={href} style={{
                      fontSize: "0.8rem", color: "rgba(255,255,255,0.65)",
                      textDecoration: "none", transition: "color 0.15s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-brand-teal)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.65)")}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: "1px solid rgba(255,255,255,0.08)",
          paddingTop: "1.25rem",
          display: "flex", justifyContent: "space-between", alignItems: "center",
          flexWrap: "wrap", gap: "0.75rem",
          fontSize: "0.75rem", color: "rgba(255,255,255,0.4)",
        }}>
          <span>© {new Date().getFullYear()} RiseIQ. All rights reserved.</span>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            {["Privacy", "Terms", "Contact"].map((item) => (
              <Link key={item} href={`/${item.toLowerCase()}`}
                style={{ color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
