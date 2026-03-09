/**
 * planGate — plan-based access control helper
 *
 * Usage (server component):
 *   import { canAccess, requirePlan } from "@/lib/auth/planGate.js";
 *   if (!canAccess(session?.user?.plan, "pro")) redirect("/pricing");
 */

import { PLAN_ORDER } from "@/config/plans.js";

/**
 * Returns true if `userPlan` meets or exceeds `requiredPlan`.
 * @param {string} userPlan     - e.g. "free" | "pro" | "team"
 * @param {string} requiredPlan - e.g. "pro"
 */
export function canAccess(userPlan = "free", requiredPlan = "free") {
  const normalised = (p) => (p ?? "free").toLowerCase();
  return PLAN_ORDER.indexOf(normalised(userPlan)) >= PLAN_ORDER.indexOf(normalised(requiredPlan));
}

/**
 * Course-level gate — checks if the user's plan allows access to a specific course.
 * @param {string} userPlan
 * @param {import("@/config/courses.js").Course} course
 */
export function canAccessCourse(userPlan, course) {
  return canAccess(userPlan, course?.requiredPlan ?? "free");
}

/**
 * Returns the highest plan for a given user (utility).
 */
export function getUserPlanLabel(plan) {
  const p = (plan ?? "free").toLowerCase();
  const labels = { free: "Free", pro: "Pro", team: "Team" };
  return labels[p] ?? "Free";
}
