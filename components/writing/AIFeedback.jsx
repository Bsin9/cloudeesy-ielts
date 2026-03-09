"use client";

/** Colour per band score */
function bandColor(band) {
  if (band >= 7.5) return "#16a34a"; // green
  if (band >= 6)   return "#2563eb"; // blue
  if (band >= 5)   return "#d97706"; // amber
  return "#dc2626";                  // red
}

function BandPill({ band }) {
  return (
    <span style={{
      display: "inline-block",
      background: bandColor(band),
      color: "#fff",
      fontWeight: 700,
      fontSize: "0.75rem",
      padding: "0.2rem 0.55rem",
      borderRadius: "999px",
      minWidth: "2.25rem",
      textAlign: "center",
    }}>
      {band}
    </span>
  );
}

function CriterionRow({ label, band, feedback }) {
  return (
    <div style={{ borderBottom: "1px solid var(--color-border, #e5e7eb)", paddingBottom: "0.75rem", marginBottom: "0.75rem" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.25rem" }}>
        <span style={{ fontWeight: 600, fontSize: "0.8rem", color: "var(--color-brand-navy, #0f172a)" }}>{label}</span>
        <BandPill band={band} />
      </div>
      <p style={{ fontSize: "0.78rem", color: "var(--color-brand-gray, #64748b)", lineHeight: 1.55, margin: 0 }}>
        {feedback}
      </p>
    </div>
  );
}

/**
 * AIFeedback — displays Claude's structured IELTS evaluation.
 * @param {{ evaluation: object|null, loading: boolean, error: string|null, taskType: string }} props
 */
export function AIFeedback({ evaluation, loading, error, taskType }) {
  /* ── Loading state ── */
  if (loading) {
    return (
      <div style={{
        background: "linear-gradient(135deg, #eff6ff 0%, #f0fdf4 100%)",
        border: "1px solid #bfdbfe",
        borderRadius: "var(--radius, 0.75rem)",
        padding: "1rem",
        textAlign: "center",
      }}>
        <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>🤖</div>
        <p style={{ fontWeight: 700, fontSize: "0.8125rem", color: "#1d4ed8", marginBottom: "0.25rem" }}>
          AI Professor is evaluating…
        </p>
        <p style={{ fontSize: "0.75rem", color: "#3b82f6" }}>
          Analysing your response against IELTS band descriptors
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: "0.3rem", marginTop: "0.75rem" }}>
          {[0, 1, 2].map((i) => (
            <span key={i} style={{
              width: "0.5rem", height: "0.5rem", borderRadius: "50%",
              background: "#3b82f6", display: "inline-block",
              animation: `pulse 1.2s ease-in-out ${i * 0.2}s infinite`,
            }} />
          ))}
        </div>
      </div>
    );
  }

  /* ── Error state ── */
  if (error) {
    return (
      <div style={{
        background: "#fef2f2", border: "1px solid #fecaca",
        borderRadius: "var(--radius, 0.75rem)", padding: "1rem",
      }}>
        <p style={{ fontWeight: 700, fontSize: "0.8125rem", color: "#dc2626", marginBottom: "0.25rem" }}>
          ⚠️ AI Evaluation Unavailable
        </p>
        <p style={{ fontSize: "0.75rem", color: "#ef4444" }}>{error}</p>
      </div>
    );
  }

  /* ── Placeholder (before submission) ── */
  if (!evaluation) {
    return (
      <div style={{
        background: "linear-gradient(135deg, #eff6ff 0%, #f0fdf4 100%)",
        border: "1px dashed #93c5fd",
        borderRadius: "var(--radius, 0.75rem)",
        padding: "1rem",
        textAlign: "center",
      }}>
        <div style={{ fontSize: "1.5rem", marginBottom: "0.375rem" }}>🎓</div>
        <p style={{ fontWeight: 700, fontSize: "0.8125rem", color: "#1d4ed8", marginBottom: "0.25rem" }}>
          AI Professor
        </p>
        <p style={{ fontSize: "0.75rem", color: "#3b82f6", lineHeight: 1.5 }}>
          Submit your essay to receive instant band scores and detailed feedback on all 4 IELTS criteria.
        </p>
      </div>
    );
  }

  /* ── Full results ── */
  const { overallBand, criteria, strengths, improvements, wordCountNote } = evaluation;

  const firstCriterionKey = taskType === "task1" ? "taskAchievement" : "taskResponse";
  const firstCriterionLabel = taskType === "task1" ? "Task Achievement" : "Task Response";

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>

      {/* Overall band */}
      <div style={{
        background: `linear-gradient(135deg, ${bandColor(overallBand)}18 0%, ${bandColor(overallBand)}08 100%)`,
        border: `1px solid ${bandColor(overallBand)}44`,
        borderRadius: "var(--radius, 0.75rem)",
        padding: "1rem",
        textAlign: "center",
      }}>
        <p style={{ fontSize: "0.7rem", fontWeight: 600, color: "var(--color-brand-gray, #64748b)",
          textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.375rem" }}>
          Overall Band Score
        </p>
        <div style={{
          fontSize: "2.5rem", fontWeight: 900, color: bandColor(overallBand), lineHeight: 1,
        }}>
          {overallBand}
        </div>
        <p style={{ fontSize: "0.72rem", color: "var(--color-brand-gray, #64748b)", marginTop: "0.375rem" }}>
          {overallBand >= 8 ? "Expert User" : overallBand >= 7 ? "Good User" : overallBand >= 6 ? "Competent User" : overallBand >= 5 ? "Modest User" : "Limited User"}
        </p>
      </div>

      {/* Word count note */}
      {wordCountNote && (
        <p style={{
          fontSize: "0.75rem", padding: "0.5rem 0.75rem",
          background: wordCountNote.includes("below") ? "#fef9c3" : "#f0fdf4",
          color: wordCountNote.includes("below") ? "#92400e" : "#166534",
          borderRadius: "var(--radius-sm, 0.5rem)",
          border: `1px solid ${wordCountNote.includes("below") ? "#fde68a" : "#bbf7d0"}`,
        }}>
          {wordCountNote.includes("below") ? "⚠️ " : "✅ "}{wordCountNote}
        </p>
      )}

      {/* 4 Criteria */}
      <div className="card" style={{ padding: "1rem" }}>
        <p style={{ fontWeight: 700, fontSize: "0.8125rem", color: "var(--color-brand-navy, #0f172a)",
          marginBottom: "0.75rem" }}>
          🎯 Criteria Breakdown
        </p>
        {criteria[firstCriterionKey] && (
          <CriterionRow
            label={firstCriterionLabel}
            band={criteria[firstCriterionKey].band}
            feedback={criteria[firstCriterionKey].feedback}
          />
        )}
        {criteria.coherenceCohesion && (
          <CriterionRow
            label="Coherence & Cohesion"
            band={criteria.coherenceCohesion.band}
            feedback={criteria.coherenceCohesion.feedback}
          />
        )}
        {criteria.lexicalResource && (
          <CriterionRow
            label="Lexical Resource"
            band={criteria.lexicalResource.band}
            feedback={criteria.lexicalResource.feedback}
          />
        )}
        {criteria.grammaticalRangeAccuracy && (
          <CriterionRow
            label="Grammatical Range & Accuracy"
            band={criteria.grammaticalRangeAccuracy.band}
            feedback={criteria.grammaticalRangeAccuracy.feedback}
          />
        )}
      </div>

      {/* Strengths */}
      {strengths?.length > 0 && (
        <div className="card" style={{ padding: "1rem" }}>
          <p style={{ fontWeight: 700, fontSize: "0.8125rem", color: "var(--color-brand-navy, #0f172a)",
            marginBottom: "0.625rem" }}>
            💪 Strengths
          </p>
          {strengths.map((s, i) => (
            <p key={i} style={{ fontSize: "0.78rem", color: "#166534",
              background: "#f0fdf4", border: "1px solid #bbf7d0",
              padding: "0.5rem 0.75rem", borderRadius: "var(--radius-sm, 0.5rem)",
              marginBottom: "0.375rem", lineHeight: 1.5 }}>
              ✓ {s}
            </p>
          ))}
        </div>
      )}

      {/* Improvements */}
      {improvements?.length > 0 && (
        <div className="card" style={{ padding: "1rem" }}>
          <p style={{ fontWeight: 700, fontSize: "0.8125rem", color: "var(--color-brand-navy, #0f172a)",
            marginBottom: "0.625rem" }}>
            📈 How to Improve
          </p>
          {improvements.map((imp, i) => (
            <p key={i} style={{ fontSize: "0.78rem", color: "#92400e",
              background: "#fffbeb", border: "1px solid #fde68a",
              padding: "0.5rem 0.75rem", borderRadius: "var(--radius-sm, 0.5rem)",
              marginBottom: "0.375rem", lineHeight: 1.5 }}>
              → {imp}
            </p>
          ))}
        </div>
      )}

      <p style={{ fontSize: "0.7rem", color: "var(--color-brand-gray, #64748b)",
        textAlign: "center", fontStyle: "italic" }}>
        Powered by Claude AI · Results are indicative, not official IELTS scores
      </p>
    </div>
  );
}
