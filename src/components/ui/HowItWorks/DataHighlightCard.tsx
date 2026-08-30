import React from 'react';

export interface DataHighlightCardProps {
  label: string;
  value: string | number;
  description?: string;
  icon?: string;
  variant?: 'default' | 'success' | 'warning' | 'primary' | 'secondary' | 'neutral';
  subBadge?: string;
  className?: string;
}

export const DataHighlightCard: React.FC<DataHighlightCardProps> = ({
  label,
  value,
  description,
  icon,
  variant = 'default',
  subBadge,
  className = '',
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'success':
        return {
          card: 'bg-emerald-50/80 border-emerald-200/80 text-emerald-950',
          value: 'text-emerald-700',
          iconBg: 'bg-emerald-100 text-emerald-700',
        };
      case 'primary':
        return {
          card: 'bg-red-50/80 border-red-200/80 text-gray-900',
          value: 'text-brand-tomato',
          iconBg: 'bg-red-100 text-brand-tomato',
        };
      case 'warning':
        return {
          card: 'bg-amber-50/80 border-amber-200/80 text-gray-900',
          value: 'text-brand-saffron',
          iconBg: 'bg-amber-100 text-brand-saffron',
        };
      case 'secondary':
        return {
          card: 'bg-purple-50/80 border-purple-200/80 text-gray-900',
          value: 'text-purple-700',
          iconBg: 'bg-purple-100 text-purple-700',
        };
      default:
        return {
          card: 'bg-white border-gray-100 text-gray-900',
          value: 'text-gray-900',
          iconBg: 'bg-orange-50 text-brand-saffron',
        };
    }
  };

  const styles = getVariantStyles();

  return (
    <div
      className={`rounded-3xl p-5 sm:p-6 border shadow-card hover:shadow-hover transition duration-300 flex flex-col justify-between ${styles.card} ${className}`}
    >
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
            {label}
          </span>
          {icon && (
            <div
              className={`w-9 h-9 rounded-2xl flex items-center justify-center text-sm shadow-sm ${styles.iconBg}`}
            >
              <i className={icon} aria-hidden="true" />
            </div>
          )}
        </div>

        <div className={`text-3xl sm:text-4xl font-extrabold font-heading ${styles.value}`}>
          {value}
        </div>
      </div>

      {(description || subBadge) && (
        <div className="mt-3 pt-3 border-t border-black/5 flex flex-wrap items-center justify-between gap-2 text-xs">
          {description && (
            <span className="text-gray-600 font-medium leading-tight">{description}</span>
          )}
          {subBadge && (
            <span className="font-extrabold px-2 py-0.5 rounded-full bg-white/80 border border-gray-200 text-[10px] text-gray-700">
              {subBadge}
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default DataHighlightCard;
