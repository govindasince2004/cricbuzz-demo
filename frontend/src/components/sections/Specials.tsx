import React from 'react';
import type { SpecialItem } from '../../types';

interface SpecialsProps {
  specials: SpecialItem[];
}

export const Specials: React.FC<SpecialsProps> = ({ specials }) => {
  return (
    <section className="mb-8">
      <div className="bg-gray-100 px-4 py-2 border-b border-gray-200 mb-4">
        <h2 className="text-sm font-bold text-gray-800 uppercase tracking-wide">Specials</h2>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {specials.map((special) => (
          <a key={special.id} href={special.href} className="group flex items-center gap-x-4 p-3 bg-white border border-gray-200 rounded-md hover:shadow-sm transition-all duration-200">
            <div className="w-20 h-20 overflow-hidden rounded shrink-0">
              <img
                src={special.imageUrl}
                alt={special.headline}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="flex flex-col">
              <h3 className="text-sm font-bold text-gray-800 group-hover:text-green-700 transition-colors duration-150 mb-1">
                {special.headline}
              </h3>
              <p className="text-xs text-gray-500 line-clamp-2">
                {special.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};
