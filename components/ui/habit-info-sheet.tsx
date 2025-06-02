import React, { useEffect, useRef, useCallback } from 'react';

interface HabitInfoSheetProps {
  habit: {
    habit: string;
    example: string;
  };
  isOpen: boolean;
  onClose: () => void;
}

export const HabitInfoSheet = ({ habit, isOpen, onClose }: HabitInfoSheetProps) => {
  const isRPEHabit = habit.habit.toLowerCase().includes("rpe") || habit.habit.toLowerCase().includes("rate workout intensity");
  const isSorenessHabit = habit.habit.toLowerCase().includes("rate muscle soreness");
  const sheetRef = useRef<HTMLDivElement>(null);
  const firstFocusableElementRef = useRef<HTMLButtonElement>(null); // Assuming the button is the primary focus target
  const lastFocusableElementRef = useRef<HTMLButtonElement>(null); // If more, adjust accordingly

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
        return;
      }

      if (event.key === 'Tab') {
        if (!sheetRef.current) return;

        const focusableElements = Array.from(
          sheetRef.current.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          )
        ) as HTMLElement[];

        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (event.shiftKey) {
          // Shift + Tab
          if (document.activeElement === firstElement) {
            lastElement.focus();
            event.preventDefault();
          }
        } else {
          // Tab
          if (document.activeElement === lastElement) {
            firstElement.focus();
            event.preventDefault();
          }
        }
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      // Focus the first focusable element when the sheet opens
      // Timeout helps ensure the element is visible and focusable
      setTimeout(() => {
        if (firstFocusableElementRef.current) {
          firstFocusableElementRef.current.focus();
        } else if (sheetRef.current) {
            // As a fallback, focus the sheet itself if no specific element is targeted
            sheetRef.current.focus(); 
        }
      }, 100); 
    } else {
      document.removeEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  return (
  <div
    className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity ${
      isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
    }`}
    onClick={onClose}
  >
    <div 
      ref={sheetRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby="habit-info-title"
      tabIndex={-1} // Make the sheet itself focusable for fallback
      className={`fixed bottom-0 left-0 right-0 bg-gray-800 rounded-t-xl p-4 transition-transform transform ${
        isOpen ? 'translate-y-0' : 'translate-y-full'
      }`}
      onClick={e => e.stopPropagation()}
    >
      <div className="w-12 h-1 bg-gray-600 rounded-full mx-auto mb-4" />
      <h3 id="habit-info-title" className="text-lg font-semibold text-white mb-2">{habit.habit}</h3>
      <p className="text-sm text-gray-400 mb-4">{habit.example}</p>
      <div className="space-y-4">
        <div className="bg-gray-700 rounded-lg p-4">
          <h4 className="text-sm font-medium text-white mb-2">Tips</h4>
          <ul className="text-sm text-gray-400 space-y-2">
            <li>• Start small and build consistency</li>
            <li>• Track your progress daily</li>
            <li>• Celebrate small wins</li>
          </ul>
        </div>
        {isRPEHabit && (
          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="text-sm font-medium text-white mb-2">Understanding RPE (Rate of Perceived Exertion 1-10)</h4>
            <p className="text-xs text-gray-300 mb-1">RPE helps you gauge workout intensity based on how you feel.</p>
            <ul className="text-xs text-gray-400 space-y-1 list-disc list-inside pl-2">
              <li><strong>1-2:</strong> Very light activity (e.g., slow walk).</li>
              <li><strong>3-4:</strong> Light, easy breathing, can talk easily.</li>
              <li><strong>5-6:</strong> Moderate, breathing deepens, can hold a conversation.</li>
              <li><strong>7-8:</strong> Vigorous, short of breath, can speak in short sentences.</li>
              <li><strong>9:</strong> Very hard, very difficult to maintain, minimal speech.</li>
              <li><strong>10:</strong> Max effort, cannot maintain long.</li>
            </ul>
            <p className="text-xs text-gray-300 mt-2"><em>Tip: Listen to your body. If unsure, ask a coach to help you calibrate.</em></p>
          </div>
        )}
        {isSorenessHabit && (
          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="text-sm font-medium text-white mb-2">Understanding Muscle Soreness (1-5)</h4>
            <p className="text-xs text-gray-300 mb-1">This scale helps track recovery and if you need more rest.</p>
            <ul className="text-xs text-gray-400 space-y-1 list-disc list-inside pl-2">
              <li><strong>1:</strong> No soreness.</li>
              <li><strong>2:</strong> Mild, noticeable but doesn't affect movement.</li>
              <li><strong>3:</strong> Moderate, some discomfort with movement.</li>
              <li><strong>4:</strong> Significant, movement limited.</li>
              <li><strong>5:</strong> Severe, pain at rest, avoid training area.</li>
            </ul>
            <p className="text-xs text-gray-300 mt-2"><em>Tip: Some soreness (DOMS) is normal. Severe or persistent pain might need attention.</em></p>
          </div>
        )}
        <button
          ref={firstFocusableElementRef} // Also serves as last in this simple case
          className="w-full bg-[#CCBA78] text-gray-900 rounded-lg py-3 font-medium"
          onClick={onClose}
        >
          Got it
        </button>
      </div>
    </div>
  </div>
  );
};
