import React from 'react';
import { useNavigate, Link } from "react-router-dom";
interface TimelineItem {
  id: string;
  time: string;
  timeBadgeBg: string;
  title: string;
  description: string;
  ctaText: string;
  ctaTextColor: string;
  decorCircleBg: string;
  borderColor: string;
  ctaRoute: string;
}

const TIMELINE_CARDS: TimelineItem[] = [
  {
    id: 'lunch',
    time: '11:30 AM',
    timeBadgeBg: 'bg-orange-500',
    title: '"Hungry between classes?"',
    description: "Check today's lunch menu live on campus. Book a fresh homestyle thali on Pay-As-You-Go without monthly lock-ins.",
    ctaText: 'Explore Lunch Specials',
    ctaTextColor: 'text-brand-saffron text-[#FF6B00]',
    decorCircleBg: 'bg-orange-100',
    borderColor: 'border-orange-100/80',
    ctaRoute: "/explore-messes",

  },
  {
    id: 'dinner',
    time: '7:30 PM',
    timeBadgeBg: 'bg-brand-tomato bg-[#DC2626]',
    title: '"Dinner time approaching?"',
    description: 'Monthly subscriber? One click on "I\'ll be there" guarantees hot roti and dal tadka waiting for you after lectures.',
    ctaText: 'Mark Attendance',
    ctaTextColor: 'text-brand-tomato text-[#DC2626]',
    decorCircleBg: 'bg-red-100',
    borderColor: 'border-red-100/80',
    ctaRoute: "/for-students"
  },
  {
    id: 'next-day',
    time: '10:00 PM',
    timeBadgeBg: 'bg-purple-600',
    title: '"Going home tomorrow?"',
    description: 'Simply tap "Skip Meal" for tomorrow. Your mess owner doesn\'t waste food, and your meal credit is saved!',
    ctaText: 'Save Food & Money',
    ctaTextColor: 'text-purple-600',
    decorCircleBg: 'bg-purple-100',
    borderColor: 'border-purple-100/80',
    ctaRoute: "/for-messes"
  },
];

export const EmotionalHungerTimeline: React.FC = () => {
  const navigate = useNavigate();
  return (
    <section className="py-20 bg-brand-warmBg bg-[#FFFDF9]" id="emotional-hunger-timeline">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 text-center gap-4">
        <span className="text-brand-tomato text-[#DC2626] font-extrabold text-xs tracking-widest uppercase bg-red-100/80 px-4 py-1.5 rounded-full inline-block">
          EMOTIONAL HUNGER TIMELINE
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 mt-4 font-heading font-['Outfit',sans-serif]">
          When Hunger Hits, FlexiMeal Knows.
        </h2>
        <p className="text-gray-600 mt-6 text-center mx-auto py-4">
          Hunger doesn't follow a rigid schedule. Why should your mess subscription? FlexiMeal adapts seamlessly to your daily routine.
        </p>

        <div className="grid md:grid-cols-3 gap-18 mt-14">
          {TIMELINE_CARDS.map((card) => (
            <div
              key={card.id}
              className={`bg-white p-8 rounded-3xl shadow-card shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-hover hover:shadow-[0_20px_35px_-10px_rgba(220,38,38,0.15)] transition border ${card.borderColor} group text-left relative overflow-hidden cursor-pointer`}
            >
              {/* Decorative background circle */}
              <div
                className={`absolute -top-6 -right-6 w-24 h-24 ${card.decorCircleBg} rounded-full group-hover:scale-125 transition duration-300 pointer-events-none`}
              />

              <div className="relative z-10 py-4">
                <span className={`px-3 py-1 rounded-lg ${card.timeBadgeBg} text-white font-extrabold text-xs inline-block`}>
                  {card.time}
                </span>
                <div className="flex flex-col gap-3 mt-6">
                  <h3 className="text-2xl font-bold text-gray-900 mt-4 font-heading font-['Outfit',sans-serif]">
                    {card.title}
                  </h3>

                  <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                    {card.description}
                  </p>
                  <div
                    className={`mt-6 flex items-center justify-between text-xs font-bold ${card.ctaTextColor}`}
                  >
                    <Link
                      to={card.ctaRoute}
                      className="flex items-center gap-2"
                    >
                      <span>{card.ctaText}</span>

                      <i
                        className="fa-solid fa-arrow-right group-hover:translate-x-1 transition duration-200"
                        aria-hidden="true"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmotionalHungerTimeline;
