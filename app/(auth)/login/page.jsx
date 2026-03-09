import { META } from "@/config/metadata.js";
import Link from "next/link";
import { ROUTES } from "@/config/routes.js";

export const metadata = META.pages.login;

export default function LoginPage() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center",
      background: "linear-gradient(180deg, var(--color-brand-teal-pale) 0%, #fff 100%)", padding: "1.5rem" }}>
      <div className="card" style={{ width: "100%", maxWidth: "400px", padding: "2.5rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <p style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>⚡</p>
          <h1 style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--color-brand-navy)" }}>
            Welcome back
          </h1>
          <p style={{ color: "var(--color-brand-gray)", fontSize: "0.875rem", marginTop: "0.25rem" }}>
            Sign in to continue your IELTS prep
          </p>
        </div>

        <form action="/api/auth/callback/credentials" method="POST"
          style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <div>
            <label htmlFor="email" style={{ display: "block", fontWeight: 600, fontSize: "0.875rem",
              color: "var(--color-brand-navy)", marginBottom: "0.375rem" }}>Email</label>
            <input id="email" name="email" type="email" className="input-field"
              placeholder="you@example.com" autoComplete="email" required />
          </div>

          <div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.375rem" }}>
              <label htmlFor="password" style={{ fontWeight: 600, fontSize: "0.875rem",
                color: "var(--color-brand-navy)" }}>Password</label>
              <Link href={ROUTES.FORGOT_PASSWORD}
                style={{ fontSize: "0.75rem", color: "var(--color-brand-teal)", textDecoration: "none" }}>
                Forgot password?
              </Link>
            </div>
            <input id="password" name="password" type="password" className="input-field"
              placeholder="••••••••" autoComplete="current-password" required />
          </div>

          <button type="submit" className="btn-primary" style={{ width: "100%", justifyContent: "center",
            marginTop: "0.5rem" }}>
            Sign In →
          </button>
        </form>

        <p style={{ textAlign: "center", marginTop: "1.5rem", fontSize: "0.875rem",
          color: "var(--color-brand-gray)" }}>
          New here?{" "}
          <Link href={ROUTES.SIGNUP}
            style={{ color: "var(--color-brand-teal)", fontWeight: 600, textDecoration: "none" }}>
            Create a free account
          </Link>
        </p>

        <p style={{ textAlign: "center", marginTop: "0.75rem", fontSize: "0.75rem",
          color: "var(--color-brand-gray)", background: "var(--color-brand-gray-light)",
          padding: "0.5rem 0.875rem", borderRadius: "0.5rem" }}>
          Demo: demo@cloudeesy.com / demo1234
        </p>
      </div>
    </div>
  );
}
