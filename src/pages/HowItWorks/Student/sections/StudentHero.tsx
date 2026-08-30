import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


export const StudentHero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800 text-white py-16 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 border-b border-gray-800">
      {/* Background Subtle Accent Gradients */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-tomato/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-brand-saffron/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        {/* Left Content (Desktop 50%) */}
        <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold uppercase tracking-wider text-amber-300">
            <i className="fa-solid fa-graduation-cap text-brand-tomato" aria-hidden="true" />
            <span>Student Dining Guide</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading leading-tight tracking-tight text-white">
            Your Meals,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-brand-saffron">
              Your Schedule.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-gray-300 max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
            Choose between monthly subscriptions with skip options or pay-as-you-go meals at your favorite local messes. Never pay for food you don't eat.
          </p>

          {/* CTA Group */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
            <Link
              to="/explore-messes"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-brand-tomato to-brand-saffron text-white font-extrabold text-sm shadow-xl hover:shadow-red-500/20 hover:scale-[1.02] transition transform flex items-center justify-center gap-2"
            >
              <span>Explore Messes</span>
              <i className="fa-solid fa-arrow-right text-xs" aria-hidden="true" />
            </Link>

            <Link
              to="/for-messes"
              className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 text-gray-200 font-bold text-sm transition flex items-center justify-center gap-2"
            >
              <i className="fa-solid fa-store text-amber-400" aria-hidden="true" />
              <span>Are you a Mess Owner?</span>
            </Link>
          </div>

          {/* Core Highlights */}
          <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-center lg:justify-start gap-5 text-xs text-gray-400 font-medium">
            <div className="flex items-center gap-1.5">
              <i className="fa-solid fa-check text-emerald-400" aria-hidden="true" />
              <span>Zero Monthly Lock-ins</span>
            </div>
            <div className="flex items-center gap-1.5">
              <i className="fa-solid fa-check text-emerald-400" aria-hidden="true" />
              <span>1-Tap Skip Reminders</span>
            </div>
            <div className="flex items-center gap-1.5">
              <i className="fa-solid fa-check text-emerald-400" aria-hidden="true" />
              <span>Rollover Meal Credits</span>
            </div>
          </div>
        </div>

        {/* Right Split Visual (Desktop 50% / Mobile Stacked) */}
        <div className="lg:col-span-6">
          <div className="grid sm:grid-cols-2 gap-4 max-w-lg mx-auto lg:max-w-none">
            {/* Split Concept 1: Monthly Calendar / Subscription */}
            <div className="bg-white/10 backdrop-blur-xl p-5 rounded-3xl border border-white/20 shadow-2xl flex flex-col justify-between group hover:border-amber-400/50 transition">
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-2xl bg-brand-tomato text-white flex items-center justify-center text-lg font-bold">
                    <i className="fa-solid fa-calendar-check" aria-hidden="true" />
                  </div>
                  <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    Monthly Plan
                  </span>
                </div>

                <h3 className="font-heading font-bold text-lg text-white">
                  Daily Attendance Prompt
                </h3>
                <p className="text-xs text-gray-300 mt-1 leading-relaxed">
                  "Will you eat tomorrow?" One click confirms your warm thali or skips for rollover credit.
                </p>

                {/* Interactive Simulated Pill */}
                <div className="mt-4 p-3 rounded-2xl bg-black/40 border border-white/10 space-y-2">
                  <div className="text-[11px] text-gray-300 flex justify-between font-semibold">
                    <span>Tomorrow's Lunch</span>
                    <span className="text-emerald-400 font-bold">● Confirmed</span>
                  </div>
                  <div className="grid grid-cols-2 gap-1.5 text-[10px] font-bold">
                    <div className="bg-emerald-600 text-white py-1.5 rounded-lg text-center">
                      YES (Eat)
                    </div>
                    <div className="bg-white/10 text-gray-400 py-1.5 rounded-lg text-center">
                      NO (Skip)
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-white/10 text-[11px] text-amber-300 font-semibold flex items-center gap-1.5">
                <i className="fa-solid fa-shield-halved" aria-hidden="true" />
                <span>Never lose subscription money</span>
              </div>
            </div>

            {/* Split Concept 2: Single Meal Ticket / PAYG */}
            <div className="bg-white/10 backdrop-blur-xl p-5 rounded-3xl border border-white/20 shadow-2xl flex flex-col justify-between group hover:border-brand-saffron/50 transition">
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-2xl bg-brand-saffron text-white flex items-center justify-center text-lg font-bold">
                    <i className="fa-solid fa-bolt" aria-hidden="true" />
                  </div>
                  <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full bg-orange-500/20 text-orange-300 border border-orange-500/30">
                    Pay-As-You-Go
                  </span>
                </div>

                <h3 className="font-heading font-bold text-lg text-white">
                  Instant Meal Booking
                </h3>
                <p className="text-xs text-gray-300 mt-1 leading-relaxed">
                  Cravings for special paneer or biryani? Book single meals directly from any verified mess.
                </p>

                {/* Simulated Digital Ticket */}
                <div className="mt-4 p-3 rounded-2xl bg-black/40 border border-white/10 space-y-1.5">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-gray-300 font-medium">Paneer Thali Pass</span>
                    <span className="text-amber-400 font-extrabold">₹75</span>
                  </div>
                  <div className="flex items-center justify-between text-[10px] text-gray-400">
                    <span>Maa's Kitchen</span>
                    <span className="font-mono text-emerald-400">#FLX-PASS</span>
                  </div>
                  <div className="w-full bg-brand-saffron/20 border border-brand-saffron/40 text-amber-200 py-1 rounded-lg text-center text-[10px] font-extrabold">
                    Ready For Counter Pickup
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-white/10 text-[11px] text-orange-300 font-semibold flex items-center gap-1.5">
                <i className="fa-solid fa-utensils" aria-hidden="true" />
                <span>Eat at any mess on campus</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentHero;
