import { META } from "@/config/metadata.js";
import Link from "next/link";
import { ROUTES } from "@/config/routes.js";

export const metadata = META.pages.signup;

const BAND_OPTIONS = [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9];

export default function SignupPage() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center",
      background: "linear-gradient(180deg, var(--color-brand-teal-pale) 0%, #fff 100%)", padding: "1.5rem" }}>
      <div className="card" style={{ width: "100%", maxWidth: "420px", padding: "2.5rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <p style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>⚡</p>
          <h1 style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--color-brand-navy)" }}>
            Create your account
          </h1>
          <p style={{ color: "var(--color-brand-gray)", fontSize: "0.875rem", marginTop: "0.25rem" }}>
            Free forever — no credit card required
          </p>
        </div>

        <form style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <div>
            <label htmlFor="name" style={{ display: "block", fontWeight: 600, fontSize: "0.875rem",
              color: "var(--color-brand-navy)", marginBottom: "0.375rem" }}>Full Name</label>
            <input id="name" name="name" type="text" className="input-field"
              placeholder="Priya Sharma" autoComplete="name" required />
          </div>

          <div>
            <label htmlFor="email" style={{ display: "block", fontWeight: 600, fontSize: "0.875rem",
              color: "var(--color-brand-navy)", marginBottom: "0.375rem" }}>Email</label>
            <input id="email" name="email" type="email" className="input-field"
              placeholder="you@example.com" autoComplete="email" required />
          </div>

          <div>
            <label htmlFor="password" style={{ display: "block", fontWeight: 600, fontSize: "0.875rem",
              color: "var(--color-brand-navy)", marginBottom: "0.375rem" }}>Password</label>
            <input id="password" name="password" type="password" className="input-field"
              placeholder="Min 8 characters" autoComplete="new-password" required minLength={8} />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
            <div>
              <label htmlFor="targetBand" style={{ display: "block", fontWeight: 600, fontSize: "0.875rem",
                color: "var(--color-brand-navy)", marginBottom: "0.375rem" }}>Target Band</label>
              <select id="targetBand" name="targetBand" className="input-field" required>
                <option value="">Select…</option>
                {BAND_OPTIONS.map((b) => (
                  <option key={b} value={b}>{b}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="examDate" style={{ display: "block", fontWeight: 600, fontSize: "0.875rem",
                color: "var(--color-brand-navy)", marginBottom: "0.375rem" }}>Exam Date</label>
              <input id="examDate" name="examDate" type="date" className="input-field" />
            </div>
          </div>

          <button type="submit" className="btn-primary" style={{ width: "100%", justifyContent: "center",
            marginTop: "0.5rem" }}>
            Create Account →
          </button>
        </form>

        <p style={{ textAlign: "center", marginTop: "1.5rem", fontSize: "0.875rem",
          color: "var(--color-brand-gray)" }}>
          Already have an account?{" "}
          <Link href={ROUTES.LOGIN}
            style={{ color: "var(--color-brand-teal)", fontWeight: 600, textDecoration: "none" }}>
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
