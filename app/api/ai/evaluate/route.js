import { NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const BAND_DESCRIPTORS = {
  task1: `
IELTS General Training Writing Task 1 (Letter) — Band Descriptors:
- Task Achievement: Does the letter address all bullet points? Is the purpose/tone appropriate (formal/semi-formal/informal)?
- Coherence & Cohesion: Is the letter organised logically? Are paragraphs well linked?
- Lexical Resource: Is vocabulary varied and accurate? Are collocations natural?
- Grammatical Range & Accuracy: Are complex structures used? Are errors frequent/minor?

Band scale: 9 (Expert) → 7 (Good) → 5 (Modest) → 3 (Extremely limited)
`,
  task2: `
IELTS General Training Writing Task 2 (Essay) — Band Descriptors:
- Task Response: Does the essay fully address all parts of the task? Is a clear position taken and maintained?
- Coherence & Cohesion: Is the essay logically organised? Are ideas clearly linked with cohesive devices?
- Lexical Resource: Is vocabulary varied and precise? Are uncommon words used accurately?
- Grammatical Range & Accuracy: Is there a mix of simple and complex sentences? Are errors non-impeding?

Band scale: 9 (Expert) → 7 (Good) → 5 (Modest) → 3 (Extremely limited)
`,
};

export async function POST(request) {
  // Auth guard — require API key env var
  if (!process.env.ANTHROPIC_API_KEY) {
    return NextResponse.json({ error: "AI evaluation not configured." }, { status: 503 });
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { text, taskType, prompt: writingPrompt } = body;

  if (!text || typeof text !== "string" || text.trim().length < 10) {
    return NextResponse.json({ error: "text is required" }, { status: 400 });
  }

  const type = taskType === "task1" ? "task1" : "task2";
  const minWords = type === "task1" ? 150 : 250;
  const wordCount = text.trim().split(/\s+/).filter(Boolean).length;

  const systemPrompt = `You are an expert IELTS examiner with 15+ years of experience.
You evaluate student writing strictly and fairly using official IELTS band descriptors.
Always respond with a JSON object — no markdown, no extra text, just valid JSON.`;

  const userMessage = `Evaluate this IELTS ${type === "task1" ? "Task 1 (Letter)" : "Task 2 (Essay)"} response.

${BAND_DESCRIPTORS[type]}

Writing Prompt: ${writingPrompt || "(No prompt provided)"}

Student Response (${wordCount} words):
"""
${text.trim()}
"""

Respond ONLY with this JSON structure (no markdown, no extra text):
{
  "overallBand": <number 1-9, can be .5 increments>,
  "criteria": {
    "${type === "task1" ? "taskAchievement" : "taskResponse"}": {
      "band": <number 1-9>,
      "label": "<one phrase summary>",
      "feedback": "<2-3 specific sentences>"
    },
    "coherenceCohesion": {
      "band": <number 1-9>,
      "label": "<one phrase summary>",
      "feedback": "<2-3 specific sentences>"
    },
    "lexicalResource": {
      "band": <number 1-9>,
      "label": "<one phrase summary>",
      "feedback": "<2-3 specific sentences>"
    },
    "grammaticalRangeAccuracy": {
      "band": <number 1-9>,
      "label": "<one phrase summary>",
      "feedback": "<2-3 specific sentences>"
    }
  },
  "strengths": ["<specific strength 1>", "<specific strength 2>"],
  "improvements": ["<actionable improvement 1>", "<actionable improvement 2>", "<actionable improvement 3>"],
  "wordCountNote": "${wordCount < minWords ? `Only ${wordCount} words — below the ${minWords} minimum. This significantly impacts Task ${type === "task1" ? "Achievement" : "Response"} score.` : `${wordCount} words — meets the ${minWords} word minimum.`}"
}`;

  try {
    const message = await client.messages.create({
      model: "claude-haiku-4-5",
      max_tokens: 1024,
      system: systemPrompt,
      messages: [{ role: "user", content: userMessage }],
    });

    const raw = message.content[0]?.text ?? "";

    // Strip markdown code fences if model wraps in ```json
    const cleaned = raw.replace(/^```json\s*/i, "").replace(/\s*```$/, "").trim();

    let evaluation;
    try {
      evaluation = JSON.parse(cleaned);
    } catch {
      console.error("AI response parse error:", raw);
      return NextResponse.json({ error: "AI returned unexpected format." }, { status: 500 });
    }

    return NextResponse.json({ ok: true, evaluation, wordCount });
  } catch (err) {
    console.error("Anthropic API error:", err?.message);
    return NextResponse.json({ error: "AI evaluation failed. Please try again." }, { status: 500 });
  }
}
