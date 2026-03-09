"use client";
import { useState } from "react";

/**
 * Placeholder recording UI — Web Speech API integration in Phase 2.
 * @param {{ active?: boolean }} props
 */
export function RecordingUI({ active = false }) {
  const [fakeMicActive, setFakeMicActive] = useState(false);
  const isOn = active || fakeMicActive;

  return (
    <div style={{ textAlign: "center", padding: "1.25rem" }}>
      <div
        style={{
          width: "4rem", height: "4rem", borderRadius: "50%", margin: "0 auto 0.875rem",
          display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.75rem",
          background: isOn ? "#FEE2E2" : "var(--color-brand-gray-light)",
          border: `3px solid ${isOn ? "var(--color-brand-red)" : "var(--color-brand-gray-mid)"}`,
          animation: isOn ? "pulse-slow 1.5s ease-in-out infinite" : "none",
          cursor: "pointer",
        }}
        onClick={() => setFakeMicActive((v) => !v)}
        role="button" aria-label={isOn ? "Stop recording" : "Start recording"}
        aria-pressed={isOn}
      >
        🎙️
      </div>
      <p style={{ fontSize: "0.8rem", fontWeight: 600,
        color: isOn ? "var(--color-brand-red)" : "var(--color-brand-gray)" }}>
        {isOn ? "● Recording…" : "Tap to record"}
      </p>
      <p style={{ fontSize: "0.7rem", color: "var(--color-brand-gray)", marginTop: "0.25rem" }}>
        Recording will be available in Phase 2
      </p>
    </div>
  );
}
