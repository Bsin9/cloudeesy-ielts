"use client";
export function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--color-brand-gray-light)", marginTop: "4rem",
      padding: "2.5rem 0", background: "#fff" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        flexWrap: "wrap", gap: "1rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <span style={{ fontSize: "1.25rem" }}>⚡</span>
          <span style={{ fontWeight: 800, color: "var(--color-brand-navy)" }}>Cloudeesy IELTS</span>
        </div>
        <p style={{ fontSize: "0.8rem", color: "var(--color-brand-gray)" }}>
          © {new Date().getFullYear()} Cloudeesy. All rights reserved.
        </p>
        <nav aria-label="Footer links" style={{ display: "flex", gap: "1.5rem" }}>
          {["Privacy", "Terms", "Contact"].map((item) => (
            <a key={item} href="#"
              style={{ fontSize: "0.8rem", color: "var(--color-brand-gray)",
                textDecoration: "none", transition: "color 0.15s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-brand-teal)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-brand-gray)")}>
              {item}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
