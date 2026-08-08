import { NextRequest, NextResponse } from 'next/server';
import { verifyToken } from '@/lib/auth';

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Only protect /admin and /api/admin/collections routes
  const isAdminPage = pathname === '/admin' || pathname === '/admin/';
  const isAdminApi = pathname.startsWith('/api/admin/collections');

  if (!isAdminPage && !isAdminApi) return NextResponse.next();

  // Allow login endpoint through
  if (pathname === '/api/admin/login' || pathname === '/api/admin/verify') {
    return NextResponse.next();
  }

  const token = req.cookies.get('admin_token')?.value;
  if (!token) {
    if (isAdminApi) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    return NextResponse.next(); // Let admin page render its login form
  }

  const user = await verifyToken(token);
  if (!user) {
    if (isAdminApi) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    // Clear invalid cookie and let login form show
    const res = NextResponse.next();
    res.cookies.delete('admin_token');
    return res;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/api/admin/:path*'],
};
