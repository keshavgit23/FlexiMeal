import React from 'react';
import WorkflowStepCard from '../../../../components/ui/HowItWorks/WorkflowStepCard';
import { STUDENT_PAYG_STEPS } from '../config/StudentHowItWorksConfig';

export const StudentPaygLoop: React.FC = () => {
  return (
    <section id="payg-loop" className="bg-white border-b border-orange-100/60 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-saffron font-extrabold text-xs tracking-widest uppercase bg-amber-100/80 px-4 py-1.5 rounded-full inline-block">
            ON-DEMAND DINING WORKFLOW
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mt-4 font-heading">
            Pay-As-You-Go: Eat On Demand.
          </h2>
          <p className="text-gray-600 mt-3 text-base sm:text-lg leading-relaxed">
            Perfect for schedule-driven meal needs without a monthly commitment.
          </p>
        </div>

        {/* 3 Step Workflow Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {STUDENT_PAYG_STEPS.map((step) => (
            <WorkflowStepCard key={step.step} {...step} />
          ))}
        </div>

        {/* Digital Pass Preview Banner */}
        <div className="bg-brand-accentCream border-2 border-orange-200/80 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-brand-saffron text-white flex items-center justify-center text-xl font-bold flex-shrink-0">
              <i className="fa-solid fa-ticket" aria-hidden="true" />
            </div>
            <div>
              <h4 className="font-heading font-extrabold text-lg text-gray-900">
                Instant Booking Confirmation
              </h4>
              <p className="text-xs sm:text-sm text-gray-600 mt-0.5">
                Every Pay-As-You-Go booking generates an immediate verifiable booking code for smooth counter verification.
              </p>
            </div>
          </div>

          <div className="bg-white px-5 py-3 rounded-2xl border border-orange-200 text-center flex-shrink-0 shadow-xs">
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider block">
              Sample Pass ID
            </span>
            <span className="text-sm font-mono font-extrabold text-brand-tomato">
              #FLX-882193
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentPaygLoop;
