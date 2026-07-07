export const brands = [
  {
    id: 'brand-1',
    name: 'LunaReads',
    website: 'https://lunareads.app',
    industry: 'Reading app',
    audience: 'Fantasy readers, BookTok fans, romance and self-care readers',
    brandVoice: 'Friendly',
    selectedPlatforms: ['Instagram', 'TikTok', 'X / Twitter']
  },
  {
    id: 'brand-2',
    name: 'StoryBridge',
    website: 'https://storybridge.io',
    industry: 'Creative writing app',
    audience: 'Writers, creators, indie authors',
    brandVoice: 'Educational',
    selectedPlatforms: ['LinkedIn', 'Facebook']
  }
];

export const overviewMetrics = [
  { name: 'Posts created', value: '128', delta: '+32%', description: 'Generated content this month' },
  { name: 'Scheduled posts', value: '24', delta: '+8%', description: 'Ready to publish' },
  { name: 'Connected accounts', value: '5', delta: 'Stable', description: 'Authorized social profiles' },
  { name: 'Engagement rate', value: '4.8%', delta: '+12%', description: 'Average across platforms' }
];

export const contentIdeas = [
  {
    id: 'idea-1',
    platform: 'Instagram',
    title: 'Fantasy reading challenge',
    description: 'Encourage readers to share their current book and tag friends.',
    labels: ['Carousel', 'Engagement']
  },
  {
    id: 'idea-2',
    platform: 'TikTok',
    title: 'Cozy book nook reel',
    description: 'Showcase a moodboard with app screens and a reading setup.',
    labels: ['Video', 'Brand']
  }
];

export const socialAccounts = [
  { id: 'x', platform: 'X / Twitter', connected: true, accountName: 'LunaReadsHQ', lastSync: '12m ago', autoPost: false, approvalRequired: true },
  { id: 'instagram', platform: 'Instagram', connected: false, accountName: '', lastSync: 'Never', autoPost: false, approvalRequired: true },
  { id: 'tiktok', platform: 'TikTok', connected: false, accountName: '', lastSync: 'Never', autoPost: false, approvalRequired: true },
  { id: 'facebook', platform: 'Facebook', connected: false, accountName: '', lastSync: 'Never', autoPost: false, approvalRequired: true },
  { id: 'linkedin', platform: 'LinkedIn', connected: false, accountName: '', lastSync: 'Never', autoPost: false, approvalRequired: true }
];

export const styleOptions = ['Clean', 'Bold', 'Minimal', 'Story-style', 'Photo first', 'Quote graphic'];
