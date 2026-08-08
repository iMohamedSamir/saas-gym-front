import { NextRequest, NextResponse } from 'next/server';
import { verifyToken } from '@/lib/auth';

/* ------------------------------------------------------------------ */
/*  Auth guard — runs on every request                                 */
/* ------------------------------------------------------------------ */
async function guard(req: NextRequest): Promise<NextResponse | null> {
  const token = req.cookies.get('admin_token')?.value;
  if (!token) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const user = await verifyToken(token);
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  return null;
}

/* ------------------------------------------------------------------ */
/*  Lazy Payload import (avoids bundling libsql at build time)        */
/* ------------------------------------------------------------------ */
let _payload: any = null;
async function getPayload() {
  if (!_payload) {
    const { getPayload: gp } = await import('payload');
    const config = (await import('@/payload.config')).default;
    _payload = await gp({ config });
  }
  return _payload;
}

/* ------------------------------------------------------------------ */
/*  GET                                                                */
/* ------------------------------------------------------------------ */
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string[] }> }
) {
  const blocked = await guard(req);
  if (blocked) return blocked;

  const { slug } = await params;
  const collection = slug[0];
  const id = slug[1];

  if (!collection) {
    return NextResponse.json({ error: 'Collection required' }, { status: 400 });
  }

  try {
    const payload = await getPayload();
    const url = new URL(req.url);
    const limit = parseInt(url.searchParams.get('limit') || '100');
    const sort = url.searchParams.get('sort') || 'createdAt';
    const page = parseInt(url.searchParams.get('page') || '1');

    if (id) {
      const doc = await payload.findByID({ collection, id });
      return NextResponse.json(doc);
    }

    const result = await payload.find({ collection, limit, sort, page });
    return NextResponse.json(result);
  } catch (e: any) {
    return NextResponse.json({ error: e.message || 'Not found' }, { status: 404 });
  }
}

/* ------------------------------------------------------------------ */
/*  POST                                                               */
/* ------------------------------------------------------------------ */
export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string[] }> }
) {
  const blocked = await guard(req);
  if (blocked) return blocked;

  const { slug } = await params;
  const collection = slug[0];

  if (!collection) {
    return NextResponse.json({ error: 'Collection required' }, { status: 400 });
  }

  try {
    const payload = await getPayload();
    const body = await req.json();
    const doc = await payload.create({ collection, data: body });
    return NextResponse.json(doc, { status: 201 });
  } catch (e: any) {
    return NextResponse.json({ error: e.message || 'Create failed' }, { status: 400 });
  }
}

/* ------------------------------------------------------------------ */
/*  PATCH                                                              */
/* ------------------------------------------------------------------ */
export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string[] }> }
) {
  const blocked = await guard(req);
  if (blocked) return blocked;

  const { slug } = await params;
  const collection = slug[0];
  const id = slug[1];

  if (!collection || !id) {
    return NextResponse.json({ error: 'Collection and ID required' }, { status: 400 });
  }

  try {
    const payload = await getPayload();
    const body = await req.json();
    const doc = await payload.update({ collection, id, data: body });
    return NextResponse.json(doc);
  } catch (e: any) {
    return NextResponse.json({ error: e.message || 'Update failed' }, { status: 400 });
  }
}

/* ------------------------------------------------------------------ */
/*  DELETE                                                             */
/* ------------------------------------------------------------------ */
export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string[] }> }
) {
  const blocked = await guard(req);
  if (blocked) return blocked;

  const { slug } = await params;
  const collection = slug[0];
  const id = slug[1];

  if (!collection || !id) {
    return NextResponse.json({ error: 'Collection and ID required' }, { status: 400 });
  }

  try {
    const payload = await getPayload();
    await payload.delete({ collection, id });
    return NextResponse.json({ success: true });
  } catch (e: any) {
    return NextResponse.json({ error: e.message || 'Delete failed' }, { status: 400 });
  }
}
