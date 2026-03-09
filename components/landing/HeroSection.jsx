import Link from "next/link";
import { ROUTES } from "@/config/routes.js";

export function HeroSection() {
  return (
    <section style={{ position: "relative", padding: "6rem 1.5rem 4rem", textAlign: "center",
      background: "linear-gradient(180deg, var(--color-brand-teal-pale) 0%, #fff 100%)", overflow: "hidden" }}>
      {/* Decorative blobs */}
      {[{ size: 400, x: -10, y: -10, opacity: 0.08 }, { size: 300, x: 70, y: 20, opacity: 0.06 }].map((b, i) => (
        <div key={i} style={{
          position: "absolute", width: b.size, height: b.size,
          left: `${b.x}%`, top: `${b.y}%`, transform: "translate(-50%,-50%)",
          background: "var(--color-brand-teal)", borderRadius: "50%", opacity: b.opacity,
          pointerEvents: "none", filter: "blur(60px)",
        }} />
      ))}

      <div style={{ position: "relative", maxWidth: "700px", margin: "0 auto" }}>
        <span style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem",
          background: "var(--color-brand-teal-pale)", border: "1px solid var(--color-brand-teal)",
          borderRadius: "var(--radius-full)", padding: "0.375rem 1rem",
          fontSize: "0.8rem", fontWeight: 600, color: "var(--color-brand-teal)",
          marginBottom: "1.5rem" }}>
          ⚡ IELTS General Training
        </span>

        <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.25rem)", fontWeight: 900,
          color: "var(--color-brand-navy)", lineHeight: 1.15, marginBottom: "1.25rem" }}>
          Score Band 7+ with<br />
          <span style={{ color: "var(--color-brand-teal)" }}>RiseIQ IELTS</span>
        </h1>

        <p style={{ fontSize: "1.125rem", color: "var(--color-brand-gray)",
          maxWidth: "500px", margin: "0 auto 2.5rem", lineHeight: 1.7 }}>
          Interactive practice for all four skills — tailored to your band goal
          and exam date.
        </p>

        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href={ROUTES.SIGNUP} className="btn-primary" style={{ fontSize: "1rem", padding: "0.875rem 2rem" }}>
            Start Free Practice →
          </Link>
          <Link href={ROUTES.LOGIN} className="btn-secondary" style={{ fontSize: "1rem" }}>
            Sign In
          </Link>
        </div>
      </div>
    </section>
  );
}
