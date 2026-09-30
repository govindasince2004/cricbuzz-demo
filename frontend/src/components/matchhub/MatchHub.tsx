import React, { useState } from 'react';
import { CompetitionGroup } from './CompetitionGroup';
import { MatchFilters } from './MatchFilters';
import { homepageData } from '../../data/homepage';

export const MatchHub: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredGroups = homepageData.competitionGroups.map(group => ({
    ...group,
    matches: group.matches.filter(m => {
      if (activeFilter === 'all') return true;
      if (activeFilter === 'live') return m.status === 'live';
      if (activeFilter === 'today') return m.status !== 'completed';
      return true;
    })
  })).filter(group => group.matches.length > 0);

  return (
    <section className="mb-10 w-full">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-base font-bold text-gray-800 flex items-center gap-2">
          <span className="text-green-700 uppercase tracking-tight">Matches</span>
        </h2>
      </div>

      <MatchFilters
        filters={homepageData.matchFilters}
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
        {filteredGroups.map((group, idx) => (
          <CompetitionGroup
            key={idx}
            label={group.label}
            matches={group.matches}
          />
        ))}
      </div>
    </section>
  );
};
