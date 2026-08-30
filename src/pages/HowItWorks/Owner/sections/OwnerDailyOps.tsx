import React from 'react';
import WorkflowStepCard from '../../../../components/ui/HowItWorks/WorkflowStepCard';
import { OWNER_DAILY_OPS_STEPS } from '../config/OwnerHowItWorksConfig';

export const OwnerDailyOps: React.FC = () => {
  return (
    <section className="bg-white border-b border-orange-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-emerald-700 font-extrabold text-xs tracking-widest uppercase bg-emerald-100 px-4 py-1.5 rounded-full inline-block">
            STEP 4 • DAILY OPERATIONS & VERIFICATION
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mt-4 font-heading">
            Verify & Serve.
          </h2>
          <p className="text-gray-600 mt-3 text-base sm:text-lg leading-relaxed">
            Seamlessly manage students as they arrive during meal serving windows.
          </p>
        </div>

        {/* 3 Step Visual: Intent -> Arrival -> Attendance Recorded */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {OWNER_DAILY_OPS_STEPS.map((step) => (
            <WorkflowStepCard key={step.step} {...step} />
          ))}
        </div>

        {/* Critical Distinction Banner: Intent vs Actual Attendance */}
        <div className="bg-emerald-50 border-2 border-emerald-200 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-5 shadow-sm">
          <div className="w-12 h-12 rounded-2xl bg-emerald-700 text-white flex items-center justify-center text-xl font-bold flex-shrink-0">
            <i className="fa-solid fa-clipboard-check" aria-hidden="true" />
          </div>
          <div>
            <h4 className="font-heading font-extrabold text-lg text-gray-900">
              Clear Separation: Advance Intent vs Physical Attendance
            </h4>
            <p className="text-sm text-gray-700 mt-1 leading-relaxed">
              Student advance confirmation (saying <strong>"YES"</strong> the night before) informs your <strong>cooking quantities</strong>. When the student walks in, staff records their <strong>physical attendance</strong> separately. This dual-verification architecture protects both the kitchen and the student from inaccurate billing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OwnerDailyOps;
