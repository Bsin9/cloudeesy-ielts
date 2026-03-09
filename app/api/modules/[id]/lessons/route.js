import { NextResponse } from "next/server";
import lessonsData from "@/data/lessons.json";

export async function GET(request, { params }) {
  const { id } = await params;
  const lessons = (lessonsData.modules ?? []).find((m) => m.id === id);
  if (!lessons) return NextResponse.json({ error: "Module not found" }, { status: 404 });
  return NextResponse.json(lessons);
}
