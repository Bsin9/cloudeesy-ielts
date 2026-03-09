import { Card } from "@/components/ui/Card.jsx";
import { Badge } from "@/components/ui/Badge.jsx";

/**
 * @param {{ areas: Array<{ module: string, skill: string, accuracy: number }> }} props
 */
export function WeakSkillAlert({ areas = [] }) {
  if (!areas.length) return null;
  const top = areas.slice(0, 3);

  return (
    <Card padding="1.25rem">
      <h3 style={{ fontWeight: 700, color: "var(--color-brand-navy)", marginBottom: "0.875rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <span>⚠️</span> Areas to Improve
      </h3>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
        {top.map((a) => (
          <div key={`${a.module}-${a.skill}`}
            style={{ display: "flex", justifyContent: "space-between", alignItems: "center",
              padding: "0.625rem 0.875rem", background: "#FFF7E6",
              borderRadius: "0.5rem", border: "1px solid var(--color-brand-gold-light)" }}>
            <div>
              <p style={{ fontWeight: 600, fontSize: "0.875rem", color: "var(--color-brand-navy)" }}>{a.skill}</p>
              <Badge variant="gold" style={{ fontSize: "0.65rem" }}>{a.module}</Badge>
            </div>
            <span style={{ fontWeight: 800, color: "var(--color-brand-gold)", fontSize: "0.875rem" }}>
              {a.accuracy}%
            </span>
          </div>
        ))}
      </div>
    </Card>
  );
}
