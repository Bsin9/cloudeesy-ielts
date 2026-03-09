import { Navbar }  from "@/components/layout/Navbar.jsx";
import { Footer }  from "@/components/layout/Footer.jsx";
import { PLANS, PLAN_ORDER } from "@/config/plans.js";
import Link        from "next/link";
import { Check }   from "lucide-react";

export const metadata = {
  title: "Pricing — RiseIQ",
  description: "Simple, transparent pricing. Free, Pro at $19/mo CAD, or Team at $49/mo CAD.",
};

const COMPARE_ROWS = [
  { feature: "Course access",             free: "2 courses",   pro: "All 13",      team: "All 13"     },
  { feature: "Synapse Brain feedback",    free: "Basic",       pro: "Full",        team: "Full"        },
  { feature: "Progress tracking",         free: true,          pro: true,          team: true          },
  { feature: "Certificates",             free: false,         pro: true,          team: true          },
  { feature: "Offline mode",             free: false,         pro: true,          team: true          },
  { feature: "Priority support",         free: false,         pro: true,          team: true          },
  { feature: "Team analytics",           free: false,         pro: false,         team: true          },
  { feature: "Instructor controls",      free: false,         pro: false,         team: true          },
  { feature: "Up to 10 seats",           free: false,         pro: false,         team: true          },
];

function Cell({ value }) {
  if (value === true)  return <span style={{ color: "#22C55E" }}>✓</span>;
  if (value === false) return <span style={{ color: "#CBD5E1" }}>–</span>;
  return <span style={{ fontSize: "0.85rem", color: "var(--color-brand-gray)" }}>{value}</span>;
}

function PlanCard({ plan }) {
  const def = PLANS[plan.toUpperCase()];
  return (
    <div style={{
      background: def.popular ? "var(--color-brand-navy)" : "#fff",
      border: def.popular ? "2px solid var(--color-brand-teal)" : "1px solid rgba(0,0,0,0.08)",
      borderRadius: "1.25rem",
      padding: "2rem",
      position: "relative",
      flex: "1 1 260px",
      minWidth: "240px",
      maxWidth: "340px",
      boxShadow: def.popular ? "0 0 30px rgba(29,184,164,0.2)" : "var(--shadow-card)",
    }}>
      {def.popular && (
        <div style={{
          position: "absolute", top: "-1px", left: "50%",
          transform: "translate(-50%, -50%)",
          background: "var(--color-brand-teal)", color: "#fff",
          fontSize: "0.7rem", fontWeight: 700,
          padding: "0.25rem 0.875rem", borderRadius: "9999px",
          letterSpacing: "0.06em", textTransform: "uppercase",
        }}>
          Most Popular
        </div>
      )}

      <p style={{
        fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase",
        letterSpacing: "0.08em",
        color: def.popular ? "var(--color-brand-teal)" : def.badgeColor,
        marginBottom: "0.75rem",
      }}>
        {def.name}
      </p>

      <div style={{ marginBottom: "0.5rem" }}>
        {def.price === 0 ? (
          <span style={{ fontSize: "2.5rem", fontWeight: 900,
            color: def.popular ? "#fff" : "var(--color-brand-navy)" }}>
            Free
          </span>
        ) : (
          <>
            <span style={{ fontSize: "2.5rem", fontWeight: 900,
              color: def.popular ? "#fff" : "var(--color-brand-navy)" }}>
              ${def.price}
            </span>
            <span style={{ fontSize: "1rem", color: def.popular ? "rgba(255,255,255,0.55)" : "var(--color-brand-gray)" }}>
              {" "}CAD/mo
            </span>
          </>
        )}
      </div>
      <p style={{ fontSize: "0.85rem",
        color: def.popular ? "rgba(255,255,255,0.6)" : "var(--color-brand-gray)",
        marginBottom: "1.5rem" }}>
        {def.tagline}
      </p>

      <ul style={{ listStyle: "none", padding: 0, margin: "0 0 1.75rem",
        display: "flex", flexDirection: "column", gap: "0.625rem" }}>
        {def.features.map((f) => (
          <li key={f} style={{ display: "flex", gap: "0.625rem", alignItems: "flex-start" }}>
            <Check size={15} color="var(--color-brand-teal)" style={{ flexShrink: 0, marginTop: "0.1rem" }} />
            <span style={{ fontSize: "0.875rem",
              color: def.popular ? "rgba(255,255,255,0.8)" : "var(--color-brand-gray)" }}>
              {f}
            </span>
          </li>
        ))}
      </ul>

      <Link href={def.ctaHref} className={def.popular ? "btn-primary" : "btn-secondary"}
        style={{
          display: "block", textAlign: "center", fontSize: "0.95rem",
          ...(def.popular ? {} : { border: "1px solid rgba(0,0,0,0.15)" }),
        }}>
        {def.cta}
      </Link>
    </div>
  );
}

export default function PricingPage() {
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Navbar />
      <main id="main-content">
        {/* Hero */}
        <section style={{ textAlign: "center", padding: "4rem 1.5rem 2rem",
          background: "var(--color-brand-gray-light)" }}>
          <div style={{ maxWidth: "600px", margin: "0 auto" }}>
            <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 900,
              color: "var(--color-brand-navy)", marginBottom: "1rem" }}>
              Simple, honest pricing
            </h1>
            <p style={{ color: "var(--color-brand-gray)", fontSize: "1.1rem", lineHeight: 1.6 }}>
              Start free. Upgrade when you&apos;re ready. All prices in CAD.
              No hidden fees.
            </p>
          </div>
        </section>

        {/* Plans */}
        <section style={{ padding: "3rem 1.5rem" }}>
          <div style={{
            display: "flex", gap: "1.5rem", justifyContent: "center",
            flexWrap: "wrap", maxWidth: "1100px", margin: "0 auto",
            alignItems: "stretch",
          }}>
            {PLAN_ORDER.map((p) => <PlanCard key={p} plan={p} />)}
          </div>
        </section>

        {/* Comparison table */}
        <section style={{ maxWidth: "900px", margin: "0 auto", padding: "2rem 1.5rem 4rem" }}>
          <h2 style={{ textAlign: "center", fontSize: "1.5rem", fontWeight: 800,
            color: "var(--color-brand-navy)", marginBottom: "1.5rem" }}>
            Full comparison
          </h2>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse",
              background: "#fff", borderRadius: "1rem", overflow: "hidden",
              boxShadow: "var(--shadow-card)" }}>
              <thead>
                <tr style={{ background: "var(--color-brand-navy)" }}>
                  <th style={{ padding: "1rem", textAlign: "left", color: "rgba(255,255,255,0.6)",
                    fontSize: "0.8rem", fontWeight: 600 }}>Feature</th>
                  {PLAN_ORDER.map((p) => (
                    <th key={p} style={{ padding: "1rem", textAlign: "center",
                      color: p === "pro" ? "var(--color-brand-teal)" : "#fff",
                      fontSize: "0.875rem", fontWeight: 700 }}>
                      {PLANS[p.toUpperCase()].name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPARE_ROWS.map((row, i) => (
                  <tr key={row.feature} style={{
                    background: i % 2 === 0 ? "#fff" : "var(--color-brand-gray-light)",
                  }}>
                    <td style={{ padding: "0.875rem 1rem", fontSize: "0.875rem",
                      color: "var(--color-brand-navy)", fontWeight: 500 }}>
                      {row.feature}
                    </td>
                    <td style={{ padding: "0.875rem 1rem", textAlign: "center" }}>
                      <Cell value={row.free} />
                    </td>
                    <td style={{ padding: "0.875rem 1rem", textAlign: "center" }}>
                      <Cell value={row.pro} />
                    </td>
                    <td style={{ padding: "0.875rem 1rem", textAlign: "center" }}>
                      <Cell value={row.team} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* FAQ teaser */}
        <section style={{
          background: "var(--color-brand-navy)",
          padding: "3rem 1.5rem",
          textAlign: "center",
        }}>
          <div style={{ maxWidth: "600px", margin: "0 auto" }}>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#fff", marginBottom: "0.75rem" }}>
              Questions? We&apos;ve got answers.
            </h2>
            <p style={{ color: "rgba(255,255,255,0.65)", marginBottom: "1.5rem" }}>
              Cancel anytime. No contracts. Your data is yours.
            </p>
            <Link href="/contact" style={{
              display: "inline-block",
              border: "1px solid rgba(255,255,255,0.3)",
              color: "#fff", borderRadius: "0.625rem",
              padding: "0.75rem 2rem",
              textDecoration: "none", fontWeight: 600,
            }}>
              Contact Support →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
