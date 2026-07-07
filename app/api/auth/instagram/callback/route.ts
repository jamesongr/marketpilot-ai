import { NextResponse } from 'next/server';

export const runtime = 'edge';

export async function GET(request: Request) {
  const url = new URL(request.url);
  const code = url.searchParams.get('code');
  const error = url.searchParams.get('error');
  const errorDescription = url.searchParams.get('error_description');

  const providerName = 'Instagram';
  const clientId = process.env.INSTAGRAM_CLIENT_ID;
  const clientSecret = process.env.INSTAGRAM_CLIENT_SECRET;
  const redirectUri = process.env.INSTAGRAM_REDIRECT_URI;

  if (!clientId || !clientSecret || !redirectUri) {
    return new NextResponse(
      `<!doctype html><html><head><meta charset="utf-8"><title>${providerName} OAuth configuration error</title><style>body{font-family:system-ui,sans-serif;background:#0f172a;color:#e2e8f0;display:flex;flex-direction:column;align-items:center;justify-content:center;height:100vh;margin:0;padding:24px;text-align:center;}a{color:#7dd3fc;text-decoration:none;margin-top:16px;}</style></head><body><h1>${providerName} OAuth configuration error</h1><p>Missing Instagram OAuth environment variables. Make sure INSTAGRAM_CLIENT_ID, INSTAGRAM_CLIENT_SECRET, and INSTAGRAM_REDIRECT_URI are configured.</p><a href="/social-accounts" target="_self">Return to Social Accounts</a></body></html>`,
      {
        headers: {
          'content-type': 'text/html; charset=utf-8'
        }
      }
    );
  }

  if (error) {
    return new NextResponse(
      `<!doctype html><html><head><meta charset="utf-8"><title>${providerName} OAuth error</title><style>body{font-family:system-ui,sans-serif;background:#0f172a;color:#e2e8f0;display:flex;flex-direction:column;align-items:center;justify-content:center;height:100vh;margin:0;padding:24px;text-align:center;}a{color:#7dd3fc;text-decoration:none;margin-top:16px;}.error{color:#fda4af;}</style></head><body><h1>${providerName} authorization failed</h1><p class="error">${errorDescription || error}</p><a href="/social-accounts" target="_self">Return to Social Accounts</a></body></html>`,
      {
        headers: {
          'content-type': 'text/html; charset=utf-8'
        }
      }
    );
  }

  if (!code) {
    return new NextResponse(
      `<!doctype html><html><head><meta charset="utf-8"><title>${providerName} OAuth error</title><style>body{font-family:system-ui,sans-serif;background:#0f172a;color:#e2e8f0;display:flex;flex-direction:column;align-items:center;justify-content:center;height:100vh;margin:0;padding:24px;text-align:center;}a{color:#7dd3fc;text-decoration:none;margin-top:16px;}</style></head><body><h1>${providerName} OAuth error</h1><p>No authorization code was returned.</p><a href="/social-accounts" target="_self">Return to Social Accounts</a></body></html>`,
      {
        headers: {
          'content-type': 'text/html; charset=utf-8'
        }
      }
    );
  }

  let tokenResult: any;
  let tokenError = '';

  try {
    // Exchange the code server-side using Facebook Graph OAuth (v25)
    const tokenUrl = `https://graph.facebook.com/v25.0/oauth/access_token?${new URLSearchParams({
      client_id: clientId,
      client_secret: clientSecret,
      redirect_uri: redirectUri,
      code
    }).toString()}`;

    const response = await fetch(tokenUrl, { method: 'GET' });
    tokenResult = await response.json();
    if (!response.ok) {
      tokenError = tokenResult.error?.message || JSON.stringify(tokenResult);
    }
  } catch (err) {
    tokenError = err instanceof Error ? err.message : String(err);
  }

  const html = `<!doctype html><html lang="en"><head><meta charset="utf-8" /><meta name="viewport" content="width=device-width, initial-scale=1" /><title>${providerName} authorization</title><style>body{margin:0;background:#020617;color:#e2e8f0;font-family:Inter,system-ui,sans-serif;display:flex;align-items:center;justify-content:center;min-height:100vh;padding:24px;}main{max-width:520px;width:100%;background:#0f172a;border:1px solid rgba(148,163,184,.12);border-radius:28px;padding:32px;box-shadow:0 30px 80px rgba(7,18,39,.35);}h1{font-size:1.8rem;margin:0 0 16px;color:#ffffff;}p{margin:0 0 16px;line-height:1.7;color:#cbd5e1;} .error{color:#fda4af;} .actions{display:flex;flex-wrap:wrap;gap:12px;margin-top:24px;}button,a{border:none;border-radius:999px;padding:12px 18px;font-weight:600;text-decoration:none;cursor:pointer;}button{background:#38bdf8;color:#020617;}a{background:rgba(148,163,184,.12);color:#e2e8f0;}@media (max-width:520px){main{padding:24px;}}</style></head><body><main><h1>${providerName} authorization</h1>${tokenError ? `<p class="error">${tokenError}</p>` : `<p>Instagram authorization completed successfully.</p><p>You may close this window and continue in the app.</p>`}<div class="actions"><button type="button" onclick="window.close()">Close popup</button><a href="/social-accounts">Return to Social Accounts</a></div></main><script>const params=new URLSearchParams(window.location.search);const code=params.get('code');const state=params.get('state');if(window.opener){window.opener.postMessage({provider:'instagram',connected:!${Boolean(tokenError)},code, state},window.location.origin);} </script></body></html>`;

  return new NextResponse(html, {
    headers: {
      'content-type': 'text/html; charset=utf-8'
    }
  });
}
