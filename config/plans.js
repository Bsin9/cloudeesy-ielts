/**
 * RiseIQ — Pricing plan definitions
 * Free / Pro / Team
 */

export const PLANS = {
  FREE: {
    id: "free",
    name: "Free",
    price: 0,
    currency: "CAD",
    interval: null,
    badge: "Free",
    badgeColor: "#64748B",
    tagline: "Get started at no cost",
    courseLimit: 2,              // max enrolled courses
    features: [
      "Access to 2 courses",
      "Basic Synapse Brain feedback",
      "Community forum access",
      "Progress tracking",
    ],
    cta: "Start Free",
    ctaHref: "/signup",
  },
  PRO: {
    id: "pro",
    name: "Pro",
    price: 19,
    currency: "CAD",
    interval: "month",
    badge: "Pro",
    badgeColor: "#1DB8A4",
    tagline: "Everything you need to rise",
    courseLimit: Infinity,
    features: [
      "Unlimited course access",
      "Full Synapse Brain AI feedback",
      "Priority support",
      "Downloadable certificates",
      "Offline mode",
      "All future courses",
    ],
    popular: true,
    cta: "Start Pro — $19/mo",
    ctaHref: "/signup?plan=pro",
  },
  TEAM: {
    id: "team",
    name: "Team",
    price: 49,
    currency: "CAD",
    interval: "month",
    badge: "Team",
    badgeColor: "#F5A623",
    tagline: "For organizations & classrooms",
    courseLimit: Infinity,
    seats: "Up to 10 members",
    features: [
      "Everything in Pro",
      "Up to 10 team members",
      "Team analytics dashboard",
      "Instructor controls",
      "Bulk onboarding",
      "Dedicated success manager",
    ],
    cta: "Start Team — $49/mo",
    ctaHref: "/signup?plan=team",
  },
};

export const PLAN_ORDER = ["free", "pro", "team"];

/** Check if a plan can access a course that requires `requiredPlan` */
export function planCanAccess(userPlan, requiredPlan) {
  const order = PLAN_ORDER;
  return order.indexOf(userPlan) >= order.indexOf(requiredPlan);
}
