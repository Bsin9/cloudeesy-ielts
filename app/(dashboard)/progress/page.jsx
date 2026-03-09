import { META } from "@/config/metadata.js";
import { ScoreOverviewCard } from "@/components/progress/ScoreOverviewCard.jsx";
import { WeakTopicsPanel }  from "@/components/progress/WeakTopicsPanel.jsx";
import { StreakTracker }    from "@/components/progress/StreakTracker.jsx";
import { CompletionHistory }from "@/components/progress/CompletionHistory.jsx";
import progressData from "@/data/progress.json";

export const metadata = META.pages.progress;

export default function ProgressPage() {
  const { moduleScores = {}, weakAreas = [], weeklyActivity = [], recentSessions = [] } = progressData;

  // Convert moduleScores object → array expected by ScoreOverviewCard
  const scoresArray = Object.entries(moduleScores).map(([module, data]) => ({
    module,
    band: data.current,
    trend: Array.isArray(data.trend) && data.trend.length >= 2
      ? +(data.trend[data.trend.length - 1] - data.trend[data.trend.length - 2]).toFixed(1)
      : 0,
  }));

  return (
    <div style={{ padding: "1.5rem", maxWidth: "1100px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--color-brand-navy)", marginBottom: "0.375rem" }}>
        📊 My Progress
      </h1>
      <p style={{ color: "var(--color-brand-gray)", marginBottom: "2rem" }}>
        Track band scores, streaks, and weak areas across all four skills
      </p>

      <ScoreOverviewCard scores={scoresArray} />

      <div style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: "1.5rem",
        marginTop: "1.5rem", alignItems: "start" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          <WeakTopicsPanel areas={weakAreas} />
          <CompletionHistory history={recentSessions} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          <StreakTracker weeklyActivity={weeklyActivity} />
        </div>
      </div>
    </div>
  );
}
