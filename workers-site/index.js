import { getAssetFromKV } from '@cloudflare/kv-asset-handler';

addEventListener('fetch', (event) => {
  event.respondWith(handleEvent(event));
});

async function handleEvent(event) {
  try {
    return await getAssetFromKV(event, {
      mapRequestToAsset: (req) => {
        const url = new URL(req.url);
        if (url.pathname.endsWith('/')) {
          url.pathname += 'index.html';
        } else if (!url.pathname.includes('.')) {
          url.pathname += '/index.html';
        }
        return new Request(url.toString(), req);
      }
    });
  } catch (err) {
    return new Response('Not found', { status: 404 });
  }
}
