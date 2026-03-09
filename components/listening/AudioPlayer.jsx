"use client";
import { useState } from "react";
import { formatTime, playbackPct } from "@/modules/listening/audioHelpers.js";

/**
 * Simulated audio player UI (real audio requires src prop).
 * @param {{ src?: string, duration?: number, sectionLabel?: string }} props
 */
export function AudioPlayer({ src, duration = 600, sectionLabel }) {
  const [playing,  setPlaying]  = useState(false);
  const [current,  setCurrent]  = useState(0);

  const pct = playbackPct(current, duration);

  return (
    <div style={{
      background: "var(--color-brand-navy)", borderRadius: "var(--radius-md)", padding: "1rem",
      display: "flex", alignItems: "center", gap: "1rem",
    }}>
      <button
        aria-label={playing ? "Pause" : "Play"}
        onClick={() => setPlaying((v) => !v)}
        style={{
          width: "2.5rem", height: "2.5rem", borderRadius: "50%", flexShrink: 0,
          background: "var(--color-brand-teal)", border: "none", cursor: "pointer",
          color: "#fff", fontSize: "1rem", display: "flex", alignItems: "center", justifyContent: "center",
        }}>
        {playing ? "⏸" : "▶"}
      </button>

      <div style={{ flex: 1 }}>
        {sectionLabel && (
          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.7rem", marginBottom: "0.375rem" }}>
            {sectionLabel}
          </p>
        )}
        <div style={{ height: "4px", background: "rgba(255,255,255,0.2)", borderRadius: "2px",
          position: "relative", cursor: "pointer" }}>
          <div style={{ position: "absolute", left: 0, top: 0, height: "100%",
            width: `${pct}%`, background: "var(--color-brand-teal)", borderRadius: "2px" }} />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "0.25rem" }}>
          <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.65rem" }}>{formatTime(current)}</span>
          <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.65rem" }}>{formatTime(duration)}</span>
        </div>
      </div>

      {playing && (
        <span style={{ color: "var(--color-brand-teal)", fontSize: "0.7rem", fontWeight: 700, flexShrink: 0 }}>
          PLAYING
        </span>
      )}
    </div>
  );
}
