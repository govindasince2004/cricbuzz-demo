export interface NavigationItem {
  label: string;
  href: string;
}

export interface MatchFilter {
  label: string;
  id: string;
}

export interface MatchCard {
  id: string;
  competition: string;
  team1: string;
  team2: string;
  score1?: string;
  score2?: string;
  status: 'live' | 'upcoming' | 'completed';
  statusText: string;
  links: {
    forecast?: string;
    schedule?: string;
    pointsTable?: string;
  };
}

export interface CompetitionGroup {
  label: string;
  matches: MatchCard[];
}

export interface NewsItem {
  id: string;
  headline: string;
  timestamp: string;
  href: string;
}

export interface PhotoItem {
  id: string;
  title: string;
  date: string;
  imageUrl: string;
  href: string;
}

export interface ScheduleItem {
  id: string;
  match: string;
  date: string;
  time: string;
  venue: string;
  href: string;
}

export interface VideoItem {
  id: string;
  title: string;
  duration: string;
  thumbnailUrl: string;
  href: string;
}

export interface StoryItem {
  id: string;
  category: string;
  headline: string;
  summary: string;
  imageUrl: string;
  href: string;
}

export interface SpecialItem {
  id: string;
  headline: string;
  description: string;
  imageUrl: string;
  href: string;
}

export interface FooterLinkGroup {
  title: string;
  links: { label: string; href: string }[];
}

export interface HomepageData {
  navigation: NavigationItem[];
  matchFilters: MatchFilter[];
  competitionGroups: CompetitionGroup[];
  latestNews: NewsItem[];
  latestPhotos: PhotoItem[];
  schedule: ScheduleItem[];
  featuredVideos: VideoItem[];
  topStories: StoryItem[];
  specials: SpecialItem[];
  footerGroups: FooterLinkGroup[];
}
