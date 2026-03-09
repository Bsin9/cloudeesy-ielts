"use client";
import { useState } from "react";
import { X, Zap, Eye, EyeOff } from "lucide-react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { ROUTES } from "@/config/routes.js";

/**
 * LoginModal — popup modal login overlay.
 * Props:
 *   isOpen: boolean
 *   onClose: () => void
 *   redirectTo: string (default "/dashboard")
 */
export function LoginModal({ isOpen, onClose, redirectTo = "/dashboard" }) {
  const [email, setEmail]       = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw]     = useState(false);
  const [loading, setLoading]   = useState(false);
  const [error, setError]       = useState("");

  if (!isOpen) return null;

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);
    const res = await signIn("credentials", {
      email, password, redirect: false,
    });
    setLoading(false);
    if (res?.ok) {
      onClose();
      window.location.href = redirectTo;
    } else {
      setError("Invalid email or password. Try demo@riseiq.ca / demo1234");
    }
  }

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        aria-hidden="true"
        style={{
          position: "fixed", inset: 0, zIndex: 9998,
          background: "rgba(15,31,61,0.6)",
          backdropFilter: "blur(4px)",
          animation: "fadeIn 0.2s ease-out",
        }}
      />

      {/* Modal */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="login-modal-title"
        style={{
          position: "fixed", inset: 0, zIndex: 9999,
          display: "flex", alignItems: "center", justifyContent: "center",
          padding: "1rem",
          pointerEvents: "none",
        }}
      >
        <div style={{
          background: "#fff",
          borderRadius: "1.25rem",
          padding: "2rem",
          width: "100%",
          maxWidth: "26rem",
          boxShadow: "var(--shadow-modal, 0 20px 60px -10px rgba(15,31,61,0.25))",
          pointerEvents: "all",
          animation: "slideUp 0.3s ease-out",
          position: "relative",
        }}>
          {/* Close */}
          <button
            onClick={onClose}
            aria-label="Close login modal"
            style={{
              position: "absolute", top: "1rem", right: "1rem",
              background: "transparent", border: "none", cursor: "pointer",
              color: "var(--color-brand-gray)", padding: "0.25rem",
              borderRadius: "0.375rem",
            }}
          >
            <X size={20} />
          </button>

          {/* Logo */}
          <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
            <div style={{
              width: "3rem", height: "3rem", borderRadius: "0.75rem",
              background: "var(--color-brand-teal)",
              display: "inline-flex", alignItems: "center", justifyContent: "center",
              marginBottom: "0.75rem",
            }}>
              <Zap size={22} color="#fff" />
            </div>
            <h2 id="login-modal-title" style={{
              fontSize: "1.375rem", fontWeight: 800,
              color: "var(--color-brand-navy)", margin: 0,
            }}>
              Welcome back
            </h2>
            <p style={{ color: "var(--color-brand-gray)", fontSize: "0.875rem", marginTop: "0.375rem" }}>
              Sign in to continue learning
            </p>
          </div>

          {/* Error */}
          {error && (
            <div style={{
              background: "#FEF2F2", border: "1px solid #FCA5A5",
              borderRadius: "0.5rem", padding: "0.75rem",
              fontSize: "0.8rem", color: "#EF4444", marginBottom: "1rem",
            }}>
              {error}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div>
              <label htmlFor="modal-email" style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--color-brand-navy)", display: "block", marginBottom: "0.375rem" }}>
                Email
              </label>
              <input
                id="modal-email"
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                style={{
                  width: "100%", padding: "0.625rem 0.875rem",
                  border: "1px solid var(--color-brand-gray-mid)",
                  borderRadius: "0.5rem", fontSize: "0.875rem",
                  outline: "none", transition: "border-color 0.15s",
                  boxSizing: "border-box",
                }}
              />
            </div>

            <div>
              <label htmlFor="modal-password" style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--color-brand-navy)", display: "block", marginBottom: "0.375rem" }}>
                Password
              </label>
              <div style={{ position: "relative" }}>
                <input
                  id="modal-password"
                  type={showPw ? "text" : "password"}
                  required
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  style={{
                    width: "100%", padding: "0.625rem 2.5rem 0.625rem 0.875rem",
                    border: "1px solid var(--color-brand-gray-mid)",
                    borderRadius: "0.5rem", fontSize: "0.875rem",
                    outline: "none", transition: "border-color 0.15s",
                    boxSizing: "border-box",
                  }}
                />
                <button
                  type="button"
                  aria-label={showPw ? "Hide password" : "Show password"}
                  onClick={() => setShowPw((v) => !v)}
                  style={{
                    position: "absolute", right: "0.75rem", top: "50%",
                    transform: "translateY(-50%)",
                    background: "transparent", border: "none", cursor: "pointer",
                    color: "var(--color-brand-gray)",
                  }}
                >
                  {showPw ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              style={{
                width: "100%", padding: "0.75rem",
                background: loading ? "var(--color-brand-gray-mid)" : "var(--color-brand-teal)",
                color: "#fff", border: "none", borderRadius: "0.625rem",
                fontSize: "1rem", fontWeight: 700, cursor: loading ? "not-allowed" : "pointer",
                transition: "opacity 0.15s",
              }}
            >
              {loading ? "Signing in…" : "Sign In"}
            </button>
          </form>

          {/* Footer links */}
          <div style={{ textAlign: "center", marginTop: "1.25rem", fontSize: "0.8rem", color: "var(--color-brand-gray)" }}>
            Don&apos;t have an account?{" "}
            <Link href={ROUTES.SIGNUP} onClick={onClose} style={{ color: "var(--color-brand-teal)", fontWeight: 600, textDecoration: "none" }}>
              Sign up free
            </Link>
          </div>

          {/* Demo hint */}
          <div style={{
            marginTop: "1rem",
            background: "var(--color-brand-gray-light)",
            borderRadius: "0.5rem",
            padding: "0.625rem 0.875rem",
            fontSize: "0.75rem",
            color: "var(--color-brand-gray)",
          }}>
            <strong>Demo:</strong> demo@riseiq.ca / demo1234
          </div>
        </div>
      </div>
    </>
  );
}
