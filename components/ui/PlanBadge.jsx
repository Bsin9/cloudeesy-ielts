"use client";
import { PLANS } from "@/config/plans.js";

/**
 * PlanBadge — shows Free / Pro / Team label
 */
export function PlanBadge({ plan = "free", size = "sm" }) {
  const def = PLANS[plan?.toUpperCase()] ?? PLANS.FREE;
  const sm = size === "sm";
  return (
    <span style={{
      display: "inline-flex", alignItems: "center",
      padding: sm ? "0.125rem 0.5rem" : "0.25rem 0.75rem",
      borderRadius: "var(--radius-full, 9999px)",
      fontSize: sm ? "0.65rem" : "0.75rem",
      fontWeight: 700,
      letterSpacing: "0.03em",
      textTransform: "uppercase",
      background: def.badgeColor + "22",
      color: def.badgeColor,
      border: `1px solid ${def.badgeColor}44`,
    }}>
      {def.badge}
    </span>
  );
}
