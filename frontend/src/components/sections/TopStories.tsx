import React from 'react';
import type { StoryItem } from '../../types';

interface TopStoriesProps {
  stories: StoryItem[];
}

export const TopStories: React.FC<TopStoriesProps> = ({ stories }) => {
  return (
    <section className="mb-8">
      <div className="bg-gray-100 px-4 py-2 border-b border-gray-200 mb-4">
        <h2 className="text-sm font-bold text-gray-800 uppercase tracking-wide">Top Stories</h2>
      </div>

      <div className="flex flex-col gap-y-6">
        {stories.map((story) => (
          <a key={story.id} href={story.href} className="group flex flex-col sm:flex-row gap-x-4">
            <div className="sm:w-48 h-32 overflow-hidden rounded-md shrink-0">
              <img
                src={story.imageUrl}
                alt={story.headline}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-[10px] font-bold text-green-700 uppercase mb-1">
                {story.category}
              </span>
              <h3 className="text-sm font-bold text-gray-800 group-hover:text-green-700 transition-colors duration-150 line-clamp-2 mb-2">
                {story.headline}
              </h3>
              <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
                {story.summary}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};
