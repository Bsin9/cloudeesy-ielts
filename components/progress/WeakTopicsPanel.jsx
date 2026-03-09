import { Card } from "@/components/ui/Card.jsx";
import { ProgressBar } from "@/components/ui/ProgressBar.jsx";

/**
 * @param {{ areas: Array<{ module: string, skill: string, accuracy: number }> }} props
 */
export function WeakTopicsPanel({ areas = [] }) {
  return (
    <Card>
      <h3 style={{ fontWeight: 700, color: "var(--color-brand-navy)", marginBottom: "1rem" }}>
        Weak Areas
      </h3>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {areas.map((a) => (
          <div key={`${a.module}-${a.skill}`}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.25rem" }}>
              <span style={{ fontSize: "0.875rem", color: "var(--color-brand-navy)", fontWeight: 600 }}>
                {a.skill}
              </span>
              <span style={{ fontSize: "0.75rem", color: "var(--color-brand-gray)", textTransform: "capitalize" }}>
                {a.module}
              </span>
            </div>
            <ProgressBar
              value={a.accuracy}
              color={a.accuracy < 50 ? "var(--color-brand-red)" : a.accuracy < 70 ? "var(--color-brand-gold)" : "var(--color-brand-green)"}
              label={`${a.accuracy}%`}
            />
          </div>
        ))}
      </div>
    </Card>
  );
}
