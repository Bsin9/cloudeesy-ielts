import Link from "next/link";
import { ROUTES } from "@/config/routes.js";

const PLANS = [
  {
    name: "Free",
    price: "£0",
    period: "forever",
    features: ["Reading & Listening practice", "3 Writing prompts/month", "Basic progress tracking", "Band estimates"],
    cta: "Get Started", ctaHref: ROUTES.SIGNUP, variant: "secondary",
  },
  {
    name: "Pro",
    price: "£9",
    period: "/month",
    features: ["Unlimited practice sessions", "Full Mock Tests", "Weak-area targeting", "Vocabulary bank", "Priority support"],
    cta: "Start Free Trial", ctaHref: ROUTES.SIGNUP, variant: "primary",
    highlight: true,
  },
];

export function PricingSection() {
  return (
    <section style={{ padding: "4rem 1.5rem", background: "var(--color-brand-gray-light)" }}>
      <div style={{ maxWidth: "700px", margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", fontSize: "1.75rem", fontWeight: 800, color: "var(--color-brand-navy)",
          marginBottom: "0.5rem" }}>Simple, Transparent Pricing</h2>
        <p style={{ textAlign: "center", color: "var(--color-brand-gray)", marginBottom: "2.5rem" }}>
          No hidden fees. Cancel any time.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.25rem" }}>
          {PLANS.map((p) => (
            <div key={p.name} className="card"
              style={{ padding: "2rem", border: p.highlight ? "2px solid var(--color-brand-teal)" : undefined,
                position: "relative" }}>
              {p.highlight && (
                <span style={{ position: "absolute", top: "-0.875rem", left: "50%", transform: "translateX(-50%)",
                  background: "var(--color-brand-teal)", color: "#fff", fontSize: "0.7rem", fontWeight: 700,
                  padding: "0.25rem 0.875rem", borderRadius: "var(--radius-full)" }}>
                  Most Popular
                </span>
              )}
              <p style={{ fontWeight: 800, fontSize: "1.125rem", color: "var(--color-brand-navy)",
                marginBottom: "0.25rem" }}>{p.name}</p>
              <p style={{ marginBottom: "1.25rem" }}>
                <span style={{ fontSize: "2rem", fontWeight: 900, color: "var(--color-brand-navy)" }}>{p.price}</span>
                <span style={{ color: "var(--color-brand-gray)", fontSize: "0.875rem" }}>{p.period}</span>
              </p>
              <ul style={{ listStyle: "none", padding: 0, marginBottom: "1.5rem",
                display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {p.features.map((f) => (
                  <li key={f} style={{ display: "flex", gap: "0.5rem", fontSize: "0.875rem", color: "var(--color-brand-navy)" }}>
                    <span style={{ color: "var(--color-brand-teal)" }}>✓</span> {f}
                  </li>
                ))}
              </ul>
              <Link href={p.ctaHref}
                className={p.variant === "primary" ? "btn-primary" : "btn-secondary"}
                style={{ width: "100%", justifyContent: "center" }}>
                {p.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
