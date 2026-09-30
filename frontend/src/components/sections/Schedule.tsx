import React from 'react';
import type { ScheduleItem } from '../../types';

interface ScheduleProps {
  matches: ScheduleItem[];
}

export const Schedule: React.FC<ScheduleProps> = ({ matches }) => {
  return (
    <section className="bg-white border border-gray-200 rounded-md overflow-hidden mb-8 shadow-sm">
      <div className="bg-gray-100 px-4 py-2 border-b border-gray-200 flex justify-between items-center">
        <h2 className="text-sm font-bold text-gray-800 uppercase tracking-wide">Schedule</h2>
        <a href="#" className="text-xs font-bold text-green-700 hover:underline">More Matches</a>
      </div>

      <ul className="divide-y divide-gray-100">
        {matches.map((item) => (
          <li key={item.id} className="px-4 py-3 hover:bg-gray-50 transition-colors duration-150">
            <a href={item.href} className="flex flex-col sm:flex-row sm:items-center justify-between gap-y-2 sm:gap-x-4">
              <div className="flex flex-col">
                <span className="text-sm font-medium text-gray-800">{item.match}</span>
                <span className="text-[11px] text-gray-400">{item.date} · {item.time} · {item.venue}</span>
              </div>
              <div className="text-xs font-bold text-green-700 uppercase">
                Details
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};
