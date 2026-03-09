import Link from "next/link";
import { ROUTES } from "@/config/routes.js";

const STATS = [
  { value: "13+",  label: "Courses" },
  { value: "6",    label: "Disciplines" },
  { value: "10K+", label: "Learners" },
  { value: "4.8★", label: "Avg Rating" },
];

export function HeroSection() {
  return (
    <section style={{
      position: "relative",
      background: "linear-gradient(160deg, var(--color-brand-navy) 0%, #1A3260 60%, #0c1a35 100%)",
      padding: "6rem 1.5rem 5rem",
      overflow: "hidden",
      textAlign: "center",
    }}>
      {/* Decorative glows */}
      {[
        { size: 500, left: "5%",  top: "0%",   opacity: 0.12 },
        { size: 350, left: "75%", top: "30%",  opacity: 0.08 },
        { size: 200, left: "45%", top: "-10%", opacity: 0.15 },
      ].map((b, i) => (
        <div key={i} style={{
          position: "absolute",
          width: b.size, height: b.size,
          left: b.left, top: b.top,
          transform: "translate(-50%, -50%)",
          background: "var(--color-brand-teal)",
          borderRadius: "50%", opacity: b.opacity,
          filter: "blur(80px)", pointerEvents: "none",
        }} />
      ))}

      <div style={{ position: "relative", maxWidth: "800px", margin: "0 auto" }}>
        {/* Synapse Brain badge */}
        <div style={{ marginBottom: "1.5rem" }}>
          <span style={{
            display: "inline-flex", alignItems: "center", gap: "0.5rem",
            background: "rgba(29,184,164,0.15)",
            border: "1px solid rgba(29,184,164,0.4)",
            borderRadius: "9999px", padding: "0.375rem 1.125rem",
            fontSize: "0.8rem", fontWeight: 600, color: "var(--color-brand-teal)",
          }}>
            🧠 Powered by Synapse Brain AI
          </span>
        </div>

        {/* Headline */}
        <h1 style={{
          fontSize: "clamp(2.25rem, 6vw, 3.75rem)",
          fontWeight: 900,
          color: "#fff",
          lineHeight: 1.1,
          marginBottom: "1.25rem",
          letterSpacing: "-0.02em",
        }}>
          Learn. Grow.{" "}
          <span style={{ color: "var(--color-brand-teal)" }}>Rise.</span>
        </h1>

        <p style={{
          fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
          color: "rgba(255,255,255,0.75)",
          maxWidth: "560px",
          margin: "0 auto 2.5rem",
          lineHeight: 1.7,
        }}>
          One platform. 13 AI-powered courses across language, data, cloud, and career skills.
          Your goals, accelerated.
        </p>

        {/* CTAs */}
        <div style={{
          display: "flex", gap: "1rem",
          justifyContent: "center", flexWrap: "wrap",
          marginBottom: "3.5rem",
        }}>
          <Link href={ROUTES.COURSES} className="btn-primary" style={{
            fontSize: "1rem", padding: "0.875rem 2rem",
            boxShadow: "0 0 24px rgba(29,184,164,0.4)",
          }}>
            Explore Courses →
          </Link>
          <Link href={ROUTES.SIGNUP} style={{
            fontSize: "1rem", padding: "0.875rem 2rem",
            borderRadius: "0.625rem",
            border: "1px solid rgba(255,255,255,0.25)",
            color: "#fff", textDecoration: "none",
            fontWeight: 600,
            background: "rgba(255,255,255,0.07)",
          }}>
            Start Free — No Card
          </Link>
        </div>

        {/* Stats row */}
        <div style={{
          display: "flex", gap: "2rem",
          justifyContent: "center", flexWrap: "wrap",
        }}>
          {STATS.map(({ value, label }) => (
            <div key={label} style={{ textAlign: "center" }}>
              <p style={{ fontSize: "1.75rem", fontWeight: 900, color: "var(--color-brand-teal)", margin: 0 }}>
                {value}
              </p>
              <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.5)", margin: "0.125rem 0 0", fontWeight: 500 }}>
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
