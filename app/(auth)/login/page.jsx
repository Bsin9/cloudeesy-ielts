"use client";
import { Suspense, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { ROUTES } from "@/config/routes.js";

// Inner form component — needs Suspense because of useSearchParams
function LoginForm() {
  const router       = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl  = searchParams.get("callbackUrl") || ROUTES.DASHBOARD;

  const [email,    setEmail]    = useState("demo@riseiq.ca");
  const [password, setPassword] = useState("demo1234");
  const [error,    setError]    = useState("");
  const [loading,  setLoading]  = useState(false);
  const [showPw,   setShowPw]   = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      if (result?.error) {
        setError("Invalid email or password. Please try again.");
      } else {
        router.push(callbackUrl);
        router.refresh();
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {error && (
        <div style={{ background: "#FEF2F2", border: "1px solid #FECACA", borderRadius: "0.5rem",
          padding: "0.75rem 1rem", marginBottom: "1rem", fontSize: "0.875rem", color: "#DC2626" }}>
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <div>
          <label htmlFor="email" style={{ display: "block", fontWeight: 600, fontSize: "0.875rem",
            color: "var(--color-brand-navy)", marginBottom: "0.375rem" }}>Email</label>
          <input id="email" name="email" type="email" className="input-field"
            value={email} onChange={(e) => setEmail(e.target.value)}
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
          <div style={{ position: "relative" }}>
            <input id="password" name="password" type={showPw ? "text" : "password"} className="input-field"
              value={password} onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••" autoComplete="current-password" required
              style={{ paddingRight: "2.5rem", width: "100%", boxSizing: "border-box" }} />
            <button type="button" onClick={() => setShowPw(!showPw)}
              style={{ position: "absolute", right: "0.75rem", top: "50%", transform: "translateY(-50%)",
                background: "none", border: "none", cursor: "pointer", fontSize: "0.9rem",
                color: "var(--color-brand-gray)", padding: 0 }}>
              {showPw ? "🙈" : "👁"}
            </button>
          </div>
        </div>

        <button type="submit" className="btn-primary" disabled={loading}
          style={{ width: "100%", justifyContent: "center", marginTop: "0.5rem",
            opacity: loading ? 0.7 : 1, cursor: loading ? "not-allowed" : "pointer" }}>
          {loading ? "Signing in…" : "Sign In →"}
        </button>
      </form>
    </>
  );
}

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

        {/* Suspense required because LoginForm uses useSearchParams */}
        <Suspense fallback={<div style={{ textAlign: "center", color: "var(--color-brand-gray)" }}>Loading…</div>}>
          <LoginForm />
        </Suspense>

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
          Demo: demo@riseiq.ca / demo1234
        </p>
      </div>
    </div>
  );
}
