export interface NavLink {
  label: string;
  href: string;
}

export interface MatchCard {
  id: string;
  teams: {
    home: { name: string; score: string; flag: string };
    away: { name: string; score: string; flag: string };
  };
  status: string; // e.g., "Live", "Preview", "Result"
  competition: string;
  matchType: 'T20I' | 'ODI' | 'Test' | 'Other';
  details?: string; // e.g., "India opt to bowl"
  secondaryActions: { label: string; href: string }[];
}

export interface CompetitionGroup {
  name: string;
  matches: MatchCard[];
}

export interface NewsItem {
  id: string;
  title: string;
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
  href: string;
}

export interface SpecialItem {
  id: string;
  headline: string;
  description: string;
  href: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterGroup {
  title: string;
  links: FooterLink[];
}

export interface HomepageData {
  navigation: NavLink[];
  matchGroups: CompetitionGroup[];
  latestNews: NewsItem[];
  latestPhotos: PhotoItem[];
  schedule: MatchCard[];
  featuredVideos: VideoItem[];
  topStories: StoryItem[];
  specials: SpecialItem[];
  footerGroups: FooterGroup[];
}
