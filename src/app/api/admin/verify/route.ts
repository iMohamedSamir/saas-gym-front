import { NextRequest, NextResponse } from 'next/server';
import { verifyToken } from '@/lib/auth';

export async function GET(req: NextRequest) {
  const token = req.cookies.get('admin_token')?.value;
  if (!token) {
    return NextResponse.json({ authenticated: false }, { status: 401 });
  }

  const user = await verifyToken(token);
  if (!user) {
    return NextResponse.json({ authenticated: false }, { status: 401 });
  }

  return NextResponse.json({ authenticated: true, email: user.email, role: user.role });
}

export async function POST(req: NextRequest) {
  // Logout: clear cookie
  const res = NextResponse.json({ success: true });
  res.cookies.delete('admin_token');
  return res;
}
