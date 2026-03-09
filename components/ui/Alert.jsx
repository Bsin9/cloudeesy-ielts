const styles = {
  info:    { bg: "var(--color-brand-teal-pale)",  border: "var(--color-brand-teal)",  icon: "ℹ️" },
  success: { bg: "#DCFCE7",                        border: "var(--color-brand-green)", icon: "✅" },
  warning: { bg: "var(--color-brand-gold-light)", border: "var(--color-brand-gold)",  icon: "⚠️" },
  error:   { bg: "#FEE2E2",                        border: "var(--color-brand-red)",   icon: "❌" },
};

/**
 * @param {{ type?: "info"|"success"|"warning"|"error", title?: string, children: React.ReactNode }} props
 */
export function Alert({ type = "info", title, children }) {
  const s = styles[type];
  return (
    <div role="alert" style={{
      display: "flex", gap: "0.75rem", padding: "1rem", borderRadius: "0.75rem",
      background: s.bg, borderLeft: `4px solid ${s.border}`,
    }}>
      <span aria-hidden style={{ flexShrink: 0 }}>{s.icon}</span>
      <div>
        {title && <p style={{ fontWeight: 700, color: "var(--color-brand-navy)", marginBottom: "0.25rem" }}>{title}</p>}
        <p style={{ fontSize: "0.875rem", color: "var(--color-brand-navy)" }}>{children}</p>
      </div>
    </div>
  );
}
