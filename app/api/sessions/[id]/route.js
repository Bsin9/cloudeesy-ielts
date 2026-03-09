import { NextResponse } from "next/server";
import sessions from "@/data/sessions.json";

export async function GET(request, { params }) {
  const { id } = await params;
  const session = sessions.find((s) => s.id === id);
  if (!session) return NextResponse.json({ error: "Session not found" }, { status: 404 });
  return NextResponse.json(session);
}
