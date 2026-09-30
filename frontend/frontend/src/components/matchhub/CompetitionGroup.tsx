import React from 'react';
import { CompetitionGroup } from '../../types';
import MatchCard from './MatchCard';

interface CompetitionGroupProps {
  group: CompetitionGroup;
}

const CompetitionGroup: React.FC<CompetitionGroupProps> = ({ group }) => {
  if (group.matches.length === 0) return null;

  return (
    <div className="mb-spacing-md">
      <div className="bg-gray-50 px-spacing-sm py-1 border-l-4 border-cb-green mb-spacing-sm">
        <h3 className="text-[11px] font-bold text-cb-text-main uppercase tracking-wide">
          {group.name}
        </h3>
      </div>
      <div className="flex flex-col gap-spacing-xs">
        {group.matches.map((match) => (
          <MatchCard key={match.id} match={match} />
        ))}
      </div>
    </div>
  );
};

export default CompetitionGroup;
