"use client";
import { Navbar }      from "@/components/layout/Navbar.jsx";
import { Footer }      from "@/components/layout/Footer.jsx";
import { COURSES }     from "@/config/courses.js";
import { DISCIPLINES } from "@/config/disciplines.js";
import { ROUTES }      from "@/config/routes.js";
import Link            from "next/link";

// metadata must be in a separate layout or server file for client components
// title is set via the browser title directly

function CourseCard({ course }) {
  const disc = DISCIPLINES.find((d) => d.id === course.discipline);
  return (
    <div style={{
      background: "#fff",
      borderRadius: "1rem",
      overflow: "hidden",
      boxShadow: "var(--shadow-card)",
      border: "1px solid rgba(0,0,0,0.06)",
      display: "flex",
      flexDirection: "column",
      transition: "box-shadow 0.2s, transform 0.2s",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.boxShadow = "var(--shadow-card-hover)";
      e.currentTarget.style.transform = "translateY(-2px)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.boxShadow = "var(--shadow-card)";
      e.currentTarget.style.transform = "translateY(0)";
    }}
    >
      {/* Header band */}
      <div style={{
        background: `linear-gradient(135deg, ${course.color}22 0%, ${course.color}08 100%)`,
        borderBottom: `3px solid ${course.color}`,
        padding: "1.25rem",
        display: "flex", alignItems: "flex-start", justifyContent: "space-between",
      }}>
        <span style={{ fontSize: "2rem" }}>{course.emoji}</span>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "0.25rem" }}>
          {course.requiredPlan !== "free" && (
            <span style={{
              fontSize: "0.65rem", fontWeight: 700, textTransform: "uppercase",
              background: "#1DB8A422", color: "#1DB8A4",
              padding: "0.125rem 0.5rem", borderRadius: "9999px",
              border: "1px solid #1DB8A444",
            }}>Pro</span>
          )}
          {course.synapseBrain && (
            <span style={{
              fontSize: "0.6rem", fontWeight: 600,
              color: "var(--color-brand-gray)",
            }}>🧠 Synapse Brain</span>
          )}
        </div>
      </div>

      <div style={{ padding: "1.25rem", flex: 1, display: "flex", flexDirection: "column" }}>
        {/* Discipline tag */}
        <span style={{
          fontSize: "0.7rem", fontWeight: 600, textTransform: "uppercase",
          color: course.color, letterSpacing: "0.04em",
          marginBottom: "0.5rem", display: "block",
        }}>
          {disc?.emoji} {disc?.name}
        </span>

        <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--color-brand-navy)",
          margin: "0 0 0.375rem", lineHeight: 1.3 }}>
          {course.title}
        </h3>
        <p style={{ fontSize: "0.8rem", color: "var(--color-brand-gray)",
          margin: "0 0 1rem", lineHeight: 1.5, flex: 1 }}>
          {course.subtitle}
        </p>

        {/* Meta row */}
        <div style={{ display: "flex", gap: "1rem", fontSize: "0.75rem",
          color: "var(--color-brand-gray)", marginBottom: "1rem" }}>
          <span>📚 {course.lessons} lessons</span>
          <span>⏱ {course.duration}</span>
          <span>⭐ {course.rating}</span>
        </div>

        {/* CTA — opens in new tab per Rule 3 */}
        <Link
          href={ROUTES.COURSE(course.slug)}
          style={{
            display: "block", textAlign: "center",
            padding: "0.625rem", borderRadius: "0.5rem",
            background: course.color, color: "#fff",
            fontSize: "0.875rem", fontWeight: 600,
            textDecoration: "none", transition: "opacity 0.15s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          View Course →
        </Link>
      </div>
    </div>
  );
}

export default function CoursesPage() {
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Navbar />
      <main id="main-content">
        {/* Hero */}
        <section style={{
          background: "var(--color-brand-navy)",
          padding: "4rem 1.5rem 3rem",
          textAlign: "center",
        }}>
          <div style={{ maxWidth: "700px", margin: "0 auto" }}>
            <span style={{
              display: "inline-flex", alignItems: "center", gap: "0.5rem",
              background: "rgba(29,184,164,0.15)",
              border: "1px solid rgba(29,184,164,0.4)",
              borderRadius: "9999px", padding: "0.375rem 1rem",
              fontSize: "0.8rem", fontWeight: 600, color: "var(--color-brand-teal)",
              marginBottom: "1.25rem",
            }}>
              🧠 All Synapse Brain powered
            </span>
            <h1 style={{
              fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 900,
              color: "#fff", marginBottom: "1rem",
            }}>
              13 Courses. One Platform.
            </h1>
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "1.1rem", lineHeight: 1.6 }}>
              Language, data, cloud, AI and career courses — guided by Synapse Brain at every step.
            </p>
          </div>
        </section>

        {/* Disciplines + Courses */}
        <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "3rem 1.5rem" }}>
          {DISCIPLINES.map((disc) => {
            const discCourses = COURSES.filter((c) => c.discipline === disc.id);
            if (!discCourses.length) return null;
            return (
              <div key={disc.id} style={{ marginBottom: "3.5rem" }}>
                {/* Discipline header */}
                <div style={{
                  display: "flex", alignItems: "center", gap: "0.75rem",
                  marginBottom: "1.5rem",
                  paddingBottom: "0.875rem",
                  borderBottom: `2px solid ${disc.color}33`,
                }}>
                  <span style={{
                    fontSize: "1.5rem",
                    width: "2.75rem", height: "2.75rem",
                    background: disc.color + "18",
                    borderRadius: "0.75rem",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>{disc.emoji}</span>
                  <div>
                    <h2 style={{ fontSize: "1.25rem", fontWeight: 800,
                      color: "var(--color-brand-navy)", margin: 0 }}>
                      {disc.name}
                    </h2>
                    <p style={{ fontSize: "0.8rem", color: "var(--color-brand-gray)", margin: 0 }}>
                      {disc.description}
                    </p>
                  </div>
                </div>

                {/* Course grid */}
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
                  gap: "1.25rem",
                }}>
                  {discCourses.map((course) => (
                    <CourseCard key={course.id} course={course} />
                  ))}
                </div>
              </div>
            );
          })}
        </section>
      </main>
      <Footer />
    </>
  );
}
