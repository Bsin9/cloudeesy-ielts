import { NextResponse } from "next/server";
import mockTests from "@/data/mockTests.json";

export async function GET() {
  return NextResponse.json(mockTests);
}
