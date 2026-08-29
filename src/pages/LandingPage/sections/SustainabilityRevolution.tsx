import React from 'react';

export const SustainabilityRevolution: React.FC = () => {
  return (
    <section className="py-20 bg-gray-900 text-white relative" id="sustainability-revolution">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 gap-8">
          <span className="text-emerald-400 font-extrabold text-xs tracking-widest uppercase bg-emerald-950 px-4 py-1.5 rounded-full border border-emerald-800 inline-block">
            SUSTAINABILITY REVOLUTION
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold mt-4 font-heading font-['Outfit',sans-serif]">
            Turn Food Waste Into Smart Planning.
          </h2>
          <p className="text-gray-400 mt-3 text-base">
            By connecting student demand directly to mess kitchens before cooking starts, FlexiMeal drastically reduces commercial food waste.
          </p>
        </div>

        {/* Before / After Grid */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Traditional Mess System */}
          <div className="bg-gray-800/80 p-8  pt-16 rounded-3xl border border-red-500/30 relative">
            <span className="absolute top-4 left-1/2 -translate-x-1/2 md:left-auto md:right-4 md:translate-x-0 bg-red-500/20 text-red-400 border border-red-500/40 text-xs font-bold px-3 py-1 rounded-full">
              Old Way
            </span>
            <h3 className="text-xl font-bold text-red-400 font-heading font-['Outfit',sans-serif]">
              Traditional Mess System
            </h3>
            <div className="mt-6 space-y-4">
              <div className="flex items-center gap-4 bg-gray-900/80 p-3 rounded-xl">
                <span className="text-2xl">👨‍🎓</span>
                <div>
                  <p className="text-xs text-gray-400">Subscribers</p>
                  <p className="text-sm font-bold">100 Fixed Students</p>
                </div>
              </div>
              <div className="text-center text-gray-500">
                <i className="fa-solid fa-arrow-down" aria-hidden="true" />
              </div>
              <div className="flex items-center gap-4 bg-gray-900/80 p-3 rounded-xl">
                <span className="text-2xl">🥘</span>
                <div>
                  <p className="text-xs text-gray-400">Kitchen Preparation</p>
                  <p className="text-sm font-bold">Cooks blindly for 100 people</p>
                </div>
              </div>
              <div className="text-center text-gray-500">
                <i className="fa-solid fa-arrow-down" aria-hidden="true" />
              </div>
              <div className="flex items-center gap-4 bg-red-950/60 p-3 rounded-xl border border-red-900">
                <span className="text-2xl">🗑️</span>
                <div>
                  <p className="text-xs text-red-400 font-bold">Result</p>
                  <p className="text-sm font-bold text-red-200">18–25 Meals Dumped Daily</p>
                </div>
              </div>
            </div>
          </div>

          {/* FlexiMeal Smart System */}
          <div className="bg-gray-800/80 p-8 pt-16  rounded-3xl border border-emerald-500/40 relative shadow-2xl">
            <span className="absolute top-4 left-1/2 -translate-x-1/2 md:left-auto md:right-4 md:translate-x-0 bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 text-xs font-bold px-3 py-1 rounded-full">
              FlexiMeal Way
            </span>
            <h3 className="text-xl font-bold text-emerald-400 font-heading font-['Outfit',sans-serif]">
              FlexiMeal Smart Attendance
            </h3>
            <div className="mt-6 space-y-4">
              <div className="flex items-center gap-4 bg-gray-900/80 p-3 rounded-xl">
                <span className="text-2xl">📱</span>
                <div>
                  <p className="text-xs text-gray-400">Advance Check-in</p>
                  <p className="text-sm font-bold">84 Confirmed via App</p>
                </div>
              </div>
              <div className="text-center text-emerald-500">
                <i className="fa-solid fa-arrow-down" aria-hidden="true" />
              </div>
              <div className="flex items-center gap-4 bg-gray-900/80 p-3 rounded-xl">
                <span className="text-2xl">🎯</span>
                <div>
                  <p className="text-xs text-gray-400">Predictive Cooking</p>
                  <p className="text-sm font-bold text-emerald-300">Cooks exactly ~84 Meals</p>
                </div>
              </div>
              <div className="text-center text-emerald-500">
                <i className="fa-solid fa-arrow-down" aria-hidden="true" />
              </div>
              <div className="flex items-center gap-4 bg-emerald-950/60 p-3 rounded-xl border border-emerald-800">
                <span className="text-2xl">🌱</span>
                <div>
                  <p className="text-xs text-emerald-400 font-bold">Result</p>
                  <p className="text-sm font-bold text-emerald-200 font-heading font-['Outfit',sans-serif]">
                    Near Zero Food Wastage!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SustainabilityRevolution;
