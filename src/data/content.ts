import type { Problem, Feature, Step, PrivacyPoint } from '../types';

export const problems: Problem[] = [
  {
    icon: 'error_outline',
    title: 'Late Realizations',
    description: 'You remember things only after they matter, causing unnecessary panic.',
  },
  {
    icon: 'timer_off',
    title: 'Sneaky Deadlines',
    description: 'Deadlines sneak up quietly while you\'re busy handling other fires.',
  },
  {
    icon: 'layers',
    title: 'Pile-ups',
    description: 'Bills, renewals, and follow-ups accumulate into an overwhelming mountain.',
  },
  {
    icon: 'psychology',
    title: 'Mental Load',
    description: 'Keeping mental notes creates a constant background hum of stress.',
  },
];

export const features: Feature[] = [
  {
    icon: 'graphic_eq',
    title: 'Conversational Capture',
    description: 'You can speak or type naturally. No forms. No setup. The app understands intent, timing, and urgency instantly.',
    highlight: 'Just say it once.',
  },
  {
    icon: 'visibility',
    title: 'Future Awareness',
    description: 'The app monitors upcoming obligations and patterns, surfacing issues early — not at the last minute.',
    highlight: 'See problems before they happen.',
  },
  {
    icon: 'notifications_active',
    title: 'Smart Reminders',
    description: 'Reminders adapt to you. They escalate if ignored and respect your context. No spam, no unnecessary noise.',
    highlight: 'Not dumb notifications.',
  },
  {
    icon: 'newspaper',
    title: 'Daily Brief',
    description: 'Each day, get a simple digest: what\'s coming, what needs attention, and what can safely wait. No digging.',
    highlight: 'One calm summary.',
  },
];

export const steps: Step[] = [
  {
    number: 1,
    title: 'Tell it anything',
    description: 'Tasks, thoughts, plans, obligations. Just dump it all in.',
  },
  {
    number: 2,
    title: 'It organizes quietly',
    description: 'No rules. No manual sorting. The AI structures your chaos.',
  },
  {
    number: 3,
    title: 'You stay ahead',
    description: 'Less anxiety. Fewer surprises. You\'re finally in control.',
  },
];

export const privacyPoints: PrivacyPoint[] = [
  { text: 'No ads' },
  { text: 'No selling personal data' },
  { text: 'Transparent memory controls' },
  { text: 'You decide what\'s remembered' },
];