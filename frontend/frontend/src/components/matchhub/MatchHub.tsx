import React, { useState } from 'react';
import { homepageData } from '../../data/homepage';
import MatchFilters from './MatchFilters';
import CompetitionGroup from './CompetitionGroup';

const MatchHub: React.FC = () => {
  const [filter, setFilter] = useState('All');

  return (
    <div className="mb-spacing-xl">
      <div className="flex items-center gap-spacing-md mb-spacing-sm">
        <h2 className="text-sm font-black text-cb-text-main uppercase tracking-tighter">
          MATCHES
        </h2>
        <MatchFilters activeFilter={filter} onFilterChange={setFilter} />
      </div>

      <div className="flex flex-col gap-spacing-md">
        {homepageData.matchGroups.map((group, idx) => (
          <CompetitionGroup key={idx} group={group} />
        ))}
      </div>
    </div>
  );
};

export default MatchHub;
