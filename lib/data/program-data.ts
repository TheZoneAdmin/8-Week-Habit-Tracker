import { Program } from '../types';

// --- Icon Mapping for Habits ---
export const habitIconMapping: Record<string, string> = {
  // Strength Track
  "str-w1-h1": "dumbbell", // Complete scheduled workout
  "str-w1-h2": "baggage", // Pack gym bag
  "str-w1-h3": "sparkles", // Etiquette champ
  "str-w2-h1": "stretching", // 5-min mobility warm-up
  "str-w2-h2": "clipboard-list", // Record exercises/weights
  "str-w2-h3": "scan", // Check form in mirror
  "str-w2-h4": "brain", // Mindful Moment
  "str-w3-h1": "egg", // Track daily protein
  "str-w3-h2": "droplets", // Drink water
  "str-w3-h3": "utensils", // Eat pre/post workout
  "str-w4-h1": "moon", // Get 7+ hours sleep
  "str-w4-h2": "stretch", // 10-min daily stretch
  "str-w4-h3": "activity", // Rate muscle soreness
  "str-w5-h1": "list-checks", // Follow program exactly
  "str-w5-h2": "trending-up", // Track weight increases
  "str-w5-h3": "bar-chart", // Rate workout intensity
  "str-w6-h1": "lungs", // Practice breathing
  "str-w6-h2": "zap", // Focus on contraction
  "str-w6-h3": "check-circle", // Maintain form always
  "str-w7-h1": "footprints", // Hit daily step goal
  "str-w7-h2": "check-square", // Complete all exercises
  "str-w7-h3": "timer", // Follow meal timing
  "str-w8-h1": "list-todo", // Complete full protocol
  "str-w8-h2": "target", // Meet nutrition targets
  "str-w8-h3": "clipboard-data", // Log all metrics
  
  // Hybrid Track
  "hyb-w1-h1": "squat", // Practice air squats
  "hyb-w1-h2": "timer", // Hold plank
  "hyb-w1-h3": "movement", // Mobility routine
  "hyb-w2-h1": "calendar-check", // Complete WOD/Rest
  "hyb-w2-h2": "pencil", // Record scores
  "hyb-w2-h3": "scale", // Practice scaling
  "hyb-w3-h1": "dumbbell", // Daily skill work
  "hyb-w3-h2": "timer", // Complete MetCon
  "hyb-w3-h3": "target", // Work on weakness
  "hyb-w4-h1": "heart-pulse", // Rate workout intensity
  "hyb-w4-h2": "heart", // Track HR recovery
  "hyb-w4-h3": "wind", // Complete cooldown
  "hyb-w5-h1": "clock", // Time meals
  "hyb-w5-h2": "pie-chart", // Track macros
  "hyb-w5-h3": "droplet", // Follow hydration
  "hyb-w6-h1": "file-text", // Record benchmarks
  "hyb-w6-h2": "dumbbell", // Track key lifts
  "hyb-w6-h3": "gauge", // Measure intensity
  "hyb-w7-h1": "barbell", // Oly lift drills
  "hyb-w7-h2": "gymnastics", // Gymnastics skills
  "hyb-w7-h3": "puzzle", // Accessory work
  "hyb-w8-h1": "flame", // Full WOD warmup
  "hyb-w8-h2": "strategy", // Execute strategy
  "hyb-w8-h3": "database", // Record all data
  
  // Cardio/Classes Track
  "cls-w1-h1": "backpack", // Pack class bag
  "cls-w1-h2": "clock", // Arrive 10 min early
  "cls-w1-h3": "spray-can", // Clean equipment
  "cls-w2-h1": "flame", // Pre-class warmup
  "cls-w2-h2": "user-check", // Follow instructor
  "cls-w2-h3": "activity", // Track intensity
  "cls-w3-h1": "clipboard", // Practice form
  "cls-w3-h2": "sliders", // Use modifications
  "cls-w3-h3": "battery", // Record energy levels
  "cls-w4-h1": "shield", // Maintain form
  "cls-w4-h2": "heart", // Monitor HR zones
  "cls-w4-h3": "droplet", // Track water intake
  "cls-w5-h1": "arrow-up-circle", // Try new mod
  "cls-w5-h2": "target", // Meet intensity targets
  "cls-w5-h3": "clipboard-data", // Record metrics
  "cls-w5-h4": "award", // Note Non-Scale Victory
  "cls-w6-h1": "users", // Meet someone new
  "cls-w6-h2": "sunset", // Stay for cooldown
  "cls-w6-h3": "zap", // Max effort
  "cls-w7-h1": "award", // Advanced moves
  "cls-w7-h2": "shield-check", // Form under fatigue
  "cls-w7-h3": "trending-up", // Track improvements
  "cls-w8-h1": "star", // Lead by example
  "cls-w8-h2": "share", // Share milestones
  "cls-w8-h3": "trophy" // Record achievements
};

// --- Why This Matters Descriptions ---
export const habitDescriptions: Record<string, string> = {
  // Strength Track
  "str-w1-h1": "Working out consistently is the #1 factor for results. Even small workouts add up over time.",
  "str-w1-h2": "Being prepared removes barriers to working out. No last-minute excuses!",
  "str-w1-h3": "Building gym etiquette earns respect and makes you part of the community.",
  "str-w2-h1": "Proper warm-ups reduce injury risk by 54% and improve workout performance.",
  "str-w2-h2": "Tracking progress helps identify what's working and keeps you motivated as you see improvements.",
  "str-w2-h3": "Proper form maximizes muscle growth while preventing injuries. It's quality over quantity.",
  "str-w3-h1": "Most beginners only get half the protein they need. Adequate protein intake is essential for muscle repair and growth.",
  "str-w3-h2": "Even 2% dehydration reduces performance by up to 20%. Water is critical for recovery and energy.",
  "str-w3-h3": "Well-timed nutrition around workouts gives your body the fuel it needs and enhances recovery.",
  "str-w4-h1": "During sleep is when most muscle growth happens. It's as important as your workout!",
  "str-w4-h2": "Regular stretching improves flexibility, reduces soreness, and helps prevent injuries.",
  "str-w4-h3": "Tracking soreness helps identify when to push and when to recover, preventing overtraining.",
  "str-w5-h1": "Understanding your program and following it consistently are key to making steady progress and achieving your goals.",
  "str-w5-h2": "Progressive overload is the key principle of muscle growth. Track increases to ensure progress.",
  "str-w5-h3": "Rating intensity helps calibrate effort across different exercises and ensures proper progression.",
  "str-w6-h1": "Proper breathing stabilizes your core, increases power, and helps maintain technique under load.",
  "str-w6-h2": "Mind-muscle connection improves exercise effectiveness by up to 30% without adding weight.",
  "str-w6-h3": "Maintaining form when tired prevents injuries and ensures you're working the right muscles.",
  "str-w7-h1": "Daily steps are foundational for heart health, recovery, and fat loss, even on rest days.",
  "str-w7-h2": "Skipping exercises creates muscular imbalances. Complete all exercises for balanced development.",
  "str-w7-h3": "Consistent meal timing stabilizes energy, improves recovery, and optimizes nutrient utilization.",
  "str-w8-h1": "A complete workout protocol ensures all aspects of fitness are addressed for maximum results.",
  "str-w8-h2": "Meeting nutrition targets provides the right building blocks for muscle repair and growth.",
  "str-w8-h3": "Detailed tracking creates accountability and lets you see patterns in your performance.",
  
  // Hybrid Track
  "hyb-w1-h1": "The squat is a fundamental movement pattern. Mastering it improves all lower body strength.",
  "hyb-w1-h2": "Planks build core stability essential for all movements and help prevent back injuries.",
  "hyb-w1-h3": "Mobility work prepares joints for complex movements and prevents common injuries.",
  "hyb-w2-h1": "Following the workout/rest schedule balances intensity with recovery for optimal results.",
  "hyb-w2-h2": "Tracking performance creates a record of improvement and helps identify effective strategies.",
  "hyb-w2-h3": "Smart scaling ensures you're challenged but can maintain form and complete workouts safely.",
  "hyb-w3-h1": "Daily skill practice develops movement patterns that carry over to more complex exercises.",
  "hyb-w3-h2": "MetCons build cardiovascular capacity and mental toughness in short, efficient workouts.",
  "hyb-w3-h3": "Working on weaknesses prevents plateaus and creates balanced, functional fitness.",
  "hyb-w4-h1": "Rating intensity helps you track effort and ensures you're pushing hard enough to progress.",
  "hyb-w4-h2": "Heart rate recovery speed is a key indicator of improving fitness and reduced injury risk.",
  "hyb-w4-h3": "Proper cooldowns accelerate recovery, reduce soreness, and improve flexibility.",
  "hyb-w5-h1": "Meal timing around workouts improves performance during training and speeds recovery after.",
  "hyb-w5-h2": "Tracking macros ensures you're fueling properly for high-intensity functional training.",
  "hyb-w5-h3": "Proper hydration improves performance by up to 25% and aids recovery between workouts.",
  "hyb-w6-h1": "Benchmark workouts measure progress over time and identify areas needing improvement.",
  "hyb-w6-h2": "Core lifts build foundational strength that transfers to all functional movements.",
  "hyb-w6-h3": "Measuring intensity ensures you're working at the right level for your goals.",
  "hyb-w7-h1": "Olympic lifting drills develop power, speed, and coordination that transfer to all movements.",
  "hyb-w7-h2": "Gymnastic skills improve body control, strength-to-weight ratio, and movement efficiency.",
  "hyb-w7-h3": "Accessory work addresses muscular imbalances and strengthens areas prone to injury.",
  "hyb-w8-h1": "A complete warmup prepares all systems for optimal performance and reduces injury risk.",
  "hyb-w8-h2": "Strategic execution optimizes energy use and ensures best performance throughout workouts.",
  "hyb-w8-h3": "Detailed data tracking allows for analysis of strengths, weaknesses, and progress over time.",

  // Cardio/Classes Track
  "cls-w1-h1": "Coming prepared removes obstacles to participation and helps you focus on your workout.",
  "cls-w1-h2": "Arriving early reduces stress, allows proper setup, and helps you understand class goals.",
  "cls-w1-h3": "Equipment care shows respect for the community and creates a better environment for everyone.",
  "cls-w2-h1": "Pre-class warmups improve performance, reduce injury risk, and help you get more from class.",
  "cls-w2-h2": "Following instructor cues ensures proper form and helps you understand movement patterns.",
  "cls-w2-h3": "Tracking intensity helps you gauge effort appropriately and see progress over time.",
  "cls-w3-h1": "Focusing on form over speed or weight ensures effective workouts and prevents injuries.",
  "cls-w3-h2": "Smart modifications maintain workout intensity while accommodating your current fitness level.",
  "cls-w3-h3": "Energy tracking helps identify optimal workout times and effective recovery strategies.",
  "cls-w4-h1": "Maintaining form when fatigued builds muscle memory and prevents compensation injuries.",
  "cls-w4-h2": "Heart rate zone training optimizes cardiovascular benefits and helps manage workout intensity.",
  "cls-w4-h3": "Proper hydration improves performance, prevents cramps, and speeds recovery after class.",
  "cls-w5-h1": "Trying harder modifications challenges your body and leads to continued improvement.",
  "cls-w5-h2": "Meeting intensity targets ensures you're working at the right level for your fitness goals.",
  "cls-w5-h3": "Recording metrics provides concrete evidence of your progress and motivates consistency.",
  "cls-w5-h4": "Focusing on non-scale victories helps appreciate all forms of progress and keeps motivation high, especially when scale weight fluctuates.",
  "cls-w6-h1": "Social connections increase workout enjoyment and class attendance by over 40%.",
  "cls-w6-h2": "Cooldowns accelerate recovery, improve flexibility, and reduce post-workout soreness.",
  "cls-w6-h3": "Appropriate intensity pushes your limits safely and leads to consistent improvement.",
  "cls-w7-h1": "Advanced movements build on your foundation and create new physical challenges.",
  "cls-w7-h2": "Maintaining form during fatigue is the true test of skill mastery and proper conditioning.",
  "cls-w7-h3": "Tracking key movements shows progress and helps identify effective class formats.",
  "cls-w8-h1": "Leading by example inspires others and reinforces your own knowledge and proper form.",
  "cls-w8-h2": "Sharing accomplishments creates accountability and motivates continued dedication.",
  "cls-w8-h3": "Recording achievements creates a record of your journey and builds confidence."
};

// --- Programs Data with Habit IDs ---
export const programs: Record<string, Program> = {
    strength: {
        title: "Strength & Growth Track", weeks: [
            { week: 1, focus: "Foundation Week", habits: [{ id: "str-w1-h1", habit: "Complete scheduled workout", example: "Follow planned schedule (rest days count)" }, { id: "str-w1-h2", habit: "Pack gym bag", example: "Prepare clothes, shoes, water, towel" }, { id: "str-w1-h3", habit: "Etiquette champ", example: "Clean/organize equipment after use" }] },
            { week: 2, focus: "Form Focus", habits: [{ id: "str-w2-h1", habit: "5-min mobility warm-up", example: "Dynamic stretches before workout" }, { id: "str-w2-h2", habit: "Record exercises/weights", example: "Log sets, reps, weights" }, { id: "str-w2-h3", habit: "Check form in mirror", example: "Monitor technique during sets" }, { id: "str-w2-h4", habit: "Mindful Moment", example: "2 min mindful breathing pre/post workout" }] },
            { week: 3, focus: "Nutrition Basics", habits: [{ id: "str-w3-h1", habit: "Track daily protein", example: "Log protein at each meal" }, { id: "str-w3-h2", habit: "Drink water", example: "Track intake, min 8 glasses" }, { id: "str-w3-h3", habit: "Eat pre/post workout", example: "Time meals around training" }] },
            { week: 4, focus: "Recovery & Consistency", habits: [{ id: "str-w4-h1", habit: "Get 7+ hours sleep", example: "Prioritize consistent sleep schedule" }, { id: "str-w4-h2", habit: "10-min daily stretch", example: "Focus on tight areas" }, { id: "str-w4-h3", habit: "Rate muscle soreness (1-5)", example: "1=None, 3=Noticeable, 5=Severe. Note in journal." }] },
            { week: 5, focus: "Progressive Overload", habits: [{ id: "str-w5-h1", habit: "Understand & Follow Program", example: "Review next day's plan. Trust the process, avoid random workouts." }, { id: "str-w5-h2", habit: "Track weight increases", example: "Log weights for main lifts" }, { id: "str-w5-h3", habit: "Rate workout intensity (RPE)", example: "Use RPE 1-10 scale (1=Easy, 10=Max effort). Ask coach if unsure." }] },
            { week: 6, focus: "Mind-Muscle", habits: [{ id: "str-w6-h1", habit: "Practice breathing", example: "Breathe out on exertion" }, { id: "str-w6-h2", habit: "Focus on contraction", example: "Feel target muscle working" }, { id: "str-w6-h3", habit: "Maintain form always", example: "No form breakdown when tired" }] },
            { week: 7, focus: "Consistency", habits: [{ id: "str-w7-h1", habit: "Hit daily step goal", example: "Aim for 7,000-10,000 steps or your personal goal" }, { id: "str-w7-h2", habit: "Complete all exercises", example: "No skipping exercises" }, { id: "str-w7-h3", habit: "Follow meal timing", example: "Eat at scheduled times" }] },
            { week: 8, focus: "Mastery", habits: [{ id: "str-w8-h1", habit: "Complete full protocol", example: "Warmup, workout, cooldown" }, { id: "str-w8-h2", habit: "Meet nutrition targets", example: "Hit protein, water, timing" }, { id: "str-w8-h3", habit: "Log all metrics", example: "Record weights, sets, reps, RPE" }] }
        ]
    },
    hybrid: {
        title: "Functional Training Track", weeks: [
            { week: 1, focus: "Movement Foundations", habits: [{ id: "hyb-w1-h1", habit: "Practice air squats", example: "Practice 3 sets of 10-15 perfect air squats daily" }, { id: "hyb-w1-h2", habit: "Hold plank", example: "Accumulate 2 min total daily" }, { id: "hyb-w1-h3", habit: "Mobility routine", example: "10-min joint work daily" }] },
            { week: 2, focus: "Workout Basics", habits: [{ id: "hyb-w2-h1", habit: "Complete WOD/Rest", example: "Follow schedule or active recovery" }, { id: "hyb-w2-h2", habit: "Record scores", example: "Log time/reps/weights" }, { id: "hyb-w2-h3", habit: "Practice scaling", example: "Write down scaled version first" }] },
            { week: 3, focus: "Movement Skills", habits: [{ id: "hyb-w3-h1", habit: "Daily skill work", example: "10min pull-up/Oly drill" }, { id: "hyb-w3-h2", habit: "Complete MetCon", example: "Short metabolic conditioning" }, { id: "hyb-w3-h3", habit: "Work on weakness", example: "10min practice on a challenging move. Ask a coach for ideas if unsure." }] },
            { week: 4, focus: "Intensity & Recovery", habits: [{ id: "hyb-w4-h1", habit: "Rate workout intensity (RPE)", example: "Use RPE 1-10 scale (1=Easy, 10=Max effort). Ask coach if unsure." }, { id: "hyb-w4-h2", habit: "Track HR recovery", example: "Note HR drop 1-min post-WOD" }, { id: "hyb-w4-h3", habit: "Complete cooldown", example: "5-10 min light cardio/stretch" }] },
            { week: 5, focus: "Performance Nutrition", habits: [{ id: "hyb-w5-h1", habit: "Time meals", example: "Eat 2hrs pre, <1hr post WOD" }, { id: "hyb-w5-h2", habit: "Track macros", example: "Log P/C/F daily" }, { id: "hyb-w5-h3", habit: "Follow hydration", example: "Water + electrolytes around WODs" }] },
            { week: 6, focus: "Benchmark Progress", habits: [{ id: "hyb-w6-h1", habit: "Record benchmarks", example: "Log scores for named WODs" }, { id: "hyb-w6-h2", habit: "Track key lifts", example: "Note weights for main lifts" }, { id: "hyb-w6-h3", habit: "Measure intensity", example: "Rate sessions by RPE/HR" }] },
            { week: 7, focus: "Advanced Skills", habits: [{ id: "hyb-w7-h1", habit: "Oly lift drills (foundational)", example: "Practice PVC pipe drills for clean/snatch or light weight if coached" }, { id: "hyb-w7-h2", habit: "Gymnastics skill progressions", example: "Practice foundational progressions (e.g., hollow holds, ring rows, box jump basics)" }, { id: "hyb-w7-h3", habit: "Accessory work", example: "Core, mobility, weakness focus" }] },
            { week: 8, focus: "Performance Focus", habits: [{ id: "hyb-w8-h1", habit: "Full WOD warmup", example: "Movement prep, skills, build-up" }, { id: "hyb-w8-h2", habit: "Execute strategy", example: "Follow pacing/movement plan" }, { id: "hyb-w8-h3", habit: "Record all data", example: "Log scores, RPE, recovery" }] }
        ]
    },
    cardio: {
        title: "Group Fitness Track", weeks: [
            { week: 1, focus: "Class Preparation", habits: [{ id: "cls-w1-h1", habit: "Pack class bag", example: "Water, towel, clothes prepped" }, { id: "cls-w1-h2", habit: "Arrive 10 min early", example: "Set up before class" }, { id: "cls-w1-h3", habit: "Clean equipment", example: "Wipe down & organize station" }] },
            { week: 2, focus: "Class Foundations", habits: [{ id: "cls-w2-h1", habit: "Pre-class warmup", example: "5-min mobility before start" }, { id: "cls-w2-h2", habit: "Follow instructor", example: "Match cues/movements" }, { id: "cls-w2-h3", habit: "Track intensity (RPE)", example: "Use RPE 1-10 scale (1=Easy, 10=Max effort). Listen to your body." }] },
            { week: 3, focus: "Movement Mastery", habits: [{ id: "cls-w3-h1", habit: "Practice form", example: "Focus on technique" }, { id: "cls-w3-h2", habit: "Use modifications", example: "Adjust moves to your level" }, { id: "cls-w3-h3", habit: "Record energy levels", example: "Note energy pre/during/post" }] },
            { week: 4, focus: "Class Intensity", habits: [{ id: "cls-w4-h1", habit: "Maintain form", example: "Keep technique under fatigue" }, { id: "cls-w4-h2", habit: "Monitor HR zones", example: "Stay in target ranges" }, { id: "cls-w4-h3", habit: "Track water intake", example: "Hydrate before/during/after" }] },
            { week: 5, focus: "Personal Progress", habits: [{ id: "cls-w5-h1", habit: "Try new mod", example: "Attempt harder version" }, { id: "cls-w5-h2", habit: "Meet intensity targets", example: "Hit prescribed effort" }, { id: "cls-w5-h3", habit: "Record metrics", example: "Track weights/reps/time" }, { id: "cls-w5-h4", habit: "Note Non-Scale Victory", example: "Record one NSV (e.g., more energy, better mood, clothes fit better)" }] },
            { week: 6, focus: "Class Engagement", habits: [{ id: "cls-w6-h1", habit: "Meet someone new", example: "Learn classmate's name/goal" }, { id: "cls-w6-h2", habit: "Stay for cooldown", example: "Complete all stretches" }, { id: "cls-w6-h3", habit: "Max effort", example: "Push to appropriate intensity" }] },
            { week: 7, focus: "Advanced Progress", habits: [{ id: "cls-w7-h1", habit: "Advanced moves", example: "Try full exercise versions" }, { id: "cls-w7-h2", habit: "Form under fatigue", example: "Keep technique late in class" }, { id: "cls-w7-h3", habit: "Track improvements", example: "Note progress in key moves" }] },
            { week: 8, focus: "Class Mastery", habits: [{ id: "cls-w8-h1", habit: "Lead by example", example: "Show form, help beginner" }, { id: "cls-w8-h2", habit: "Share milestones", example: "Document/share 1 improvement" }, { id: "cls-w8-h3", habit: "Record achievements", example: "Log PRs and wins" }] }
        ]
    }
} as const;
