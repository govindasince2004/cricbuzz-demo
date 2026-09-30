import React from 'react';
import { homepageData } from '../data/homepage';

const SiteHeader: React.FC = () => {
  return (
    <header className="bg-white border-b border-cb-border w-full">
      <div className="mx-auto w-cb-container flex items-center justify-between h-[50px] px-spacing-sm">
        <div className="flex items-center gap-spacing-md">
          {/* Logo Placeholder */}
          <div className="bg-cb-green text-white font-bold px-2 py-1 rounded-sm text-sm">
            CRICBUZZ
          </div>

          <nav className="hidden lg:flex items-center gap-spacing-md text-cb-text-main text-sm font-medium">
            {homepageData.navigation.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className="hover:text-cb-green transition-colors whitespace-nowrap"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-spacing-sm">
          <button className="text-cb-text-main text-sm p-2 hover:bg-gray-100 rounded-full">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
