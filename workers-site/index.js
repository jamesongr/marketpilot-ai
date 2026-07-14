import { getAssetFromKV } from '@cloudflare/kv-asset-handler';

addEventListener('fetch', (event) => {
  event.respondWith(handleEvent(event));
});

async function handleEvent(event) {
  const url = new URL(event.request.url);
  const isFrontendRoute = !url.pathname.includes('.') && !url.pathname.startsWith('/_next') && !url.pathname.startsWith('/api');

  return getAssetFromKV(event, {
    mapRequestToAsset: (req) => {
      const reqUrl = new URL(req.url);

      if (isFrontendRoute) {
        return new Request(new URL('/index.html', req.url).toString(), req);
      }

      if (reqUrl.pathname.endsWith('/')) {
        reqUrl.pathname += 'index.html';
      } else if (!reqUrl.pathname.includes('.')) {
        reqUrl.pathname += '/index.html';
      }

      return new Request(reqUrl.toString(), req);
    }
  });
}
