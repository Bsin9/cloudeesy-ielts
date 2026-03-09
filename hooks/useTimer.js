"use client";
import { useState, useEffect, useRef, useCallback } from "react";

/**
 * Countdown timer hook.
 * @param {{ initialSeconds: number, onExpire?: () => void, autoStart?: boolean }} opts
 */
export function useTimer({ initialSeconds, onExpire, autoStart = false }) {
  const [remaining, setRemaining] = useState(initialSeconds);
  const [running, setRunning]     = useState(autoStart);
  const intervalRef  = useRef(null);
  const expiredRef   = useRef(false);

  const clear = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    if (!running) { clear(); return; }
    intervalRef.current = setInterval(() => {
      setRemaining((r) => {
        if (r <= 1) {
          clear();
          setRunning(false);
          if (!expiredRef.current) { expiredRef.current = true; onExpire?.(); }
          return 0;
        }
        return r - 1;
      });
    }, 1000);
    return clear;
  }, [running, clear, onExpire]);

  const start = useCallback(() => { expiredRef.current = false; setRunning(true); }, []);
  const pause = useCallback(() => setRunning(false), []);
  const reset = useCallback(() => {
    clear();
    setRunning(false);
    setRemaining(initialSeconds);
    expiredRef.current = false;
  }, [clear, initialSeconds]);

  const mins    = Math.floor(remaining / 60);
  const secs    = remaining % 60;
  const display = `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  const pct     = (remaining / initialSeconds) * 100;
  const isLow   = remaining < 300;
  const isCritical = remaining < 60;

  return { remaining, running, display, pct, isLow, isCritical, start, pause, reset };
}
