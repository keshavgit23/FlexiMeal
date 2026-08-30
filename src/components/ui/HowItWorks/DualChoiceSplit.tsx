import React from 'react';

export interface DualChoiceOption {
    id: string;
    badge?: string;
    badgeVariant?: 'primary' | 'secondary' | 'highlight' | 'neutral';
    title: string;
    subtitle?: string;
    description: string;
    features: string[];
    icon?: string;
    actionText?: string;
    actionHref?: string;
    onAction?: () => void;
    isPopular?: boolean;
}

export interface DualChoiceSplitProps {
    options: DualChoiceOption[];
    className?: string;
}

export const DualChoiceSplit: React.FC<DualChoiceSplitProps> = ({
    options,
    className = '',
}) => {
    return (
        <div className={`grid md:grid-cols-2 gap-8 ${className}`}>
            {options.map((option) => {
                const isPopular = option.isPopular;

                return (
                    <div
                        key={option.id}
                        className={`rounded-3xl p-8 flex flex-col justify-between transition duration-300 relative ${isPopular
                            ? 'bg-gradient-to-b from-gray-900 to-gray-800 text-white border border-gray-700 shadow-2xl'
                            : 'bg-brand-accentCream border-2 border-orange-200/80 text-gray-900 shadow-card hover:shadow-hover'
                            }`}
                    >
                        {option.badge && (
                            <div
                                className={`absolute top-4 right-4 text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider ${isPopular
                                    ? 'bg-brand-tomato text-white'
                                    : 'bg-brand-saffron text-white'
                                    }`}
                            >
                                {option.badge}
                            </div>
                        )}

                        <div className='flex flex-col gap-3'>
                            {option.icon && (
                                <div
                                    className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl font-bold mb-6 ${isPopular
                                        ? 'bg-brand-tomato text-white'
                                        : 'bg-brand-saffron text-white'
                                        }`}
                                >
                                    <i className={option.icon} aria-hidden="true" />
                                </div>
                            )}

                            <h3
                                className={`text-2xl font-bold font-heading ${isPopular ? 'text-white' : 'text-gray-900'
                                    }`}
                            >
                                {option.title}
                            </h3>

                            {option.subtitle && (
                                <p
                                    className={`text-xs font-bold uppercase tracking-wider mt-1 ${isPopular ? 'text-amber-300' : 'text-brand-tomato'
                                        }`}
                                >
                                    {option.subtitle}
                                </p>
                            )}

                            <p
                                className={`text-sm mt-3 leading-relaxed ${isPopular ? 'text-gray-300' : 'text-gray-600'
                                    }`}
                            >
                                {option.description}
                            </p>

                            <ul
                                className={`mt-6 space-y-3 text-xs font-semibold ${isPopular ? 'text-gray-200' : 'text-gray-700'
                                    }`}
                            >
                                {option.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-2.5">
                                        <i
                                            className={`fa-solid fa-circle-check mt-0.5 text-sm ${isPopular ? 'text-amber-400' : 'text-emerald-600'
                                                }`}
                                            aria-hidden="true"
                                        />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {option.actionText && (
                            <div className="mt-8">
                                {option.actionHref ? (
                                    <a
                                        href={option.actionHref}
                                        className={`w-full py-3.5 px-6 rounded-xl font-extrabold text-xs transition flex items-center justify-center gap-2 block text-center text-white ${isPopular
                                                ? 'bg-gradient-to-r from-brand-tomato to-brand-saffron hover:opacity-95 shadow-md'
                                                : 'bg-gray-900 hover:bg-brand-saffron shadow-sm'
                                            }`}
                                    >
                                        <span>{option.actionText}</span>

                                        <i
                                            className="fa-solid fa-arrow-right text-[10px]"
                                            aria-hidden="true"
                                        />
                                    </a>
                                ) : (
                                    <button
                                        type="button"
                                        onClick={option.onAction}
                                        className={`w-full py-3.5 px-6 rounded-xl font-extrabold text-xs transition flex items-center justify-center gap-2 cursor-pointer text-white ${isPopular
                                                ? 'bg-gradient-to-r from-brand-tomato to-brand-saffron hover:opacity-95 shadow-md'
                                                : 'bg-gray-900 hover:bg-brand-saffron shadow-sm'
                                            }`}
                                    >
                                        <span>{option.actionText}</span>

                                        <i
                                            className="fa-solid fa-arrow-right text-[10px]"
                                            aria-hidden="true"
                                        />
                                    </button>
                                )}
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default DualChoiceSplit;
