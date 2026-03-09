"use client";
import { useMemo } from "react";

/**
 * Count words in a string.
 * @param {string} text
 * @param {number} [minTarget=150]
 * @param {number} [maxTarget=200]
 */
export function useWordCount(text, minTarget = 150, maxTarget = 200) {
  const count = useMemo(() => {
    if (!text || !text.trim()) return 0;
    return text.trim().split(/\s+/).filter(Boolean).length;
  }, [text]);

  const isUnder    = count < minTarget;
  const isOver     = count > maxTarget;
  const isInRange  = !isUnder && !isOver;
  const color      = isUnder ? "var(--color-brand-red)"
    : isOver  ? "var(--color-brand-gold)"
    : "var(--color-brand-green)";
  const pct = Math.min(100, Math.round((count / maxTarget) * 100));

  return { count, isUnder, isOver, isInRange, color, pct };
}
