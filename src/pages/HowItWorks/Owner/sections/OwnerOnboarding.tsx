import React from 'react';
import WorkflowStepCard from '../../../../components/ui/HowItWorks/WorkflowStepCard';
import { OWNER_ONBOARDING_STEPS } from '../config/OwnerHowItWorksConfig';

export const OwnerOnboarding: React.FC = () => {
  return (
    <section className="py-20 bg-brand-warmBg border-b border-orange-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-emerald-700 font-extrabold text-xs tracking-widest uppercase bg-emerald-100 px-4 py-1.5 rounded-full inline-block">
            STEP 1 • PARTNER ONBOARDING
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mt-4 font-heading">
            Join the Marketplace.
          </h2>
          <p className="text-gray-600 mt-3 text-base sm:text-lg leading-relaxed">
            Register your mess and set up your digital profile in minutes.
          </p>
        </div>

        {/* 3 Step Onboarding Flow */}
        <div className="grid md:grid-cols-3 gap-8">
          {OWNER_ONBOARDING_STEPS.map((step) => (
            <WorkflowStepCard key={step.step} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OwnerOnboarding;
