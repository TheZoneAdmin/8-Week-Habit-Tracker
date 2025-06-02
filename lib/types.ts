export interface Habit {
  id: string;
  habit: string;
  example: string;
}

export interface Week {
  week: number;
  focus: string;
  habits: ReadonlyArray<Habit>;
}

import type { HabitLogEntry } from '@/hooks/useUserStorage';

export interface Program {
  title: string;
  weeks: ReadonlyArray<Week>;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  condition: string;
  targetHabitId?: string;
  streakTarget?: number;
  points: number;
  unlocked: boolean;
  unlockedAt?: string;
  progress?: number;
}

// New progress interfaces
export interface HabitProgress {
  completions?: HabitLogEntry[];
  completed?: boolean; // From original UserProgress value type
  notes?: string;      // From original UserProgress value type
}

export interface WeekProgress {
  [habitId: string]: HabitProgress; // Key is habit ID e.g. "str-w1-h1"
}

export interface ProgramProgress {
  [weekId: string]: WeekProgress;   // Key is week ID e.g. "week1"
}

// Redefined UserProgress
export interface UserProgress {
  [programId: string]: ProgramProgress; // Key is program ID e.g. "strength"
}

// SavedData now uses the new UserProgress
export interface SavedData {
  progress: UserProgress;
  unlockedAchievements: string[];
  lastSync?: string;
}

export type TrackId = "strength" | "hybrid" | "cardio" | "all";
