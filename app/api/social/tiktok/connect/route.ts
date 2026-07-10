import { NextResponse } from 'next/server';

export const runtime = 'edge';

export async function GET() {
  const providerName = 'TikTok';
  const authUrl = process.env.TIKTOK_OAUTH_URL || process.env.TIKTOK_AUTH_URL || process.env.TIKTOK_AUTHORIZATION_URL;
  const clientId = process.env.TIKTOK_CLIENT_KEY;
  const redirectUri = process.env.TIKTOK_REDIRECT_URI;
  const returnUrl = process.env.TIKTOK_REDIRECT_URI || '/social-accounts';

  const builtUrl = clientId && redirectUri
    ? `https://www.tiktok.com/v2/auth/authorize?client_key=${encodeURIComponent(clientId)}&redirect_uri=${encodeURIComponent(redirectUri)}&response_type=code&scope=user.info.basic%20video.list%20video.upload&state=amplify-tiktok`
    : undefined;

  if (authUrl || builtUrl) {
    return NextResponse.redirect(authUrl || builtUrl!);
  }

  return new NextResponse(
    `<!doctype html><html><head><meta charset="utf-8"><title>${providerName} OAuth not configured</title><style>body{font-family:system-ui,sans-serif;background:#0f172a;color:#e2e8f0;display:flex;flex-direction:column;align-items:center;justify-content:center;height:100vh;margin:0;padding:24px;text-align:center;}a{color:#7dd3fc;text-decoration:none;margin-top:16px;}</style></head><body><h1>${providerName} OAuth not configured</h1><p>There is no configured TikTok OAuth connection. Add TIKTOK_OAUTH_URL or set TIKTOK_CLIENT_KEY and TIKTOK_REDIRECT_URI in .env.local.</p><a href="${returnUrl}" target="_self">Return to Social Accounts</a></body></html>`,
    {
      headers: {
        'content-type': 'text/html; charset=utf-8'
      }
    }
  );
}
