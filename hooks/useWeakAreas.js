"use client";
import { useState, useEffect } from "react";
import { getWeakAreas } from "@/lib/api/progressApi.js";

/** Fetch and expose weak areas for the current user */
export function useWeakAreas() {
  const [areas,   setAreas]   = useState([]);
  const [loading, setLoading] = useState(true);
  const [error,   setError]   = useState(null);

  useEffect(() => {
    let cancelled = false;
    getWeakAreas()
      .then((data) => { if (!cancelled) setAreas(data.areas ?? []); })
      .catch((e)   => { if (!cancelled) setError(e.message); })
      .finally(()  => { if (!cancelled) setLoading(false); });
    return () => { cancelled = true; };
  }, []);

  return { areas, loading, error };
}
