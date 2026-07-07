const fs = require('fs');
const path = require('path');

function ensureManifest() {
  const manifestDir = path.join(process.cwd(), '.next', 'server');
  const manifestPath = path.join(manifestDir, 'middleware-manifest.json');

  try {
    if (!fs.existsSync(manifestDir)) {
      fs.mkdirSync(manifestDir, { recursive: true });
    }

    if (!fs.existsSync(manifestPath)) {
      const content = JSON.stringify({ version: 2, middleware: [], sortedMiddleware: [] });
      fs.writeFileSync(manifestPath, content, { encoding: 'utf8' });
      console.log('Created .next/server/middleware-manifest.json');
    } else {
      // ensure it's valid JSON
      try {
        JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
      } catch (err) {
        fs.writeFileSync(manifestPath, JSON.stringify({ version: 2, middleware: [], sortedMiddleware: [] }), { encoding: 'utf8' });
        console.log('Rewrote invalid middleware-manifest.json');
      }
    }
  } catch (err) {
    console.error('Could not ensure middleware manifest:', err);
    // do not exit non-zero to avoid blocking dev start
  }
}

ensureManifest();
