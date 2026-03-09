"use client";
import { useState } from "react";

/**
 * @param {{ text: string, children: React.ReactNode, position?: "top"|"bottom" }} props
 */
export function Tooltip({ text, children, position = "top" }) {
  const [visible, setVisible] = useState(false);

  return (
    <span style={{ position: "relative", display: "inline-block" }}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onFocus={() => setVisible(true)}
      onBlur={() => setVisible(false)}>
      {children}
      {visible && (
        <span role="tooltip" style={{
          position: "absolute",
          [position === "top" ? "bottom" : "top"]: "calc(100% + 6px)",
          left: "50%", transform: "translateX(-50%)",
          background: "var(--color-brand-navy)", color: "#fff",
          fontSize: "0.75rem", padding: "0.35rem 0.625rem",
          borderRadius: "0.375rem", whiteSpace: "nowrap", zIndex: 10,
          pointerEvents: "none",
        }}>
          {text}
        </span>
      )}
    </span>
  );
}
