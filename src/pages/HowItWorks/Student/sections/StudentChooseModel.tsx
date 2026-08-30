import React from 'react';
import DualChoiceSplit from '../../../../components/ui/HowItWorks/DualChoiceSplit';
import { STUDENT_CHOOSE_OPTIONS } from '../config/StudentHowItWorksConfig';

export const StudentChooseModel: React.FC = () => {
  return (
    <section id="choose-model" className="bg-white border-b border-orange-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-saffron font-extrabold text-xs tracking-widest uppercase bg-amber-100/80 px-4 py-1.5 rounded-full inline-block">
            STEP 2 • CHOOSE YOUR DINING MODEL
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mt-4 font-heading">
            Two Ways to Eat.
          </h2>
          <p className="text-gray-600 mt-3 text-base sm:text-lg leading-relaxed">
            Select a Monthly Plan for regular dining or Pay-As-You-Go for occasional needs.
          </p>
        </div>

        {/* Dual Choice Cards */}
        <DualChoiceSplit options={STUDENT_CHOOSE_OPTIONS} />
      </div>
    </section>
  );
};

export default StudentChooseModel;
