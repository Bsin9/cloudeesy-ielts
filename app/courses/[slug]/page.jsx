import { notFound }  from "next/navigation";
import Link           from "next/link";
import { Navbar }     from "@/components/layout/Navbar.jsx";
import { Footer }     from "@/components/layout/Footer.jsx";
import { SynapseBadge } from "@/components/ui/SynapseBadge.jsx";
import { getCourseBySlug } from "@/config/courses.js";
import { getDisciplineById } from "@/config/disciplines.js";
import { PLANS }      from "@/config/plans.js";
import { ROUTES }     from "@/config/routes.js";

export async function generateMetadata({ params }) {
  const course = getCourseBySlug(params.slug);
  if (!course) return { title: "Course Not Found — RiseIQ" };
  return {
    title: `${course.title} — RiseIQ`,
    description: course.description,
  };
}

export default function CoursePage({ params }) {
  const course = getCourseBySlug(params.slug);
  if (!course) notFound();

  const disc = getDisciplineById(course.discipline);
  const plan = PLANS[course.requiredPlan.toUpperCase()] ?? PLANS.FREE;

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Navbar />
      <main id="main-content">
        {/* Hero */}
        <section style={{
          background: `linear-gradient(135deg, var(--color-brand-navy) 0%, ${course.color}33 100%)`,
          padding: "4rem 1.5rem 3rem",
        }}>
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            {/* Breadcrumb */}
            <div style={{ display: "flex", gap: "0.5rem", alignItems: "center",
              fontSize: "0.8rem", marginBottom: "1.5rem" }}>
              <Link href={ROUTES.COURSES} style={{ color: "rgba(255,255,255,0.55)", textDecoration: "none" }}>
                All Courses
              </Link>
              <span style={{ color: "rgba(255,255,255,0.3)" }}>›</span>
              <span style={{ color: disc?.color }}>{disc?.name}</span>
              <span style={{ color: "rgba(255,255,255,0.3)" }}>›</span>
              <span style={{ color: "#fff" }}>{course.title}</span>
            </div>

            <div style={{ display: "flex", gap: "2rem", alignItems: "flex-start", flexWrap: "wrap" }}>
              {/* Left */}
              <div style={{ flex: 1, minWidth: "280px" }}>
                <span style={{ fontSize: "3rem" }}>{course.emoji}</span>
                <h1 style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 900,
                  color: "#fff", marginBottom: "0.75rem", marginTop: "0.5rem" }}>
                  {course.title}
                </h1>
                <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "1.1rem",
                  lineHeight: 1.6, marginBottom: "1.5rem" }}>
                  {course.description}
                </p>

                <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                  {course.synapseBrain && <SynapseBadge />}
                  <span style={{
                    background: plan.badgeColor + "22", color: plan.badgeColor,
                    border: `1px solid ${plan.badgeColor}44`,
                    padding: "0.25rem 0.75rem", borderRadius: "9999px",
                    fontSize: "0.75rem", fontWeight: 700,
                  }}>
                    {plan.name} Plan
                  </span>
                </div>
              </div>

              {/* Stats card */}
              <div style={{
                background: "rgba(255,255,255,0.06)",
                backdropFilter: "blur(8px)",
                borderRadius: "1rem",
                border: "1px solid rgba(255,255,255,0.12)",
                padding: "1.5rem",
                minWidth: "220px",
              }}>
                {[
                  { icon: "📚", label: "Lessons",  value: course.lessons },
                  { icon: "⏱",  label: "Duration", value: course.duration },
                  { icon: "📈",  label: "Level",    value: course.level },
                  { icon: "👥",  label: "Students", value: course.students?.toLocaleString() },
                  { icon: "⭐",  label: "Rating",   value: `${course.rating} / 5` },
                ].map(({ icon, label, value }) => (
                  <div key={label} style={{
                    display: "flex", justifyContent: "space-between",
                    alignItems: "center",
                    padding: "0.625rem 0",
                    borderBottom: "1px solid rgba(255,255,255,0.08)",
                  }}>
                    <span style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.55)" }}>
                      {icon} {label}
                    </span>
                    <span style={{ fontSize: "0.875rem", fontWeight: 600, color: "#fff" }}>
                      {value}
                    </span>
                  </div>
                ))}

                {/* Enroll CTA — opens course in new tab */}
                <a
                  href={course.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "block", textAlign: "center",
                    marginTop: "1.25rem",
                    padding: "0.75rem",
                    background: course.color,
                    color: "#fff",
                    borderRadius: "0.625rem",
                    fontSize: "0.95rem", fontWeight: 700,
                    textDecoration: "none",
                    transition: "opacity 0.15s",
                  }}
                >
                  Start Learning →
                </a>
                {course.requiredPlan !== "free" && (
                  <p style={{ textAlign: "center", fontSize: "0.7rem",
                    color: "rgba(255,255,255,0.45)", marginTop: "0.625rem" }}>
                    Requires {plan.name} plan
                    {" · "}
                    <Link href={ROUTES.PRICING}
                      style={{ color: "var(--color-brand-teal)", textDecoration: "none" }}>
                      Upgrade
                    </Link>
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Tags */}
        <section style={{ maxWidth: "900px", margin: "2rem auto", padding: "0 1.5rem" }}>
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
            {course.tags?.map((tag) => (
              <span key={tag} style={{
                background: "var(--color-brand-gray-light)",
                color: "var(--color-brand-gray)",
                padding: "0.25rem 0.75rem",
                borderRadius: "9999px",
                fontSize: "0.8rem", fontWeight: 500,
              }}>
                #{tag}
              </span>
            ))}
          </div>
        </section>

        {/* Back CTA */}
        <section style={{ maxWidth: "900px", margin: "1rem auto 4rem", padding: "0 1.5rem" }}>
          <Link href={ROUTES.COURSES} style={{
            color: "var(--color-brand-teal)", textDecoration: "none",
            fontSize: "0.875rem", fontWeight: 600,
          }}>
            ← Back to All Courses
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
