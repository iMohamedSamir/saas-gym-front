import bcrypt from 'bcryptjs';
import { SignJWT, jwtVerify } from 'jose';

const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || 'change-this-to-a-strong-random-secret-in-production'
);

const TOKEN_EXPIRY = '8h';

export interface AdminUser {
  email: string;
  passwordHash: string;
  role: string;
}

/* ------------------------------------------------------------------ */
/*  Admin credentials store — in production, use a database            */
/* ------------------------------------------------------------------ */
const adminUsers: AdminUser[] = [];

export async function initAdminUser(email: string, password: string): Promise<void> {
  const existing = adminUsers.find((u) => u.email === email);
  if (existing) return;
  const hash = await bcrypt.hash(password, 12);
  adminUsers.push({ email, passwordHash: hash, role: 'admin' });
}

/* ------------------------------------------------------------------ */
/*  Password verification                                             */
/* ------------------------------------------------------------------ */
export async function verifyPassword(plain: string, hash: string): Promise<boolean> {
  return bcrypt.compare(plain, hash);
}

/* ------------------------------------------------------------------ */
/*  JWT helpers                                                       */
/* ------------------------------------------------------------------ */
export async function signToken(payload: { email: string; role: string }): Promise<string> {
  return new SignJWT({ ...payload })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime(TOKEN_EXPIRY)
    .setJti(crypto.randomUUID())
    .sign(JWT_SECRET);
}

export async function verifyToken(token: string): Promise<{ email: string; role: string } | null> {
  try {
    const { payload } = await jwtVerify(token, JWT_SECRET);
    return { email: payload.email as string, role: payload.role as string };
  } catch {
    return null;
  }
}

/* ------------------------------------------------------------------ */
/*  Authenticate by email + plain password                            */
/* ------------------------------------------------------------------ */
export async function authenticate(email: string, password: string): Promise<string | null> {
  const user = adminUsers.find((u) => u.email === email);
  if (!user) return null;
  const valid = await verifyPassword(password, user.passwordHash);
  if (!valid) return null;
  return signToken({ email: user.email, role: user.role });
}

/* ------------------------------------------------------------------ */
/*  Rate limiter (in-memory, per IP)                                   */
/* ------------------------------------------------------------------ */
const loginAttempts = new Map<string, { count: number; resetAt: number }>();
const MAX_ATTEMPTS = 5;
const WINDOW_MS = 15 * 60 * 1000; // 15 minutes

export function checkRateLimit(ip: string): { allowed: boolean; retryAfterMs: number } {
  const now = Date.now();
  let record = loginAttempts.get(ip);
  if (!record || now > record.resetAt) {
    loginAttempts.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return { allowed: true, retryAfterMs: 0 };
  }
  if (record.count >= MAX_ATTEMPTS) {
    return { allowed: false, retryAfterMs: record.resetAt - now };
  }
  record.count++;
  return { allowed: true, retryAfterMs: 0 };
}
