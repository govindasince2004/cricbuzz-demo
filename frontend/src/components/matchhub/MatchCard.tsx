import React from 'react';
import type { MatchCard as MatchCardType } from '../../types';

interface MatchCardProps {
  match: MatchCardType;
}

export const MatchCard: React.FC<MatchCardProps> = ({ match }) => {
  const isLive = match.status === 'live';

  return (
    <div className="bg-white border border-gray-200 rounded-md p-3 shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="text-[10px] text-gray-500 mb-1 truncate font-medium">
        {match.competition}
      </div>

      <div className="flex justify-between items-center mb-2">
        <div className="flex flex-col gap-y-1">
          <div className="flex justify-between items-center gap-x-8">
            <span className="text-sm font-bold text-gray-800">{match.team1}</span>
            <span className="text-sm font-mono font-bold text-gray-900">
              {match.score1 || '-'}
            </span>
          </div>
          <div className="flex justify-between items-center gap-x-8">
            <span className="text-sm font-bold text-gray-800">{match.team2}</span>
            <span className="text-sm font-mono font-bold text-gray-900">
              {match.score2 || '-'}
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between pt-2 border-t border-gray-100">
        <div className="flex items-center gap-x-1.5">
          {isLive && (
            <span className="flex h-2 w-2 rounded-full bg-red-600 animate-pulse" />
          )}
          <span className={`text-[11px] ${isLive ? 'text-red-600 font-bold' : 'text-gray-500'} truncate`}>
            {match.statusText}
          </span>
        </div>

        <div className="flex gap-x-2">
          {match.links.forecast && (
            <a href={match.links.forecast} className="text-[10px] font-bold text-green-700 hover:underline">
              Forecast
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
