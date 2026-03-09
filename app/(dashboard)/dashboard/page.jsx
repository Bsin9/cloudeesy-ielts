import { META } from "@/config/metadata.js";
import { WelcomeBanner }         from "@/components/dashboard/WelcomeBanner.jsx";
import { ExamReadinessIndicator } from "@/components/dashboard/ExamReadinessIndicator.jsx";
import { ModuleQuickAccess }      from "@/components/dashboard/ModuleQuickAccess.jsx";
import { WeeklyProgressChart }    from "@/components/dashboard/WeeklyProgressChart.jsx";
import { WeakSkillAlert }         from "@/components/dashboard/WeakSkillAlert.jsx";
import { DailyGoalsWidget }       from "@/components/dashboard/DailyGoalsWidget.jsx";
import { RecentActivityFeed }     from "@/components/dashboard/RecentActivityFeed.jsx";
import { RecommendedTasks }       from "@/components/dashboard/RecommendedTasks.jsx";
import { MockTestShortcut }       from "@/components/dashboard/MockTestShortcut.jsx";
import progressData from "@/data/progress.json";
import userData     from "@/data/users.json";

export const metadata = META.pages.dashboard;

export default function DashboardPage() {
  const user     = userData[0];
  const progress = progressData;

  // moduleScores is an object keyed by module name → { current, trend, sessions }
  const moduleScores = Object.fromEntries(
    Object.entries(progress.moduleScores ?? {}).map(([mod, data]) => [mod, data.current])
  );

  const recentSessions = (progress.recentSessions ?? []);

  return (
    <div style={{ padding: "1.5rem", maxWidth: "1100px", margin: "0 auto" }}>
      <WelcomeBanner
        name={user.name}
        examDate={user.examDate}
        streakDays={user.streakDays}
      />

      <div style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: "1.5rem",
        alignItems: "start" }}>
        {/* Left column */}
        <div>
          <ExamReadinessIndicator currentBand={user.currentBand} targetBand={user.targetBand} />
          <ModuleQuickAccess scores={moduleScores} />
          <MockTestShortcut />
          <div style={{ marginTop: "1.5rem" }}>
            <RecommendedTasks />
          </div>
        </div>

        {/* Right column */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <WeeklyProgressChart data={progress.weeklyActivity ?? []} />
          <DailyGoalsWidget />
          <WeakSkillAlert areas={progress.weakAreas ?? []} />
          <RecentActivityFeed sessions={recentSessions} />
        </div>
      </div>
    </div>
  );
}
