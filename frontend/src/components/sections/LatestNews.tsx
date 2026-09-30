import React from 'react';
import type { NewsItem } from '../../types';

interface LatestNewsProps {
  news: NewsItem[];
}

export const LatestNews: React.FC<LatestNewsProps> = ({ news }) => {
  return (
    <section className="bg-white border border-gray-200 rounded-md overflow-hidden mb-8 shadow-sm">
      <div className="bg-gray-100 px-4 py-2 border-b border-gray-200 flex justify-between items-center">
        <h2 className="text-sm font-bold text-gray-800 uppercase tracking-wide">Latest News</h2>
        <a href="#" className="text-xs font-bold text-green-700 hover:underline">More News</a>
      </div>

      <ul className="divide-y divide-gray-100">
        {news.map((item) => (
          <li key={item.id} className="px-4 py-3 hover:bg-gray-50 transition-colors duration-150">
            <a href={item.href} className="flex flex-col gap-y-1 group">
              <span className="text-sm font-medium text-gray-800 group-hover:text-green-700 transition-colors duration-150 line-clamp-2">
                {item.headline}
              </span>
              <span className="text-[11px] text-gray-400">
                {item.timestamp}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};
