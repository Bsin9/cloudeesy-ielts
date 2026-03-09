import Link from "next/link";
import { ROUTES } from "@/config/routes.js";

export default function NotFound() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center", padding: "2rem", textAlign: "center" }}>
      <p style={{ fontSize: "4rem", marginBottom: "1rem" }}>🔍</p>
      <h1 style={{ fontSize: "1.75rem", fontWeight: 800, color: "var(--color-brand-navy)", marginBottom: "0.5rem" }}>
        Page Not Found
      </h1>
      <p style={{ color: "var(--color-brand-gray)", marginBottom: "2rem" }}>
        This page doesn&apos;t exist. Let&apos;s get you back on track.
      </p>
      <Link href={ROUTES.DASHBOARD} className="btn-primary">← Back to Dashboard</Link>
    </div>
  );
}
