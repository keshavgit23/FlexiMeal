import React from 'react';
import MockupContainer from '../../../../components/ui/HowItWorks/MockUpContainer';
import { STUDENT_HISTORY_ITEMS } from '../config/StudentHowItWorksConfig';

export const StudentHistory: React.FC = () => {
  return (
    <section id="bookings-history" className="py-20 bg-brand-warmBg border-b border-orange-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-tomato font-extrabold text-xs tracking-widest uppercase bg-red-100/80 px-4 py-1.5 rounded-full inline-block">
            ATTENDANCE & CREDITS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mt-4 font-heading">
            Track Your Dining Habits.
          </h2>
          <p className="text-gray-600 mt-3 text-base sm:text-lg leading-relaxed">
            Access your complete meal history, wallet balances, and attendance records anytime.
          </p>
        </div>

        {/* Dashboard Mockup */}
        <MockupContainer type="desktop" title="fleximeal.in/student-dashboard/history" badge="Student Portal">
          <div className="grid lg:grid-cols-12 gap-6">
            {/* Left Summary Cards */}
            <div className="lg:col-span-4 space-y-4">
              {/* Wallet Summary */}
              <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-xs">
                <div className="flex items-center justify-between text-xs text-gray-500 font-bold uppercase">
                  <span>Flexi Wallet</span>
                  <i className="fa-solid fa-wallet text-brand-saffron text-base" aria-hidden="true" />
                </div>
                <div className="text-3xl font-extrabold font-heading text-gray-900 mt-2">
                  ₹1,240
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  6 rolled-over meal credits available
                </p>
              </div>

              {/* Monthly Plan Health */}
              <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-xs">
                <div className="flex items-center justify-between text-xs text-gray-500 font-bold uppercase">
                  <span>Active Subscription</span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                </div>
                <h4 className="font-bold text-sm text-gray-900 mt-2 font-heading">
                  Maa's Kitchen (Monthly Thali)
                </h4>
                <p className="text-xs text-emerald-700 font-semibold mt-1">
                  22 / 30 Meals Logged this Month
                </p>
                <div className="w-full bg-gray-100 rounded-full h-2 mt-3 overflow-hidden">
                  <div className="bg-emerald-600 h-2 rounded-full w-[73%]" />
                </div>
              </div>

              {/* Food Saved Pill */}
              <div className="bg-emerald-50 p-4 rounded-2xl border border-emerald-100 text-xs text-emerald-950">
                <div className="flex items-center gap-2 font-bold text-emerald-800">
                  <i className="fa-solid fa-leaf" aria-hidden="true" />
                  <span>Sustainability Impact</span>
                </div>
                <p className="mt-1 text-emerald-900">
                  By skipping 4 meals in advance, you prevented ~2.4 kg of food waste!
                </p>
              </div>
            </div>

            {/* Right Activity Table */}
            <div className="lg:col-span-8 bg-white p-5 sm:p-6 rounded-2xl border border-gray-100 shadow-xs">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-100">
                <h3 className="font-bold text-base text-gray-900 font-heading">
                  Recent Meal Attendance & Bookings
                </h3>
                <span className="text-xs font-bold text-gray-500">Live Log</span>
              </div>

              <div className="space-y-3">
                {STUDENT_HISTORY_ITEMS.map((item) => (
                  <div
                    key={item.id}
                    className="p-3.5 rounded-xl border border-gray-100 bg-gray-50/70 hover:bg-gray-50 flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[10px] font-bold text-gray-400">
                          {item.id}
                        </span>
                        <span className="font-bold text-xs text-gray-900">
                          {item.mess}
                        </span>
                        <span className="text-[10px] text-gray-500 font-medium">
                          • {item.date}
                        </span>
                      </div>
                      <p className="text-xs text-gray-700 font-medium mt-0.5">
                        {item.dish}
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-[10px] text-gray-500 font-medium hidden md:inline">
                        {item.planType}
                      </span>
                      <span
                        className={`text-[10px] font-extrabold px-2.5 py-1 rounded-full whitespace-nowrap ${
                          item.statusVariant === 'success'
                            ? 'bg-emerald-100 text-emerald-800'
                            : item.statusVariant === 'warning'
                            ? 'bg-amber-100 text-amber-800'
                            : 'bg-gray-200 text-gray-800'
                        }`}
                      >
                        {item.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </MockupContainer>
      </div>
    </section>
  );
};

export default StudentHistory;
