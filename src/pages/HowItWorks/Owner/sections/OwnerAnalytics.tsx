import React from 'react';
import MockupContainer from '../../../../components/ui/HowItWorks/MockUpContainer';
import { OWNER_ANALYTICS_HIGHLIGHTS } from '../config/OwnerHowItWorksConfig';

export const OwnerAnalytics: React.FC = () => {
  return (
    <section className="py-20 bg-brand-warmBg border-b border-orange-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-emerald-700 font-extrabold text-xs tracking-widest uppercase bg-emerald-100 px-4 py-1.5 rounded-full inline-block">
            STEP 5 • PERFORMANCE ANALYTICS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mt-4 font-heading">
            Grow Your Business.
          </h2>
          <p className="text-gray-600 mt-3 text-base sm:text-lg leading-relaxed">
            Access operational analytics based on historical data to track subscription retention, demand trends, and savings.
          </p>
        </div>

        {/* 4 Highlight Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {OWNER_ANALYTICS_HIGHLIGHTS.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-3xl border border-gray-100 shadow-card hover:shadow-hover transition flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-gray-500 uppercase">
                    {item.title}
                  </span>
                  <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs">
                    <i className={item.icon} aria-hidden="true" />
                  </div>
                </div>
                <div className="text-3xl font-extrabold font-heading text-gray-900">
                  {item.value}
                </div>
                <p className="text-xs text-gray-500 mt-1">{item.sub}</p>
              </div>

              <div className="mt-4 pt-3 border-t border-gray-100 flex items-center gap-1.5 text-xs font-bold text-emerald-600">
                <i className="fa-solid fa-arrow-trend-up" aria-hidden="true" />
                <span>{item.trend}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Analytics Dashboard Mockup */}
        <MockupContainer type="desktop" title="fleximeal.in/partner/analytics" badge="Partner Insights">
          <div className="grid lg:grid-cols-12 gap-6">
            {/* Left: Simulated Visual Chart */}
            <div className="lg:col-span-8 bg-white p-6 rounded-2xl border border-gray-100 shadow-xs">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h4 className="font-heading font-bold text-base text-gray-900">
                    Weekly Demand vs Cooking Accuracy
                  </h4>
                  <p className="text-xs text-gray-500">
                    Target Meals Prepared vs Actual Students Served
                  </p>
                </div>
                <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                  98.2% Cooking Precision
                </span>
              </div>

              {/* Simulated Bar Chart Graphic */}
              <div className="space-y-4 pt-2">
                {[
                  { day: 'Mon', target: 82, actual: 80, prep: '82 meals' },
                  { day: 'Tue', target: 85, actual: 84, prep: '85 meals' },
                  { day: 'Wed', target: 90, actual: 89, prep: '90 meals' },
                  { day: 'Thu', target: 84, actual: 84, prep: '84 meals' },
                  { day: 'Fri', target: 76, actual: 75, prep: '76 meals' },
                  { day: 'Sat', target: 65, actual: 64, prep: '65 meals' },
                ].map((item) => (
                  <div key={item.day} className="flex items-center gap-3 text-xs">
                    <span className="w-8 font-bold text-gray-500">{item.day}</span>
                    <div className="flex-1 bg-gray-100 rounded-full h-4 overflow-hidden relative flex">
                      <div
                        className="bg-emerald-600 h-full rounded-l-full"
                        style={{ width: `${(item.actual / 100) * 100}%` }}
                      />
                      <div
                        className="bg-emerald-300 h-full"
                        style={{ width: `${((item.target - item.actual) / 100) * 100}%` }}
                      />
                    </div>
                    <span className="font-mono font-bold text-gray-800 w-20 text-right">
                      {item.actual} / {item.target}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-sm bg-emerald-600 inline-block" />
                    <span>Actual Served</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-sm bg-emerald-300 inline-block" />
                    <span>Target Cooked</span>
                  </div>
                </div>
                <span className="font-semibold text-emerald-700">Near Zero Surplus</span>
              </div>
            </div>

            {/* Right: Operational Insights */}
            <div className="lg:col-span-4 space-y-4">
              <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-xs">
                <h4 className="font-bold text-sm text-gray-900 font-heading mb-3">
                  Top Kitchen Insights
                </h4>
                <div className="space-y-3 text-xs">
                  <div className="p-2.5 rounded-xl bg-orange-50 border border-orange-100 text-gray-800">
                    <span className="font-bold text-brand-saffron block">Most Popular Dish</span>
                    <p className="text-gray-600 mt-0.5">Paneer Butter Masala (118 orders this week)</p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-100 text-gray-800">
                    <span className="font-bold text-emerald-700 block">Peak Skip Day</span>
                    <p className="text-gray-600 mt-0.5">Friday Dinner (28 students traveling home)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MockupContainer>
      </div>
    </section>
  );
};

export default OwnerAnalytics;
