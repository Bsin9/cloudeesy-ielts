import Link from "next/link";
import { ROUTES } from "@/config/routes.js";

/**
 * @param {{ module: string, weakArea?: string }} props
 */
export function NextStepCard({ module, weakArea }) {
  const suggestions = {
    reading:   { label: "Practice TFNG questions",  href: ROUTES.SESSION("s_001") },
    writing:   { label: "Try a Task 2 essay",        href: ROUTES.SESSION("wt_task2_001") },
    listening: { label: "Listening Section 1",       href: ROUTES.SESSION("ls_001") },
    speaking:  { label: "Cue card: memorable journey", href: ROUTES.SESSION("sc_001") },
  };
  const next = suggestions[module];

  return (
    <div className="card" style={{ padding: "1.25rem", marginTop: "1.5rem",
      border: "2px solid var(--color-brand-teal-pale)" }}>
      <p style={{ fontWeight: 700, color: "var(--color-brand-navy)", marginBottom: "0.5rem" }}>
        🎯 Up Next
      </p>
      {weakArea && (
        <p style={{ fontSize: "0.8rem", color: "var(--color-brand-gray)", marginBottom: "0.75rem" }}>
          Based on your weak area: <strong>{weakArea}</strong>
        </p>
      )}
      {next && (
        <Link href={next.href} className="btn-primary" style={{ width: "100%", justifyContent: "center" }}>
          {next.label} →
        </Link>
      )}
    </div>
  );
}
