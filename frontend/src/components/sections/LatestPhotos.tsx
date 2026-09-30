import React from 'react';
import type { PhotoItem } from '../../types';

interface LatestPhotosProps {
  photos: PhotoItem[];
}

export const LatestPhotos: React.FC<LatestPhotosProps> = ({ photos }) => {
  return (
    <section className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-sm font-bold text-gray-800 uppercase tracking-wide">Latest Photos</h2>
        <a href="#" className="text-xs font-bold text-green-700 hover:underline">More Photos</a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {photos.map((photo) => (
          <a key={photo.id} href={photo.href} className="group block bg-white border border-gray-200 rounded-md overflow-hidden shadow-sm hover:shadow-md transition-all duration-200">
            <div className="aspect-video overflow-hidden">
              <img
                src={photo.imageUrl}
                alt={photo.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-3">
              <h3 className="text-sm font-medium text-gray-800 group-hover:text-green-700 transition-colors duration-150 line-clamp-2 mb-1">
                {photo.title}
              </h3>
              <span className="text-[11px] text-gray-400">{photo.date}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};
