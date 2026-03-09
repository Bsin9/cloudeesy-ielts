import { Navbar }       from "@/components/layout/Navbar.jsx";
import { Footer }       from "@/components/layout/Footer.jsx";
import { SynapseBadge } from "@/components/ui/SynapseBadge.jsx";
import { DISCIPLINES }  from "@/config/disciplines.js";
import Link             from "next/link";
import { ROUTES }       from "@/config/routes.js";

export const metadata = {
  title: "About RiseIQ — Learn. Grow. Rise.",
  description: "Learn about RiseIQ and Synapse Brain — the AI engine powering personalized learning for 10,000+ learners.",
};

const VALUES = [
  { emoji: "🎯", title: "Outcome-focused", body: "Every course is built around a real-world skill or certification. No filler content." },
  { emoji: "🧠", title: "AI-first feedback", body: "Synapse Brain gives you instant, personalized feedback — not generic tips." },
  { emoji: "♿", title: "Accessible to all", body: "We design for everyone: screen readers, keyboard navigation, high contrast. Learning is for all." },
  { emoji: "🌱", title: "Always growing", body: "New courses ship every quarter. When you join RiseIQ, you join a platform that grows with you." },
];

const TEAM = [
  { name: "Balgeet Singh",    role: "Founder & CEO",        emoji: "👨‍💻" },
  { name: "Synapse Brain",    role: "Chief Learning Officer", emoji: "🧠" },
];

export default function AboutPage() {
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Navbar />
      <main id="main-content">
        {/* Hero */}
        <section style={{
          background: "linear-gradient(160deg, var(--color-brand-navy) 0%, #1A3260 100%)",
          padding: "5rem 1.5rem 4rem",
          textAlign: "center",
        }}>
          <div style={{ maxWidth: "700px", margin: "0 auto" }}>
            <div style={{ marginBottom: "1.5rem" }}>
              <SynapseBadge />
            </div>
            <h1 style={{
              fontSize: "clamp(2rem, 5vw, 3.25rem)", fontWeight: 900,
              color: "#fff", lineHeight: 1.15, marginBottom: "1.25rem",
            }}>
              We built the learning platform
              <br />
              <span style={{ color: "var(--color-brand-teal)" }}>we wish we had.</span>
            </h1>
            <p style={{
              color: "rgba(255,255,255,0.72)", fontSize: "1.1rem", lineHeight: 1.7,
              maxWidth: "540px", margin: "0 auto",
            }}>
              RiseIQ started as an IELTS prep tool. It grew into an AI-powered platform
              covering 6 disciplines — because one skill is never enough.
            </p>
          </div>
        </section>

        {/* Mission */}
        <section style={{ maxWidth: "800px", margin: "0 auto", padding: "4rem 1.5rem" }}>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 800,
            color: "var(--color-brand-navy)", marginBottom: "1rem" }}>
            Our mission
          </h2>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.8,
            color: "var(--color-brand-gray)", marginBottom: "1.5rem" }}>
            We believe everyone deserves world-class learning — not just those
            who can afford expensive courses or live near a good university.
            RiseIQ uses AI to make elite-level instruction accessible, personalized,
            and fast.
          </p>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.8, color: "var(--color-brand-gray)" }}>
            Our motto is simple: <strong style={{ color: "var(--color-brand-navy)" }}>Learn. Grow. Rise.</strong>
          </p>
        </section>

        {/* Synapse Brain section */}
        <section style={{
          background: "var(--color-brand-navy)",
          padding: "4rem 1.5rem",
        }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "2rem", flexWrap: "wrap" }}>
              <div style={{
                width: "5rem", height: "5rem", flexShrink: 0,
                background: "rgba(29,184,164,0.15)",
                border: "1px solid rgba(29,184,164,0.3)",
                borderRadius: "1.25rem",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "2.5rem",
              }}>
                🧠
              </div>
              <div style={{ flex: 1, minWidth: "240px" }}>
                <h2 style={{ fontSize: "1.75rem", fontWeight: 800, color: "#fff", marginBottom: "0.75rem" }}>
                  Meet Synapse Brain
                </h2>
                <p style={{ color: "rgba(255,255,255,0.72)", fontSize: "1rem", lineHeight: 1.7,
                  marginBottom: "1rem" }}>
                  Synapse Brain is the AI engine behind every piece of feedback on RiseIQ.
                  It evaluates your essays, scores your practice answers, and suggests your
                  next learning steps — all in real time.
                </p>
                <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.875rem", lineHeight: 1.6,
                  marginBottom: "1.25rem" }}>
                  Powered by Claude — Anthropic&apos;s frontier AI model — Synapse Brain
                  is trained on thousands of IELTS band descriptors, interview rubrics,
                  and professional writing samples.
                </p>
                <SynapseBadge />
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section style={{ maxWidth: "1000px", margin: "0 auto", padding: "4rem 1.5rem" }}>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 800,
            color: "var(--color-brand-navy)", marginBottom: "2rem", textAlign: "center" }}>
            What we stand for
          </h2>
          <div style={{
            display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "1.5rem",
          }}>
            {VALUES.map(({ emoji, title, body }) => (
              <div key={title} style={{
                background: "#fff",
                borderRadius: "1rem",
                padding: "1.5rem",
                boxShadow: "var(--shadow-card)",
                border: "1px solid rgba(0,0,0,0.06)",
              }}>
                <span style={{ fontSize: "1.75rem", display: "block", marginBottom: "0.75rem" }}>{emoji}</span>
                <h3 style={{ fontSize: "1rem", fontWeight: 700,
                  color: "var(--color-brand-navy)", marginBottom: "0.5rem" }}>
                  {title}
                </h3>
                <p style={{ fontSize: "0.85rem", color: "var(--color-brand-gray)", lineHeight: 1.6, margin: 0 }}>
                  {body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Disciplines */}
        <section style={{
          background: "var(--color-brand-gray-light)",
          padding: "4rem 1.5rem",
        }}>
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <h2 style={{ fontSize: "1.75rem", fontWeight: 800,
              color: "var(--color-brand-navy)", marginBottom: "1.5rem", textAlign: "center" }}>
              6 disciplines. One platform.
            </h2>
            <div style={{
              display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "1rem",
            }}>
              {DISCIPLINES.map((d) => (
                <div key={d.id} style={{
                  background: "#fff", borderRadius: "0.875rem", padding: "1.25rem",
                  borderLeft: `4px solid ${d.color}`,
                  boxShadow: "var(--shadow-card)",
                }}>
                  <span style={{ fontSize: "1.5rem" }}>{d.emoji}</span>
                  <h3 style={{ fontSize: "0.95rem", fontWeight: 700,
                    color: "var(--color-brand-navy)", margin: "0.5rem 0 0.25rem" }}>
                    {d.name}
                  </h3>
                  <p style={{ fontSize: "0.775rem", color: "var(--color-brand-gray)",
                    margin: 0, lineHeight: 1.5 }}>
                    {d.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ textAlign: "center", padding: "4rem 1.5rem" }}>
          <h2 style={{ fontSize: "2rem", fontWeight: 900,
            color: "var(--color-brand-navy)", marginBottom: "1rem" }}>
            Ready to rise?
          </h2>
          <p style={{ color: "var(--color-brand-gray)", fontSize: "1.1rem", marginBottom: "2rem" }}>
            Join 10,000+ learners already growing on RiseIQ.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href={ROUTES.COURSES} className="btn-primary" style={{ fontSize: "1rem", padding: "0.875rem 2rem" }}>
              Explore Courses →
            </Link>
            <Link href={ROUTES.PRICING} className="btn-secondary" style={{ fontSize: "1rem" }}>
              See Pricing
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
