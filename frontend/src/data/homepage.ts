import type { HomepageData } from '../types';

const img = (name: string) => `/img/${name}`;

export const homepageData: HomepageData = {
  navigation: [
    { label: 'Live Scores', href: '/cricket-match/live-scores' },
    { label: 'Schedule', href: '/cricket-schedule/upcoming-series/international' },
    { label: 'Archives', href: '/cricket-scorecard-archives' },
    { label: 'News', href: '/cricket-news', hasMenu: true },
    { label: 'Series', href: '/cricket-schedule/series/all', hasMenu: true },
    { label: 'Teams', href: '/cricket-team', hasMenu: true },
    { label: 'Videos', href: '/cricket-videos', hasMenu: true },
    { label: 'Rankings', href: '/cricket-stats/icc-rankings/men/batting', hasMenu: true },
    { label: 'More', href: '#!', hasMenu: true },
  ],

  matchStrip: [
    { label: 'WI vs IND - IND opt to bowl', title: 'West Indies vs India, 2nd ODI', href: '/live-cricket-scores/151543/wi-vs-ind-2nd-odi' },
    { label: 'AUSA vs INDA - Trail by 269', title: 'Australia A vs India A, 2nd unofficial Test', href: '/live-cricket-scores/155422/ausa-vs-inda' },
    { label: 'INDWA vs AUSWA - Lead by 202', title: 'India A Women vs Australia A Women, Only unofficial Test', href: '/live-cricket-scores/155650/indwa-vs-auswa' },
    { label: 'RSA vs AUS - Preview', title: 'South Africa vs Australia, 3rd ODI', href: '/live-cricket-scores/147909/rsa-vs-aus' },
    { label: 'IND vs SL - Preview', title: 'India vs Sri Lanka, 2nd Semi Final', href: '/live-cricket-scores/171060/ind-vs-sl' },
  ],

  matchCarousel: [
    {
      id: 'c1',
      kind: 'match',
      match: {
        id: 'm1',
        competition: 'West Indies tour of India, 2026',
        matchType: '2nd ODI',
        teams: [
          { name: 'WI', flag: img('west-indies.jpg'), score: '152-2 (18.4)' },
          { name: 'IND', flag: img('india.jpg') },
        ],
        status: 'live',
        statusText: 'India opt to bowl',
        links: [
          { label: 'FORECAST', href: '#' },
          { label: 'SCHEDULE', href: '#' },
        ],
      },
    },
    {
      id: 'c2',
      kind: 'ad',
      ad: {
        headline: "Don't Let It Slip Away",
        sub: 'Your $5,000 Award',
        cta: 'Register',
      },
    },
    {
      id: 'c3',
      kind: 'match',
      match: {
        id: 'm2',
        competition: 'Australia A tour of India 2026',
        matchType: '2nd unofficial Test',
        teams: [
          { name: 'AUSA', flag: img('australia-a.jpg'), score: '358' },
          { name: 'INDIA', flag: img('india-a.jpg'), score: '89-3' },
        ],
        status: 'live',
        statusText: 'Day 2: 3rd Session - India A trail by 269 runs',
        links: [{ label: 'SCHEDULE', href: '#' }],
      },
    },
    {
      id: 'c4',
      kind: 'match',
      match: {
        id: 'm3',
        competition: 'Australia A Women tour of India 2026',
        matchType: 'Only unofficial Test',
        teams: [
          { name: 'INDWA', flag: img('india-a-women.jpg'), score: '364 & 14-0' },
          { name: 'AUSWA', flag: img('australia-a-women.jpg'), score: '176' },
        ],
        status: 'live',
        statusText: 'Day 2: 3rd Session - India A Women lead by 202 runs',
        links: [{ label: 'SCHEDULE', href: '#' }],
      },
    },
    {
      id: 'c5',
      kind: 'match',
      match: {
        id: 'm4',
        competition: 'Australia tour of South Africa, 2026',
        matchType: '3rd ODI',
        teams: [
          { name: 'RSA', flag: img('south-africa.jpg') },
          { name: 'AUS', flag: img('australia.jpg') },
        ],
        status: 'preview',
        statusText: 'Starts at 11:30 AM',
        links: [{ label: 'SCHEDULE', href: '#' }],
      },
    },
    {
      id: 'c6',
      kind: 'match',
      match: {
        id: 'm5',
        competition: 'Asian Games 2026',
        matchType: '2nd Semi Final',
        teams: [
          { name: 'IND', flag: img('india.jpg') },
          { name: 'SL', flag: img('sri-lanka.jpg') },
        ],
        status: 'preview',
        statusText: 'Starts at 2:00 PM',
        links: [{ label: 'SCHEDULE', href: '#' }],
      },
    },
  ],

  quickAccess: [
    { label: 'India - Men', href: '#', icon: 'user-group' },
    { label: 'India - Women', href: '#', icon: 'user-group' },
    { label: 'Go ad-free', href: '#', icon: 'badge-star' },
  ],

  latestNews: [
    { id: 'n1', headline: 'MI Emirates appoint Mark Boucher as head coach', timestamp: '43m ago', href: '#' },
    { id: 'n2', headline: 'India hope to shrug off any rain-induced rust in Sri Lanka semifinal', timestamp: '3h ago', href: '#' },
    { id: 'n3', headline: 'Amir Jangoo and the power of patience', timestamp: '4h ago', href: '#' },
    { id: 'n4', headline: 'Pakistan, Bangladesh eye Asian Games final after rain-marred quarters', timestamp: '5h ago', href: '#' },
    { id: 'n5', headline: 'Sophie Molineux to lead full-strength Australia against Bangladesh, NZ', timestamp: '8h ago', href: '#' },
    { id: 'n6', headline: 'LA28 lifeline: USA Cricket opens door to USOPC funding and elite training', timestamp: '17h ago', href: '#' },
    { id: 'n7', headline: 'Selectors meet in Guwahati; Pragyan Ojha told to take charge', timestamp: '17h ago', href: '#' },
    { id: 'n8', headline: 'Requiem for a dead rubber', timestamp: '17h ago', href: '#' },
    { id: 'n9', headline: 'India out to resume batting range and frenzy in Guwahati', timestamp: '18h ago', href: '#' },
    { id: 'n10', headline: 'Greaves ruled out of second ODI against India due to calf injury', timestamp: '18h ago', href: '#' },
  ],

  latestPhotos: [
    {
      id: 'p1',
      title: "The defining moments of Ben Stokes' international career",
      date: 'Mon, Jun 29, 2026',
      imageUrl: img('the-defining-moments-of-ben-stokes-international-career.jpg'),
      href: '#',
    },
    {
      id: 'p2',
      title: 'Kane Williamson retires',
      date: 'Fri, Jun 12, 2026',
      imageUrl: img('kane-williamson-retires.jpg'),
      href: '#',
    },
    {
      id: 'p3',
      title: "2026 T20 World Cup final - India's celebrations",
      date: 'Sun, Mar 8, 2026',
      imageUrl: img('2026-t20-world-cup-final-indias-celebrations.jpg'),
      href: '#',
    },
  ],

  featuredVideos: [
    {
      id: 'v1',
      title: 'Cricbuzz Comm Box: Campbell takes charge, India need quick wickets',
      thumbnailUrl: img('cricbuzz-comm-box-campbell-takes-charge-india-need-quick-wickets.jpg'),
      href: '#',
    },
    {
      id: 'v2',
      title: 'Axar currently pips Jadeja as a white-ball cricketer: Dinesh Karthik',
      duration: '4:36',
      thumbnailUrl: img('axar-currently-pips-jadeja-as-a-white-ball-cricketer-dinesh-karthik.jpg'),
      href: '#',
    },
    {
      id: 'v3',
      title: "India must prep Nitish; can't depend on Hardik's fitness: Rahane",
      duration: '5:35',
      thumbnailUrl: img('india-must-prep-nitish-cant-depend-on-hardiks-fitness-rahane.jpg'),
      href: '#',
    },
  ],

  articles: [
    {
      id: 'a1',
      variant: 'series',
      series: 'WEST INDIES TOUR OF INDIA, 2026',
      headline: 'Amir Jangoo and the power of patience',
      summary:
        "Jangoo's journey to international cricket took longer than he imagined, but the years of waiting have shaped the player he is today",
      imageUrl: img('amir-jangoo-and-the-power-of-patience.jpg'),
      seriesImageUrl: img('india-vs-new-zealand-3rd-odi-indore.jpg'),
      relatedLink: 'Greaves ruled out of second ODI against India due to calf injury',
      href: '#',
    },
    {
      id: 'a2',
      variant: 'standard',
      eyebrow: 'INDIAN CRICKET',
      headline: 'Selectors meet in Guwahati; Pragyan Ojha told to take charge',
      summary:
        'Being the senior most among the selectors in terms of Tests played, former India spinner is the obvious choice to head the selection committee; whether it is an interim or permanent arrangement is still not clear',
      imageUrl: img('selectors-meet-in-guwahati-pragyan-ojha-told-to-take-charge.jpg'),
      href: '#',
    },
    {
      id: 'a3',
      variant: 'standard',
      eyebrow: 'INDIAN CRICKET',
      headline: 'Mohit Sharma to join CSK as bowling coach',
      summary:
        'The former India pacer returns to the franchise where he enjoyed a career revival, taking up a coaching role ahead of the new season',
      imageUrl: img('mohit-sharma-to-join-csk-as-bowling-coach.jpg'),
      href: '#',
    },
    {
      id: 'a4',
      variant: 'standard',
      eyebrow: 'INTERNATIONAL',
      headline: 'Jamie Overton: Older, wiser and still bowling fast',
      summary:
        'The England quick has leaned on experience to stay effective, mixing raw pace with a sharper understanding of his own action',
      imageUrl: img('jamie-overton-older-wiser-and-still-bowling-fast.jpg'),
      href: '#',
    },
    {
      id: 'a5',
      variant: 'standard',
      eyebrow: 'INTERNATIONAL',
      headline: "Explained: Why Mohsin Naqvi's ACC extension is headed nowhere",
      summary:
        'The administrative tangle around the Asian Cricket Council shows no sign of resolving itself soon',
      imageUrl: img('explained-why-mohsin-naqvis-acc-extension-is-headed-nowhere.jpg'),
      href: '#',
    },
    {
      id: 'a6',
      variant: 'standard',
      eyebrow: 'INTERNATIONAL',
      headline: 'MI Emirates appoint Mark Boucher as head coach',
      summary:
        'The former South Africa wicketkeeper takes charge of the ILT20 franchise with a mandate to rebuild',
      imageUrl: img('mi-emirates-appoint-mark-boucher-as-head-coach.jpg'),
      href: '#',
    },
    {
      id: 'a7',
      variant: 'standard',
      eyebrow: 'INTERNATIONAL',
      headline: 'LA28 lifeline: USA Cricket opens door to USOPC funding and elite training',
      summary:
        'A landmark agreement could reshape the pathway for American cricketers ahead of a home Olympics',
      imageUrl: img('la28-lifeline-usa-cricket-opens-door-to-usopc-funding-and-elite-training.jpg'),
      href: '#',
    },
    {
      id: 'a8',
      variant: 'standard',
      eyebrow: 'INTERNATIONAL',
      headline: 'India hope to shrug off any rain-induced rust in Sri Lanka semifinal',
      summary:
        'A stop-start campaign leaves India searching for rhythm as the knockout stage arrives',
      imageUrl: img('india-hope-to-shrug-off-any-rain-induced-rust-in-sri-lanka-semifinal.jpg'),
      href: '#',
    },
    {
      id: 'a9',
      variant: 'standard',
      eyebrow: 'INTERNATIONAL',
      headline: 'Requiem for a dead rubber',
      summary:
        'A game with nothing riding on it still found a way to say something about the state of the format',
      imageUrl: img('requiem-for-a-dead-rubber.jpg'),
      href: '#',
    },
    {
      id: 'a10',
      variant: 'standard',
      eyebrow: 'IPL 2026',
      headline: 'RCB release Grace Harris, Linsey Smith ahead of WPL 2027 auction',
      summary:
        'The franchise reshapes its overseas core with an eye on the next auction cycle',
      imageUrl: img('rcb-release-grace-harris-linsey-smith-ahead-of-wpl-2027-auction.jpg'),
      href: '#',
    },
    {
      id: 'a11',
      variant: 'standard',
      eyebrow: 'INTERNATIONAL',
      headline: 'ICC meet in Bali from November 13-15; McKinsey strategy report to be tabled',
      summary:
        'The governing body gathers with a wide-ranging agenda on the future of the global game',
      imageUrl: img('icc-meet-in-bali-from-november-13-15-mckinsey-strategy-report-to-be-tabled.jpg'),
      href: '#',
    },
    {
      id: 'a12',
      variant: 'standard',
      eyebrow: 'INTERNATIONAL',
      headline: 'Sam Harper leads Australia A fightback with superb century',
      summary:
        'A patient hundred drags the tourists back into a contest that had been slipping away',
      imageUrl: img('sam-harper-leads-australia-as-fightback-with-superb-century.jpg'),
      href: '#',
    },
    {
      id: 'a13',
      variant: 'standard',
      eyebrow: 'INTERNATIONAL',
      headline: 'Babar, Salt and Gurbaz among 200 players for ILT20 auction',
      summary:
        'The league confirms a long list of overseas names for its upcoming player auction',
      imageUrl: img('babar-salt-and-gurbaz-among-200-players-for-ilt20-auction.jpg'),
      href: '#',
    },
    {
      id: 'a14',
      variant: 'standard',
      eyebrow: 'INTERNATIONAL',
      headline: "Inside Conrad's push to bring Nortje back to the Test fold",
      summary:
        'South Africa\'s coach is working to reintegrate one of his fastest bowlers into the red-ball setup',
      imageUrl: img('inside-conrads-push-to-bring-nortje-back-to-the-test-fold.jpg'),
      href: '#',
    },
    {
      id: 'a15',
      variant: 'standard',
      eyebrow: 'INTERNATIONAL',
      headline: 'Zak Crawley to play full BBL season with Perth Scorchers',
      summary:
        'The England opener commits to a complete campaign down under',
      imageUrl: img('zak-crawley-to-play-full-bbl-season-with-perth-scorchers.jpg'),
      href: '#',
    },
  ],

  specials: [
    {
      id: 'sp1',
      headline: 'Auqib Nabi, and the swing transformation that sparked a revolution',
      description:
        "At the heart of J&K's Ranji Trophy success story stands Auqib Nabi, who transformed from a one-dimensional outswing bowler into a complete force, reshaping both his craft and his team's destiny",
      imageUrl: img('auqib-nabi-and-the-swing-transformation-that-sparked-a-revolution.jpg'),
      href: '#',
    },
    {
      id: 'sp2',
      headline: 'The duality of IPL fielding: Spectacular highlights, shaky basics',
      description:
        'An in-depth look at the gap between individual brilliance and systemic fielding errors in the league',
      imageUrl: img('the-duality-of-ipl-fielding-spectacular-highlights-shaky-basics.jpg'),
      href: '#',
    },
  ],

  footerGroups: [
    {
      title: 'APPS',
      links: [
        { label: 'Android', href: 'https://play.google.com/store/apps/details?id=com.cricbuzz.android', icon: 'icon-android' },
        { label: 'iOS', href: 'https://apps.apple.com/us/app/cricbuzz-live-cricket-scores/id360466413', icon: 'icon-apple' },
      ],
    },
    {
      title: 'FOLLOW US ON',
      links: [
        { label: 'Facebook', href: '#', icon: 'social-facebook' },
        { label: 'Twitter', href: '#' },
        { label: 'Youtube', href: '#', icon: 'social-youtube' },
        { label: 'Pinterest', href: '#' },
      ],
    },
    {
      title: 'COMPANY',
      links: [
        { label: 'Careers', href: '/careers' },
        { label: 'Advertise', href: '/info/advertise' },
        { label: 'Cricbuzz TV Ads', href: '#' },
        { label: 'About Us', href: '/info/about' },
        { label: 'Privacy Notice', href: '/info/privacy' },
        { label: 'Terms of Service', href: '/info/terms' },
      ],
    },
  ],
};
