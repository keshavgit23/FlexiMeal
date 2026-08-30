import React from 'react';

export interface MockupContainerProps {
  type: 'mobile' | 'desktop';
  title?: string;
  children: React.ReactNode;
  className?: string;
  badge?: string;
}

export const MockupContainer: React.FC<MockupContainerProps> = ({
  type,
  title,
  children,
  className = '',
  badge,
}) => {
  if (type === 'mobile') {
    return (
      <div className={`relative mx-auto w-full max-w-[340px] sm:max-w-[380px] ${className}`}>
        {badge && (
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20 bg-brand-tomato text-white text-[10px] font-extrabold px-3 py-1 rounded-full shadow-md uppercase tracking-wider whitespace-nowrap">
            {badge}
          </div>
        )}
        <div className="relative rounded-[40px] p-3 bg-gray-900 shadow-2xl border-4 border-gray-800">
          {/* Top Speaker & Camera Notch */}
          <div className="relative bg-brand-warmBg rounded-[32px] overflow-hidden border border-orange-100 flex flex-col min-h-[520px]">
            <div className="bg-white/90 backdrop-blur-md px-5 pt-3 pb-2 flex items-center justify-between border-b border-gray-100 text-[11px] text-gray-500 font-semibold select-none">
              <span>9:41</span>
              <div className="w-20 h-4 bg-gray-900 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-gray-700 ml-auto mr-2" />
              </div>
              <div className="flex items-center gap-1.5 text-[10px]">
                <i className="fa-solid fa-signal" aria-hidden="true" />
                <i className="fa-solid fa-wifi" aria-hidden="true" />
                <i className="fa-solid fa-battery-full" aria-hidden="true" />
              </div>
            </div>

            {/* Viewport Content */}
            <div className="flex-1 p-4 overflow-y-auto">{children}</div>

            {/* Bottom Home Indicator */}
            <div className="py-2 flex justify-center bg-white border-t border-gray-100">
              <div className="w-28 h-1 bg-gray-300 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative w-full rounded-3xl overflow-hidden bg-white shadow-2xl border border-gray-200/80 ${className}`}>
      {/* Desktop Window Header */}
      <div className="bg-gray-900 px-4 py-3 flex items-center justify-between border-b border-gray-800">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/90" />
          <div className="w-3 h-3 rounded-full bg-amber-500/90" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/90" />
        </div>
        <div className="flex items-center gap-2 px-4 py-1 rounded-lg bg-gray-800/90 border border-gray-700 text-xs text-gray-300 font-medium max-w-sm w-full justify-center">
          <i className="fa-solid fa-lock text-[10px] text-emerald-400" aria-hidden="true" />
          <span className="truncate">{title || 'fleximeal.in/dashboard'}</span>
        </div>
        {badge ? (
          <span className="text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-md bg-emerald-950 border border-emerald-700 text-emerald-300">
            {badge}
          </span>
        ) : (
          <div className="w-12" />
        )}
      </div>

      {/* Desktop Viewport */}
      <div className="p-5 sm:p-7 bg-brand-warmBg overflow-x-auto">{children}</div>
    </div>
  );
};

export default MockupContainer;
