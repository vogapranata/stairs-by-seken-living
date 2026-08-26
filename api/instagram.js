'use strict';

const ALLOWED_HOSTS = new Set([
  'instagram.com',
  'www.instagram.com',
  'm.instagram.com',
  'instagr.am',
  'www.instagr.am'
]);

function parseInstagramUrl(raw) {
  try {
    const url = new URL(String(raw || '').trim());
    if (!ALLOWED_HOSTS.has(url.hostname.toLowerCase())) return null;

    const parts = url.pathname.split('/').filter(Boolean);
    const rawKind = (parts[0] || '').toLowerCase();

    if (['p', 'reel', 'reels', 'tv'].includes(rawKind) && parts[1]) {
      const kind = rawKind === 'reels' ? 'reel' : rawKind;
      const shortcode = parts[1].replace(/[^A-Za-z0-9_-]/g, '');
      if (!shortcode) return null;
      return {
        canonical: `https://www.instagram.com/${kind}/${shortcode}/`,
        share: false
      };
    }

    if (rawKind === 'share') {
      return { canonical: '', share: true };
    }

    return null;
  } catch {
    return null;
  }
}

async function resolveInstagramUrl(raw) {
  const parsed = parseInstagramUrl(raw);
  if (!parsed) throw new Error('Invalid Instagram URL');
  if (parsed.canonical) return parsed.canonical;

  // Resolve Instagram Share-sheet URLs to their public Reel/Post permalink.
  // No Graph API token is required; this endpoint only follows redirects.
  const response = await fetch(raw, {
    method: 'GET',
    redirect: 'follow',
    headers: {
      'User-Agent': 'Mozilla/5.0 (compatible; STAIRS-Embed/2.0)',
      'Accept': 'text/html,application/xhtml+xml'
    }
  });

  const finalUrl = response.url || raw;
  const finalParsed = parseInstagramUrl(finalUrl);
  if (finalParsed?.canonical) return finalParsed.canonical;

  // Some redirect chains expose a canonical URL in the HTML instead.
  const html = await response.text().catch(() => '');
  const match = html.match(
    /https:\/\/(?:www\.)?instagram\.com\/(reel|p|tv)\/([A-Za-z0-9_-]+)\/?/i
  );
  if (match) {
    return `https://www.instagram.com/${match[1].toLowerCase()}/${match[2]}/`;
  }

  throw new Error('Could not resolve this Instagram share link. Use the Reel/Post URL from the browser address bar.');
}

module.exports = async function handler(req, res) {
  res.setHeader('Cache-Control', 's-maxage=600, stale-while-revalidate=3600');
  res.setHeader('Content-Type', 'application/json; charset=utf-8');

  if (req.method !== 'GET') {
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  const raw = Array.isArray(req.query?.url) ? req.query.url[0] : req.query?.url;
  if (!raw) {
    return res.status(400).json({ ok: false, error: 'Missing url' });
  }

  try {
    const canonical = await resolveInstagramUrl(raw);
    return res.status(200).json({ ok: true, canonical });
  } catch (error) {
    return res.status(422).json({
      ok: false,
      error: error?.message || 'Instagram URL could not be resolved'
    });
  }
};
