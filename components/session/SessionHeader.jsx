import { TimerDisplay } from "@/components/ui/Timer.jsx";
import { ProgressBar } from "@/components/ui/ProgressBar.jsx";

/**
 * @param {{ title: string, timer: ReturnType<useTimer>, answered: number, total: number, onExit: () => void }} props
 */
export function SessionHeader({ title, timer, answered, total, onExit }) {
  return (
    <div style={{
      position: "sticky", top: 0, zIndex: 10,
      background: "#fff", borderBottom: "1px solid var(--color-brand-gray-light)",
      padding: "0.75rem 1.5rem",
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center",
        maxWidth: "1200px", margin: "0 auto", gap: "1rem" }}>
        <button onClick={onExit} style={{ background: "none", border: "none", cursor: "pointer",
          color: "var(--color-brand-gray)", fontSize: "1.5rem", lineHeight: 1 }}
          aria-label="Exit session">←</button>

        <div style={{ flex: 1, maxWidth: "400px" }}>
          <p style={{ fontWeight: 700, color: "var(--color-brand-navy)", fontSize: "0.875rem",
            textAlign: "center", marginBottom: "0.375rem" }}>{title}</p>
          <ProgressBar value={answered} max={total} height="4px" />
          <p style={{ fontSize: "0.65rem", color: "var(--color-brand-gray)", textAlign: "center",
            marginTop: "0.25rem" }}>{answered}/{total} answered</p>
        </div>

        {timer && <TimerDisplay display={timer.display} isCritical={timer.isCritical} isLow={timer.isLow} />}
      </div>
    </div>
  );
}
