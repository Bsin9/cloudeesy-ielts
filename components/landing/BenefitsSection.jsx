const BENEFITS = [
  { icon: "🎯", title: "Targeted Practice",   desc: "Smart sessions that focus on your personal weak areas." },
  { icon: "📊", title: "Band Tracking",        desc: "See your estimated band score after every session." },
  { icon: "🔥", title: "Streak System",        desc: "Daily study streaks to build consistent habits." },
  { icon: "📝", title: "Mock Tests",           desc: "Full 160-minute IELTS simulation under exam conditions." },
  { icon: "🔒", title: "Privacy First",        desc: "No personal data sold. Your progress stays yours." },
  { icon: "📱", title: "Mobile Friendly",      desc: "Practice anywhere — tablet, phone, or desktop." },
];

export function BenefitsSection() {
  return (
    <section style={{ padding: "4rem 1.5rem", background: "var(--color-brand-navy)" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", fontSize: "1.75rem", fontWeight: 800, color: "#fff",
          marginBottom: "2.5rem" }}>Why Students Choose Cloudeesy</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.25rem" }}>
          {BENEFITS.map((b) => (
            <div key={b.title} style={{ padding: "1.25rem", borderRadius: "var(--radius-md)",
              background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>
              <p style={{ fontSize: "1.5rem", marginBottom: "0.75rem" }}>{b.icon}</p>
              <h3 style={{ fontWeight: 700, color: "#fff", marginBottom: "0.375rem" }}>{b.title}</h3>
              <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.6 }}>{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
