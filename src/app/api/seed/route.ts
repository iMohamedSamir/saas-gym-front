import { NextResponse } from 'next/server';

export async function POST() {
  try {
    // Dynamic import to avoid build-time bundling
    const { getPayload: gp } = await import('payload');
    const config = (await import('@/payload.config')).default;
    const payload = await gp({ config });

    const stats = await payload.find({ collection: 'stats' });
    if (stats.totalDocs > 0) {
      return NextResponse.json({ message: 'Already seeded' });
    }

    // Minimal seed - just stats as a health check
    await payload.create({ collection: 'stats', data: {
      value: '10,000+',
      label: { ar: '+10,000 عمل محلي يخدمهم', en: 'Local Businesses Served' },
      sortOrder: 1,
    }});

    return NextResponse.json({ message: 'Seed started', note: 'Run the full seed script for all data' });
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
