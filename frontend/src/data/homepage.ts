import type {
  HomepageData
} from '../types';

export const homepageData: HomepageData = {
  navigation: [
    { label: 'Live Scores', href: '#' },
    { label: 'Schedule', href: '#' },
    { label: 'Archives', href: '#' },
    { label: 'News', href: '#' },
    { label: 'Series', href: '#' },
    { label: 'Teams', href: '#' },
    { label: 'Videos', href: '#' },
    { label: 'Rankings', href: '#' },
    { label: 'More', href: '#' },
  ],
  matchFilters: [
    { label: 'All', id: 'all' },
    { label: 'Live Now', id: 'live' },
    { label: 'Today', id: 'today' },
  ],
  competitionGroups: [
    {
      label: 'International',
      matches: [
        {
          id: 'm1',
          competition: 'India vs Australia, 2nd Test',
          team1: 'IND',
          team2: 'AUS',
          score1: '345/5',
          score2: '210',
          status: 'live',
          statusText: 'India lead by 135 runs',
          links: { forecast: '#', schedule: '#', pointsTable: '#' },
        },
        {
          id: 'm2',
          competition: 'England vs New Zealand, 1st ODI',
          team1: 'ENG',
          team2: 'NZ',
          status: 'upcoming',
          statusText: 'Starts tomorrow, 10:30 AM',
          links: { forecast: '#', schedule: '#', pointsTable: '#' },
        },
      ],
    },
    {
      label: 'League',
      matches: [
        {
          id: 'm3',
          competition: 'IPL 2026, Match 12',
          team1: 'MI',
          team2: 'CSK',
          score1: '180/6',
          score2: '181/3',
          status: 'completed',
          statusText: 'CSK won by 7 wickets',
          links: { forecast: '#', schedule: '#', pointsTable: '#' },
        },
      ],
    },
    {
      label: 'Domestic',
      matches: [],
    },
    {
      label: 'Women',
      matches: [],
    },
  ],
  latestNews: [
    { id: 'n1', headline: 'India secure dramatic win over Australia in 2nd Test', timestamp: '2 hours ago', href: '#' },
    { id: 'n2', headline: 'IPL 2026: Mega Auction dates announced', timestamp: '5 hours ago', href: '#' },
    { id: 'n3', headline: 'England captain calls for rule change in ODI format', timestamp: '8 hours ago', href: '#' },
    { id: 'n4', headline: 'World Cup qualifiers: Latest standings updated', timestamp: '12 hours ago', href: '#' },
    { id: 'n5', headline: 'Australia batsman returns from injury for 3rd Test', timestamp: '1 day ago', href: '#' },
  ],
  latestPhotos: [
    { id: 'p1', title: 'Action shots from India vs Australia 2nd Test', date: 'Sep 30', imageUrl: 'https://via.placeholder.com/300x200', href: '#' },
    { id: 'p2', title: 'IPL 2026: Preparation begins at the stadiums', date: 'Sep 29', imageUrl: 'https://via.placeholder.com/300x200', href: '#' },
    { id: 'p3', title: 'England squad announced for New Zealand tour', date: 'Sep 28', imageUrl: 'https://via.placeholder.com/300x200', href: '#' },
  ],
  schedule: [
    { id: 's1', match: 'India vs Australia, 3rd Test', date: 'Oct 2', time: '09:30 AM', venue: 'Mumbai', href: '#' },
    { id: 's2', match: 'England vs New Zealand, 1st ODI', date: 'Oct 1', time: '10:30 AM', venue: 'London', href: '#' },
    { id: 's3', match: 'West Indies vs South Africa, 2nd T20', date: 'Oct 3', time: '07:00 PM', venue: 'Barbados', href: '#' },
  ],
  featuredVideos: [
    { id: 'v1', title: 'Post-match press conference: Rohit Sharma', duration: '5:20', thumbnailUrl: 'https://via.placeholder.com/300x169', href: '#' },
    { id: 'v2', title: 'Top 10 wickets of the month', duration: '12:45', thumbnailUrl: 'https://via.placeholder.com/300x169', href: '#' },
    { id: 'v3', title: 'Analyzing the pitch conditions in Mumbai', duration: '3:15', thumbnailUrl: 'https://via.placeholder.com/300x169', href: '#' },
  ],
  topStories: [
    { id: 'st1', category: 'INTERNATIONAL', headline: 'The strategic shift in Test cricket: A deep dive', summary: 'How the modern game has evolved to prioritize aggressive batting in red-ball cricket.', imageUrl: 'https://via.placeholder.com/600x400', href: '#' },
    { id: 'st2', category: 'IPL', headline: 'The impact of the New Mega Auction', summary: 'How reshuffled squads could change the dynamics of the upcoming IPL season.', imageUrl: 'https://via.placeholder.com/600x400', href: '#' },
  ],
  specials: [
    { id: 'sp1', headline: 'Legends of the Game: The 1983 World Cup Story', description: 'A retrospective look at the underdog story that changed Indian cricket forever.', imageUrl: 'https://via.placeholder.com/300x200', href: '#' },
    { id: 'sp2', headline: 'Mastering the Art of Swing Bowling', description: 'Technical analysis of the world\'s best swing bowlers and their secrets.', imageUrl: 'https://via.placeholder.com/300x200', href: '#' },
  ],
  footerGroups: [
    {
      title: 'Apps',
      links: [
        { label: 'Android App', href: '#' },
        { label: 'iOS App', href: '#' },
      ],
    },
    {
      title: 'Follow Us',
      links: [
        { label: 'Facebook', href: '#' },
        { label: 'Twitter', href: '#' },
        { label: 'Instagram', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '#' },
        { label: 'Contact Us', href: '#' },
        { label: 'Privacy Policy', href: '#' },
        { label: 'Terms of Service', href: '#' },
      ],
    },
  ],
};
