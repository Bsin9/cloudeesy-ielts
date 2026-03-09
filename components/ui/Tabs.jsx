"use client";
import { useState } from "react";

/**
 * @param {{ tabs: Array<{ id: string, label: string, content: React.ReactNode }>, defaultTab?: string }} props
 */
export function Tabs({ tabs, defaultTab }) {
  const [active, setActive] = useState(defaultTab ?? tabs[0]?.id);
  const current = tabs.find((t) => t.id === active);

  return (
    <div>
      <div role="tablist"
        style={{ display: "flex", gap: "0.25rem", borderBottom: "2px solid var(--color-brand-gray-light)",
          marginBottom: "1.25rem", overflowX: "auto" }}>
        {tabs.map((tab) => (
          <button key={tab.id} role="tab" aria-selected={active === tab.id}
            onClick={() => setActive(tab.id)}
            style={{
              padding: "0.625rem 1rem", fontSize: "0.875rem", fontWeight: 600,
              background: "none", border: "none", cursor: "pointer", whiteSpace: "nowrap",
              color: active === tab.id ? "var(--color-brand-teal)" : "var(--color-brand-gray)",
              borderBottom: active === tab.id ? "2px solid var(--color-brand-teal)" : "2px solid transparent",
              marginBottom: "-2px", transition: "color 0.15s",
            }}>
            {tab.label}
          </button>
        ))}
      </div>
      <div role="tabpanel">{current?.content}</div>
    </div>
  );
}
