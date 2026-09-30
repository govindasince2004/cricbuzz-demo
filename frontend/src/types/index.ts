export interface NavigationItem {
  label: string;
  href: string;
  hasMenu?: boolean;
}

export interface MatchStripItem {
  label: string;
  href: string;
  title: string;
}

export interface TeamScore {
  name: string;
  flag: string;
  score?: string;
}

export interface MatchCard {
  id: string;
  competition: string;
  matchType: string;
  teams: TeamScore[];
  status: 'live' | 'preview' | 'result';
  statusText: string;
  links: { label: string; href: string }[];
}

export interface MatchCarouselItem {
  id: string;
  kind: 'match' | 'ad';
  match?: MatchCard;
  ad?: { headline: string; sub: string; cta: string };
}

export interface QuickAccessLink {
  label: string;
  href: string;
  icon: string;
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

export interface VideoItem {
  id: string;
  title: string;
  duration?: string;
  thumbnailUrl: string;
  href: string;
}

export interface ArticleItem {
  id: string;
  series?: string;
  eyebrow?: string;
  headline: string;
  summary: string;
  imageUrl: string;
  seriesImageUrl?: string;
  relatedLink?: string;
  href: string;
  variant?: 'series' | 'standard';
}

export interface SpecialItem {
  id: string;
  headline: string;
  description: string;
  imageUrl: string;
  href: string;
}

export interface FooterLink {
  label: string;
  href: string;
  icon?: string;
}

export interface FooterLinkGroup {
  title: string;
  links: FooterLink[];
}

export interface HomepageData {
  navigation: NavigationItem[];
  matchStrip: MatchStripItem[];
  matchCarousel: MatchCarouselItem[];
  quickAccess: QuickAccessLink[];
  latestNews: NewsItem[];
  latestPhotos: PhotoItem[];
  featuredVideos: VideoItem[];
  articles: ArticleItem[];
  specials: SpecialItem[];
  footerGroups: FooterLinkGroup[];
}
