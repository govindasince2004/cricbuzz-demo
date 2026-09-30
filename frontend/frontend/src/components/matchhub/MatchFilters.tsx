import React from 'react';

interface MatchFilterProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

const MatchFilters: React.FC<MatchFilterProps> = ({ activeFilter, onFilterChange }) => {
  const filters = ['All', 'Live Now', 'Today'];

  return (
    <div className="flex items-center gap-spacing-xs border-b border-cb-border mb-spacing-sm overflow-x-auto">
      <div className="flex items-center bg-gray-100 rounded-t-sm overflow-hidden">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => onFilterChange(filter)}
            className={`px-spacing-md py-spacing-sm text-xs font-bold transition-colors whitespace-nowrap ${
              activeFilter === filter
                ? 'bg-cb-green text-white'
                : 'text-cb-text-muted hover:bg-gray-200'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MatchFilters;
