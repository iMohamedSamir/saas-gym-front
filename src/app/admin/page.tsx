import Link from "next/link";

const collections = [
  { slug: "testimonials", label: "Testimonials", icon: "💬" },
  { slug: "faq-items", label: "FAQ Items", icon: "❓" },
  { slug: "team-members", label: "Team Members", icon: "👥" },
  { slug: "pricing-plans", label: "Pricing Plans", icon: "💎" },
  { slug: "features", label: "Features", icon: "⚡" },
  { slug: "stats", label: "Stats", icon: "📊" },
];

const globals = [
  { slug: "homepage", label: "Homepage" },
  { slug: "site-config", label: "Site Config" },
];

export default async function AdminPage() {
  const baseUrl = process.env.NEXT_PUBLIC_PAYLOAD_URL || "";

  const collectionData = await Promise.all(
    collections.map(async (c) => {
      try {
        const res = await fetch(`${baseUrl}/api/${c.slug}?limit=0`);
        const data = await res.json();
        return { ...c, count: data.totalDocs || 0 };
      } catch {
        return { ...c, count: 0 };
      }
    })
  );

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="border-b border-zinc-800 bg-zinc-900/50">
        <div className="mx-auto max-w-6xl px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Payload CMS Admin</h1>
              <p className="mt-1 text-sm text-zinc-400">
                Manage your site content via the REST API
              </p>
            </div>
            <Link
              href="/"
              className="rounded-lg bg-purple-600 px-4 py-2 text-sm font-medium text-white hover:bg-purple-700 transition"
            >
              View Site
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-10">
        <h2 className="mb-4 text-lg font-semibold text-zinc-300">
          Collections
        </h2>
        <div className="mb-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {collectionData.map((c) => (
            <a
              key={c.slug}
              href={`/api/${c.slug}?limit=100`}
              target="_blank"
              className="group flex items-center gap-4 rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 transition hover:border-purple-600/50 hover:bg-zinc-900"
            >
              <span className="text-2xl">{c.icon}</span>
              <div className="flex-1">
                <div className="font-medium">{c.label}</div>
                <div className="text-sm text-zinc-500">
                  {c.count} document{c.count !== 1 ? "s" : ""}
                </div>
              </div>
              <span className="text-zinc-600 group-hover:text-purple-400">
                →
              </span>
            </a>
          ))}
        </div>

        <h2 className="mb-4 text-lg font-semibold text-zinc-300">
          Globals
        </h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {globals.map((g) => (
            <a
              key={g.slug}
              href={`/api/globals/${g.slug}`}
              target="_blank"
              className="group flex items-center gap-4 rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 transition hover:border-purple-600/50 hover:bg-zinc-900"
            >
              <span className="text-2xl">🌐</span>
              <div className="flex-1 font-medium">{g.label}</div>
              <span className="text-zinc-600 group-hover:text-purple-400">
                →
              </span>
            </a>
          ))}
        </div>

        <div className="mt-10 rounded-xl border border-amber-900/30 bg-amber-950/20 p-6">
          <h3 className="mb-2 font-semibold text-amber-400">
            API Access
          </h3>
          <p className="mb-3 text-sm text-zinc-400">
            All collections support full CRUD via the REST API. Click any
            collection above to view documents, or use these endpoints:
          </p>
          <div className="space-y-1 text-xs font-mono text-zinc-500">
            <div>GET /api/{"{collection}"} — List documents</div>
            <div>POST /api/{"{collection}"} — Create document</div>
            <div>GET /api/{"{collection}"}/{"{id}"} — Get document</div>
            <div>PATCH /api/{"{collection}"}/{"{id}"} — Update document</div>
            <div>DELETE /api/{"{collection}"}/{"{id}"} — Delete document</div>
          </div>
        </div>
      </div>
    </div>
  );
}