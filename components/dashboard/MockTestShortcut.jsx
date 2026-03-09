import Link from "next/link";
import { ROUTES } from "@/config/routes.js";

export function MockTestShortcut() {
  return (
    <div style={{
      background: "linear-gradient(135deg,var(--color-brand-navy) 0%,var(--color-brand-navy-light) 100%)",
      borderRadius: "var(--radius-lg)", padding: "1.25rem",
      display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem",
    }}>
      <div>
        <p style={{ fontWeight: 800, color: "#fff", fontSize: "1rem", marginBottom: "0.25rem" }}>
          📝 Full Mock Test
        </p>
        <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.8rem" }}>
          Simulate real exam conditions — 160 minutes
        </p>
      </div>
      <Link href={ROUTES.MOCK_TEST} className="btn-primary" style={{ flexShrink: 0 }}>
        Start Now →
      </Link>
    </div>
  );
}
