import React from 'react';

export interface WorkflowStepCardProps {
  step: number | string;
  title: string;
  description: string;
  icon?: string;
  badge?: string;
  variant?: 'default' | 'student' | 'owner' | 'success' | 'warning';
  extraContent?: React.ReactNode;
  className?: string;
}

export const WorkflowStepCard: React.FC<WorkflowStepCardProps> = ({
  step,
  title,
  description,
  icon,
  badge,
  variant = 'default',
  extraContent,
  className = '',
}) => {
  const getStepBg = () => {
    switch (variant) {
      case 'student':
        return 'bg-brand-tomato text-white';
      case 'owner':
        return 'bg-emerald-700 text-white';
      case 'success':
        return 'bg-emerald-600 text-white';
      case 'warning':
        return 'bg-brand-saffron text-white';
      default:
        return 'bg-gray-900 text-white';
    }
  };

  return (
    <div
      className={`bg-white rounded-3xl p-6 sm:p-7 border border-orange-100/80 shadow-card hover:shadow-hover transition duration-300 flex flex-col justify-between relative group ${className}`}
    >
      <div>
        <div className="flex items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-3">
            <span
              className={`w-9 h-9 rounded-2xl flex items-center justify-center font-heading font-extrabold text-sm shadow-sm ${getStepBg()}`}
            >
              {step}
            </span>
            {icon && (
              <div className="w-9 h-9 rounded-2xl bg-orange-50 text-brand-tomato flex items-center justify-center text-sm">
                <i className={icon} aria-hidden="true" />
              </div>
            )}
          </div>
          {badge && (
            <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-orange-100 text-brand-saffron">
              {badge}
            </span>
          )}
        </div>

        <h3 className="text-xl font-bold font-heading text-gray-900 mb-2">
          {title}
        </h3>
        <p className="text-sm text-gray-600 leading-relaxed">{description}</p>

        {extraContent && <div className="mt-4">{extraContent}</div>}
      </div>
    </div>
  );
};

export default WorkflowStepCard;
