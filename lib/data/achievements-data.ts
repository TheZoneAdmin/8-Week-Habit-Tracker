import { Achievement } from '../types';

// --- Achievements Definition ---
export const ACHIEVEMENTS: Achievement[] = [
    { id: 'first-week', title: 'First Week Champion', description: 'Complete all habits for one week', icon: 'trophy', condition: 'Complete 21 habits in a single week', points: 210, unlocked: false },
    { id: 'habit-warrior', title: 'Habit Warrior', description: 'Complete 50 total habits', icon: 'award', condition: 'Complete any 50 habits', points: 350, unlocked: false },
    { id: 'century-club', title: 'Century Club', description: 'Complete 100 total habits', icon: 'award', condition: 'Complete any 100 habits', points: 750, unlocked: false },
    { id: 'halfway-there', title: 'Halfway There!', description: 'Complete all habits for 4 weeks', icon: 'award', condition: 'Complete 84 total habits (Weeks 1-4)', points: 500, unlocked: false },
    { id: 'program-master', title: 'Program Master', description: 'Complete an entire 8-week program', icon: 'crown', condition: 'Complete all 168 habits in an 8-week program', points: 1680, unlocked: false },
    { id: 'streak-master-login', title: 'Check-in Streak Master', description: 'Maintain a 7-day check-in streak', icon: 'calendar', condition: 'Check-in (complete any habit) for 7 consecutive days', streakTarget: 7, points: 70, unlocked: false },
    // Habit Streaks
    { id: 'streak-habit-str-w1-h1-7d', title: 'Workout Consistency', description: 'Complete scheduled workout 7 days straight', icon: 'flame', condition: 'Maintain a 7-day streak for "Complete scheduled workout"', targetHabitId: 'str-w1-h1', streakTarget: 7, points: 100, unlocked: false },
    { id: 'streak-habit-str-w3-h1-7d', title: 'Protein Tracker', description: 'Track daily protein intake 7 days straight', icon: 'flame', condition: 'Maintain a 7-day streak for "Track daily protein intake"', targetHabitId: 'str-w3-h1', streakTarget: 7, points: 100, unlocked: false },
    { id: 'streak-habit-hyb-w1-h1-7d', title: 'Squat Practice Pro', description: 'Practice air squat technique 7 days straight', icon: 'flame', condition: 'Maintain a 7-day streak for "Practice air squat technique"', targetHabitId: 'hyb-w1-h1', streakTarget: 7, points: 100, unlocked: false },
];

export const PRIORITIZED_ACHIEVEMENTS: Achievement[] = [
  { id: 'streak-master-login', title: 'Check-in Streak Master', description: 'Maintain a 7-day check-in streak', icon: 'calendar', condition: 'Check-in (complete any habit) for 7 consecutive days', streakTarget: 7, points: 70, unlocked: false },
  { id: 'streak-habit-str-w1-h1-7d', title: 'Workout Consistency', description: 'Complete scheduled workout 7 days straight', icon: 'flame', condition: 'Maintain a 7-day streak for "Complete scheduled workout"', targetHabitId: 'str-w1-h1', streakTarget: 7, points: 100, unlocked: false },
  { id: 'streak-habit-str-w3-h1-7d', title: 'Protein Tracker', description: 'Track daily protein intake 7 days straight', icon: 'flame', condition: 'Maintain a 7-day streak for "Track daily protein intake"', targetHabitId: 'str-w3-h1', streakTarget: 7, points: 100, unlocked: false },
  { id: 'streak-habit-hyb-w1-h1-7d', title: 'Squat Practice Pro', description: 'Practice air squat technique 7 days straight', icon: 'flame', condition: 'Maintain a 7-day streak for "Practice air squat technique"', targetHabitId: 'hyb-w1-h1', streakTarget: 7, points: 100, unlocked: false },
  { id: 'first-week', title: 'First Week Champion', description: 'Complete all habits for one week', icon: 'trophy', condition: 'Complete 21 habits in a single week', points: 210, unlocked: false },
  { id: 'habit-warrior', title: 'Habit Warrior', description: 'Complete 50 total habits', icon: 'award', condition: 'Complete any 50 habits', points: 350, unlocked: false },
  { id: 'halfway-there', title: 'Halfway There!', description: 'Complete all habits for 4 weeks', icon: 'award', condition: 'Complete 84 total habits (Weeks 1-4)', points: 500, unlocked: false },
  { id: 'century-club', title: 'Century Club', description: 'Complete 100 total habits', icon: 'award', condition: 'Complete any 100 habits', points: 750, unlocked: false },
  { id: 'program-master', title: 'Program Master', description: 'Complete an entire 8-week program', icon: 'crown', condition: 'Complete all 168 habits in an 8-week program', points: 1680, unlocked: false },
];
