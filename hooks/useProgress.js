"use client";
import { useState, useEffect } from "react";
import { getProgress, getWeakAreas } from "@/lib/api/progressApi.js";

/** Fetch and cache the user's progress data */
export function useProgress() {
  const [progress,  setProgress]   = useState(null);
  const [weakAreas, setWeakAreas]  = useState([]);
  const [loading,   setLoading]    = useState(true);
  const [error,     setError]      = useState(null);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      try {
        const [prog, weak] = await Promise.all([getProgress(), getWeakAreas()]);
        if (!cancelled) { setProgress(prog); setWeakAreas(weak.areas ?? []); }
      } catch (e) {
        if (!cancelled) setError(e.message);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    load();
    return () => { cancelled = true; };
  }, []);

  return { progress, weakAreas, loading, error };
}
