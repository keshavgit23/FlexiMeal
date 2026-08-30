import type { DualChoiceOption } from '../../../../components/ui/HowItWorks/DualChoiceSplit';
import type { WorkflowStepCardProps } from '../../../../components/ui/HowItWorks/WorkflowStepCard';

export interface PromptStateOption {
  status: 'YES' | 'NO' | 'PENDING';
  title: string;
  badge: string;
  badgeClass: string;
  description: string;
  icon: string;
  importantNote?: string;
}

export const STUDENT_DISCOVER_STEPS: WorkflowStepCardProps[] = [
  {
    step: 1,
    title: 'Register & Sign In',
    description:
      'Set up your student profile in seconds using your mobile number or campus email.',
    icon: 'fa-solid fa-user-plus',
    badge: 'Quick Setup',
    variant: 'student',
  },
  {
    step: 2,
    title: 'Explore Verified Messes',
    description:
      'Browse local messes around your campus. Check real-time menus, ratings, distances, and dietary preferences (Pure Veg / Non-Veg).',
    icon: 'fa-solid fa-compass',
    badge: 'Live Menus',
    variant: 'student',
  },
  {
    step: 3,
    title: 'Check Today & Tomorrow Specials',
    description:
      'Mess owners post menus in advance. Review exact dishes and nutritional details before deciding.',
    icon: 'fa-solid fa-utensils',
    badge: 'Transparency',
    variant: 'student',
  },
];

export const STUDENT_CHOOSE_OPTIONS: DualChoiceOption[] = [
  {
    id: 'monthly-plan',
    title: 'Monthly Subscription',
    subtitle: 'For Everyday Campus Living',
    badge: 'Most Flexible & Popular',
    isPopular: true,
    icon: 'fa-solid fa-calendar-check',
    description:
      'Enjoy guaranteed homestyle dining every day with complete freedom to skip days whenever your plans change.',
    features: [
      'Daily 1-click confirmation ("Will you eat tomorrow?")',
      'Skip individual meals without cancelling your subscription',
      'Rollover meal credits when you travel or dine out',
      'Up to 25% bulk cost savings compared to ad-hoc dining',
    ],
    actionText: 'View Monthly Subscription Workflow',
    actionHref: '#monthly-loop',
  },
  {
    id: 'pay-as-you-go',
    title: 'Pay-As-You-Go (PAYG)',
    subtitle: 'For On-Demand Flexibility',
    badge: 'Zero Commitment',
    isPopular: false,
    icon: 'fa-solid fa-bolt',
    description:
      'No monthly lock-ins. Browse active menus across campus, buy single meal tokens, and eat whenever hunger strikes.',
    features: [
      'Buy single meal passes on-demand',
      'Zero upfront monthly payment required',
      'Try different messes across campus every day',
      'Instant digital meal booking confirmation',
    ],
    actionText: 'Explore PAYG Workflow',
    actionHref: '#payg-loop',
  },
];

export const MONTHLY_PROMPT_STATES: PromptStateOption[] = [
  {
    status: 'YES',
    title: 'I’LL BE THERE',
    badge: 'Confirmed',
    badgeClass: 'bg-emerald-600 text-white',
    icon: 'fa-solid fa-circle-check',
    description:
      'Your meal is confirmed for tomorrow. The mess kitchen receives your portion requirement and prepares your fresh hot thali.',
    importantNote: 'Kitchen prepares exactly 1 portion for you.',
  },
  {
    status: 'NO',
    title: 'SKIP MEAL',
    badge: 'Skipped & Saved',
    badgeClass: 'bg-brand-tomato text-white',
    icon: 'fa-solid fa-circle-xmark',
    description:
      'Heading home or eating out? Simply tap NO by the cutoff time. The mess avoids cooking wasted food, and your meal credit is saved.',
    importantNote:
      'CRITICAL: Skipping a meal DOES NOT cancel your active subscription plan.',
  },
  {
    status: 'PENDING',
    title: 'AWAITING RESPONSE',
    badge: 'Prompt Active',
    badgeClass: 'bg-brand-saffron text-white',
    icon: 'fa-solid fa-clock',
    description:
      'You have not responded yet. FlexiMeal sends a friendly notification before the 8:00 PM cutoff so you never miss a meal confirmation.',
    importantNote: 'Response window closes at 8:00 PM.',
  },
];

export const STUDENT_PAYG_STEPS: WorkflowStepCardProps[] = [
  {
    step: 1,
    title: 'Select Live Meal',
    description:
      'Check today’s live menus or tomorrow’s posted specials across campus messes and choose the dish you crave.',
    icon: 'fa-solid fa-bowl-food',
    badge: 'Step 1',
    variant: 'warning',
  },
  {
    step: 2,
    title: 'Quick Checkout',
    description:
      'Pay securely per meal via UPI, card, or your Flexi Wallet with zero convenience fee.',
    icon: 'fa-solid fa-credit-card',
    badge: 'Step 2',
    variant: 'warning',
  },
  {
    step: 3,
    title: 'Receive Booking Pass',
    description:
      'Get an instant digital meal pass with booking ID. Show up at the mess counter during serving hours and enjoy!',
    icon: 'fa-solid fa-ticket',
    badge: 'Step 3',
    variant: 'warning',
  },
];

export const STUDENT_HISTORY_ITEMS = [
  {
    id: 'FLX-9941',
    date: 'Tomorrow, Lunch',
    mess: "Maa's Kitchen",
    dish: 'Paneer Butter Masala Thali',
    planType: 'Monthly Subscription',
    status: 'Confirmed',
    statusVariant: 'success',
  },
  {
    id: 'FLX-9882',
    date: 'Today, Dinner',
    mess: "Maa's Kitchen",
    dish: 'Dal Tadka & Steamed Rice Thali',
    planType: 'Monthly Subscription',
    status: 'Attended',
    statusVariant: 'success',
  },
  {
    id: 'FLX-9810',
    date: 'Yesterday, Lunch',
    mess: "Maa's Kitchen",
    dish: 'Special Rajasthani Gatta Curry',
    planType: 'Monthly Subscription',
    status: 'Skipped (Credit Saved)',
    statusVariant: 'warning',
  },
  {
    id: 'FLX-9755',
    date: '3 Days Ago, Dinner',
    mess: 'Royal Malwa Thali',
    dish: 'Dal Baati Churma Special',
    planType: 'Pay-As-You-Go',
    status: 'Completed',
    statusVariant: 'neutral',
  },
];
