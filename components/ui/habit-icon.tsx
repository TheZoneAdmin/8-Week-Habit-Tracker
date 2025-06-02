import React from 'react';
import {
  Activity,
  ArrowUpCircle,
  Award,
  Backpack,
  Baggage,
  BarChart,
  Barbell,
  Battery,
  CalendarCheck,
  CheckCircle,
  CheckSquare,
  Clipboard,
  ClipboardCheck, // Assuming clipboard-data might be this or ClipboardList
  ClipboardList,
  Clock,
  Database,
  Droplet,
  Droplets, // Lucide has Droplet, not Droplets. Will use Droplet for 'droplets'
  Dumbbell,
  Egg,
  FileText,
  Flame,
  Footprints,
  Gauge,
  StretchVertical as Gymnastics, // No direct 'gymnastics' icon, using a related one
  Heart,
  HeartPulse,
  ListChecks,
  ListTodo,
  Lungs,
  Moon,
  Move as Movement, // 'movement' likely maps to 'Move'
  Pencil,
  PieChart,
  Puzzle,
  Scale,
  Scan,
  Share2 as Share, // 'share' likely maps to 'Share2'
  Shield,
  ShieldCheck,
  SlidersHorizontal as Sliders, // 'sliders' likely maps to 'SlidersHorizontal'
  Sparkles,
  SprayCan,
  Footprints as Squat, // No direct 'squat' icon, using Footprints as a placeholder, can be updated
  Star,
  Brain as Strategy, // No direct 'strategy' icon, using Brain as a placeholder
  StretchHorizontal as Stretch, // 'stretch' likely maps to 'StretchHorizontal'
  PersonStanding as Stretching, // 'stretching' likely maps to 'PersonStanding'
  Sunset,
  Target,
  Timer,
  TrendingUp,
  Trophy,
  UserCheck,
  Users,
  Utensils,
  Wind,
  Zap,
  HelpCircle // Default fallback icon
} from 'lucide-react';

interface HabitIconProps {
  iconName?: string;
  className?: string;
}

const iconComponents: Record<string, React.ElementType> = {
  activity: Activity,
  'arrow-up-circle': ArrowUpCircle,
  award: Award,
  backpack: Backpack,
  baggage: Baggage,
  'bar-chart': BarChart,
  barbell: Barbell,
  battery: Battery,
  'calendar-check': CalendarCheck,
  'check-circle': CheckCircle,
  'check-square': CheckSquare,
  clipboard: Clipboard,
  'clipboard-data': ClipboardCheck, // Mapping to ClipboardCheck
  'clipboard-list': ClipboardList,
  clock: Clock,
  database: Database,
  droplet: Droplet,
  droplets: Droplet, // Mapping 'droplets' to Droplet
  dumbbell: Dumbbell,
  egg: Egg,
  'file-text': FileText,
  flame: Flame,
  footprints: Footprints,
  gauge: Gauge,
  gymnastics: Gymnastics, // Mapped to StretchVertical
  heart: Heart,
  'heart-pulse': HeartPulse,
  'list-checks': ListChecks,
  'list-todo': ListTodo,
  lungs: Lungs,
  moon: Moon,
  movement: Movement, // Mapped to Move
  pencil: Pencil,
  'pie-chart': PieChart,
  puzzle: Puzzle,
  scale: Scale,
  scan: Scan,
  share: Share, // Mapped to Share2
  shield: Shield,
  'shield-check': ShieldCheck,
  sliders: Sliders, // Mapped to SlidersHorizontal
  sparkles: Sparkles,
  'spray-can': SprayCan,
  squat: Squat, // Mapped to Footprints (placeholder)
  star: Star,
  strategy: Strategy, // Mapped to Brain (placeholder)
  stretch: Stretch, // Mapped to StretchHorizontal
  stretching: Stretching, // Mapped to PersonStanding
  sunset: Sunset,
  target: Target,
  timer: Timer,
  'trending-up': TrendingUp,
  trophy: Trophy,
  'user-check': UserCheck,
  users: Users,
  utensils: Utensils,
  wind: Wind,
  zap: Zap,
};

export const HabitIcon: React.FC<HabitIconProps> = ({ iconName, className }) => {
  const IconComponent = iconName ? iconComponents[iconName.toLowerCase()] : HelpCircle;
  const EffectiveIconComponent = IconComponent || HelpCircle; // Fallback if iconName is not in map

  return <EffectiveIconComponent className={className || 'w-5 h-5'} />;
};
