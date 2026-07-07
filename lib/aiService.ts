import { socialPostTemplate, imageCreativeTemplate } from './prompts';

export async function generateSocialPost(options: { brandName: string; platform: string; goal: string; topic: string; tone: string; includeHashtags: boolean; includeEmojis: boolean; variations: number; }) {
  const prompt = socialPostTemplate({
    brand: options.brandName,
    platform: options.platform,
    goal: options.goal,
    topic: options.topic,
    tone: options.tone
  });
  return Array.from({ length: options.variations }, (_, index) => ({
    id: `generated-${index + 1}`,
    platform: options.platform,
    content: `${options.tone} post idea #${index + 1} for ${options.brandName} on ${options.platform} about ${options.topic}. ${options.includeHashtags ? '#BookTok #ReadingGoals' : ''}`.trim(),
    hashtags: options.includeHashtags ? ['#BookTok', '#ReadingGoals', '#AppLaunch'] : [],
    suggestedTime: 'Wednesday • 7:00 PM',
    concept: 'Share a cozy reading moment with the app UI visible.'
  }));
}

export async function generateImageCreativeBrief(options: { brandName: string; platform: string; style: string; audience: string; textOverlay: string; aspectRatio: string; includeLogo: boolean; }) {
  const prompt = imageCreativeTemplate({
    brand: options.brandName,
    platform: options.platform,
    style: options.style,
    audience: options.audience,
    textOverlay: options.textOverlay
  });
  return {
    id: 'creative-1',
    title: `${options.platform} image concept for ${options.brandName}`,
    description: `Use ${options.style} design with ${options.aspectRatio} aspect ratio and ${options.textOverlay} overlay for ${options.audience}. ${options.includeLogo ? 'Include the brand logo on the design.' : 'Keep the visual simple without a logo.'}`,
    prompt
  };
}

export async function generateWeeklyContentPlan(brandName: string) {
  return [
    { day: 'Monday', title: 'Educational Instagram post', description: 'Share a reading tip with a story carousel idea.' },
    { day: 'Tuesday', title: 'X conversation reply', description: 'Reply to a BookTok trend with a helpful app suggestion.' },
    { day: 'Wednesday', title: 'TikTok short-form idea', description: 'Create a launch hook around fantasy reading routines.' },
    { day: 'Thursday', title: 'Product promotion', description: 'Highlight a new feature in the reading app.' },
    { day: 'Friday', title: 'Community prompt', description: 'Ask followers what book they can’t stop reading.' },
    { day: 'Saturday', title: 'Behind-the-scenes post', description: 'Reveal the creative inspiration behind your app copy.' },
    { day: 'Sunday', title: 'Weekly recap', description: 'Round up top stories and engagement from the week.' }
  ];
}

export async function generateReplySuggestions(query: string) {
  return [
    { id: 'reply-1', text: `Love this! Have you tried our reading app for fantasy recs?`, score: 94 },
    { id: 'reply-2', text: `That sounds perfect for our community — we’d love to share a cozy reading guide.`, score: 86 }
  ];
}

export async function analyzeBrandVoice(brandMemory: string) {
  return {
    summary: `Brand voice is warm, approachable, and audience-focused. Avoid corporate language.`,
    recommendation: `Prefer short, emotive posts with BookTok-style references and reading rituals.`
  };
}
