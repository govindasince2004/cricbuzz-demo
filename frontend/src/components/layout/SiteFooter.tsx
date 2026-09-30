import React from 'react';
import type { FooterLinkGroup } from '../../types';

interface SiteFooterProps {
  groups: FooterLinkGroup[];
}

export const SiteFooter: React.FC<SiteFooterProps> = ({ groups }) => {
  return (
    <footer className="bg-white border-t border-gray-200 pt-12 pb-8 mt-12">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {groups.map((group, idx) => (
            <div key={idx} className="flex flex-col gap-y-4">
              <h4 className="text-sm font-bold text-gray-800 uppercase tracking-wide">
                {group.title}
              </h4>
              <ul className="flex flex-col gap-y-2">
                {group.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <a href={link.href} className="text-xs text-gray-500 hover:text-green-700 transition-colors duration-150">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-y-4">
          <div className="flex items-center gap-4">
            <img
              src="https://www.cricbuzz.com/assets/images/logo.svg"
              alt="Cricbuzz"
              className="h-6 w-auto opacity-50 grayscale"
            />
            <span className="text-[11px] text-gray-400">
              © 2026 Cricbuzz Clone. All rights reserved.
            </span>
          </div>
          <div className="flex gap-x-4">
            <a href="#" className="text-[11px] text-gray-400 hover:text-green-700">Privacy Policy</a>
            <a href="#" className="text-[11px] text-gray-400 hover:text-green-700">Terms of Service</a>
            <a href="#" className="text-[11px] text-gray-400 hover:text-green-700">Contact Us</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
