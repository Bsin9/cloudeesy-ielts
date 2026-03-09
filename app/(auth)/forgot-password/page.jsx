import { META } from "@/config/metadata.js";
import Link from "next/link";
import { ROUTES } from "@/config/routes.js";

export const metadata = META.pages.forgotPw;

export default function ForgotPasswordPage() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center",
      background: "linear-gradient(180deg, var(--color-brand-teal-pale) 0%, #fff 100%)", padding: "1.5rem" }}>
      <div className="card" style={{ width: "100%", maxWidth: "400px", padding: "2.5rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <p style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>🔑</p>
          <h1 style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--color-brand-navy)" }}>
            Reset your password
          </h1>
          <p style={{ color: "var(--color-brand-gray)", fontSize: "0.875rem", marginTop: "0.25rem" }}>
            Enter your email and we&apos;ll send a reset link
          </p>
        </div>

        <form style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <div>
            <label htmlFor="email" style={{ display: "block", fontWeight: 600, fontSize: "0.875rem",
              color: "var(--color-brand-navy)", marginBottom: "0.375rem" }}>Email</label>
            <input id="email" name="email" type="email" className="input-field"
              placeholder="you@example.com" autoComplete="email" required />
          </div>
          <button type="submit" className="btn-primary" style={{ width: "100%", justifyContent: "center" }}>
            Send Reset Link →
          </button>
        </form>

        <p style={{ textAlign: "center", marginTop: "1.5rem", fontSize: "0.875rem",
          color: "var(--color-brand-gray)" }}>
          <Link href={ROUTES.LOGIN}
            style={{ color: "var(--color-brand-teal)", fontWeight: 600, textDecoration: "none" }}>
            ← Back to sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
