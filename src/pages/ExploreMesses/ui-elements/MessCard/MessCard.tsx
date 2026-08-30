import React from 'react';

export interface Mess {
    id: string | number;
    name: string;
    cuisine: string;
    image: string;
    distance: string;
    rating: number;
    isPureVeg: boolean;
    todaysSpecial: string;
    startingPrice: number;
}

export interface MessCardProps {
    mess: Mess;
    onViewMenu?: (mess: Mess) => void;
}

export const MessCard: React.FC<MessCardProps> = ({ mess, onViewMenu }) => {
    return (
        <div
            id={`mess-card-${mess.id}`}
            className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_35px_-10px_rgba(220,38,38,0.15)] transition duration-300 flex flex-col justify-between group"
        >
            <div>
                {/* Image Header */}
                <div className="relative h-52 overflow-hidden">
                    <img
                        src={mess.image}
                        alt={mess.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                    <div className="absolute top-3 left-3 flex gap-2">
                        {mess.isPureVeg && (
                            <span
                                id={`mess-pure-veg-badge-${mess.id}`}
                                className="bg-emerald-600 text-white text-[10px] font-extrabold px-2.5 py-1 rounded-full flex items-center gap-1"
                            >
                                <i className="fa-solid fa-leaf" aria-hidden="true" /> Pure Veg
                            </span>
                        )}
                        <span
                            id={`mess-distance-badge-${mess.id}`}
                            className="bg-black/60 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1"
                        >
                            <i
                                className="fa-solid fa-location-dot text-red-400"
                                aria-hidden="true"
                            />{' '}
                            {mess.distance}
                        </span>
                    </div>

                    <div
                        id={`mess-rating-badge-${mess.id}`}
                        className="absolute top-3 right-3 bg-white text-gray-900 font-extrabold text-xs px-2.5 py-1 rounded-full shadow-md flex items-center gap-1"
                    >
                        <i
                            className="fa-solid fa-star text-amber-500"
                            aria-hidden="true"
                        />
                        <span>{mess.rating}</span>
                    </div>

                    <div className="absolute bottom-3 left-3 text-white">
                        <h3 className="text-xl font-bold font-heading">{mess.name}</h3>
                        <p className="text-xs text-gray-200">{mess.cuisine}</p>
                    </div>
                </div>

                {/* Mess Details Body */}
                <div className="p-6 space-y-4">
                    <div className="bg-orange-50/80 p-3 rounded-2xl border border-orange-100">
                        <span className="text-[10px] font-extrabold text-[#FF6B00] uppercase tracking-wider block">
                            Today's Special Menu
                        </span>
                        <p className="text-xs font-bold text-gray-900 mt-0.5">
                            {mess.todaysSpecial}
                        </p>
                    </div>

                    <div className="flex items-center justify-between text-xs text-gray-600">
                        <span>Starting from:</span>
                        <span className="text-base font-extrabold text-gray-900">
                            ₹{mess.startingPrice}{' '}
                            <span className="text-xs font-normal text-gray-500">/ meal</span>
                        </span>
                    </div>
                </div>
            </div>

            {/* Footer CTA */}
            <div className="p-6 pt-0 flex items-center gap-2">
                <button
                    id={`mess-view-menu-btn-${mess.id}`}
                    type="button"
                    onClick={() => onViewMenu?.(mess)}
                    className="flex-1 py-3 rounded-xl bg-gray-900 hover:bg-[#DC2626] text-white font-extrabold text-xs transition flex items-center justify-center gap-2 cursor-pointer"
                >
                    <span>View Menu & Plans</span>
                    <i
                        className="fa-solid fa-chevron-right text-[10px]"
                        aria-hidden="true"
                    />
                </button>
            </div>
        </div>
    );
};

export default MessCard;
