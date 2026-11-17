import crypto from 'crypto';

const attempts = new Map();
const MAX_ATTEMPTS = 5;
const WINDOW_MS = 10 * 60 * 1000;
const BLOCK_MS = 15 * 60 * 1000;

function getClientIP(req) {
  return req.headers['x-forwarded-for']?.split(',')[0]?.trim()
    || req.headers['x-real-ip']
    || 'unknown';
}

function cleanupAttempts() {
  const now = Date.now();
  for (const [ip, data] of attempts) {
    if (data.blockedUntil && now > data.blockedUntil) {
      attempts.delete(ip);
    } else if (!data.blockedUntil) {
      data.timestamps = data.timestamps.filter(t => now - t < WINDOW_MS);
      if (data.timestamps.length === 0) attempts.delete(ip);
    }
  }
}

function isBlocked(ip) {
  const data = attempts.get(ip);
  if (!data) return false;
  if (data.blockedUntil) {
    if (Date.now() < data.blockedUntil) return true;
    attempts.delete(ip);
    return false;
  }
  return false;
}

function recordFailure(ip) {
  const now = Date.now();
  let data = attempts.get(ip);
  if (!data) {
    data = { timestamps: [], blockedUntil: null };
    attempts.set(ip, data);
  }
  data.timestamps = data.timestamps.filter(t => now - t < WINDOW_MS);
  data.timestamps.push(now);
  if (data.timestamps.length >= MAX_ATTEMPTS) {
    data.blockedUntil = now + BLOCK_MS;
  }
}

function timingSafeCompare(a, b) {
  const bufA = Buffer.from(a);
  const bufB = Buffer.from(b);
  if (bufA.length !== bufB.length) {
    crypto.timingSafeEqual(bufA, bufA);
    return false;
  }
  return crypto.timingSafeEqual(bufA, bufB);
}

function signPayload(payload, secret) {
  return crypto.createHmac('sha256', secret).update(payload).digest('base64url');
}

export default async function handler(req, res) {
  res.setHeader('X-Robots-Tag', 'noindex, nofollow');

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  cleanupAttempts();
  const ip = getClientIP(req);

  if (isBlocked(ip)) {
    return res.status(429).json({ error: 'Trop de tentatives. Réessayez dans quelques minutes.' });
  }

  const { password } = req.body || {};
  const expected = process.env.DASHBOARD_PASSWORD;
  const secret = process.env.AUTH_SECRET;

  if (!expected || !secret) {
    return res.status(500).json({ error: 'Configuration serveur manquante.' });
  }

  if (!password || !timingSafeCompare(password, expected)) {
    recordFailure(ip);
    return res.status(401).json({ error: 'Mot de passe incorrect.' });
  }

  attempts.delete(ip);

  const payload = JSON.stringify({ auth: true, iat: Date.now() });
  const sig = signPayload(payload, secret);
  const cookieValue = `${payload}.${sig}`;

  const maxAge = 7 * 24 * 60 * 60;
  res.setHeader('Set-Cookie', [
    `fp_session=${cookieValue}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=${maxAge}`
  ]);

  return res.status(200).json({ ok: true });
}
