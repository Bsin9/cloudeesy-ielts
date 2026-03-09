import { NextResponse } from "next/server";
import { notifySlack }  from "@/lib/slack/slackNotify.js";

export async function POST(request) {
  let body;
  try { body = await request.json(); }
  catch { return NextResponse.json({ error: "Invalid JSON" }, { status: 400 }); }

  const { type, user, data } = body;
  if (!type) return NextResponse.json({ error: "type required" }, { status: 400 });

  await notifySlack({ type, user, data });
  return NextResponse.json({ ok: true });
}
