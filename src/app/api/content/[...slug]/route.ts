import { NextRequest, NextResponse } from 'next/server';

let _payload: any = null;
async function getPayload() {
  if (!_payload) {
    const { getPayload: gp } = await import('payload');
    const config = (await import('@/payload.config')).default;
    _payload = await gp({ config });
  }
  return _payload;
}

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string[] }> }
) {
  const { slug } = await params;
  const collection = slug[0];
  const id = slug[1];
  const url = new URL(req.url);
  const locale = url.searchParams.get('locale') || 'ar';
  const limit = parseInt(url.searchParams.get('limit') || '100');
  const sort = url.searchParams.get('sort') || 'sortOrder';

  if (!collection) {
    return NextResponse.json({ error: 'Collection required' }, { status: 400 });
  }

  // Only allow public collections
  const allowed = ['testimonials', 'faq-items', 'team-members', 'pricing-plans', 'features', 'stats'];
  if (!allowed.includes(collection)) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }

  try {
    const payload = await getPayload();
    if (id) {
      const doc = await payload.findByID({ collection, id, locale });
      return NextResponse.json(doc);
    }
    const result = await payload.find({ collection, limit, sort, locale, fallbackLocale: false });
    return NextResponse.json(result);
  } catch (e: any) {
    return NextResponse.json({ error: e.message || 'Not found' }, { status: 404 });
  }
}
