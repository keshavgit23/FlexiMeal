import React from 'react';
import { Link } from 'react-router-dom';

export const OwnerHero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-900 via-gray-900 to-emerald-950 text-white py-16 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 border-b border-gray-800">
      {/* Background Subtle Accent Gradients */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        {/* Left Content */}
        <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-900/60 border border-emerald-700/60 text-xs font-bold uppercase tracking-wider text-emerald-300 backdrop-blur-md">
            <i className="fa-solid fa-store" aria-hidden="true" />
            <span>Mess Owner Partner Program</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading leading-tight tracking-tight text-white">
            Predict Demand.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300">
              Reduce Waste.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-gray-300 max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
            Get exact visibility into tomorrow's meal demand so you can prepare appropriately. Eliminate food wastage, lower raw material expenses, and capture on-demand student revenue.
          </p>

          {/* CTA Group */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
            <a
              href="#demand-engine"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm shadow-xl hover:shadow-emerald-600/20 hover:scale-[1.02] transition transform flex items-center justify-center gap-2"
            >
              <span>Explore Demand Engine</span>
              <i className="fa-solid fa-arrow-down text-xs" aria-hidden="true" />
            </a>

            <Link
              to="/for-students"
              className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 text-gray-200 font-bold text-sm transition flex items-center justify-center gap-2"
            >
              <i className="fa-solid fa-user-graduate text-brand-saffron" aria-hidden="true" />
              <span>Switch to Student View</span>
            </Link>
          </div>

          {/* Operational Proof Points */}
          <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-center lg:justify-start gap-5 text-xs text-gray-400 font-medium">
            <div className="flex items-center gap-1.5">
              <i className="fa-solid fa-circle-check text-emerald-400" aria-hidden="true" />
              <span>Prior-Night Headcount Visibility</span>
            </div>
            <div className="flex items-center gap-1.5">
              <i className="fa-solid fa-circle-check text-emerald-400" aria-hidden="true" />
              <span>Up to 25% Waste Reduction</span>
            </div>
            <div className="flex items-center gap-1.5">
              <i className="fa-solid fa-circle-check text-emerald-400" aria-hidden="true" />
              <span>Full Daily Menu Control</span>
            </div>
          </div>
        </div>

        {/* Right Visual: Owner Dashboard Preview */}
        <div className="lg:col-span-6">
          <div className="bg-white/10 backdrop-blur-xl p-6 rounded-3xl border border-white/20 shadow-2xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold text-xs">
                  <i className="fa-solid fa-gauge" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm text-white">
                    Maa's Kitchen Partner Hub
                  </h4>
                  <p className="text-[10px] text-emerald-300">
                    Live Operational Status • Tomorrow Lunch
                  </p>
                </div>
              </div>
              <span className="text-[10px] font-extrabold px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                Verified Partner
              </span>
            </div>

            {/* Quick Metrics Grid */}
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-black/40 p-3 rounded-2xl border border-white/10 text-center">
                <span className="text-[10px] text-gray-400 font-bold uppercase block">Subscribers</span>
                <span className="text-xl font-extrabold text-white font-heading">100</span>
              </div>
              <div className="bg-black/40 p-3 rounded-2xl border border-white/10 text-center">
                <span className="text-[10px] text-emerald-400 font-bold uppercase block">Confirmed</span>
                <span className="text-xl font-extrabold text-emerald-400 font-heading">76</span>
              </div>
              <div className="bg-emerald-950/80 p-3 rounded-2xl border border-emerald-600/50 text-center">
                <span className="text-[10px] text-amber-300 font-bold uppercase block">Cook Demand</span>
                <span className="text-xl font-extrabold text-amber-300 font-heading">84 Meals</span>
              </div>
            </div>

            {/* Kitchen Recommendation Alert */}
            <div className="bg-emerald-900/60 p-3.5 rounded-2xl border border-emerald-600/40 text-xs flex items-start gap-3 text-emerald-100">
              <i className="fa-solid fa-lightbulb text-amber-300 mt-0.5 text-sm" aria-hidden="true" />
              <div>
                <p className="font-bold text-white">Smart Kitchen Forecast:</p>
                <p className="text-[11px] text-emerald-200 mt-0.5 leading-relaxed">
                  Prepare ingredients for <strong>84 portions</strong> of Paneer Butter Masala and <strong>180 rotis</strong>. Avoid over-cooking by 16 portions!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OwnerHero;
