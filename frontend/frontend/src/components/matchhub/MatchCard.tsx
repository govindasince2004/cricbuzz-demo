import React from 'react';
import { MatchCard as MatchCardType } from '../../types';

interface MatchCardProps {
  match: MatchCardType;
}

const MatchCard: React.FC<MatchCardProps> = ({ match }) => {
  return (
    <div className="bg-white border border-cb-border rounded-cb-sm p-spacing-sm mb-spacing-sm hover:shadow-sm transition-shadow cursor-pointer">
      <div className="flex justify-between items-center mb-spacing-xs">
        <div className="flex items-center gap-spacing-xs">
          <span className="text-[10px] font-bold text-cb-text-muted uppercase tracking-wider">
            {match.matchType} • {match.competition}
          </span>
        </div>
        <div className="flex items-center gap-spacing-xs">
          {match.status === 'Live' && (
            <span className="flex items-center gap-1 px-1 py-0.5 bg-red-100 text-red-600 text-[9px] font-bold rounded-sm">
              <span className="w-1 h-1 bg-red-600 rounded-full animate-pulse" />
              LIVE
            </span>
          )}
        </div>
      </div>

      <div className="flex justify-between items-center gap-spacing-md">
        <div className="flex-1 grid grid-cols-2 gap-spacing-sm">
          <div className="flex items-center gap-spacing-xs">
            <img src={match.teams.home.flag} alt={match.teams.home.name} className="w-4 h-4 rounded-full object-cover" />
            <div className="flex flex-col">
              <span className="text-xs font-bold text-cb-text-main truncate max-w-[80px]">
                {match.teams.home.name}
              </span>
              <span className="text-sm font-black text-cb-text-main">
                {match.teams.home.score || '-'}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-spacing-xs justify-end text-right">
            <div className="flex flex-col items-end">
              <span className="text-xs font-bold text-cb-text-main truncate max-w-[80px]">
                {match.teams.away.name}
              </span>
              <span className="text-sm font-black text-cb-text-main">
                {match.teams.away.score || '-'}
              </span>
            </div>
            <img src={match.teams.away.flag} alt={match.teams.away.name} className="w-4 h-4 rounded-full object-cover" />
          </div>
        </div>
      </div>

      <div className="mt-spacing-sm pt-spacing-sm border-t border-gray-50">
        <p className="text-[11px] text-cb-text-muted mb-spacing-sm italic">
          {match.details}
        </p>
        <div className="flex gap-spacing-sm">
          {match.secondaryActions.map((action, idx) => (
            <a
              key={idx}
              href={action.href}
              className="text-[10px] font-bold text-cb-green hover:underline whitespace-nowrap"
            >
              {action.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MatchCard;
