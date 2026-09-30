import React from 'react';
import type { HomepageData } from '../../types';
import { LatestNews } from './LatestNews';
import { LatestPhotos } from './LatestPhotos';
import { Schedule } from './Schedule';
import { FeaturedVideos } from './FeaturedVideos';
import { TopStories } from './TopStories';
import { Specials } from './Specials';

interface HomeSectionsProps {
  data: HomepageData;
}

export const HomeSections: React.FC<HomeSectionsProps> = ({ data }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 flex flex-col gap-y-8">
        <LatestNews news={data.latestNews} />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <LatestPhotos photos={data.latestPhotos} />
          <Schedule matches={data.schedule} />
        </div>
      </div>

      <div className="flex flex-col gap-y-8">
        <FeaturedVideos videos={data.featuredVideos} />
        <TopStories stories={data.topStories} />
        <Specials specials={data.specials} />
      </div>
    </div>
  );
};
