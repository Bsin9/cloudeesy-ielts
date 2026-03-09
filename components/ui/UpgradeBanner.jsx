"use client";
import Link from "next/link";
import { ROUTES } from "@/config/routes.js";

/**
 * UpgradeBanner — shown to Free users to upsell Pro
 */
export function UpgradeBanner({ message }) {
  return (
    <div style={{
      background: "linear-gradient(135deg, var(--color-brand-navy) 0%, var(--color-brand-navy-light) 100%)",
      borderRadius: "var(--radius-lg, 0.75rem)",
      padding: "1rem 1.25rem",
      display: "flex", alignItems: "center", justifyContent: "space-between",
      flexWrap: "wrap", gap: "0.75rem",
    }}>
      <div>
        <p style={{ color: "#fff", fontWeight: 700, fontSize: "0.95rem", margin: "0 0 0.2rem" }}>
          🚀 Unlock All Courses with Pro
        </p>
        <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.8rem", margin: 0 }}>
          {message ?? "Get unlimited access to all 13 courses + full Synapse Brain feedback."}
        </p>
      </div>
      <Link href={ROUTES.PRICING} style={{
        background: "var(--color-brand-teal)", color: "#fff",
        padding: "0.5rem 1.25rem", borderRadius: "0.5rem",
        fontSize: "0.875rem", fontWeight: 600, textDecoration: "none",
        whiteSpace: "nowrap", flexShrink: 0,
      }}>
        Upgrade — $19/mo →
      </Link>
    </div>
  );
}
