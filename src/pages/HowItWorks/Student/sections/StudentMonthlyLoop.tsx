import React from 'react';
import { MONTHLY_PROMPT_STATES } from '../config/StudentHowItWorksConfig';

export const StudentMonthlyLoop: React.FC = () => {
  return (
    <section id="monthly-loop" className="py-20 bg-brand-warmBg border-b border-orange-100/60 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-tomato font-extrabold text-xs tracking-widest uppercase bg-red-100/80 px-4 py-1.5 rounded-full inline-block">
            THE SMART MONTHLY SUBSCRIPTION LOOP
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mt-4 font-heading">
            The Monthly Plan: Ultimate Flexibility.
          </h2>
          <p className="text-gray-600 mt-3 text-base sm:text-lg leading-relaxed">
            Get a daily prompt asking <strong>"Will you eat tomorrow?"</strong>. Respond YES or NO.
          </p>
        </div>

        {/* Workflow Overview Banner */}
        <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white rounded-3xl p-6 sm:p-8 mb-12 shadow-xl border border-gray-700">
          <div className="grid md:grid-cols-3 gap-6 text-center md:text-left items-center">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-brand-tomato text-white flex items-center justify-center text-xl font-bold flex-shrink-0">
                <i className="fa-solid fa-bell" aria-hidden="true" />
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-wider text-amber-300 font-bold">Step 1 • Notification</p>
                <h4 className="text-base font-bold text-white font-heading">Daily Prompt at 7:30 PM</h4>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-brand-saffron text-white flex items-center justify-center text-xl font-bold flex-shrink-0">
                <i className="fa-solid fa-hand-pointer" aria-hidden="true" />
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-wider text-amber-300 font-bold">Step 2 • Your Choice</p>
                <h4 className="text-base font-bold text-white font-heading">Tap YES, NO, or Pending</h4>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center text-xl font-bold flex-shrink-0">
                <i className="fa-solid fa-calendar-check" aria-hidden="true" />
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-wider text-amber-300 font-bold">Step 3 • Kitchen Action</p>
                <h4 className="text-base font-bold text-white font-heading">Meal Schedule Updated</h4>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Decision State Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {MONTHLY_PROMPT_STATES.map((state) => {
            const isNo = state.status === 'NO';
            const isYes = state.status === 'YES';

            return (
              <div
                key={state.status}
                className={`rounded-3xl p-7 border flex flex-col justify-between transition duration-300 ${
                  isYes
                    ? 'bg-emerald-50/70 border-emerald-200/90 shadow-card hover:shadow-hover'
                    : isNo
                    ? 'bg-red-50/70 border-red-200/90 shadow-card hover:shadow-hover'
                    : 'bg-white border-gray-200/90 shadow-card hover:shadow-hover'
                }`}
              >
                <div>
                  {/* Status Header */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider ${state.badgeClass}`}>
                      {state.badge}
                    </span>
                    <div
                      className={`w-10 h-10 rounded-2xl flex items-center justify-center text-lg ${
                        isYes
                          ? 'bg-emerald-600 text-white'
                          : isNo
                          ? 'bg-brand-tomato text-white'
                          : 'bg-brand-saffron text-white'
                      }`}
                    >
                      <i className={state.icon} aria-hidden="true" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold font-heading text-gray-900 mb-2">
                    Choice: {state.title}
                  </h3>

                  <p className="text-sm text-gray-600 leading-relaxed">
                    {state.description}
                  </p>
                </div>

                {state.importantNote && (
                  <div
                    className={`mt-6 p-3.5 rounded-2xl text-xs font-semibold leading-relaxed border ${
                      isNo
                        ? 'bg-red-100/80 border-red-200 text-red-950 font-bold'
                        : isYes
                        ? 'bg-emerald-100/80 border-emerald-200 text-emerald-950'
                        : 'bg-amber-100/80 border-amber-200 text-amber-950'
                    }`}
                  >
                    <div className="flex items-start gap-2">
                      <i className="fa-solid fa-circle-info mt-0.5" aria-hidden="true" />
                      <span>{state.importantNote}</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Important Rule Highlight Banner */}
        <div className="bg-amber-50 border-2 border-amber-200 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-5 shadow-sm">
          <div className="w-12 h-12 rounded-2xl bg-brand-saffron text-white flex items-center justify-center text-xl font-bold flex-shrink-0">
            <i className="fa-solid fa-triangle-exclamation" aria-hidden="true" />
          </div>
          <div>
            <h4 className="font-heading font-extrabold text-lg text-gray-900">
              Crucial Subscription Rule: No Cancellation on Skip
            </h4>
            <p className="text-sm text-gray-700 mt-1 leading-relaxed">
              When you choose <strong>NO (Skip Meal)</strong>, you are only skipping that single day's lunch or dinner. Your monthly subscription remains active and valid for all remaining days, while your skipped meal credit is preserved!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentMonthlyLoop;
