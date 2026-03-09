import { ReadingSession }  from "@/modules/reading/ReadingSession.jsx";
import { WritingSession }  from "@/modules/writing/WritingSession.jsx";
import { SpeakingSession } from "@/modules/speaking/SpeakingSession.jsx";
import ListeningSession    from "@/modules/listening/ListeningSession.jsx";
import sessionData   from "@/data/mock/reading-session.json";
import promptsData   from "@/data/writingPrompts.json";
import cuesData      from "@/data/mock/speaking-cues.json";

export const metadata = { title: "Practice Session" };

export default async function SessionPage({ params }) {
  const { id } = await params;

  if (id.startsWith("ls_") || id === "listening-timed") return <ListeningSession />;

  if (id === "s_001" || id.startsWith("r_l") || id === "reading-timed")
    return <ReadingSession session={sessionData} />;

  if (id.startsWith("wt")) {
    const all    = [...promptsData.task1, ...promptsData.task2];
    const prompt = all.find((p) => p.id === id) ?? all[0];
    return <WritingSession prompt={prompt} />;
  }

  if (id.startsWith("sc_")) {
    const card = cuesData.cueCards.find((c) => c.id === id) ?? cuesData.cueCards[0];
    return <SpeakingSession cueCard={card} />;
  }

  return <ReadingSession session={sessionData} />;
}
