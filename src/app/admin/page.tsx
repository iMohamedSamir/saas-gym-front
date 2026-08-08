'use client';

import { useState, useEffect, useCallback } from 'react';

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */
interface Doc { id: string; [key: string]: any }

interface Collection {
  slug: string;
  label: string;
  icon: string;
  fields: { name: string; type: string; label: string }[];
}

const collections: Collection[] = [
  { slug: 'testimonials', label: 'Testimonials', icon: '💬', fields: [
    { name: 'name', type: 'text', label: 'Name' },
    { name: 'designation', type: 'text', label: 'Designation' },
    { name: 'content', type: 'textarea', label: 'Content' },
    { name: 'avatar', type: 'text', label: 'Avatar URL' },
  ]},
  { slug: 'faq-items', label: 'FAQ Items', icon: '❓', fields: [
    { name: 'question', type: 'text', label: 'Question' },
    { name: 'answer', type: 'textarea', label: 'Answer' },
  ]},
  { slug: 'team-members', label: 'Team Members', icon: '👥', fields: [
    { name: 'name', type: 'text', label: 'Name' },
    { name: 'role', type: 'text', label: 'Role' },
    { name: 'image', type: 'text', label: 'Image URL' },
  ]},
  { slug: 'pricing-plans', label: 'Pricing Plans', icon: '💎', fields: [
    { name: 'title', type: 'text', label: 'Title' },
    { name: 'price', type: 'text', label: 'Price' },
    { name: 'yearlyPrice', type: 'text', label: 'Yearly Price' },
    { name: 'description', type: 'textarea', label: 'Description' },
    { name: 'isFeatured', type: 'checkbox', label: 'Featured' },
    { name: 'offerText', type: 'text', label: 'Offer Text' },
    { name: 'buttonLabel', type: 'text', label: 'Button Label' },
  ]},
  { slug: 'features', label: 'Features', icon: '⚡', fields: [
    { name: 'title', type: 'text', label: 'Title' },
    { name: 'description', type: 'textarea', label: 'Description' },
    { name: 'isStarred', type: 'checkbox', label: 'Starred' },
    { name: 'category', type: 'select', label: 'Category' },
  ]},
  { slug: 'stats', label: 'Stats', icon: '📊', fields: [
    { name: 'value', type: 'text', label: 'Value' },
    { name: 'label', type: 'text', label: 'Label' },
  ]},
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */
export default function AdminPage() {
  const [token, setToken] = useState<string | null>(null);
  const [email, setEmail] = useState('admin@admin.com');
  const [password, setPassword] = useState('admin123456');
  const [loginError, setLoginError] = useState('');
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const [docs, setDocs] = useState<Doc[]>([]);
  const [editingDoc, setEditingDoc] = useState<Doc | null>(null);
  const [editData, setEditData] = useState<Record<string, any>>({});
  const [counts, setCounts] = useState<Record<string, number>>({});

  const api = useCallback((path: string, opts: RequestInit = {}) => {
    const headers: Record<string, string> = { 'Content-Type': 'application/json', ...opts.headers as Record<string, string> };
    if (token) headers['Authorization'] = `JWT ${token}`;
    return fetch(`/api/${path}`, { ...opts, headers });
  }, [token]);

  /* Login */
  const login = async () => {
    setLoginError('');
    if (email === 'admin@admin.com' && password === 'admin123456') {
      setToken('local-admin-session');
    } else {
      setLoginError('Invalid credentials');
    }
  };

  /* Load counts */
  const loadCounts = useCallback(async () => {
    const c: Record<string, number> = {};
    for (const col of collections) {
      try {
        const res = await api(`${col.slug}?limit=0`);
        const data = await res.json();
        c[col.slug] = data.totalDocs || 0;
      } catch { c[col.slug] = 0; }
    }
    setCounts(c);
  }, [api]);

  /* Load docs */
  const loadDocs = useCallback(async (slug: string) => {
    const res = await api(`${slug}?limit=100&sort=sortOrder`);
    const data = await res.json();
    setDocs(data.docs || []);
  }, [api]);

  useEffect(() => { if (token) loadCounts(); }, [token, loadCounts]);
  useEffect(() => { if (activeSlug) loadDocs(activeSlug); }, [activeSlug, loadDocs]);

  /* CRUD */
  const saveDoc = async () => {
    if (!editingDoc) {
      const res = await api(activeSlug!, { method: 'POST', body: JSON.stringify(editData) });
      if (res.ok) { setEditingDoc(null); setEditData({}); loadDocs(activeSlug!); loadCounts(); }
    } else {
      const res = await api(`${activeSlug}/${editingDoc.id}`, { method: 'PATCH', body: JSON.stringify(editData) });
      if (res.ok) { setEditingDoc(null); setEditData({}); loadDocs(activeSlug!); }
    }
  };

  const deleteDoc = async (id: string) => {
    if (!confirm('Delete this document?')) return;
    const res = await api(`${activeSlug}/${id}`, { method: 'DELETE' });
    if (res.ok) { loadDocs(activeSlug!); loadCounts(); }
  };

  const startEdit = (doc: Doc) => { setEditingDoc(doc); setEditData({ ...doc }); };
  const startCreate = () => { setEditingDoc(null); setEditData({ sortOrder: 0 }); };
  const cancelEdit = () => { setEditingDoc(null); setEditData({}); };

  /* ---- LOGIN SCREEN ---- */
  if (!token) {
    return (
      <div className="min-h-screen bg-zinc-950 text-zinc-100 flex items-center justify-center">
        <div className="w-full max-w-sm p-8 rounded-2xl border border-zinc-800 bg-zinc-900">
          <h1 className="text-2xl font-bold text-center mb-2">Payload CMS</h1>
          <p className="text-sm text-zinc-400 text-center mb-8">Sign in to admin panel</p>
          {loginError && <p className="mb-4 text-sm text-red-400 text-center">{loginError}</p>}
          <div className="space-y-4">
            <input value={email} onChange={e => setEmail(e.target.value)} className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500" placeholder="Email" />
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500" placeholder="Password" />
            <button onClick={login} className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-lg transition">Sign In</button>
          </div>
        </div>
      </div>
    );
  }

  /* ---- ADMIN SCREEN ---- */
  const activeCol = collections.find(c => c.slug === activeSlug);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex">
      {/* Sidebar */}
      <aside className="w-64 shrink-0 border-e border-zinc-800 bg-zinc-900/50 p-4 flex flex-col gap-1 overflow-y-auto">
        <a href="/" className="block px-3 py-2 text-purple-400 font-bold text-lg">← Back to Site</a>
        <button onClick={() => { setActiveSlug(null); setEditingDoc(null); }}
          className={`px-3 py-2 rounded-lg text-start text-sm transition ${!activeSlug ? 'bg-purple-600/20 text-purple-400' : 'text-zinc-400 hover:bg-zinc-800 hover:text-zinc-200'}`}>
          Dashboard
        </button>
        <div className="mt-4 mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-zinc-500">Collections</div>
        {collections.map(c => (
          <button key={c.slug} onClick={() => { setActiveSlug(c.slug); setEditingDoc(null); }}
            className={`px-3 py-2 rounded-lg text-start text-sm transition flex items-center gap-2 ${activeSlug === c.slug ? 'bg-purple-600/20 text-purple-400' : 'text-zinc-400 hover:bg-zinc-800 hover:text-zinc-200'}`}>
            <span>{c.icon}</span>
            <span className="flex-1">{c.label}</span>
            <span className="text-xs text-zinc-500">{counts[c.slug] || 0}</span>
          </button>
        ))}
        <div className="mt-auto pt-4">
          <button onClick={() => setToken(null)} className="w-full px-3 py-2 rounded-lg text-start text-sm text-zinc-500 hover:bg-zinc-800 hover:text-zinc-300 transition">
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 overflow-y-auto">
        {/* Dashboard */}
        {!activeSlug && (
          <div className="p-8">
            <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {collections.map(c => (
                <button key={c.slug} onClick={() => setActiveSlug(c.slug)}
                  className="group flex items-center gap-4 rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 text-start transition hover:border-purple-600/50 hover:bg-zinc-900">
                  <span className="text-2xl">{c.icon}</span>
                  <div className="flex-1">
                    <div className="font-medium">{c.label}</div>
                    <div className="text-sm text-zinc-500">{counts[c.slug] || 0} documents</div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Collection View */}
        {activeSlug && !editingDoc && activeCol && (
          <div className="p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">{activeCol.icon} {activeCol.label}</h2>
              <button onClick={startCreate} className="bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition">+ Add New</button>
            </div>
            {docs.length === 0 ? (
              <p className="text-zinc-500 py-10 text-center">No documents yet.</p>
            ) : (
              <div className="border border-zinc-800 rounded-xl overflow-hidden">
                <table className="w-full text-sm">
                  <thead><tr className="border-b border-zinc-800 bg-zinc-900/50">
                    {activeCol.fields.slice(0, 3).map(f => (
                      <th key={f.name} className="text-start px-4 py-3 text-xs font-semibold uppercase tracking-wider text-zinc-500">{f.label}</th>
                    ))}
                    <th className="px-4 py-3 text-end text-xs font-semibold uppercase tracking-wider text-zinc-500">Actions</th>
                  </tr></thead>
                  <tbody>
                    {docs.map(doc => (
                      <tr key={doc.id} className="border-b border-zinc-800/50 hover:bg-zinc-900/30">
                        {activeCol.fields.slice(0, 3).map(f => (
                          <td key={f.name} className="px-4 py-3 text-zinc-300 max-w-xs truncate">{f.type === 'checkbox' ? (doc[f.name] ? '✅' : '❌') : (doc[f.name] || '—')}</td>
                        ))}
                        <td className="px-4 py-3 text-end">
                          <button onClick={() => startEdit(doc)} className="text-purple-400 hover:text-purple-300 text-xs font-medium mr-3">Edit</button>
                          <button onClick={() => deleteDoc(doc.id)} className="text-red-400 hover:text-red-300 text-xs font-medium">Delete</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* Edit / Create Form */}
        {activeSlug && editingDoc !== null && activeCol && (
          <div className="p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">{editingDoc ? 'Edit' : 'New'} {activeCol.label}</h2>
              <button onClick={cancelEdit} className="text-sm text-zinc-400 hover:text-zinc-200">← Cancel</button>
            </div>
            <div className="max-w-2xl space-y-4">
              {activeCol.fields.map(f => (
                <div key={f.name}>
                  <label className="block text-sm font-medium text-zinc-400 mb-1.5">{f.label}</label>
                  {f.type === 'textarea' ? (
                    <textarea value={editData[f.name] || ''} onChange={e => setEditData({ ...editData, [f.name]: e.target.value })}
                      rows={4} className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 resize-none" />
                  ) : f.type === 'checkbox' ? (
                    <input type="checkbox" checked={!!editData[f.name]} onChange={e => setEditData({ ...editData, [f.name]: e.target.checked })}
                      className="w-5 h-5 accent-purple-600" />
                  ) : f.type === 'select' ? (
                    <select value={editData[f.name] || ''} onChange={e => setEditData({ ...editData, [f.name]: e.target.value })}
                      className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500">
                      <option value="main">Main Features</option>
                      <option value="values">Core Values</option>
                      <option value="value-props">Value Props</option>
                    </select>
                  ) : (
                    <input type="text" value={editData[f.name] || ''} onChange={e => setEditData({ ...editData, [f.name]: e.target.value })}
                      className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500" />
                  )}
                </div>
              ))}
              <button onClick={saveDoc} className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-lg transition">
                {editingDoc ? 'Update' : 'Create'}
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
