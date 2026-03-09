import { META } from "@/config/metadata.js";
import Link from "next/link";
import { ROUTES } from "@/config/routes.js";
import { Badge } from "@/components/ui/Badge.jsx";
import { Alert } from "@/components/ui/Alert.jsx";

export const metadata = META.pages.mockTest;

const SECTIONS = [
  { label: "Listening",  duration: "30 min", questions: 40, icon: "🎧" },
  { label: "Reading",    duration: "60 min", questions: 40, icon: "📖" },
  { label: "Writing",    duration: "60 min", questions: 2,  icon: "✍️" },
  { label: "Speaking",   duration: "15 min", questions: 3,  icon: "🎤" },
];

export default function MockTestPage() {
  return (
    <div style={{ padding: "1.5rem", maxWidth: "800px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--color-brand-navy)", marginBottom: "0.375rem" }}>
        📝 Full Mock Test
      </h1>
      <p style={{ color: "var(--color-brand-gray)", marginBottom: "2rem" }}>
        Simulate real exam conditions — all four sections, timed
      </p>

      <Alert type="info" title="Before you begin">
        Find a quiet place. Have pen and paper ready. The full test takes approximately 2 hours 45 minutes.
        Do not navigate away during a section — your progress will not be saved.
      </Alert>

      <div style={{ marginTop: "1.5rem", display: "flex", flexDirection: "column", gap: "0.875rem" }}>
        {SECTIONS.map((s, i) => (
          <div key={s.label} className="card" style={{ padding: "1.25rem",
            display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.75rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <div style={{ width: "2.5rem", height: "2.5rem", borderRadius: "50%",
                background: "var(--color-brand-teal-pale)", display: "flex", alignItems: "center",
                justifyContent: "center", fontSize: "1.25rem", flexShrink: 0 }}>
                {s.icon}
              </div>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <span style={{ fontSize: "0.7rem", fontWeight: 700, color: "var(--color-brand-gray)" }}>
                    PART {i + 1}
                  </span>
                </div>
                <p style={{ fontWeight: 700, color: "var(--color-brand-navy)" }}>{s.label}</p>
              </div>
            </div>
            <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
              <Badge variant="gray">{s.duration}</Badge>
              <Badge variant="gray">{s.questions} {s.label === "Writing" ? "tasks" : "questions"}</Badge>
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: "2rem", display: "flex", gap: "1rem" }}>
        <Link href={ROUTES.SESSION("s_001")} className="btn-primary"
          style={{ flex: 1, justifyContent: "center" }}>
          Start Mock Test →
        </Link>
        <Link href={ROUTES.DASHBOARD} className="btn-secondary">
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
}
