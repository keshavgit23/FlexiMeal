import React, { useMemo, useState } from 'react';
import ExploreSearch from '../../../components/ui/Search/Search.tsx';
import MessCard from '../ui-elements/MessCard/MessCard.tsx';
import type { Mess } from '../ui-elements/MessCard/MessCard.tsx';

interface FilterOption {
  id: string;
  label: string;
  activeClass: string;
  icon?: React.ReactNode;
}

const MESSES_DATA: Mess[] = [
  {
    id: '1',
    name: "Maa's Kitchen",
    cuisine: 'North Indian & Homestyle Thali',
    rating: 4.8,
    distance: '0.8 km from Campus',
    startingPrice: 65,
    isPureVeg: true,
    todaysSpecial: 'Paneer Butter Masala + Roti + Dal Tadka + Rice',
    image:
      'https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '2',
    name: 'Annapurna Mess',
    cuisine: 'South Indian & Special Meals',
    rating: 4.7,
    distance: '1.2 km away',
    startingPrice: 55,
    isPureVeg: true,
    todaysSpecial: 'Special Masala Dosa & Steamed Idli Combo',
    image:
      'https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '3',
    name: 'Royal Malwa Thali',
    cuisine: 'Central Indian & Rajasthani',
    rating: 4.9,
    distance: '0.5 km away',
    startingPrice: 75,
    isPureVeg: true,
    todaysSpecial: 'Dal Baati Churma + Shahi Paneer',
    image:
      'https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=800&auto=format&fit=crop',
  },
];

const FILTERS_DATA: FilterOption[] = [
  {
    id: 'all',
    label: 'All Messes',
    activeClass: 'bg-[#DC2626] text-white',
  },
  {
    id: 'pure-veg',
    label: 'Pure Veg',
    activeClass: 'bg-emerald-600 text-white',
    icon: (
      <i
        className="fa-solid fa-leaf text-emerald-500"
        aria-hidden="true"
      />
    ),
  },
  {
    id: 'non-veg',
    label: 'Veg & Non-Veg',
    activeClass: 'bg-red-800 text-white',
  },
  {
    id: 'payg',
    label: 'Pay-As-You-Go Available',
    activeClass: 'bg-[#FF6B00] text-white',
  },
];

export const ExploreHero: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const filteredMesses = useMemo(() => {
    return MESSES_DATA.filter((mess) => {
      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        query === '' ||
        mess.name.toLowerCase().includes(query) ||
        mess.todaysSpecial.toLowerCase().includes(query) ||
        mess.cuisine.toLowerCase().includes(query);

      if (!matchesSearch) return false;

      if (selectedFilter === 'pure-veg') {
        return mess.isPureVeg;
      }
      if (selectedFilter === 'non-veg') {
        return !mess.isPureVeg;
      }
      if (selectedFilter === 'payg') {
        return mess.startingPrice > 0;
      }

      return true;
    });
  }, [searchQuery, selectedFilter]);

  return (
    <section
      id="campus-mess-explore-section"
      className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      {/* Header with Title and Search Input */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <span
            id="explore-badge"
            className="text-[#DC2626] font-extrabold text-xs tracking-widest uppercase bg-red-50 px-3 py-1 rounded-md"
          >
            CAMPUS MESS DISCOVERY
          </span>
          <h1
            id="explore-heading"
            className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2 font-heading"
          >
            Find food that feels like home.
          </h1>
          <p id="explore-description" className="text-gray-600 text-sm mt-1">
            Explore verified messes near your college campus or hostel.
          </p>
        </div>

        {/* Search Component */}
        <ExploreSearch value={searchQuery} onChange={setSearchQuery} />
      </div>

      {/* Filter Pills */}
      <div
        id="explore-filter-pills"
        className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 text-xs font-semibold scrollbar-none"
      >
        {FILTERS_DATA.map((filter) => {
          const isActive = selectedFilter === filter.id;
          return (
            <button
              key={filter.id}
              id={`filter-pill-${filter.id}`}
              type="button"
              onClick={() => setSelectedFilter(filter.id)}
              className={`px-4 py-2 rounded-xl transition whitespace-nowrap flex items-center gap-1.5 cursor-pointer ${isActive
                  ? filter.activeClass
                  : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
                }`}
            >
              {filter.icon && <span>{filter.icon}</span>}
              <span>{filter.label}</span>
            </button>
          );
        })}
      </div>

      {/* Mess Cards Grid */}
      {filteredMesses.length > 0 ? (
        <div
          id="explore-messes-grid"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredMesses.map((mess) => (
            <MessCard key={mess.id} mess={mess} />
          ))}
        </div>
      ) : (
        <div
          id="explore-no-results"
          className="text-center py-16 bg-white rounded-3xl border border-gray-100 p-8"
        >
          <p className="text-base font-bold text-gray-900">
            No messes found matching your criteria
          </p>
          <p className="text-xs text-gray-500 mt-1">
            Try adjusting your search query or switching to "All Messes".
          </p>
          <button
            type="button"
            onClick={() => {
              setSearchQuery('');
              setSelectedFilter('all');
            }}
            className="mt-4 px-4 py-2 rounded-xl bg-gray-900 text-white text-xs font-bold hover:bg-[#DC2626] transition cursor-pointer"
          >
            Reset Filters
          </button>
        </div>
      )}
    </section>
  );
};

export default ExploreHero;
