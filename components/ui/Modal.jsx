"use client";
import { useEffect, useRef } from "react";

/**
 * @param {{ open: boolean, onClose: () => void, title?: string, children: React.ReactNode }} props
 */
export function Modal({ open, onClose, title, children }) {
  const overlayRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const prev = document.activeElement;
    overlayRef.current?.focus();
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    return () => { document.removeEventListener("keydown", onKey); prev?.focus(); };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      ref={overlayRef}
      role="dialog" aria-modal="true" aria-label={title}
      tabIndex={-1}
      style={{
        position: "fixed", inset: 0, zIndex: 50,
        display: "flex", alignItems: "center", justifyContent: "center",
        background: "rgba(15,31,61,0.55)", padding: "1rem",
      }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        className="card animate-fade-in"
        style={{ width: "100%", maxWidth: "28rem", maxHeight: "90vh", overflowY: "auto",
          boxShadow: "var(--shadow-modal)" }}
      >
        {title && (
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center",
            marginBottom: "1rem", paddingBottom: "1rem", borderBottom: "1px solid var(--color-brand-gray-light)" }}>
            <h2 style={{ fontWeight: 700, color: "var(--color-brand-navy)", fontSize: "1.125rem" }}>{title}</h2>
            <button onClick={onClose} aria-label="Close"
              style={{ background: "none", border: "none", cursor: "pointer", fontSize: "1.25rem",
                color: "var(--color-brand-gray)", lineHeight: 1 }}>✕</button>
          </div>
        )}
        {children}
      </div>
    </div>
  );
}
