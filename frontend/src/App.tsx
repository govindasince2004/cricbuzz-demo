import React from 'react';
import { homepageData } from './data/homepage';
import { SiteHeader } from './components/layout/SiteHeader';
import { MatchStrip } from './components/layout/MatchStrip';
import { QuickAccess } from './components/layout/QuickAccess';
import { CautionBanner } from './components/layout/CautionBanner';
import { SiteFooter } from './components/layout/SiteFooter';
import { MatchCarousel } from './components/matchhub/MatchCarousel';
import { LatestNews } from './components/sections/LatestNews';
import { LatestPhotos } from './components/sections/LatestPhotos';
import { ArticleFeed } from './components/sections/ArticleFeed';
import { FeaturedVideos } from './components/sections/FeaturedVideos';
import { Specials } from './components/sections/Specials';
import { MoveToTop } from './components/ui/MoveToTop';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-cb-page flex flex-col font-sans">
      <div className="cb-container pt-2">
        <SiteHeader navItems={homepageData.navigation} />
        <MatchStrip items={homepageData.matchStrip} />
      </div>

      <main className="flex-grow cb-container">
        <MatchCarousel items={homepageData.matchCarousel} />
        <QuickAccess links={homepageData.quickAccess} />
        <CautionBanner />

        <div className="flex w-full">
          <aside className="w-[197px] shrink-0 mr-[5px]">
            <LatestNews items={homepageData.latestNews} />
            <LatestPhotos items={homepageData.latestPhotos} />
          </aside>

          <section className="w-[497px] shrink-0 bg-white min-h-screen">
            <ArticleFeed items={homepageData.articles} />
          </section>

          <aside className="w-[320px] shrink-0 ml-[5px]">
            <FeaturedVideos items={homepageData.featuredVideos} />
            <Specials items={homepageData.specials} />
          </aside>
        </div>
      </main>

      <SiteFooter groups={homepageData.footerGroups} />

      <MoveToTop />
    </div>
  );
};

export default App;
