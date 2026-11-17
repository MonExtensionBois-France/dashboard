export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon\\.ico).*)'],
};

const PUBLIC_PATHS = ['/login.html', '/api/login', '/api/logout', '/robots.txt'];

function isPublicAsset(pathname) {
  if (PUBLIC_PATHS.includes(pathname)) return true;
  if (pathname.startsWith('/_vercel/')) return true;
  return false;
}

function getCookie(request, name) {
  const header = request.headers.get('cookie') || '';
  const match = header.match(new RegExp('(?:^|;\\s*)' + name + '=([^;]*)'));
  return match ? decodeURIComponent(match[1]) : null;
}

async function verifySession(cookieValue, secret) {
  if (!cookieValue || !secret) return false;
  const idx = cookieValue.lastIndexOf('.');
  if (idx === -1) return false;
  const payload = cookieValue.substring(0, idx);
  const sig = cookieValue.substring(idx + 1);
  const encoder = new TextEncoder();
  try {
    const key = await crypto.subtle.importKey(
      'raw', encoder.encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']
    );
    const sigBuf = await crypto.subtle.sign('HMAC', key, encoder.encode(payload));
    const expected = btoa(String.fromCharCode(...new Uint8Array(sigBuf)))
      .replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
    if (sig.length !== expected.length) return false;
    let diff = 0;
    for (let i = 0; i < sig.length; i++) diff |= sig.charCodeAt(i) ^ expected.charCodeAt(i);
    return diff === 0;
  } catch {
    return false;
  }
}

export default async function middleware(request) {
  const url = new URL(request.url);
  const pathname = url.pathname;

  if (pathname === '/login' || pathname === '/login.html') {
    const cookie = getCookie(request, 'fp_session');
    const secret = process.env.AUTH_SECRET;
    if (cookie && secret && await verifySession(cookie, secret)) {
      return Response.redirect(new URL('/', url.origin), 302);
    }
    return new Response(null, {
      status: 200,
      headers: { 'x-middleware-next': '1', 'X-Robots-Tag': 'noindex, nofollow' }
    });
  }

  if (isPublicAsset(pathname)) {
    return new Response(null, {
      status: 200,
      headers: { 'x-middleware-next': '1', 'X-Robots-Tag': 'noindex, nofollow' }
    });
  }

  const cookie = getCookie(request, 'fp_session');
  const secret = process.env.AUTH_SECRET;

  if (!cookie || !secret || !(await verifySession(cookie, secret))) {
    return Response.redirect(new URL('/login.html', url.origin), 302);
  }

  return new Response(null, {
    status: 200,
    headers: { 'x-middleware-next': '1', 'X-Robots-Tag': 'noindex, nofollow' }
  });
}
