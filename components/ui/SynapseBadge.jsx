"use client";

/**
 * SynapseBadge — "Powered by Synapse Brain"
 * Shown on any course or feature that uses AI feedback.
 * size: "sm" | "md" (default "md")
 */
export function SynapseBadge({ size = "md" }) {
  const sm = size === "sm";
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: sm ? "0.25rem" : "0.375rem",
      background: "linear-gradient(135deg, #0F1F3D 0%, #1A3260 100%)",
      color: "#fff",
      padding: sm ? "0.2rem 0.6rem" : "0.3rem 0.75rem",
      borderRadius: "var(--radius-full, 9999px)",
      fontSize: sm ? "0.65rem" : "0.75rem",
      fontWeight: 600,
      letterSpacing: "0.01em",
      boxShadow: "0 1px 4px rgba(29,184,164,0.3)",
      whiteSpace: "nowrap",
    }}>
      <span style={{ fontSize: sm ? "0.7rem" : "0.85rem" }}>🧠</span>
      Powered by{" "}
      <span style={{ color: "#1DB8A4" }}>Synapse Brain</span>
    </span>
  );
}
