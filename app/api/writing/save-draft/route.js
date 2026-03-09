import { NextResponse } from "next/server";
import { sanitizeString } from "@/lib/validators/inputSanitizer.js";
import { notifySlack }    from "@/lib/slack/slackNotify.js";

export async function POST(request) {
  let body;
  try { body = await request.json(); }
  catch { return NextResponse.json({ error: "Invalid JSON" }, { status: 400 }); }

  const { sessionId, promptId, text, wordCount } = body;
  if (!text || typeof text !== "string") {
    return NextResponse.json({ error: "text required" }, { status: 400 });
  }

  const clean = sanitizeString(text, 10000);

  notifySlack({ type: "writing_submitted", data: { sessionId, promptId, wordCount } });

  return NextResponse.json({ ok: true, saved: true, wordCount: wordCount ?? 0 });
}
