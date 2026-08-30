import React from 'react';
import { Link } from 'react-router-dom';
import OwnerHero from './sections/OwnerHero';
import OwnerOnboarding from './sections/OwnerOnboarding';
import OwnerMenuSetup from './sections/OwnerMenuSetup';
import OwnerDemandEngine from './sections/OwnerDemandEngine';
import OwnerDailyOps from './sections/OwnerDailyOps';
import OwnerAnalytics from './sections/OwnerAnalytics';

export const OwnerHowItWorks: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-warmBg text-brand-charcoal">
      {/* 1. Owner Hero */}
      <OwnerHero />

      {/* 2. Onboarding Flow */}
      <OwnerOnboarding />

      {/* 3. Menu Setup */}
      <OwnerMenuSetup />

      {/* 4. Demand Engine (Most Important Section) */}
      <OwnerDemandEngine />

      {/* 5. Daily Ops & Verification */}
      <OwnerDailyOps />

      {/* 6. Operational Analytics */}
      <OwnerAnalytics />

      {/* 7. Final Partner CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-800 via-emerald-700 to-teal-800 text-white text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-6">
          <span className="text-white font-extrabold text-xs tracking-widest uppercase bg-white/20 px-4 py-1.5 rounded-full inline-block backdrop-blur-md">
            BECOME A CERTIFIED MESS PARTNER
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white">
            Ready to Cook Smarter & Boost Your Revenue?
          </h2>
          <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed font-light">
            Join FlexiMeal today to gain advance student demand visibility, eliminate wasted food, and connect with hundreds of local campus diners.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              to="/explore-messes"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white !text-emerald-950 font-extrabold text-sm shadow-2xl hover:bg-gray-100 transition transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
            >
              <span>Explore Active Campus Messes</span>
              <i className="fa-solid fa-arrow-right text-xs text-emerald-700" aria-hidden="true" />
            </Link>
            <Link
              to="/for-students"
              className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-black/30 hover:bg-black/40 text-white font-bold text-sm border border-white/30 transition flex items-center justify-center gap-2"
            >
              <i className="fa-solid fa-user-graduate" aria-hidden="true" />
              <span>How It Works For Students</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OwnerHowItWorks;
