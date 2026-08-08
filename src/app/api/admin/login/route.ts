import { NextRequest, NextResponse } from 'next/server';
import { authenticate, checkRateLimit, initAdminUser } from '@/lib/auth';

// Initialize the admin user on first request
let initialized = false;
function ensureAdmin() {
  if (!initialized) {
    initAdminUser(
      process.env.ADMIN_EMAIL || 'admin@admin.com',
      process.env.ADMIN_PASSWORD || 'admin123456'
    );
    initialized = true;
  }
}

export async function POST(req: NextRequest) {
  ensureAdmin();

  // Rate limiting
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
  const { allowed, retryAfterMs } = checkRateLimit(ip);
  if (!allowed) {
    return NextResponse.json(
      { error: 'Too many login attempts. Please try again later.' },
      {
        status: 429,
        headers: { 'Retry-After': String(Math.ceil(retryAfterMs / 1000)) },
      }
    );
  }

  // Validate content type
  const ct = req.headers.get('content-type') || '';
  if (!ct.includes('application/json')) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }

  let body: { email?: string; password?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  const { email, password } = body;

  // Input validation
  if (!email || !password) {
    return NextResponse.json({ error: 'Email and password are required' }, { status: 400 });
  }

  if (typeof email !== 'string' || typeof password !== 'string') {
    return NextResponse.json({ error: 'Invalid input' }, { status: 400 });
  }

  if (password.length < 6) {
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
  }

  // Authenticate
  const token = await authenticate(email.trim().toLowerCase(), password);

  if (!token) {
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
  }

  // Set httpOnly, secure, sameSite cookie
  const res = NextResponse.json({ success: true });
  res.cookies.set('admin_token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    path: '/',
    maxAge: 8 * 60 * 60, // 8 hours
  });

  return res;
}