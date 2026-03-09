const BENEFITS = [
  { icon: "🧠", title: "Synapse Brain feedback",  desc: "Real-time AI scoring across writing, speaking, and coding tasks." },
  { icon: "🎯", title: "Goal-driven learning",    desc: "Set your target (band score, cert, job) and we build a path for you." },
  { icon: "📊", title: "Progress analytics",      desc: "Track improvement per skill over time with weekly charts." },
  { icon: "📝", title: "13 specialist courses",   desc: "Language, data, cloud, AI, growth, and career — all in one place." },
  { icon: "🔒", title: "Privacy first",           desc: "No personal data sold. Your progress stays yours." },
  { icon: "📱", title: "Works everywhere",        desc: "Desktop, tablet, or phone — your learning never stops." },
];

export function BenefitsSection() {
  return (
    <section style={{ padding: "4rem 1.5rem", background: "var(--color-brand-navy)" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", fontSize: "1.75rem", fontWeight: 800,
          color: "#fff", marginBottom: "2.5rem" }}>
          Why 10,000+ learners choose RiseIQ
        </h2>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "1.25rem",
        }}>
          {BENEFITS.map((b) => (
            <div key={b.title} style={{
              padding: "1.25rem", borderRadius: "0.875rem",
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}>
              <p style={{ fontSize: "1.5rem", marginBottom: "0.75rem" }}>{b.icon}</p>
              <h3 style={{ fontWeight: 700, color: "#fff", marginBottom: "0.375rem",
                fontSize: "0.95rem" }}>{b.title}</h3>
              <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.6)",
                lineHeight: 1.6, margin: 0 }}>{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
