import { HomepageData } from '../types';

export const homepageData: HomepageData = {
  navigation: [
    { label: 'Live Scores', href: '/cricket-match/live-scores' },
    { label: 'Schedule', href: '/cricket-schedule/upcoming-series/international' },
    { label: 'Archives', href: '/cricket-scorecard-archives' },
    { label: 'News', href: '/cricket-news' },
    { label: 'Series', href: '/cricket-schedule/series/all' },
    { label: 'Teams', href: '/cricket-team' },
    { label: 'Videos', href: '/cricket-videos' },
    { label: 'Rankings', href: '/cricket-stats/icc-rankings/men/batting' },
    { label: 'More', href: '#' },
  ],
  matchGroups: [
    {
      name: 'International',
      matches: [
        {
          id: 'm1',
          teams: {
            home: { name: 'WI', score: '58-1 (6.2)', flag: 'https://static.cricbuzz.com/a/img/v1/0x0/i1/c776191/west-indies.jpg' },
            away: { name: 'IND', score: '', flag: 'https://static.cricbuzz.com/a/img/v1/0x0/i1/c776162/india.jpg' },
          },
          status: 'Live',
          competition: 'West Indies tour of India, 2026',
          matchType: 'ODI',
          details: 'India opt to bowl',
          secondaryActions: [
            { label: 'Forecast', href: '/forecast/1' },
            { label: 'Schedule', href: '/schedule/1' },
          ],
        },
        {
          id: 'm2',
          teams: {
            home: { name: 'AUS A', score: '358', flag: 'https://static.cricbuzz.com/a/img/v1/0x0/i1/c776204/australia-a.jpg' },
            away: { name: 'IND A', score: '56-2', flag: 'https://static.cricbuzz.com/a/img/v1/0x0/i1/c776181/india-a.jpg' },
          },
          status: 'Live',
          competition: 'Australia A tour of India 2026',
          matchType: 'Test',
          details: 'Day 2: 3rd Session - India A trail by 302 runs',
          secondaryActions: [
            { label: 'Schedule', href: '/schedule/2' },
          ],
        },
      ],
    },
    {
      name: 'League',
      matches: [],
    },
    {
      name: 'Domestic',
      matches: [],
    },
    {
      name: 'Women',
      matches: [
        {
          id: 'm3',
          teams: {
            home: { name: 'IND WA', score: '364', flag: 'https://static.cricbuzz.com/a/img/v1/0x0/i1/c776184/india-a-women.jpg' },
            away: { name: 'AUS WA', score: '159-8', flag: 'https://static.cricbuzz.com/a/img/v1/0x0/i1/c776209/australia-a-women.jpg' },
          },
          status: 'Live',
          competition: 'Australia A Women tour of India 2026',
          matchType: 'Test',
          details: 'Day 2: 3rd Session - Australia A Women trail by 205 runs',
          secondaryActions: [
            { label: 'Schedule', href: '/schedule/3' },
          ],
        },
      ],
    },
  ],
  latestNews: [
    { id: 'n1', title: 'India hope to shrug off any rain-induced rust in Sri Lanka semifinal', timestamp: '2h ago', href: '#' },
    { id: 'n2', title: 'Amir Jangoo and the power of patience', timestamp: '3h ago', href: '#' },
    { id: 'n3', title: 'Pakistan, Bangladesh eye Asian Games final after rain-marred quarters', timestamp: '4h ago', href: '#' },
    { id: 'n4', title: 'Sophie Molineux to lead full-strength Australia against Bangladesh, NZ', timestamp: '7h ago', href: '#' },
    { id: 'n5', title: 'LA28 lifeline: USA Cricket opens door to USOPC funding and elite training', timestamp: '16h ago', href: '#' },
  ],
  latestPhotos: [
    { id: 'p1', title: 'The defining moments of Ben Stokes\' international career', date: 'Mon, Jun 29, 2026', imageUrl: 'https://static.cricbuzz.com/a/img/v1/384x216/i1/c1023459/the-defining-moments-of-ben-stokes-international-career.jpg', href: '#' },
    { id: 'p2', title: 'Kane Williamson retires', date: 'Fri, Jun 12, 2026', imageUrl: 'https://static.cricbuzz.com/a/img/v1/384x216/i1/c1005796/kane-williamson-retires.jpg', href: '#' },
    { id: 'p3', title: '2026 T20 World Cup final - India\'s celebrations', date: 'Sun, Mar 8, 2026', imageUrl: 'https://static.cricbuzz.com/a/img/v1/384x216/i1/c8879257/2026-t20-world-cup-final-indias-celebrations.jpg', href: '#' },
  ],
  schedule: [],
  featuredVideos: [
    { id: 'v1', title: 'Cricbuzz Live: India vs West Indies, 2nd ODI | Pre-match show', duration: '45:00', thumbnailUrl: 'https://static.cricbuzz.com/a/img/v1/i1/c1084962/cricbuzz-live-india-vs-west-indies-2nd-odi-pre-match-show.jpg', href: '#' },
    { id: 'v2', title: 'Really want to see Rohit lift the 2027 World Cup: Ajinkya Rahane', duration: '4:24', thumbnailUrl: 'https://static.cricbuzz.com/a/img/v1/i1/c1082963/really-want-to-see-rohit-lift-the-2027-world-cup-ajinkya-rahane.jpg', href: '#' },
  ],
  topStories: [
    { id: 's1', category: 'International', headline: 'India out to resume batting range and frenzy in Guwahati', summary: 'The team looks to find their rhythm in the upcoming match after a series of mixed results.', href: '#' },
  ],
  specials: [
    { id: 'sp1', headline: 'The duality of IPL fielding: Spectacular highlights, shaky basics', description: 'An in-depth look at the gap between individual brilliance and systemic fielding errors in the league.', href: '#' },
  ],
  footerGroups: [
    {
      title: 'Apps',
      links: [
        { label: 'Android', href: '#' },
        { label: 'iOS', href: '#' },
      ],
    },
    {
      title: 'Follow Us',
      links: [
        { label: 'Facebook', href: '#' },
        { label: 'Twitter', href: '#' },
        { label: 'Youtube', href: '#' },
      ],
    },
    {
      title: 'Company / Legal',
      links: [
        { label: 'About Us', href: '#' },
        { label: 'Privacy Notice', href: '#' },
        { label: 'Terms of Service', href: '#' },
      ],
    },
  ],
};
