import Link from "next/link";
import { COURSES } from "@/config/courses.js";
import { DISCIPLINES } from "@/config/disciplines.js";
import { ROUTES } from "@/config/routes.js";
import { UpgradeBanner } from "@/components/ui/UpgradeBanner.jsx";
import { SynapseBadge }  from "@/components/ui/SynapseBadge.jsx";

export const metadata = {
  title: "My Courses — RiseIQ",
};

// Free plan courses (accessible by default in demo)
const FREE_COURSES = COURSES.filter((c) => c.requiredPlan === "free");

export default function MyCoursesPage() {
  return (
    <div style={{ padding: "1.5rem", maxWidth: "1100px", margin: "0 auto" }}>
      {/* Header */}
      <div style={{ marginBottom: "1.5rem" }}>
        <h1 style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--color-brand-navy)", marginBottom: "0.25rem" }}>
          My Courses
        </h1>
        <p style={{ color: "var(--color-brand-gray)", fontSize: "0.9rem" }}>
          Your enrolled courses, powered by Synapse Brain.
        </p>
      </div>

      {/* Upgrade banner (shown for free users) */}
      <div style={{ marginBottom: "2rem" }}>
        <UpgradeBanner message="You're on the Free plan — upgrade to Pro to access all 13 courses." />
      </div>

      {/* Free courses */}
      <h2 style={{ fontSize: "1.125rem", fontWeight: 700, color: "var(--color-brand-navy)",
        marginBottom: "1rem" }}>
        Available on your plan ({FREE_COURSES.length} courses)
      </h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
        gap: "1.25rem",
        marginBottom: "3rem",
      }}>
        {FREE_COURSES.map((course) => {
          const disc = DISCIPLINES.find((d) => d.id === course.discipline);
          return (
            <div key={course.id} style={{
              background: "#fff",
              borderRadius: "1rem",
              overflow: "hidden",
              boxShadow: "var(--shadow-card)",
              border: "1px solid rgba(0,0,0,0.06)",
              display: "flex", flexDirection: "column",
            }}>
              <div style={{
                background: `linear-gradient(135deg, ${course.color}22 0%, ${course.color}08 100%)`,
                borderBottom: `3px solid ${course.color}`,
                padding: "1.25rem",
              }}>
                <span style={{ fontSize: "2rem" }}>{course.emoji}</span>
              </div>

              <div style={{ padding: "1.25rem", flex: 1, display: "flex", flexDirection: "column" }}>
                <span style={{ fontSize: "0.7rem", fontWeight: 600, textTransform: "uppercase",
                  color: course.color, letterSpacing: "0.04em", marginBottom: "0.375rem", display: "block" }}>
                  {disc?.emoji} {disc?.name}
                </span>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--color-brand-navy)",
                  margin: "0 0 0.375rem" }}>
                  {course.title}
                </h3>
                <p style={{ fontSize: "0.8rem", color: "var(--color-brand-gray)",
                  margin: "0 0 0.75rem", lineHeight: 1.5, flex: 1 }}>
                  {course.subtitle}
                </p>

                {course.synapseBrain && (
                  <div style={{ marginBottom: "0.875rem" }}>
                    <SynapseBadge size="sm" />
                  </div>
                )}

                {/* Opens course in new tab */}
                <a
                  href={course.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "block", textAlign: "center",
                    padding: "0.625rem", borderRadius: "0.5rem",
                    background: course.color, color: "#fff",
                    fontSize: "0.875rem", fontWeight: 600,
                    textDecoration: "none",
                  }}
                >
                  Continue →
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* All courses teaser */}
      <div style={{
        background: "var(--color-brand-gray-light)",
        borderRadius: "1rem", padding: "2rem", textAlign: "center",
        border: "1px dashed var(--color-brand-gray-mid)",
      }}>
        <p style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}>🔒</p>
        <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--color-brand-navy)", marginBottom: "0.5rem" }}>
          Unlock 9 more courses with Pro
        </h3>
        <p style={{ fontSize: "0.85rem", color: "var(--color-brand-gray)", marginBottom: "1.25rem" }}>
          Python, Azure, AWS, Interview Prep, Public Speaking and more — all $19 CAD/mo.
        </p>
        <Link href={ROUTES.PRICING} className="btn-primary" style={{ fontSize: "0.875rem" }}>
          Upgrade to Pro →
        </Link>
      </div>
    </div>
  );
}
