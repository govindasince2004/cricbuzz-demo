import React from 'react';
import type { MatchFilter } from '../../types';

interface MatchFiltersProps {
  filters: MatchFilter[];
  activeFilter: string;
  onFilterChange: (id: string) => void;
}

export const MatchFilters: React.FC<MatchFiltersProps> = ({ filters, activeFilter, onFilterChange }) => {
  return (
    <div className="flex items-center justify-center gap-x-1 bg-[#efefef] p-1 rounded-t-md border-b border-gray-200 mb-4">
      {filters.map((filter) => (
        <button
          key={filter.id}
          onClick={() => onFilterChange(filter.id)}
          className={`px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider transition-all duration-200 rounded-sm ${
            activeFilter === filter.id
              ? 'text-white bg-green-700 shadow-sm'
              : 'text-gray-600 hover:bg-gray-200'
          }`}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
};
