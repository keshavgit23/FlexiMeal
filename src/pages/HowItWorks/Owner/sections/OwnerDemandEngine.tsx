import React from 'react';
import DataHighlightCard from '../../../../components/ui/HowItWorks/DataHighlightCard';
import { OWNER_DEMAND_METRICS } from '../config/OwnerHowItWorksConfig';

export const OwnerDemandEngine: React.FC = () => {
  return (
    <section id="demand-engine" className="py-20 bg-brand-warmBg border-b border-orange-100/60 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-emerald-700 font-extrabold text-xs tracking-widest uppercase bg-emerald-100 px-4 py-1.5 rounded-full inline-block">
            STEP 3 • CORE DEMAND ENGINE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mt-4 font-heading">
            Know Exactly What to Cook.
          </h2>
          <p className="text-gray-600 mt-3 text-base sm:text-lg leading-relaxed">
            Answer the central question every mess owner faces every night:{' '}
            <strong className="text-gray-900">"How much food should I prepare tomorrow?"</strong>
          </p>
        </div>

        {/* Demand Calculation Logic Formula Card */}
        <div className="bg-gray-900 text-white rounded-3xl p-6 sm:p-8 mb-12 shadow-xl border border-gray-800 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-[10px] font-bold tracking-wider uppercase text-emerald-400 bg-emerald-950 px-3 py-1 rounded-md border border-emerald-800">
                Predictive Formula
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-white mt-2">
                Confirmed Subscribers + Est. Pending + PAYG Passes = Target Prep
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 mt-1 max-w-2xl">
                Instead of blindly cooking for all 100 subscribers and throwing away 20+ untouched thalis, the Demand Engine synthesizes actual student responses by 8:00 PM.
              </p>
            </div>

            <div className="bg-emerald-900/60 p-4 rounded-2xl border border-emerald-600/40 text-center flex-shrink-0 min-w-[200px]">
              <span className="text-[10px] font-bold uppercase text-emerald-300 block">Tomorrow Cooking Target</span>
              <span className="text-3xl sm:text-4xl font-extrabold font-heading text-amber-300">84 Meals</span>
              <span className="text-[10px] text-emerald-300 block mt-0.5">Zero Excess Waste</span>
            </div>
          </div>
        </div>

        {/* 6 Key Demand Metrics Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {OWNER_DEMAND_METRICS.map((metric, idx) => (
            <DataHighlightCard key={idx} {...metric} />
          ))}
        </div>

        {/* Illustrative UI Disclaimer */}
        <p className="text-center text-xs text-gray-400 font-medium">
          * Note: The numbers above represent an illustrative simulation for a 100-subscriber campus mess.
        </p>
      </div>
    </section>
  );
};

export default OwnerDemandEngine;
