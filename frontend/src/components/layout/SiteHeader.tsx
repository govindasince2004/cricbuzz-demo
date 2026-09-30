import React from 'react';
import type { NavigationItem } from '../../types';
import { PrimaryNav } from './PrimaryNav';

interface SiteHeaderProps {
  navItems: NavigationItem[];
}

export const SiteHeader: React.FC<SiteHeaderProps> = ({ navItems }) => {
  return (
    <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="cb-container">
        {/* Top Brand Bar */}
        <div className="flex items-center justify-between h-14">
          <div className="flex items-center gap-4">
            <a href="/" className="flex items-center">
              <img
                src="https://www.cricbuzz.com/assets/images/logo.svg"
                alt="Cricbuzz"
                className="h-8 w-auto"
              />
            </a>
          </div>

          {/* Search/User Actions */}
          <div className="hidden md:flex items-center gap-x-6 text-xs font-bold text-gray-600">
             <a href="#" className="hover:text-green-700">Premium</a>
             <button className="p-1.5 rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
               </svg>
             </button>
          </div>
        </div>

        {/* Primary Navigation Bar */}
        <div className="py-2 border-t border-gray-100">
          <PrimaryNav items={navItems} />
        </div>
      </div>
    </header>
  );
};
