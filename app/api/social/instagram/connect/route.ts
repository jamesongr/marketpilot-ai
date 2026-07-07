import { NextResponse } from 'next/server';

export const runtime = 'edge';

export async function GET() {
  const providerName = 'Instagram';
  const clientId = process.env.INSTAGRAM_CLIENT_ID;
  const redirectUri = process.env.INSTAGRAM_REDIRECT_URI;
  const configId = process.env.META_INSTAGRAM_CONFIG_ID;
  const returnUrl = process.env.INSTAGRAM_REDIRECT_URI || '/social-accounts';

  if (!clientId || !redirectUri || !configId) {
    return new NextResponse(
      `<!doctype html><html><head><meta charset="utf-8"><title>${providerName} OAuth not configured</title><style>body{font-family:system-ui,sans-serif;background:#0f172a;color:#e2e8f0;display:flex;flex-direction:column;align-items:center;justify-content:center;height:100vh;margin:0;padding:24px;text-align:center;}a{color:#7dd3fc;text-decoration:none;margin-top:16px;}</style></head><body><h1>${providerName} OAuth not configured</h1><p>Facebook Login for Business requires a valid Meta Configuration ID. Set META_INSTAGRAM_CONFIG_ID in .env.local, then restart the app.</p><a href="${returnUrl}" target="_self">Return to Social Accounts</a></body></html>`,
      {
        headers: {
          'content-type': 'text/html; charset=utf-8'
        }
      }
    );
  }

  const authUrl = new URL('https://www.facebook.com/v25.0/dialog/oauth');
  authUrl.searchParams.set('client_id', clientId);
  authUrl.searchParams.set('redirect_uri', redirectUri);
  authUrl.searchParams.set('response_type', 'code');
  authUrl.searchParams.set('config_id', configId);

  return NextResponse.redirect(authUrl.toString());
}
