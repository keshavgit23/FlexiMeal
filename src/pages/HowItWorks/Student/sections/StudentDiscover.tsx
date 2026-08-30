import React from 'react';
import MockupContainer from '../../../../components/ui/HowItWorks/MockUpContainer';
import WorkflowStepCard from '../../../../components/ui/HowItWorks/WorkflowStepCard';
import { STUDENT_DISCOVER_STEPS } from '../config/StudentHowItWorksConfig';

export const StudentDiscover: React.FC = () => {
  return (
    <section className="py-20 bg-brand-warmBg border-b border-orange-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-tomato font-extrabold text-xs tracking-widest uppercase bg-red-100/80 px-4 py-1.5 rounded-full inline-block">
            STEP 1 • MESS DISCOVERY
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mt-4 font-heading">
            Find Your Next Meal.
          </h2>
          <p className="text-gray-600 mt-3 text-base sm:text-lg leading-relaxed">
            Browse available messes, view menus, and check meal availability before committing.
          </p>
        </div>

        {/* Grid: Workflow steps & Mobile Mockup */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left: Workflow Step Cards */}
          <div className="lg:col-span-7 space-y-6">
            {STUDENT_DISCOVER_STEPS.map((step) => (
              <WorkflowStepCard key={step.step} {...step} />
            ))}
          </div>

          {/* Right: Phone App Mockup */}
          <div className="lg:col-span-5">
            <MockupContainer type="mobile" badge="Discovery Screen">
              <div className="space-y-3">
                {/* Search Bar in Mockup */}
                <div className="bg-white p-2.5 rounded-2xl border border-gray-200 flex items-center gap-2 shadow-xs">
                  <i className="fa-solid fa-magnifying-glass text-gray-400 text-xs ml-1" aria-hidden="true" />
                  <span className="text-xs text-gray-400 font-medium">Search messes, dishes, paneer...</span>
                </div>

                {/* Filter Chips */}
                <div className="flex gap-1.5 overflow-x-auto pb-1 text-[10px] font-bold">
                  <span className="px-2.5 py-1 rounded-lg bg-brand-tomato text-white whitespace-nowrap">All Messes</span>
                  <span className="px-2.5 py-1 rounded-lg bg-white border border-gray-200 text-gray-700 whitespace-nowrap">Pure Veg</span>
                  <span className="px-2.5 py-1 rounded-lg bg-white border border-gray-200 text-gray-700 whitespace-nowrap">PAYG</span>
                </div>

                {/* Discovery Card 1 */}
                <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-xs">
                  <div className="relative h-28 bg-gray-200">
                    <img
                      src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=600&auto=format&fit=crop"
                      alt="Maa's Kitchen Thali"
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute top-2 left-2 bg-emerald-600 text-white text-[9px] font-extrabold px-2 py-0.5 rounded-full">
                      Pure Veg
                    </span>
                    <span className="absolute top-2 right-2 bg-white text-gray-900 text-[9px] font-extrabold px-1.5 py-0.5 rounded-md shadow-xs">
                      ★ 4.8
                    </span>
                  </div>
                  <div className="p-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-bold text-xs text-gray-900 font-heading">Maa's Kitchen</h4>
                        <p className="text-[10px] text-gray-500">North Indian Homestyle • 0.8 km</p>
                      </div>
                      <span className="text-xs font-extrabold text-brand-tomato">₹65</span>
                    </div>
                    <div className="mt-2 bg-orange-50 p-2 rounded-xl border border-orange-100/60 text-[10px]">
                      <span className="font-bold text-brand-saffron block">Today's Special:</span>
                      <p className="text-gray-700 font-medium truncate">Paneer Butter Masala + Roti + Dal</p>
                    </div>
                  </div>
                </div>

                {/* Discovery Card 2 */}
                <div className="bg-white rounded-2xl border border-gray-100 p-3 shadow-xs flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-11 h-11 rounded-xl bg-orange-100 overflow-hidden flex-shrink-0">
                      <img
                        src="https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?q=80&w=300&auto=format&fit=crop"
                        alt="Annapurna Mess"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-xs text-gray-900 font-heading">Annapurna Mess</h4>
                      <p className="text-[10px] text-gray-500">South Indian Special • ★ 4.7</p>
                    </div>
                  </div>
                  <span className="text-xs font-extrabold text-gray-900">₹55</span>
                </div>
              </div>
            </MockupContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentDiscover;
