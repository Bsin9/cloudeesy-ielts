const STEPS = [
  { num: "01", title: "Set your goal",       desc: "Choose your target band and upcoming exam date." },
  { num: "02", title: "Practice daily",      desc: "Complete skill-specific sessions — reading, writing, listening, speaking." },
  { num: "03", title: "Track your progress", desc: "See band estimates, weak areas, and streaks on your dashboard." },
  { num: "04", title: "Take a mock test",    desc: "Simulate the full exam with a timed 4-section practice test." },
];

export function HowItWorks() {
  return (
    <section style={{ padding: "4rem 1.5rem", background: "var(--color-brand-gray-light)" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", fontSize: "1.75rem", fontWeight: 800, color: "var(--color-brand-navy)",
          marginBottom: "2.5rem" }}>How It Works</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "1.5rem" }}>
          {STEPS.map((s) => (
            <div key={s.num} style={{ textAlign: "center" }}>
              <div style={{ width: "3rem", height: "3rem", borderRadius: "50%", margin: "0 auto 1rem",
                background: "var(--color-brand-teal)", display: "flex", alignItems: "center",
                justifyContent: "center", color: "#fff", fontWeight: 900, fontSize: "0.875rem" }}>
                {s.num}
              </div>
              <h3 style={{ fontWeight: 700, color: "var(--color-brand-navy)", marginBottom: "0.5rem" }}>{s.title}</h3>
              <p style={{ fontSize: "0.875rem", color: "var(--color-brand-gray)", lineHeight: 1.6 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
