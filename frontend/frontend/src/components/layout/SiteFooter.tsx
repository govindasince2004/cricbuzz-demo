import React from 'react';
import { homepageData } from '../../data/homepage';

const SiteFooter: React.FC = () => {
  return (
    <footer className="bg-cb-bg-light border-t border-cb-border w-full py-spacing-lg">
      <div className="mx-auto w-cb-container px-spacing-sm">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-spacing-xl">
          {homepageData.footerGroups.map((group, idx) => (
            <div key={idx} className="flex flex-col gap-spacing-sm">
              <h3 className="text-cb-text-main font-bold text-sm uppercase mb-spacing-sm">
                {group.title}
              </h3>
              <ul className="flex flex-col gap-spacing-xs">
                {group.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    <a href={link.href} className="text-cb-text-muted text-xs hover:text-cb-green transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
