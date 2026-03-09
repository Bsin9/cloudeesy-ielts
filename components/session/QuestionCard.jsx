import { Badge } from "@/components/ui/Badge.jsx";

/**
 * @param {{ question: object, questionNum: number, total: number, children: React.ReactNode }} props
 */
export function QuestionCard({ question, questionNum, total, children }) {
  const typeLabel = {
    tfng:     "True / False / Not Given",
    mcq:      "Multiple Choice",
    gap_fill: "Gap Fill",
    matching: "Matching",
  }[question.type] ?? question.type;

  return (
    <div className="card" style={{ padding: "1.25rem" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
        <Badge variant="teal">Q{questionNum} of {total}</Badge>
        <Badge variant="gray">{typeLabel}</Badge>
      </div>
      <p style={{ fontWeight: 600, color: "var(--color-brand-navy)", marginBottom: "1.25rem", lineHeight: 1.6 }}>
        {question.text}
      </p>
      {children}
    </div>
  );
}
