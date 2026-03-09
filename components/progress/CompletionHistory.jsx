import { Card } from "@/components/ui/Card.jsx";
import { formatDate } from "@/lib/utils.js";
import { Badge } from "@/components/ui/Badge.jsx";

/**
 * @param {{ history: Array<{ id: string, module: string, title: string, band: number, completedAt: string }> }} props
 */
export function CompletionHistory({ history = [] }) {
  const BADGE_VARIANT = { reading: "teal", writing: "navy", listening: "gold", speaking: "gray" };

  return (
    <Card>
      <h3 style={{ fontWeight: 700, color: "var(--color-brand-navy)", marginBottom: "1rem" }}>
        Session History
      </h3>
      {history.length === 0 ? (
        <p style={{ color: "var(--color-brand-gray)", fontSize: "0.875rem" }}>No sessions completed yet.</p>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
          {history.map((h) => (
            <div key={h.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center",
              padding: "0.625rem 0", borderBottom: "1px solid var(--color-brand-gray-light)" }}>
              <div>
                <p style={{ fontWeight: 600, fontSize: "0.875rem", color: "var(--color-brand-navy)" }}>{h.title}</p>
                <div style={{ display: "flex", gap: "0.5rem", alignItems: "center", marginTop: "0.25rem" }}>
                  <Badge variant={BADGE_VARIANT[h.module] ?? "gray"}>{h.module}</Badge>
                  <span style={{ fontSize: "0.7rem", color: "var(--color-brand-gray)" }}>{formatDate(h.completedAt)}</span>
                </div>
              </div>
              <span style={{ fontWeight: 800, color: "var(--color-brand-teal)", fontSize: "1rem" }}>
                B{h.band}
              </span>
            </div>
          ))}
        </div>
      )}
    </Card>
  );
}
