import React, { useState } from 'react';
import { Trophy, Flame, Award, Crown, Calendar, Share2, Facebook } from 'lucide-react';
import { Card } from '@/components/ui/card'; // Assuming path, adjust if necessary
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog"; // Assuming path, adjust if necessary

// --- Data Structures & Constants (Consider moving to shared files) ---
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

const programs = {
    strength: {
        title: "Strength & Growth Track", weeks: [
            { week: 1, focus: "Foundation Week", habits: [{ id: "str-w1-h1", habit: "Complete scheduled workout", example: "Follow planned schedule (rest days count)" }, { id: "str-w1-h2", habit: "Pack gym bag", example: "Prepare clothes, shoes, water, towel" }, { id: "str-w1-h3", habit: "Etiquette champ", example: "Clean/organize equipment after use" }] },
            { week: 2, focus: "Form Focus", habits: [{ id: "str-w2-h1", habit: "5-min mobility warm-up", example: "Dynamic stretches before workout" }, { id: "str-w2-h2", habit: "Record exercises/weights", example: "Log sets, reps, weights" }, { id: "str-w2-h3", habit: "Check form in mirror", example: "Monitor technique during sets" }] },
            { week: 3, focus: "Nutrition Basics", habits: [{ id: "str-w3-h1", habit: "Track daily protein", example: "Log protein at each meal" }, { id: "str-w3-h2", habit: "Drink water", example: "Track intake, min 8 glasses" }, { id: "str-w3-h3", habit: "Eat pre/post workout", example: "Time meals around training" }] },
            { week: 4, focus: "Recovery", habits: [{ id: "str-w4-h1", habit: "Get 7+ hours sleep", example: "Maintain consistent bedtime" }, { id: "str-w4-h2", habit: "10-min daily stretch", example: "Stretch major groups post-training" }, { id: "str-w4-h3", habit: "Rate muscle soreness", example: "Track recovery (1-5) daily" }] },
            { week: 5, focus: "Progressive Overload", habits: [{ id: "str-w5-h1", habit: "Follow program exactly", example: "Complete prescribed sets/reps" }, { id: "str-w5-h2", habit: "Track weight increases", example: "Note when weights increase" }, { id: "str-w5-h3", habit: "Rate workout intensity", example: "Record RPE (1-5) per session" }] },
            { week: 6, focus: "Mind-Muscle", habits: [{ id: "str-w6-h1", habit: "Practice breathing", example: "Breathe out on exertion" }, { id: "str-w6-h2", habit: "Focus on contraction", example: "Feel target muscle working" }, { id: "str-w6-h3", habit: "Maintain form always", example: "No form breakdown when tired" }] },
            { week: 7, focus: "Consistency", habits: [{ id: "str-w7-h1", habit: "Hit daily step goal", example: "Track & meet minimum steps" }, { id: "str-w7-h2", habit: "Complete all exercises", example: "No skipping exercises" }, { id: "str-w7-h3", habit: "Follow meal timing", example: "Eat at scheduled times" }] },
            { week: 8, focus: "Mastery", habits: [{ id: "str-w8-h1", habit: "Complete full protocol", example: "Warmup, workout, cooldown" }, { id: "str-w8-h2", habit: "Meet nutrition targets", example: "Hit protein, water, timing" }, { id: "str-w8-h3", habit: "Log all metrics", example: "Record weights, sets, reps, RPE" }] }
        ]
    },
    hybrid: {
        title: "Functional Training Track", weeks: [
            { week: 1, focus: "Movement Foundations", habits: [{ id: "hyb-w1-h1", habit: "Practice air squats", example: "10 perfect squats hourly" }, { id: "hyb-w1-h2", habit: "Hold plank", example: "Accumulate 2 min total daily" }, { id: "hyb-w1-h3", habit: "Mobility routine", example: "10-min joint work daily" }] },
            { week: 2, focus: "Workout Basics", habits: [{ id: "hyb-w2-h1", habit: "Complete WOD/Rest", example: "Follow schedule or active recovery" }, { id: "hyb-w2-h2", habit: "Record scores", example: "Log time/reps/weights" }, { id: "hyb-w2-h3", habit: "Practice scaling", example: "Write down scaled version first" }] },
            { week: 3, focus: "Movement Skills", habits: [{ id: "hyb-w3-h1", habit: "Daily skill work", example: "10min pull-up/Oly drill" }, { id: "hyb-w3-h2", habit: "Complete MetCon", example: "Short metabolic conditioning" }, { id: "hyb-w3-h3", habit: "Work on weakness", example: "10min practice on weak move" }] },
            { week: 4, focus: "Intensity Management", habits: [{ id: "hyb-w4-h1", habit: "Rate workout intensity", example: "Score RPE (1-10) per session" }, { id: "hyb-w4-h2", habit: "Track HR recovery", example: "Note 1-min recovery post-effort" }, { id: "hyb-w4-h3", habit: "Complete cooldown", example: "5-min easy move + stretch" }] },
            { week: 5, focus: "Performance Nutrition", habits: [{ id: "hyb-w5-h1", habit: "Time meals", example: "Eat 2hrs pre, <1hr post WOD" }, { id: "hyb-w5-h2", habit: "Track macros", example: "Log P/C/F daily" }, { id: "hyb-w5-h3", habit: "Follow hydration", example: "Water + electrolytes around WODs" }] },
            { week: 6, focus: "Benchmark Progress", habits: [{ id: "hyb-w6-h1", habit: "Record benchmarks", example: "Log scores for named WODs" }, { id: "hyb-w6-h2", habit: "Track key lifts", example: "Note weights for main lifts" }, { id: "hyb-w6-h3", habit: "Measure intensity", example: "Rate sessions by RPE/HR" }] },
            { week: 7, focus: "Advanced Skills", habits: [{ id: "hyb-w7-h1", habit: "Oly lift drills", example: "Daily clean/snatch technique" }, { id: "hyb-w7-h2", habit: "Gymnastics skills", example: "HS/MU/Pull-up practice" }, { id: "hyb-w7-h3", habit: "Accessory work", example: "Core, mobility, weakness focus" }] },
            { week: 8, focus: "Competition Prep", habits: [{ id: "hyb-w8-h1", habit: "Full WOD warmup", example: "Movement prep, skills, build-up" }, { id: "hyb-w8-h2", habit: "Execute strategy", example: "Follow pacing/movement plan" }, { id: "hyb-w8-h3", habit: "Record all data", example: "Log scores, RPE, recovery" }] }
        ]
    },
    cardio: {
        title: "Group Fitness Track", weeks: [
            { week: 1, focus: "Class Preparation", habits: [{ id: "cls-w1-h1", habit: "Pack class bag", example: "Water, towel, clothes prepped" }, { id: "cls-w1-h2", habit: "Arrive 10 min early", example: "Set up before class" }, { id: "cls-w1-h3", habit: "Clean equipment", example: "Wipe down & organize station" }] },
            { week: 2, focus: "Class Foundations", habits: [{ id: "cls-w2-h1", habit: "Pre-class warmup", example: "5-min mobility before start" }, { id: "cls-w2-h2", habit: "Follow instructor", example: "Match cues/movements" }, { id: "cls-w2-h3", habit: "Track intensity", example: "Rate RPE (1-5)" }] },
            { week: 3, focus: "Movement Mastery", habits: [{ id: "cls-w3-h1", habit: "Practice form", example: "Focus on technique" }, { id: "cls-w3-h2", habit: "Use modifications", example: "Adjust moves to your level" }, { id: "cls-w3-h3", habit: "Record energy levels", example: "Note energy pre/during/post" }] },
            { week: 4, focus: "Class Intensity", habits: [{ id: "cls-w4-h1", habit: "Maintain form", example: "Keep technique under fatigue" }, { id: "cls-w4-h2", habit: "Monitor HR zones", example: "Stay in target ranges" }, { id: "cls-w4-h3", habit: "Track water intake", example: "Hydrate before/during/after" }] },
            { week: 5, focus: "Personal Progress", habits: [{ id: "cls-w5-h1", habit: "Try new mod", example: "Attempt harder version" }, { id: "cls-w5-h2", habit: "Meet intensity targets", example: "Hit prescribed effort" }, { id: "cls-w5-h3", habit: "Record metrics", example: "Track weights/reps/time" }] },
            { week: 6, focus: "Class Engagement", habits: [{ id: "cls-w6-h1", habit: "Meet someone new", example: "Learn classmate's name/goal" }, { id: "cls-w6-h2", habit: "Stay for cooldown", example: "Complete all stretches" }, { id: "cls-w6-h3", habit: "Max effort", example: "Push to appropriate intensity" }] },
            { week: 7, focus: "Advanced Progress", habits: [{ id: "cls-w7-h1", habit: "Advanced moves", example: "Try full exercise versions" }, { id: "cls-w7-h2", habit: "Form under fatigue", example: "Keep technique late in class" }, { id: "cls-w7-h3", habit: "Track improvements", example: "Note progress in key moves" }] },
            { week: 8, focus: "Class Mastery", habits: [{ id: "cls-w8-h1", habit: "Lead by example", example: "Show form, help beginner" }, { id: "cls-w8-h2", habit: "Share milestones", example: "Document/share 1 improvement" }, { id: "cls-w8-h3", habit: "Record achievements", example: "Log PRs and wins" }] }
        ]
    }
};

interface AchievementsPanelProps {
  achievements: Achievement[];
  selectedTrack: keyof typeof programs | 'all';
  nextAchievementToUnlock: Achievement | null | undefined;
}

const AchievementsPanel: React.FC<AchievementsPanelProps> = ({ achievements, selectedTrack, nextAchievementToUnlock }) => {
    const [showShareDialog, setShowShareDialog] = useState(false);
    const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null);

    const shareToFacebook = () => {
        if (!selectedAchievement) return;
        const shareText = `🏆 Achievement Unlocked at The Zone! 💪\n\nI earned "${selectedAchievement.title}"!\n\n#TheZone #FitnessGoals`;
        const urlToShare = window.location.href; 
        const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(urlToShare)}&quote=${encodeURIComponent(shareText)}`;
        window.open(url, '_blank', 'width=600,height=400');
        setShowShareDialog(false);
    };

    if (!achievements) { return <div className="text-center text-gray-500 p-4">Loading achievements...</div>; }

   return (
        <Card className="bg-gray-800 border-none mb-8">
            <div className="p-4 sm:p-6">
                <h3 className="text-[#CCBA78] text-xl font-semibold mb-4">
                    {selectedTrack && selectedTrack !== 'all' 
                        ? `${programs[selectedTrack].title} Achievements` 
                        : 'All Achievements'}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {achievements.map((achievement) => (
                        <div 
                            key={achievement.id} 
                            className={`p-4 rounded-lg ${
                                achievement.unlocked 
                                    ? 'bg-[#CCBA78] bg-opacity-20 border border-[#CCBA78]' 
                                    : nextAchievementToUnlock?.id === achievement.id
                                        ? 'bg-gray-700 bg-opacity-70 border border-[#CCBA78] border-dashed'
                                        : 'bg-gray-700 bg-opacity-50'
                            }`}
                        >
                            <div className="flex items-center justify-between min-h-[40px]">
                                <div className="flex items-center gap-3">
                                    {achievement.icon === 'trophy' && <Trophy className={`w-5 h-5 ${achievement.unlocked ? 'text-[#CCBA78]' : 'text-gray-400'}`} />}
                                    {achievement.icon === 'flame' && <Flame className={`w-5 h-5 ${achievement.unlocked ? 'text-orange-400' : 'text-gray-400'}`} />}
                                    {achievement.icon === 'award' && <Award className={`w-5 h-5 ${achievement.unlocked ? 'text-[#CCBA78]' : 'text-gray-400'}`} />}
                                    {achievement.icon === 'crown' && <Crown className={`w-5 h-5 ${achievement.unlocked ? 'text-[#CCBA78]' : 'text-gray-400'}`} />}
                                    {achievement.icon === 'calendar' && <Calendar className={`w-5 h-5 ${achievement.unlocked ? 'text-[#CCBA78]' : 'text-gray-400'}`} />}
                                    <div className="flex-1">
                                        <h4 className={`font-semibold ${achievement.unlocked ? 'text-[#CCBA78]' : nextAchievementToUnlock?.id === achievement.id ? 'text-[#CCBA78]/80' : 'text-gray-300'}`}>{achievement.title}</h4>
                                        <p className="text-sm text-gray-400">{achievement.description}</p>
                                    </div>
                                </div>
                                {achievement.unlocked && (<button onClick={() => { setSelectedAchievement(achievement); setShowShareDialog(true); }} className="p-1.5 text-[#CCBA78] hover:bg-gray-600 rounded-full flex-shrink-0 ml-2" title="Share"><Share2 className="w-4 h-4" /></button>)}
                            </div>
                            <div className="mt-2 flex justify-between items-center text-xs sm:text-sm">
                                <span className="text-gray-400 italic">{achievement.unlocked ? `Unlocked: ${new Date(achievement.unlockedAt!).toLocaleDateString()}` : achievement.condition}</span>
                                <span className={`font-medium ${achievement.unlocked ? 'text-[#CCBA78]' : 'text-gray-400'}`}>{achievement.points} pts</span>
                            </div>
                            {!achievement.unlocked && (
                                <div className="mt-2">
                                    <div 
                                        className="w-full bg-gray-600 rounded-full h-1.5 sm:h-2 overflow-hidden"
                                        role="progressbar"
                                        aria-label={`${achievement.title} progress`}
                                        aria-valuenow={Math.floor(achievement.progress ?? 0)}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                    >
                                        <div 
                                            className={`h-full rounded-full transition-all duration-300 ease-out ${
                                                nextAchievementToUnlock?.id === achievement.id 
                                                    ? 'bg-[#CCBA78] animate-pulse' 
                                                    : 'bg-[#CCBA78]'
                                            }`} 
                                            style={{ width: `${achievement.progress ?? 0}%` }} 
                                        />
                                    </div>
                                    <p className="text-xs text-gray-400 mt-1 text-right">
                                        {Math.floor(achievement.progress ?? 0)}%
                                        {nextAchievementToUnlock?.id === achievement.id && (
                                            <span className="text-[#CCBA78] ml-1">Next up!</span>
                                        )}
                                    </p>
                                 </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <AlertDialog open={showShareDialog} onOpenChange={setShowShareDialog}>
                <AlertDialogContent className="bg-gray-800 text-white max-w-md">
                    <AlertDialogHeader>
                        <AlertDialogTitle className="text-[#CCBA78] text-lg">Share Achievement</AlertDialogTitle>
                        <AlertDialogDescription className="text-gray-300 text-sm">Celebrate your success!</AlertDialogDescription>
                    </AlertDialogHeader>
                    {selectedAchievement && (
                        <div className="my-4 p-4 bg-gray-700 rounded-lg text-center">
                             <div className="flex justify-center mb-2">
                                 {selectedAchievement.icon === 'trophy' && <Trophy className="w-10 h-10 text-[#CCBA78]" />}
                                 {selectedAchievement.icon === 'flame' && <Flame className="w-10 h-10 text-orange-400" />}
                                 {selectedAchievement.icon === 'award' && <Award className="w-10 h-10 text-[#CCBA78]" />}
                                 {selectedAchievement.icon === 'crown' && <Crown className="w-10 h-10 text-[#CCBA78]" />}
                                 {selectedAchievement.icon === 'calendar' && <Calendar className="w-10 h-10 text-[#CCBA78]" />}
                             </div>
                             <h3 className="text-lg font-semibold text-[#CCBA78] mb-1">{selectedAchievement.title}</h3>
                             <p className="text-gray-300 text-sm mb-2">{selectedAchievement.description}</p>
                             <p className="text-xs text-gray-400">Unlocked: {new Date(selectedAchievement.unlockedAt || Date.now()).toLocaleDateString()}</p>
                        </div>
                    )}
                    <AlertDialogFooter className="gap-2 flex-col sm:flex-row">
                        <AlertDialogCancel className="w-full sm:w-auto bg-gray-600 text-white hover:bg-gray-500 border-none">Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={shareToFacebook} className="w-full sm:w-auto bg-[#1877F2] hover:bg-[#1877F2]/90 text-white flex items-center justify-center gap-2"> <Facebook className="w-4 h-4" /> Share </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </Card>
    );
};

export default AchievementsPanel;
