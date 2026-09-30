import React from 'react';
import type { NavigationItem } from '../../types';

interface PrimaryNavProps {
  items: NavigationItem[];
}

export const PrimaryNav: React.FC<PrimaryNavProps> = ({ items }) => {
  return (
    <nav className="flex items-center justify-center overflow-x-auto whitespace-nowrap no-scrollbar">
      <ul className="flex items-center gap-x-4 md:gap-x-6 text-sm font-medium">
        {items.map((item, index) => (
          <li key={index} className="relative group">
            <a
              href={item.href}
              className="text-gray-700 hover:text-green-700 transition-colors duration-200"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
