import React from 'react';
import type { VideoItem } from '../../types';

interface FeaturedVideosProps {
  videos: VideoItem[];
}

export const FeaturedVideos: React.FC<FeaturedVideosProps> = ({ videos }) => {
  return (
    <section className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-sm font-bold text-gray-800 uppercase tracking-wide">Featured Videos</h2>
        <a href="#" className="text-xs font-bold text-green-700 hover:underline">View All</a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {videos.map((video) => (
          <a key={video.id} href={video.href} className="group block bg-white border border-gray-200 rounded-md overflow-hidden shadow-sm hover:shadow-md transition-all duration-200">
            <div className="relative aspect-video overflow-hidden">
              <img
                src={video.thumbnailUrl}
                alt={video.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-2 right-2 bg-black/80 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">
                {video.duration}
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/20">
                <div className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-700 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="p-3">
              <h3 className="text-sm font-medium text-gray-800 group-hover:text-green-700 transition-colors duration-150 line-clamp-2">
                {video.title}
              </h3>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};
