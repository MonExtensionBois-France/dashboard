export default function handler(req, res) {
  res.setHeader('X-Robots-Tag', 'noindex, nofollow');
  res.setHeader('Set-Cookie', [
    'fp_session=; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=0'
  ]);
  res.writeHead(302, { Location: '/login.html' });
  res.end();
}
