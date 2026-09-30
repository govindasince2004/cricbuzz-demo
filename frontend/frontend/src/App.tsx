import React from 'react';
import SiteHeader from './layout/SiteHeader';
import SiteFooter from './layout/SiteFooter';
import MatchHub from './components/matchhub/MatchHub';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <SiteHeader />

      <main className="flex-grow">
        <div className="mx-auto w-cb-container py-spacing-lg px-spacing-sm">
          <MatchHub />

          {/* Next sections will go here */}
          <div className="mt-spacing-xl pt-spacing-xl border-t border-cb-border">
            <div className="bg-gray-50 p-spacing-md rounded-cb-md text-cb-text-muted text-center border border-dashed border-cb-border">
              Upcoming: Latest News, Photos, Schedule, Videos, Top Stories, Specials
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
};

export default App;
