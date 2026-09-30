import React from 'react';
import { homepageData } from './data/homepage';
import { SiteHeader } from './components/layout/SiteHeader';
import { SiteFooter } from './components/layout/SiteFooter';
import { MatchHub } from './components/matchhub/MatchHub';
import { HomeSections } from './components/sections/HomeSections';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#f5f5f5] flex flex-col font-sans">
      <SiteHeader navItems={homepageData.navigation} />

      <main className="flex-grow">
        <div className="cb-container py-6">
          <MatchHub />
          <HomeSections data={homepageData} />
        </div>
      </main>

      <SiteFooter groups={homepageData.footerGroups} />
    </div>
  );
};

export default App;
