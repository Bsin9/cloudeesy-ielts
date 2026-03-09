"use client";
import Link from "next/link";
import { Lock } from "lucide-react";
import { PLANS } from "@/config/plans.js";
import { ROUTES } from "@/config/routes.js";

/**
 * LockedCard — overlays a locked course card when plan access is insufficient
 * requiredPlan: "pro" | "team"
 */
export function LockedCard({ requiredPlan = "pro", children }) {
  const plan = PLANS[requiredPlan.toUpperCase()] ?? PLANS.PRO;
  return (
    <div style={{ position: "relative", borderRadius: "var(--radius-lg, 0.75rem)", overflow: "hidden" }}>
      {/* Blurred children */}
      <div style={{ filter: "blur(2px)", pointerEvents: "none", userSelect: "none", opacity: 0.6 }}>
        {children}
      </div>
      {/* Overlay */}
      <div style={{
        position: "absolute", inset: 0,
        background: "rgba(15,31,61,0.65)",
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        gap: "0.75rem", padding: "1rem",
        backdropFilter: "blur(2px)",
        borderRadius: "var(--radius-lg, 0.75rem)",
      }}>
        <div style={{
          width: "2.5rem", height: "2.5rem", borderRadius: "50%",
          background: "rgba(255,255,255,0.1)", display: "flex",
          alignItems: "center", justifyContent: "center",
        }}>
          <Lock size={20} color="#fff" />
        </div>
        <p style={{ color: "#fff", fontWeight: 700, fontSize: "0.9rem", textAlign: "center", margin: 0 }}>
          {plan.name} Plan Required
        </p>
        <Link href={ROUTES.PRICING} style={{
          background: "var(--color-brand-teal)", color: "#fff",
          padding: "0.5rem 1.25rem", borderRadius: "0.5rem",
          fontSize: "0.8rem", fontWeight: 600, textDecoration: "none",
          transition: "opacity 0.15s",
        }}>
          Upgrade to {plan.name} →
        </Link>
      </div>
    </div>
  );
}
