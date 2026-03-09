const TESTIMONIALS = [
  { name: "Priya S.", band: 7.5, quote: "I improved from 6.0 to 7.5 in 8 weeks. The writing feedback was incredibly helpful." },
  { name: "Ahmed R.", band: 8.0, quote: "The daily streak system kept me consistent. I never missed a day for two months." },
  { name: "Linh T.", band: 7.0, quote: "Speaking was my weakness. The cue card practice with follow-up questions made all the difference." },
];

export function TestimonialsSection() {
  return (
    <section style={{ padding: "4rem 1.5rem", background: "#fff" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", fontSize: "1.75rem", fontWeight: 800, color: "var(--color-brand-navy)",
          marginBottom: "2.5rem" }}>Student Results</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))", gap: "1.25rem" }}>
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="card" style={{ padding: "1.5rem" }}>
              <p style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>⭐</p>
              <p style={{ fontSize: "0.9rem", color: "var(--color-brand-navy)", lineHeight: 1.7,
                marginBottom: "1rem", fontStyle: "italic" }}>
                &ldquo;{t.quote}&rdquo;
              </p>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontWeight: 700, color: "var(--color-brand-navy)" }}>{t.name}</span>
                <span style={{ fontWeight: 800, color: "var(--color-brand-teal)", fontSize: "1.125rem" }}>
                  Band {t.band}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
