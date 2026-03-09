import { Badge } from "@/components/ui/Badge.jsx";
import { taskTypeLabel } from "@/modules/writing/writingHelpers.js";

/**
 * @param {{ prompt: { title: string, type: string, prompt: string, minWords: number } }} props
 */
export function WritingPromptCard({ prompt }) {
  return (
    <div className="card" style={{ padding: "1.25rem", marginBottom: "1.5rem" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start",
        marginBottom: "0.875rem", flexWrap: "wrap", gap: "0.5rem" }}>
        <h2 style={{ fontWeight: 800, color: "var(--color-brand-navy)", fontSize: "1.125rem" }}>
          {prompt.title}
        </h2>
        <div style={{ display: "flex", gap: "0.5rem" }}>
          <Badge variant="navy">{taskTypeLabel(prompt.type)}</Badge>
          <Badge variant="gray">Min {prompt.minWords} words</Badge>
        </div>
      </div>
      <div style={{ fontSize: "0.9rem", color: "var(--color-brand-navy)", lineHeight: 1.75, whiteSpace: "pre-line" }}>
        {prompt.prompt}
      </div>
    </div>
  );
}
