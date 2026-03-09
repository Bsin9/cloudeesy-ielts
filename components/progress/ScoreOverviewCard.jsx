import { Card } from "@/components/ui/Card.jsx";
import { bandToLabel } from "@/lib/utils.js";

/**
 * @param {{ scores: Array<{ module: string, band: number, trend: number }> }} props
 */
export function ScoreOverviewCard({ scores = [] }) {
  const ICONS = { reading: "📖", writing: "✍️", listening: "🎧", speaking: "🎤" };

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "0.875rem" }}>
      {scores.map((s) => (
        <Card key={s.module} padding="1.25rem" style={{ textAlign: "center" }}>
          <p style={{ fontSize: "1.5rem", marginBottom: "0.25rem" }}>{ICONS[s.module] ?? "📋"}</p>
          <p style={{ textTransform: "capitalize", fontSize: "0.75rem", color: "var(--color-brand-gray)",
            fontWeight: 600, marginBottom: "0.5rem" }}>{s.module}</p>
          <p style={{ fontSize: "2rem", fontWeight: 900, color: "var(--color-brand-navy)", lineHeight: 1 }}>
            {s.band}
          </p>
          <p style={{ fontSize: "0.7rem", color: "var(--color-brand-gray)" }}>{bandToLabel(s.band)}</p>
          {s.trend != null && (
            <p style={{ fontSize: "0.75rem", fontWeight: 700, marginTop: "0.375rem",
              color: s.trend > 0 ? "var(--color-brand-green)" : s.trend < 0 ? "var(--color-brand-red)" : "var(--color-brand-gray)" }}>
              {s.trend > 0 ? `▲ +${s.trend}` : s.trend < 0 ? `▼ ${s.trend}` : "— stable"}
            </p>
          )}
        </Card>
      ))}
    </div>
  );
}
