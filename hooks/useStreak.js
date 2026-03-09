"use client";
import { useMemo } from "react";

/**
 * Derive streak info from a weekly activity array.
 * @param {Array<{ day: string, sessions: number, minutes: number }>} weeklyActivity
 */
export function useStreak(weeklyActivity = []) {
  return useMemo(() => {
    let currentStreak = 0;
    let longestStreak = 0;
    let temp = 0;

    for (const day of weeklyActivity) {
      if (day.sessions > 0) {
        temp++;
        longestStreak = Math.max(longestStreak, temp);
      } else {
        temp = 0;
      }
    }
    // Current streak = trailing consecutive days with activity
    for (let i = weeklyActivity.length - 1; i >= 0; i--) {
      if (weeklyActivity[i].sessions > 0) currentStreak++;
      else break;
    }

    const totalMinutes = weeklyActivity.reduce((sum, d) => sum + d.minutes, 0);
    const totalSessions = weeklyActivity.reduce((sum, d) => sum + d.sessions, 0);
    const activeDays = weeklyActivity.filter((d) => d.sessions > 0).length;

    return { currentStreak, longestStreak, totalMinutes, totalSessions, activeDays };
  }, [weeklyActivity]);
}
