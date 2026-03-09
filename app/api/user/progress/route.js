import { NextResponse } from "next/server";
import progressData from "@/data/mock/progress.json";

export async function GET() {
  return NextResponse.json(progressData);
}
