import React from 'react';
import { MatchCard } from './MatchCard';
import type { MatchCard as MatchCardType } from '../../types';

interface CompetitionGroupProps {
  label: string;
  matches: MatchCardType[];
}

export const CompetitionGroup: React.FC<CompetitionGroupProps> = ({ label, matches }) => {
  if (matches.length === 0) return null;

  return (
    <div className="mb-6">
      <div className="flex items-center gap-2 mb-2">
        <div className="h-4 w-1 bg-green-700 rounded-full" />
        <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wide">
          {label}
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {matches.map((match) => (
          <MatchCard key={match.id} match={match} />
        ))}
      </div>
    </div>
  );
};
