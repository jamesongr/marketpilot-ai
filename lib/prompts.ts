export const socialPostTemplate = ({ brand, brandName, platform, goal, topic, tone }: { brand?: string; brandName?: string; platform: string; goal: string; topic: string; tone: string }) => {
  const resolvedBrand = brand ?? brandName ?? 'your brand';
  return `Create 2 social media posts for ${resolvedBrand} on ${platform}. Use a ${tone} voice. Goal: ${goal}. Topic: ${topic}. Include branded language from the saved audience and product details. Do not publish without account authorization. Use only approved hashtags and avoid profanity.`;
};

export const imageCreativeTemplate = ({ brand, brandName, platform, style, audience, overlay, textOverlay }: { brand?: string; brandName?: string; platform: string; style: string; audience: string; overlay?: string; textOverlay?: string }) => {
  const resolvedOverlay = overlay ?? textOverlay ?? 'brand message';
  const resolvedBrand = brand ?? brandName ?? 'your brand';
  return `Generate a social image brief for ${resolvedBrand} on ${platform} with ${style} style targeting ${audience}. Include text overlay: ${resolvedOverlay}. Mention the brand identity and show a placeholder for logo.`;
};
