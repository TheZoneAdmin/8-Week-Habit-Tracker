import { SavedData, ProgramProgress, WeekProgress, HabitProgress } from './types';

export const calculateStreak = (savedData: SavedData): { currentStreak: number; longestStreak: number } => {
    const allDates = new Set<string>();
    Object.values(savedData.progress).forEach((program: ProgramProgress) => Object.values(program).forEach((week: WeekProgress) => Object.values(week).forEach((habit: HabitProgress) => (habit.completionDates || []).forEach((date: string) => allDates.add(date)))));
    const sortedDates = Array.from(allDates).sort();
    if (sortedDates.length === 0) return { currentStreak: 0, longestStreak: 0 };
    const today = new Date(), yesterday = new Date(today); yesterday.setDate(today.getDate() - 1);
    const todayStr = today.toISOString().split('T')[0], yesterdayStr = yesterday.toISOString().split('T')[0];
    let currentStreak = 0, longestStreak = 0, streak = 0;
    for (let i = 0; i < sortedDates.length; i++) {
        const currentDate = new Date(sortedDates[i]), previousDate = i > 0 ? new Date(sortedDates[i - 1]) : null; let diffDays = 1;
        if (previousDate) { const utcCurrent = Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()), utcPrevious = Date.UTC(previousDate.getFullYear(), previousDate.getMonth(), previousDate.getDate()); diffDays = Math.floor((utcCurrent - utcPrevious) / (1000 * 60 * 60 * 24)); }
        if (diffDays === 1) { streak++; } else { streak = (i === 0) ? 1 : 1; }
        longestStreak = Math.max(longestStreak, streak);
    }
    const lastCompletionDate = sortedDates[sortedDates.length - 1];
    if (lastCompletionDate === todayStr || lastCompletionDate === yesterdayStr) {
        let finalStreak = 0;
        for (let i = sortedDates.length - 1; i >= 0; i--) {
            const currentD = new Date(sortedDates[i]), prevD = i > 0 ? new Date(sortedDates[i - 1]) : null; let dayDiff = 1;
            if (prevD) { const utcCurrent = Date.UTC(currentD.getFullYear(), currentD.getMonth(), currentD.getDate()), utcPrevious = Date.UTC(prevD.getFullYear(), prevD.getMonth(), prevD.getDate()); dayDiff = Math.floor((utcCurrent - utcPrevious) / (1000 * 60 * 60 * 24)); }
            if (i === sortedDates.length - 1 || dayDiff === 1) { finalStreak++; } else { break; }
        } currentStreak = finalStreak;
    } else { currentStreak = 0; }
    return { currentStreak, longestStreak };
};

export const calculateHabitStreak = (completionDates: string[]): { currentStreak: number; longestStreak: number } => {
    const sortedDates = Array.from(new Set(completionDates)).sort();
    if (sortedDates.length === 0) return { currentStreak: 0, longestStreak: 0 };
    const today = new Date(), yesterday = new Date(today); yesterday.setDate(today.getDate() - 1);
    const todayStr = today.toISOString().split('T')[0], yesterdayStr = yesterday.toISOString().split('T')[0];
    let currentStreak = 0, longestStreak = 0, streak = 0;
    for (let i = 0; i < sortedDates.length; i++) {
        const currentDate = new Date(sortedDates[i]), previousDate = i > 0 ? new Date(sortedDates[i - 1]) : null; let diffDays = 1;
        if (previousDate) { const utcCurrent = Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()), utcPrevious = Date.UTC(previousDate.getFullYear(), previousDate.getMonth(), previousDate.getDate()); diffDays = Math.floor((utcCurrent - utcPrevious) / (1000 * 60 * 60 * 24)); }
        if (diffDays === 1) { streak++; } else { streak = (i === 0) ? 1 : 1; }
        longestStreak = Math.max(longestStreak, streak);
    }
    const lastCompletionDate = sortedDates[sortedDates.length - 1];
    if (lastCompletionDate === todayStr || lastCompletionDate === yesterdayStr) {
        let finalStreak = 0;
        for (let i = sortedDates.length - 1; i >= 0; i--) {
            const currentD = new Date(sortedDates[i]), prevD = i > 0 ? new Date(sortedDates[i - 1]) : null; let dayDiff = 1;
            if (prevD) { const utcCurrent = Date.UTC(currentD.getFullYear(), currentD.getMonth(), currentD.getDate()), utcPrevious = Date.UTC(prevD.getFullYear(), prevD.getMonth(), prevD.getDate()); dayDiff = Math.floor((utcCurrent - utcPrevious) / (1000 * 60 * 60 * 24)); }
            if (i === sortedDates.length - 1 || dayDiff === 1) { finalStreak++; } else { break; }
        } currentStreak = finalStreak;
    } else { currentStreak = 0; }
    return { currentStreak, longestStreak };
};
