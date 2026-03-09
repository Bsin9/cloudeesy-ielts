"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/config/routes.js";

/** Convenience wrapper around next-auth/react session */
export function useAuth() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const isLoading       = status === "loading";
  const isAuthenticated = status === "authenticated";
  const user            = session?.user ?? null;

  async function login(email, password) {
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    if (result?.ok) router.push(ROUTES.DASHBOARD);
    return result;
  }

  async function logout() {
    await signOut({ redirect: false });
    router.push(ROUTES.LOGIN);
  }

  return { session, user, isLoading, isAuthenticated, login, logout };
}
