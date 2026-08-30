import React from "react";
import { Link } from 'react-router-dom';
import StudentHero from './sections/StudentHero';
import StudentDiscover from './sections/StudentDiscover';
import StudentChooseModel from './sections/StudentChooseModel';
import StudentMonthlyLoop from './sections/StudentMonthlyLoop';
import StudentPaygLoop from './sections/StudentPayLoop';
import StudentHistory from './sections/StudentHistory';

export const StudentHowItWorks: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-warmBg text-brand-charcoal">
      {/* 1. Student Hero */}
      <StudentHero />

      {/* 2. Discover Messes */}
      <StudentDiscover />

      {/* 3. Choose Dining Model */}
      <StudentChooseModel />

      {/* 4. Monthly Plan Loop */}
      <StudentMonthlyLoop />

      {/* 5. PAYG Loop */}
      <StudentPaygLoop />

      {/* 6. History & Attendance Tracking */}
      <StudentHistory />

      {/* 7. Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-tomato via-red-600 to-brand-saffron text-white text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-6">
          <span className="text-white font-extrabold text-xs tracking-widest uppercase bg-white/20 px-4 py-1.5 rounded-full inline-block backdrop-blur-md">
            START YOUR FLEXIBLE MEAL EXPERIENCE
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white">
            Ready to Eat on Your Own Terms?
          </h2>
          <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed font-light">
            Explore verified messes near your hostel, check live menus, or start a flexible monthly subscription today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              to="/explore-messes"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white !text-gray-900 font-extrabold text-sm shadow-2xl hover:bg-gray-100 transition transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
            >
              <span>Explore Campus Messes</span>
              <i className="fa-solid fa-arrow-right text-xs text-brand-tomato" aria-hidden="true" />
            </Link>
            <Link
              to="/for-messes"
              className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-black/30 hover:bg-black/40 text-white font-bold text-sm border border-white/30 transition flex items-center justify-center gap-2"
            >
              <i className="fa-solid fa-store" aria-hidden="true" />
              <span>How It Works For Mess Owners</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StudentHowItWorks;
