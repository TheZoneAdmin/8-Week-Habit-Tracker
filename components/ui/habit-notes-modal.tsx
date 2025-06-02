import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogClose } from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import type { HabitLogEntry } from '@/hooks/useUserStorage';
import type { TrackId } from '@/lib/types'; // Assuming TrackId is defined in lib/types

interface HabitNotesModalProps {
  isOpen: boolean;
  onClose: () => void;
  habitInfo: {
    program: TrackId;
    week: number;
    habitIndex: number;
    date: string;
    habitName?: string; // Optional: to display habit name in modal
    currentNote?: string;
  } | null;
  onSaveNote: (program: TrackId, week: number, habitIndex: number, date: string, note: string) => void;
}

export const HabitNotesModal: React.FC<HabitNotesModalProps> = ({ isOpen, onClose, habitInfo, onSaveNote }) => {
  const [noteText, setNoteText] = useState('');

  useEffect(() => {
    if (habitInfo?.currentNote) {
      setNoteText(habitInfo.currentNote);
    } else {
      setNoteText('');
    }
  }, [habitInfo]);

  const handleSave = () => {
    if (habitInfo) {
      onSaveNote(habitInfo.program, habitInfo.week, habitInfo.habitIndex, habitInfo.date, noteText);
      onClose();
    }
  };

  if (!habitInfo) return null;

  return (
    <Dialog open={isOpen} onOpenChange={(open: boolean) => !open && onClose()}>
      <DialogContent className="sm:max-w-[425px] bg-gray-800 border-gray-700 text-gray-100">
        <DialogHeader>
          <DialogTitle>Add Note for {habitInfo.habitName || 'Habit'} on {new Date(habitInfo.date).toLocaleDateString()}</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Textarea
            placeholder={`Notes for ${habitInfo.habitName || 'this habit'}... (e.g., "Felt good", "Used 5kg dumbbells")`}
            value={noteText}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setNoteText(e.target.value)}
            className="bg-gray-700 border-gray-600 text-gray-100 focus:ring-offset-gray-800 focus:ring-[#CCBA78]"
            rows={4}
          />
        </div>
        <DialogFooter className="sm:justify-between">
          <DialogClose asChild>
            <Button type="button" variant="outline" className="border-gray-600 hover:bg-gray-700">
              Cancel
            </Button>
          </DialogClose>
          <Button type="button" onClick={handleSave} className="bg-[#CCBA78] text-gray-900 hover:bg-[#CCBA78]/90">
            Save Note
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
