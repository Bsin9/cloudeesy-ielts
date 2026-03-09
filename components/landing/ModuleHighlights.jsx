import Link from "next/link";
import { ROUTES } from "@/config/routes.js";
import { getFeaturedCourses } from "@/config/courses.js";
import { getDisciplineById } from "@/config/disciplines.js";

export function ModuleHighlights() {
  const featured = getFeaturedCourses();

  return (
    <section id="modules" style={{ padding: "4rem 1.5rem", background: "#fff" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", fontSize: "1.75rem", fontWeight: 800,
          color: "var(--color-brand-navy)", marginBottom: "0.5rem" }}>
          Start with our most popular courses
        </h2>
        <p style={{ textAlign: "center", color: "var(--color-brand-gray)", marginBottom: "2.5rem" }}>
          All powered by Synapse Brain — personalized AI feedback at every step
        </p>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "1.25rem",
          marginBottom: "2rem",
        }}>
          {featured.map((course) => {
            const disc = getDisciplineById(course.discipline);
            return (
              <div key={course.id} className="card card-hover" style={{ padding: "1.5rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                  <span style={{
                    width: "3rem", height: "3rem", borderRadius: "0.75rem",
                    background: course.color + "1A",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "1.5rem", flexShrink: 0,
                  }}>
                    {course.emoji}
                  </span>
                  <div>
                    <p style={{ fontSize: "0.7rem", fontWeight: 600, color: course.color,
                      textTransform: "uppercase", letterSpacing: "0.04em", margin: 0 }}>
                      {disc?.emoji} {disc?.name}
                    </p>
                    {course.synapseBrain && (
                      <p style={{ fontSize: "0.6rem", color: "var(--color-brand-gray)", margin: 0 }}>
                        🧠 Synapse Brain
                      </p>
                    )}
                  </div>
                </div>
                <h3 style={{ fontWeight: 700, color: "var(--color-brand-navy)",
                  marginBottom: "0.375rem", fontSize: "1rem" }}>
                  {course.title}
                </h3>
                <p style={{ fontSize: "0.825rem", color: "var(--color-brand-gray)",
                  lineHeight: 1.5, marginBottom: "1rem" }}>
                  {course.subtitle}
                </p>
                <div style={{ display: "flex", gap: "1rem", fontSize: "0.75rem",
                  color: "var(--color-brand-gray)" }}>
                  <span>📚 {course.lessons} lessons</span>
                  <span>⭐ {course.rating}</span>
                </div>
              </div>
            );
          })}
        </div>

        <div style={{ textAlign: "center" }}>
          <Link href={ROUTES.COURSES} className="btn-secondary" style={{ fontSize: "0.95rem" }}>
            View all 13 courses →
          </Link>
        </div>
      </div>
    </section>
  );
}
