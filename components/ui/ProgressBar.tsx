"use client";
import React from "react";
import { cn } from "@/lib/utils";

interface ProgressBarProps {
  value: number; // 0-100
  max?: number;
  label?: string;
  showValue?: boolean;
  size?: "sm" | "md" | "lg";
  color?: "teal" | "gold" | "navy" | "green" | "red";
  className?: string;
  ariaLabel?: string;
}

const sizeMap = { sm: "h-1.5", md: "h-2.5", lg: "h-4" };
const colorMap = {
  teal:  "bg-brand-teal",
  gold:  "bg-brand-gold",
  navy:  "bg-brand-navy",
  green: "bg-green-500",
  red:   "bg-red-500",
};

export function ProgressBar({
  value,
  max = 100,
  label,
  showValue = false,
  size = "md",
  color = "teal",
  className,
  ariaLabel,
}: ProgressBarProps) {
  const pct = Math.min(100, Math.max(0, (value / max) * 100));
  return (
    <div className={cn("w-full", className)}>
      {(label || showValue) && (
        <div className="flex justify-between items-center mb-1.5">
          {label && <span className="text-xs font-medium text-brand-gray">{label}</span>}
          {showValue && <span className="text-xs font-semibold text-brand-navy">{Math.round(pct)}%</span>}
        </div>
      )}
      <div
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={max}
        aria-label={ariaLabel ?? label ?? "Progress"}
        className={cn("progress-bar", sizeMap[size])}
      >
        <div
          className={cn("progress-fill", colorMap[color], sizeMap[size])}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
