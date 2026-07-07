import { NextResponse } from 'next/server';

export const runtime = 'edge';

export async function GET() {
  const providerName = 'Facebook';
  const authUrl = process.env.FACEBOOK_OAUTH_URL || process.env.FACEBOOK_AUTH_URL || process.env.FACEBOOK_AUTHORIZATION_URL;
  const clientId = process.env.FACEBOOK_APP_ID;
  const redirectUri = process.env.FACEBOOK_REDIRECT_URI;
  const returnUrl = process.env.FACEBOOK_REDIRECT_URI || '/social-accounts';

  const builtUrl = clientId && redirectUri
    ? `https://www.facebook.com/v17.0/dialog/oauth?client_id=${encodeURIComponent(clientId)}&redirect_uri=${encodeURIComponent(redirectUri)}&state=marketpilot-facebook&scope=pages_show_list,pages_read_engagement,pages_manage_posts,pages_manage_engagement,email`
    : undefined;

  if (authUrl || builtUrl) {
    return NextResponse.redirect(authUrl || builtUrl!);
  }

  return new NextResponse(
    `<!doctype html><html><head><meta charset="utf-8"><title>${providerName} OAuth not configured</title><style>body{font-family:system-ui,sans-serif;background:#0f172a;color:#e2e8f0;display:flex;flex-direction:column;align-items:center;justify-content:center;height:100vh;margin:0;padding:24px;text-align:center;}a{color:#7dd3fc;text-decoration:none;margin-top:16px;}</style></head><body><h1>${providerName} OAuth not configured</h1><p>There is no configured Facebook OAuth connection. Add FACEBOOK_OAUTH_URL or set FACEBOOK_APP_ID and FACEBOOK_REDIRECT_URI in .env.local.</p><a href="${returnUrl}" target="_self">Return to Social Accounts</a></body></html>`,
    {
      headers: {
        'content-type': 'text/html; charset=utf-8'
      }
    }
  );
}
