import type { DataHighlightCardProps } from '../../../../components/ui/HowItWorks/DataHighlightCard';
import type { WorkflowStepCardProps } from '../../../../components/ui/HowItWorks/WorkflowStepCard';

export const OWNER_ONBOARDING_STEPS: WorkflowStepCardProps[] = [
  {
    step: 1,
    title: 'Partner Application',
    description:
      'Submit your mess details, kitchen location, hygienic certifications, and homestyle dining specialties.',
    icon: 'fa-solid fa-file-signature',
    badge: 'Step 1',
    variant: 'owner',
  },
  {
    step: 2,
    title: 'Verification & Approval',
    description:
      'FlexiMeal campus operations verifies your mess standards, seating capacity, and onboarding agreements.',
    icon: 'fa-solid fa-shield-halved',
    badge: 'Step 2',
    variant: 'owner',
  },
  {
    step: 3,
    title: 'Active Mess Profile',
    description:
      'Your digital mess listing goes live to hundreds of campus students with full menu publishing and booking tools.',
    icon: 'fa-solid fa-store',
    badge: 'Step 3',
    variant: 'owner',
  },
];

export const OWNER_DEMAND_METRICS: DataHighlightCardProps[] = [
  {
    label: 'Active Subscribers',
    value: '100',
    description: 'Total registered monthly students',
    icon: 'fa-solid fa-users',
    variant: 'default',
    subBadge: 'Base Plan',
  },
  {
    label: 'Confirmed by 8 PM',
    value: '76',
    description: 'Students clicked "I\'LL BE THERE"',
    icon: 'fa-solid fa-circle-check',
    variant: 'success',
    subBadge: 'High Intent',
  },
  {
    label: 'Skipped in Advance',
    value: '16',
    description: 'Students clicked "SKIP MEAL"',
    icon: 'fa-solid fa-circle-xmark',
    variant: 'primary',
    subBadge: 'Zero Waste',
  },
  {
    label: 'No Response / Pending',
    value: '8',
    description: 'Awaiting student confirmation',
    icon: 'fa-solid fa-clock',
    variant: 'warning',
    subBadge: 'Estimated ~4',
  },
  {
    label: 'PAYG Bookings',
    value: '+8',
    description: 'Ad-hoc student meal passes booked',
    icon: 'fa-solid fa-bolt',
    variant: 'warning',
    subBadge: 'Extra Revenue',
  },
  {
    label: 'Expected Kitchen Demand',
    value: '84',
    description: '76 Confirmed + 4 Est. + 8 PAYG',
    icon: 'fa-solid fa-utensils',
    variant: 'success',
    subBadge: 'Target Prep: 84 Meals',
  },
];

export const OWNER_DAILY_OPS_STEPS: WorkflowStepCardProps[] = [
  {
    step: 1,
    title: 'Student Confirmation (Intent)',
    description:
      'By 8:00 PM the evening before, students state whether they intend to eat. This gives you exact cooking volumes before purchasing raw ingredients.',
    icon: 'fa-solid fa-mobile-screen-button',
    badge: 'Prior Evening',
    variant: 'owner',
  },
  {
    step: 2,
    title: 'Student Arrival at Mess',
    description:
      'Students arrive at your dining hall during the lunch or dinner service window and show their booking pass.',
    icon: 'fa-solid fa-person-walking-arrow-right',
    badge: 'Service Hours',
    variant: 'owner',
  },
  {
    step: 3,
    title: 'Attendance Recorded',
    description:
      'Mess staff records physical presence separately from advance intent. This guarantees 100% accurate tracking and settlement.',
    icon: 'fa-solid fa-clipboard-check',
    badge: 'Final Settlement',
    variant: 'success',
  },
];

export const OWNER_ANALYTICS_HIGHLIGHTS = [
  {
    title: 'Monthly Food Waste Reduced',
    value: '18.4%',
    sub: 'Saved 160+ unconsumed thalis from disposal',
    icon: 'fa-solid fa-recycle',
    trend: '+4.2% vs last month',
    trendPositive: true,
  },
  {
    title: 'Ingredient Cost Savings',
    value: '₹14,200',
    sub: 'Avoided over-purchasing vegetables and dairy',
    icon: 'fa-solid fa-coins',
    trend: '+12% margin boost',
    trendPositive: true,
  },
  {
    title: 'PAYG Extra Revenue',
    value: '₹22,600',
    sub: 'From on-demand non-subscriber walk-ins',
    icon: 'fa-solid fa-chart-line',
    trend: '312 single passes',
    trendPositive: true,
  },
  {
    title: 'Student Satisfaction Rate',
    value: '94.6%',
    sub: 'Based on timely hot food serving',
    icon: 'fa-solid fa-face-smile',
    trend: '4.8 / 5.0 rating',
    trendPositive: true,
  },
];
