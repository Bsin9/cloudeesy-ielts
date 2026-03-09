const MODULES = [
  { icon: "📖", label: "Reading",   desc: "True/False/Not Given, MCQ, gap fill, matching headings",        color: "var(--color-brand-teal)" },
  { icon: "✍️", label: "Writing",   desc: "Task 1 letters & Task 2 essays with word count and band tips",  color: "#6C63FF" },
  { icon: "🎧", label: "Listening", desc: "4-section audio practice with transcripts and MCQ",             color: "var(--color-brand-gold)" },
  { icon: "🎤", label: "Speaking",  desc: "Cue card with prep timer, follow-up questions, vocabulary bank", color: "#E94E77" },
];

export function ModuleHighlights() {
  return (
    <section style={{ padding: "4rem 1.5rem", background: "#fff" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", fontSize: "1.75rem", fontWeight: 800, color: "var(--color-brand-navy)",
          marginBottom: "0.5rem" }}>All Four Skills Covered</h2>
        <p style={{ textAlign: "center", color: "var(--color-brand-gray)", marginBottom: "2.5rem" }}>
          Practice every section of the IELTS General Training exam
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.25rem" }}>
          {MODULES.map((m) => (
            <div key={m.label} className="card card-hover" style={{ padding: "1.5rem" }}>
              <div style={{ width: "3rem", height: "3rem", borderRadius: "0.75rem", marginBottom: "1rem",
                background: `${m.color}1A`, display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "1.5rem" }}>
                {m.icon}
              </div>
              <h3 style={{ fontWeight: 700, color: "var(--color-brand-navy)", marginBottom: "0.5rem" }}>
                {m.label}
              </h3>
              <p style={{ fontSize: "0.875rem", color: "var(--color-brand-gray)", lineHeight: 1.6 }}>{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
