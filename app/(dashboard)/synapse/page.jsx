export const metadata = {
  title: "Synapse — RiseIQ AI Study Assistant",
  description: "Your AI-powered study assistant. Ask questions, get explanations, and receive personalised study recommendations.",
};

export default function SynapsePage() {
  return (
    <div style={{ padding: "1.5rem", maxWidth: "860px", margin: "0 auto" }}>

      {/* Header */}
      <div style={{ marginBottom: "2rem" }}>
        <h1 style={{ fontSize: "1.625rem", fontWeight: 800, color: "var(--color-brand-navy)", marginBottom: "0.375rem" }}>
          🧠 Synapse
        </h1>
        <p style={{ color: "var(--color-brand-gray)", fontSize: "0.9375rem" }}>
          Your AI study assistant — course-aware, always on.
        </p>
      </div>

      {/* Coming-soon card */}
      <div
        className="card"
        style={{
          padding: "3rem 2rem",
          textAlign: "center",
          background: "linear-gradient(135deg, var(--color-brand-teal-pale, #e8f8f5) 0%, #f0f4ff 100%)",
          border: "1px solid var(--color-brand-teal, #1abc9c)",
        }}
      >
        <div style={{ fontSize: "3.5rem", marginBottom: "1rem" }}>🧠</div>
        <h2 style={{
          fontSize: "1.25rem", fontWeight: 800,
          color: "var(--color-brand-navy)", marginBottom: "0.5rem",
        }}>
          Synapse is coming soon
        </h2>
        <p style={{ color: "var(--color-brand-gray)", maxWidth: "480px", margin: "0 auto 1.5rem", lineHeight: 1.6 }}>
          Synapse will give you on-demand explanations, personalised study plans,
          and smart recommendations across all your enrolled courses.
        </p>
        <div style={{
          display: "inline-flex", alignItems: "center", gap: "0.5rem",
          padding: "0.5rem 1.25rem", borderRadius: "9999px",
          background: "var(--color-brand-teal)", color: "#fff",
          fontSize: "0.8125rem", fontWeight: 600,
        }}>
          <span>Powered by Synapse Brain</span>
        </div>
      </div>

    </div>
  );
}
