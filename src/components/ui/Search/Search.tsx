import React from 'react';

export interface ExploreSearchProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export const ExploreSearch: React.FC<ExploreSearchProps> = ({
  value,
  onChange,
  placeholder = 'Search messes, dishes, or paneer...',
}) => {
  return (
    <div id="explore-search-container" className="relative max-w-md w-full">
      <i
        id="explore-search-icon"
        className="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
        aria-hidden="true"
      />
      <input
        id="explore-search-input"
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-11 pr-4 py-3 rounded-2xl border border-gray-200 focus:border-[#DC2626] focus:ring-0 focus:outline-none focus:shadow-none text-sm bg-white text-gray-900 placeholder:text-gray-400"
      />
    </div>
  );
};

export default ExploreSearch;
