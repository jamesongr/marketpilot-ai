import { NextResponse } from 'next/server';

export const runtime = 'edge';

export async function GET() {
  const providerName = 'LinkedIn';
  const authUrl = process.env.LINKEDIN_OAUTH_URL || process.env.LINKEDIN_AUTH_URL || process.env.LINKEDIN_AUTHORIZATION_URL;
  const clientId = process.env.LINKEDIN_CLIENT_ID;
  const redirectUri = process.env.LINKEDIN_REDIRECT_URI;
  const returnUrl = process.env.LINKEDIN_REDIRECT_URI || '/social-accounts';

  const builtUrl = clientId && redirectUri
    ? `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${encodeURIComponent(clientId)}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=r_liteprofile%20r_emailaddress%20w_member_social&state=marketpilot-linkedin`
    : undefined;

  if (authUrl || builtUrl) {
    return NextResponse.redirect(authUrl || builtUrl!);
  }

  return new NextResponse(
    `<!doctype html><html><head><meta charset="utf-8"><title>${providerName} OAuth not configured</title><style>body{font-family:system-ui,sans-serif;background:#0f172a;color:#e2e8f0;display:flex;flex-direction:column;align-items:center;justify-content:center;height:100vh;margin:0;padding:24px;text-align:center;}a{color:#7dd3fc;text-decoration:none;margin-top:16px;}</style></head><body><h1>${providerName} OAuth not configured</h1><p>There is no configured LinkedIn OAuth connection. Add LINKEDIN_OAUTH_URL or set LINKEDIN_CLIENT_ID and LINKEDIN_REDIRECT_URI in .env.local.</p><a href="${returnUrl}" target="_self">Return to Social Accounts</a></body></html>`,
    {
      headers: {
        'content-type': 'text/html; charset=utf-8'
      }
    }
  );
}
