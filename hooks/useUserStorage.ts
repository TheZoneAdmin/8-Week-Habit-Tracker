import { useState, useEffect, useCallback } from 'react';
import { PRIORITIZED_ACHIEVEMENTS } from '@/lib/data/achievements-data';
import type { Achievement as AppAchievement } from '@/lib/types';

// Types matching the HabitProgram component
// This local Achievement interface should ideally be replaced by AppAchievement from lib/types
// if they are meant to be identical. For now, ensuring compatibility.
interface Achievement {
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

interface UserProgress {
  currentStreak: number;
  longestStreak: number;
  totalPoints: number;
  completedHabits: number;
  achievements: Achievement[];
  weeklyProgress: Record<number, any>;
  lastUpdated: string;
}

export interface HabitLogEntry {
  date: string;
  notes?: string;
}

interface SavedData {
  [program: string]: {
    [week: number]: {
      [habitIndex: number]: {
        completions: HabitLogEntry[];
      };
    };
  };
}

const INITIAL_SAVED_DATA: SavedData = {
  strength: {},
  hybrid: {},
  cardio: {}
};

const INITIAL_USER_DATA: UserProgress = {
  currentStreak: 0,
  longestStreak: 0,
  totalPoints: 0,
  completedHabits: 0,
  achievements: PRIORITIZED_ACHIEVEMENTS.map((ach: AppAchievement) => ({
    ...ach,
    unlocked: false,
    progress: 0,
    unlockedAt: undefined,
  })),
  weeklyProgress: {},
  lastUpdated: new Date().toISOString()
};

// Generate a random user ID if none exists
const generateUserId = () => {
  return `user_${Math.random().toString(36).substr(2, 9)}`;
};

export const useUserStorage = (showToastCallback: (message: string, type?: 'success' | 'error') => void) => {
  const [isClient, setIsClient] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [userId, setUserId] = useState<string>('');
  const [userData, setUserData] = useState<UserProgress>(INITIAL_USER_DATA);
  const [savedData, setSavedData] = useState<SavedData>(INITIAL_SAVED_DATA);

  // Initialize on client-side only
  useEffect(() => {
    setIsClient(true);
    
    // Load user ID
    const storedUserId = localStorage.getItem('habit_userId');
    const currentUserId = storedUserId || generateUserId();
    
    if (!storedUserId) {
      localStorage.setItem('habit_userId', currentUserId);
    }
    
    setUserId(currentUserId);
    
    // Load user data
    const storedUserData = localStorage.getItem(`habit_userData_${currentUserId}`);
    if (storedUserData) {
      try {
        const parsedData = JSON.parse(storedUserData);
        setUserData(parsedData);
      } catch (e) {
        console.error('Error parsing user data:', e);
        setUserData(INITIAL_USER_DATA);
      }
    }
    
    // Load saved habits data
    const storedSavedData = localStorage.getItem(`habit_savedData_${currentUserId}`);
    if (storedSavedData) {
      try {
        const parsedData = JSON.parse(storedSavedData);
        if (parsedData === null) {
          console.warn('Parsed savedData from localStorage was null, resetting to initial data.');
          setSavedData(INITIAL_SAVED_DATA);
        } else {
          setSavedData(parsedData);
        }
      } catch (e) {
        console.error('Error parsing saved data:', e);
        setSavedData(INITIAL_SAVED_DATA);
      }
    }
    
    setIsLoading(false);
  }, []);

  // Save user data whenever it changes
  useEffect(() => {
    if (isClient && userId) {
      try {
        localStorage.setItem(`habit_userData_${userId}`, JSON.stringify(userData));
      } catch (error) {
        console.error("Failed to save user data to localStorage:", error);
        // Optionally, notify the user if this is critical and you have a mechanism to do so
        // showToastCallback('Error saving progress. Storage might be full.', 'error');
      }
    }
  }, [userData, isClient, userId]);

  // Save habits data whenever it changes
  useEffect(() => {
    if (isClient && userId) {
      try {
        localStorage.setItem(`habit_savedData_${userId}`, JSON.stringify(savedData));
      } catch (error) {
        console.error("Failed to save habits data to localStorage:", error);
        // Optionally, notify the user
        // showToastCallback('Error saving habit details. Storage might be full.', 'error');
      }
    }
  }, [savedData, isClient, userId]);

  // Export progress data
  const exportProgress = useCallback(() => {
    if (!isClient) return;
    
    const exportData = {
      userId,
      userData,
      savedData,
      exportDate: new Date().toISOString()
    };
    
    try {
      const dataStr = JSON.stringify(exportData);
      const dataUri = `data:application/json;charset=utf-8,${encodeURIComponent(dataStr)}`;
      
      const exportFileDefaultName = `habit_tracker_export_${new Date().toISOString().slice(0, 10)}.json`;
      
      const linkElement = document.createElement('a');
      linkElement.setAttribute('href', dataUri);
      linkElement.setAttribute('download', exportFileDefaultName);
      linkElement.click();
      
      showToastCallback('Progress data exported successfully!', 'success');
    } catch (e) {
      console.error('Error exporting data:', e);
      showToastCallback('Failed to export data. Please try again.', 'error');
    }
  }, [userId, userData, savedData, isClient, showToastCallback]);

  // Import progress data
  const importProgress = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    if (!isClient || !event.target.files || event.target.files.length === 0) return;
    
    const file = event.target.files[0];
    const reader = new FileReader();
    
    reader.onload = (e) => {
      try {
        const importedData = JSON.parse(e.target?.result as string);
        
        // Validate imported data
        if (!importedData.userData || !importedData.savedData) {
          throw new Error('Invalid data format');
        }
        
        // Update state with imported data
        setUserData(importedData.userData);
        setSavedData(importedData.savedData);
        
        showToastCallback('Progress data imported successfully!', 'success');
      } catch (e) {
        console.error('Error importing data:', e);
        showToastCallback('Failed to import data. Invalid file format.', 'error');
      }
    };
    
    reader.onerror = () => {
      showToastCallback('Failed to read the file. Please try again.', 'error');
    };
    
    reader.readAsText(file);
  }, [isClient, showToastCallback]);

  // Reset all progress
  const resetAllProgress = useCallback(() => {
    if (!isClient) return;
    
    // Reset to initial values
    setUserData(INITIAL_USER_DATA);
    setSavedData(INITIAL_SAVED_DATA);
    
    showToastCallback('All progress has been reset.', 'success');
  }, [isClient, showToastCallback]);

  return {
    userId,
    userData,
    setUserData,
    savedData,
    setSavedData,
    exportProgress,
    importProgress,
    resetAllProgress,
    isClient,
    isLoading
  };
};

export default useUserStorage;
