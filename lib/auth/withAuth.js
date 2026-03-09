import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { authOptions } from "./authOptions.js";

/**
 * Server-side auth guard — call at the top of any protected page component.
 * Redirects to /login if there is no valid session.
 * @returns {Promise<import("next-auth").Session>}
 */
export async function requireAuth() {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/login");
  return session;
}

/**
 * Require a specific role (e.g. "admin"). Redirects to dashboard if wrong role.
 * @param {"student"|"admin"} role
 */
export async function requireRole(role) {
  const session = await requireAuth();
  if (session.user.role !== role) redirect("/dashboard");
  return session;
}
