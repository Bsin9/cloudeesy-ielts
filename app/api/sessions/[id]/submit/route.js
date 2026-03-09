import { NextResponse } from "next/server";
import { sanitizeString } from "@/lib/validators/inputSanitizer.js";
import { notifySlack }    from "@/lib/slack/slackNotify.js";

export async function POST(request, { params }) {
  const { id } = await params;
  let body;
  try { body = await request.json(); }
  catch { return NextResponse.json({ error: "Invalid JSON" }, { status: 400 }); }

  const { answers, timeSpent, module } = body;
  if (!answers || typeof answers !== "object") {
    return NextResponse.json({ error: "answers required" }, { status: 400 });
  }

  // Sanitise answer strings
  const clean = Object.fromEntries(
    Object.entries(answers).map(([k, v]) => [k, sanitizeString(String(v ?? ""), 200)])
  );

  // Fire-and-forget Slack notification
  notifySlack({ type: "writing_submitted", data: { sessionId: id, timeSpent, module } });

  return NextResponse.json({ ok: true, sessionId: id, received: Object.keys(clean).length });
}
