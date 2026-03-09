import Link from "next/link";
import { ROUTES } from "@/config/routes.js";
import { PLANS, PLAN_ORDER } from "@/config/plans.js";
import { Check } from "lucide-react";

export function PricingSection() {
  return (
    <section id="pricing" style={{ padding: "4rem 1.5rem", background: "var(--color-brand-gray-light)" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", fontSize: "1.75rem", fontWeight: 800,
          color: "var(--color-brand-navy)", marginBottom: "0.5rem" }}>
          Simple, transparent pricing
        </h2>
        <p style={{ textAlign: "center", color: "var(--color-brand-gray)", marginBottom: "2.5rem" }}>
          No hidden fees. Cancel any time. All prices in CAD.
        </p>

        <div style={{
          display: "flex", gap: "1.25rem", justifyContent: "center",
          flexWrap: "wrap", alignItems: "stretch",
        }}>
          {PLAN_ORDER.map((key) => {
            const p = PLANS[key.toUpperCase()];
            return (
              <div key={key} style={{
                background: p.popular ? "var(--color-brand-navy)" : "#fff",
                border: p.popular ? "2px solid var(--color-brand-teal)" : "1px solid rgba(0,0,0,0.08)",
                borderRadius: "1.25rem",
                padding: "2rem",
                flex: "1 1 240px", maxWidth: "300px",
                position: "relative",
                boxShadow: p.popular ? "0 0 30px rgba(29,184,164,0.2)" : "var(--shadow-card)",
              }}>
                {p.popular && (
                  <div style={{
                    position: "absolute", top: 0, left: "50%",
                    transform: "translate(-50%, -50%)",
                    background: "var(--color-brand-teal)", color: "#fff",
                    fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.06em",
                    padding: "0.2rem 0.875rem", borderRadius: "9999px", textTransform: "uppercase",
                  }}>Most Popular</div>
                )}

                <p style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase",
                  letterSpacing: "0.08em", marginBottom: "0.625rem",
                  color: p.popular ? "var(--color-brand-teal)" : p.badgeColor }}>
                  {p.name}
                </p>

                <div style={{ marginBottom: "1.25rem" }}>
                  {p.price === 0
                    ? <span style={{ fontSize: "2.25rem", fontWeight: 900,
                        color: p.popular ? "#fff" : "var(--color-brand-navy)" }}>Free</span>
                    : <>
                        <span style={{ fontSize: "2.25rem", fontWeight: 900,
                          color: p.popular ? "#fff" : "var(--color-brand-navy)" }}>${p.price}</span>
                        <span style={{ fontSize: "0.875rem",
                          color: p.popular ? "rgba(255,255,255,0.5)" : "var(--color-brand-gray)" }}> CAD/mo</span>
                      </>
                  }
                </div>

                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 1.5rem",
                  display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  {p.features.map((f) => (
                    <li key={f} style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start",
                      fontSize: "0.85rem",
                      color: p.popular ? "rgba(255,255,255,0.8)" : "var(--color-brand-gray)" }}>
                      <Check size={14} color="var(--color-brand-teal)" style={{ marginTop: "0.15rem", flexShrink: 0 }} />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link href={p.ctaHref}
                  className={p.popular ? "btn-primary" : "btn-secondary"}
                  style={{ display: "block", textAlign: "center", fontSize: "0.9rem" }}>
                  {p.cta}
                </Link>
              </div>
            );
          })}
        </div>

        <p style={{ textAlign: "center", marginTop: "1.5rem", fontSize: "0.8rem",
          color: "var(--color-brand-gray)" }}>
          Need a full comparison?{" "}
          <Link href={ROUTES.PRICING} style={{ color: "var(--color-brand-teal)", fontWeight: 600 }}>
            See all features →
          </Link>
        </p>
      </div>
    </section>
  );
}
