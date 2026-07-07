import { NextResponse } from 'next/server';

export const runtime = 'edge';

export async function GET(request: Request) {
  const url = new URL(request.url);
  const code = url.searchParams.get('code');
  const error = url.searchParams.get('error');
  const errorDescription = url.searchParams.get('error_description');
  const providerName = 'Instagram';
  // Exchange the temporary authorization code server-side for an access token via Facebook Graph (v25)
  if (error) {
    const html = `<!doctype html><html><body><h1>${providerName} authorization failed</h1><p>${errorDescription || error}</p><button onclick="window.close()">Close</button></body></html>`;
    return new NextResponse(html, { headers: { 'content-type': 'text/html; charset=utf-8' } });
  }

  if (!code) {
    const html = `<!doctype html><html><body><h1>${providerName} authorization error</h1><p>No authorization code returned.</p><button onclick="window.close()">Close</button></body></html>`;
    return new NextResponse(html, { headers: { 'content-type': 'text/html; charset=utf-8' } });
  }

  const clientId = process.env.INSTAGRAM_CLIENT_ID;
  const clientSecret = process.env.INSTAGRAM_CLIENT_SECRET;
  const redirectUri = process.env.INSTAGRAM_REDIRECT_URI;

  if (!clientId || !clientSecret || !redirectUri) {
    const html = `<!doctype html><html><body><h1>${providerName} configuration error</h1><p>Missing server configuration for Instagram OAuth.</p><button onclick="window.close()">Close</button></body></html>`;
    return new NextResponse(html, { headers: { 'content-type': 'text/html; charset=utf-8' } });
  }

  let tokenResult: any = null;
  let tokenError = '';

  try {
    const tokenUrl = `https://graph.facebook.com/v25.0/oauth/access_token?${new URLSearchParams({
      client_id: clientId,
      redirect_uri: redirectUri,
      client_secret: clientSecret,
      code
    }).toString()}`;

    const resp = await fetch(tokenUrl, { method: 'GET' });
    tokenResult = await resp.json();
    if (!resp.ok) {
      tokenError = tokenResult.error?.message || JSON.stringify(tokenResult);
    }
  } catch (err) {
    tokenError = err instanceof Error ? err.message : String(err);
  }

  const html = `<!doctype html><html lang="en"><head><meta charset="utf-8" /><meta name="viewport" content="width=device-width, initial-scale=1" /><title>${providerName} authorization</title></head><body><main><h1>${providerName} authorization</h1>${tokenError ? `<p style="color:#f33">${tokenError}</p>` : `<p>Authorization completed. You may close this popup.</p>`}<div><button onclick="window.close()">Close</button><a href="/social-accounts">Return</a></div></main><script>const params=new URLSearchParams(window.location.search);const code=params.get('code');const state=params.get('state');if(window.opener){window.opener.postMessage({provider:'instagram',connected:${tokenError ? 'false' : 'true'}, expires_in:${tokenResult?.expires_in || null}, raw:${JSON.stringify(tokenResult ? { has_token:true } : {})}},window.location.origin);} </script></body></html>`;

  return new NextResponse(html, { headers: { 'content-type': 'text/html; charset=utf-8' } });
}
