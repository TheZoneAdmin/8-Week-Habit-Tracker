import React, { useState } from 'react';
import { Flame, Trophy } from 'lucide-react';

interface WalkthroughTourProps {
  isOpen: boolean;
  onClose: () => void;
}

const WalkthroughTour: React.FC<WalkthroughTourProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const totalSteps = 3;

  const nextStep = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      onClose();
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative bg-gray-800 rounded-lg p-6 max-w-md w-full">
        <div className="absolute top-3 right-3">
          <button 
            onClick={onClose} 
            className="text-gray-400 hover:text-white"
            aria-label="Close walkthrough"
          >
            &times;
          </button>
        </div>
        
        <div className="mb-4">
          <h3 className="text-[#CCBA78] text-xl font-semibold">Getting Started</h3>
          <div className="flex mt-2">
            {Array.from({length: totalSteps}).map((_, i) => (
              <div 
                key={i} 
                className={`h-1 flex-1 mx-1 rounded-full ${i + 1 === step ? 'bg-[#CCBA78]' : 'bg-gray-600'}`}
              />
            ))}
          </div>
        </div>
        
        {step === 1 && (
          <div className="text-white">
            <h4 className="font-semibold mb-2">Step 1: Checking off habits</h4>
            <p className="text-gray-300 mb-4">
              Check off each habit daily to build your streak. The checkbox turns green when completed for today.
            </p>
            <div className="bg-gray-700 p-4 rounded-lg mb-4 flex items-start space-x-3">
              <div className="mt-1 w-5 h-5 rounded border-gray-500 bg-green-800 shrink-0" />
              <div>
                <p className="font-medium text-gray-100">Complete scheduled workout</p>
                <p className="text-gray-400 text-sm">Follow planned schedule (rest days count)</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm italic">
              Tip: Be consistent! Daily check-ins are key to your success.
            </p>
          </div>
        )}
        
        {step === 2 && (
          <div className="text-white">
            <h4 className="font-semibold mb-2">Step 2: Building streaks</h4>
            <p className="text-gray-300 mb-4">
              Checking a habit on consecutive days builds a streak. Streaks are shown with a flame icon.
            </p>
            <div className="bg-gray-700 p-4 rounded-lg mb-4">
              <div className="flex items-center justify-between">
                <p className="text-gray-400 text-xs">Completed 5 times</p>
                <div className="flex items-center gap-1 text-orange-400">
                  <Flame className="w-3.5 h-3.5" />
                  <span className="text-xs font-medium">3</span>
                </div>
              </div>
            </div>
            <p className="text-gray-300 text-sm italic">
              Tip: A 7-day streak unlocks special achievements!
            </p>
          </div>
        )}
        
        {step === 3 && (
          <div className="text-white">
            <h4 className="font-semibold mb-2">Step 3: Earning achievements</h4>
            <p className="text-gray-300 mb-4">
              Unlock achievements by completing habits consistently. Track your progress in the Achievements section.
            </p>
            <div className="bg-gray-700 p-4 rounded-lg mb-4">
              <div className="flex items-center gap-3">
                <Trophy className="w-5 h-5 text-[#CCBA78]" />
                <div>
                  <h4 className="font-semibold text-[#CCBA78]">First Week Champion</h4>
                  <p className="text-sm text-gray-400">Complete all habits for one week</p>
                </div>
              </div>
              <div className="mt-2">
                <div className="w-full bg-gray-600 rounded-full h-2 overflow-hidden">
                  <div className="bg-[#CCBA78] h-full rounded-full" style={{ width: '45%' }} />
                </div>
                <p className="text-xs text-gray-400 mt-1 text-right">45%</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm italic">
              Tip: Start with Week 1 habits to build a strong foundation!
            </p>
          </div>
        )}
        
        <div className="flex justify-between mt-6">
          {step > 1 ? (
            <button 
              onClick={prevStep} 
              className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded"
            >
              Back
            </button>
          ) : (
            <div></div> // Empty div to maintain layout
          )}
          
          <button 
            onClick={nextStep} 
            className="px-4 py-2 bg-[#CCBA78] hover:bg-[#CCBA78]/90 text-gray-900 rounded"
          >
            {step === totalSteps ? "Get Started!" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default WalkthroughTour;
