"use client";
import React from "react";
import { cn } from "@/lib/utils";

interface ScoreBandProps {
  band: number;
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
  className?: string;
}

function bandColor(b: number) {
  if (b >= 8)  return "bg-green-500  text-white";
  if (b >= 7)  return "bg-brand-teal  text-white";
  if (b >= 6)  return "bg-brand-navy  text-white";
  if (b >= 5)  return "bg-brand-gold  text-white";
  return             "bg-red-500      text-white";
}

const sizeMap = { sm: "w-9 h-9 text-sm", md: "w-12 h-12 text-base", lg: "w-16 h-16 text-xl" };

export function ScoreBand({ band, size = "md", showLabel = false, className }: ScoreBandProps) {
  return (
    <div className={cn("flex flex-col items-center gap-1", className)}>
      <div className={cn("rounded-xl flex items-center justify-center font-bold shadow-card", sizeMap[size], bandColor(band))}>
        {band.toFixed(1)}
      </div>
      {showLabel && <span className="text-xs text-brand-gray font-medium">Band</span>}
    </div>
  );
}
