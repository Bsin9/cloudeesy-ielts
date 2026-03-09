"use client";
import React, { useEffect, useState, useRef } from "react";
import { Clock } from "lucide-react";
import { cn } from "@/lib/utils";

interface TimerProps {
  durationSeconds: number;
  onExpire?: () => void;
  running?: boolean;
  className?: string;
}

export function Timer({ durationSeconds, onExpire, running = true, className }: TimerProps) {
  const [remaining, setRemaining] = useState(durationSeconds);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!running) return;
    intervalRef.current = setInterval(() => {
      setRemaining((r) => {
        if (r <= 1) {
          clearInterval(intervalRef.current!);
          onExpire?.();
          return 0;
        }
        return r - 1;
      });
    }, 1000);
    return () => clearInterval(intervalRef.current!);
  }, [running, onExpire]);

  const mins = Math.floor(remaining / 60);
  const secs = remaining % 60;
  const isLow = remaining < 300; // < 5 mins

  return (
    <div
      className={cn(
        "flex items-center gap-2 px-4 py-2 rounded-lg font-mono font-bold tabular-nums text-lg",
        isLow ? "bg-red-50 text-red-600 animate-pulse-slow" : "bg-brand-teal-pale text-brand-navy",
        className
      )}
      role="timer"
      aria-live="polite"
      aria-atomic="true"
      aria-label={`${mins} minutes and ${secs} seconds remaining`}
    >
      <Clock className="w-4 h-4 shrink-0" aria-hidden="true" />
      <span>{String(mins).padStart(2, "0")}:{String(secs).padStart(2, "0")}</span>
    </div>
  );
}
