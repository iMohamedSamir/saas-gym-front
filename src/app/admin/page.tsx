'use client';

import { useState, useEffect, useCallback } from 'react';
import { translations, type Locale, type TranslationKey } from '@/lib/translations';

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */
interface Doc { id: string; [key: string]: any }

interface FieldDef {
  name: string;
  type: string;
  labelKey: TranslationKey;
  options?: { value: string; labelKey: TranslationKey }[];
}

interface CollectionDef {
  slug: string;
  labelKey: TranslationKey;
  icon: string;
  fields: FieldDef[];
}

const collections: CollectionDef[] = [
  { slug: 'testimonials', labelKey: 'admin_testimonials', icon: '💬', fields: [
    { name: 'name', type: 'text', labelKey: 'admin_fieldName' },
    { name: 'designation', type: 'text', labelKey: 'admin_fieldDesignation' },
    { name: 'content', type: 'textarea', labelKey: 'admin_fieldContent' },
    { name: 'avatar', type: 'text', labelKey: 'admin_fieldAvatar' },
  ]},
  { slug: 'faq-items', labelKey: 'admin_faqItems', icon: '❓', fields: [
    { name: 'question', type: 'text', labelKey: 'admin_fieldQuestion' },
    { name: 'answer', type: 'textarea', labelKey: 'admin_fieldAnswer' },
  ]},
  { slug: 'team-members', labelKey: 'admin_teamMembers', icon: '👥', fields: [
    { name: 'name', type: 'text', labelKey: 'admin_fieldName' },
    { name: 'role', type: 'text', labelKey: 'admin_fieldRole' },
    { name: 'image', type: 'text', labelKey: 'admin_fieldImage' },
  ]},
  { slug: 'pricing-plans', labelKey: 'admin_pricingPlans', icon: '💎', fields: [
    { name: 'title', type: 'text', labelKey: 'admin_fieldTitle' },
    { name: 'price', type: 'text', labelKey: 'admin_fieldPrice' },
    { name: 'yearlyPrice', type: 'text', labelKey: 'admin_fieldYearlyPrice' },
    { name: 'description', type: 'textarea', labelKey: 'admin_fieldDescription' },
    { name: 'isFeatured', type: 'checkbox', labelKey: 'admin_fieldFeatured' },
    { name: 'offerText', type: 'text', labelKey: 'admin_fieldOfferText' },
    { name: 'buttonLabel', type: 'text', labelKey: 'admin_fieldButtonLabel' },
  ]},
  { slug: 'features', labelKey: 'admin_features', icon: '⚡', fields: [
    { name: 'title', type: 'text', labelKey: 'admin_fieldTitle' },
    { name: 'description', type: 'textarea', labelKey: 'admin_fieldDescription' },
    { name: 'isStarred', type: 'checkbox', labelKey: 'admin_fieldStarred' },
    { name: 'category', type: 'select', labelKey: 'admin_fieldCategory', options: [
      { value: 'main', labelKey: 'admin_catMain' },
      { value: 'values', labelKey: 'admin_catValues' },
      { value: 'value-props', labelKey: 'admin_catValueProps' },
    ]},
  ]},
  { slug: 'stats', labelKey: 'admin_stats', icon: '📊', fields: [
    { name: 'value', type: 'text', labelKey: 'admin_fieldValue' },
    { name: 'label', type: 'text', labelKey: 'admin_fieldLabel' },
  ]},
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */
export default function AdminPage() {
  const [locale, setLocale] = useState<Locale>('ar');
  const t = useCallback((key: TranslationKey) => translations[locale][key], [locale]);

  const [authenticated, setAuthenticated] = useState<boolean | null>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [loginLoading, setLoginLoading] = useState(false);
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const [docs, setDocs] = useState<Doc[]>([]);
  const [editingDoc, setEditingDoc] = useState<Doc | null>(null);
  const [editData, setEditData] = useState<Record<string, any>>({});
  const [counts, setCounts] = useState<Record<string, number>>({});

  const isRtl = locale === 'ar';

  /* Sync locale from localStorage */
  useEffect(() => {
    const saved = localStorage.getItem('locale') as Locale | null;
    if (saved && (saved === 'ar' || saved === 'en')) setLocale(saved);
  }, []);

  /* Listen for locale changes from main site switcher */
  useEffect(() => {
    const handler = () => {
      const saved = localStorage.getItem('locale') as Locale | null;
      if (saved && (saved === 'ar' || saved === 'en')) setLocale(saved);
    };
    window.addEventListener('localechange', handler);
    return () => window.removeEventListener('localechange', handler);
  }, []);

  const toggleLocale = () => {
    const next: Locale = locale === 'ar' ? 'en' : 'ar';
    setLocale(next);
    localStorage.setItem('locale', next);
    document.documentElement.lang = next;
    document.documentElement.dir = next === 'ar' ? 'rtl' : 'ltr';
    window.dispatchEvent(new Event('localechange'));
  };

  /* Check session on mount */
  useEffect(() => {
    fetch('/api/admin/verify')
      .then(r => r.json())
      .then(data => setAuthenticated(data.authenticated === true))
      .catch(() => setAuthenticated(false));
  }, []);

  /* API helper */
  const api = useCallback((path: string, opts: RequestInit = {}) => {
    return fetch(`/api/admin/collections/${path}`, {
      ...opts,
      headers: { 'Content-Type': 'application/json', ...opts.headers as Record<string, string> },
      credentials: 'same-origin',
    });
  }, []);

  /* Login */
  const login = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');
    setLoginLoading(true);
    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'same-origin',
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (res.ok && data.error === 'Too many login attempts. Please try again later.') {
        setLoginError(t('admin_tooManyAttempts'));
      } else if (res.ok) {
        setAuthenticated(true);
        setEmail(''); setPassword('');
      } else {
        setLoginError(data.error === 'Too many login attempts. Please try again later.' ? t('admin_tooManyAttempts') : t('admin_invalidCredentials'));
      }
    } catch {
      setLoginError(t('admin_networkError'));
    } finally {
      setLoginLoading(false);
    }
  };

  /* Logout */
  const logout = async () => {
    await fetch('/api/admin/verify', { method: 'POST', credentials: 'same-origin' });
    setAuthenticated(false);
    setActiveSlug(null);
    setEditingDoc(null);
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

  useEffect(() => { if (authenticated) loadCounts(); }, [authenticated, loadCounts]);
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
    if (!confirm(t('admin_deleteConfirm'))) return;
    const res = await api(`${activeSlug}/${id}`, { method: 'DELETE' });
    if (res.ok) { loadDocs(activeSlug!); loadCounts(); }
  };

  const startEdit = (doc: Doc) => { setEditingDoc(doc); setEditData({ ...doc }); };
  const startCreate = () => { setEditingDoc(null); setEditData({ sortOrder: 0 }); };
  const cancelEdit = () => { setEditingDoc(null); setEditData({}); };

  /* ---- LOADING STATE ---- */
  if (authenticated === null) {
    return (
      <div className="min-h-screen bg-zinc-950 text-zinc-100 flex items-center justify-center">
        <div className="animate-pulse text-zinc-500">...</div>
      </div>
    );
  }

  /* ---- LOGIN SCREEN ---- */
  if (!authenticated) {
    return (
      <div className="min-h-screen bg-zinc-950 text-zinc-100 flex items-center justify-center" dir={isRtl ? 'rtl' : 'ltr'}>
        {/* Lang switcher top-right */}
        <button onClick={toggleLocale}
          className="fixed top-4 end-4 px-3 py-1.5 rounded-lg border border-zinc-700 bg-zinc-900 text-sm text-zinc-300 hover:bg-zinc-800 hover:text-white transition z-50">
          {locale === 'ar' ? 'EN' : 'عربي'}
        </button>
        <div className="w-full max-w-sm p-8 rounded-2xl border border-zinc-800 bg-zinc-900">
          <h1 className="text-2xl font-bold text-center mb-2">{t('admin_panelTitle')}</h1>
          <p className="text-sm text-zinc-400 text-center mb-8">{t('admin_signInTo')}</p>
          {loginError && <p className="mb-4 text-sm text-red-400 text-center bg-red-400/10 rounded-lg py-2 px-3">{loginError}</p>}
          <form onSubmit={login} className="space-y-4">
            <input
              value={email} onChange={e => setEmail(e.target.value)}
              type="email" required autoComplete="email"
              className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500"
              placeholder={t('admin_email')} />
            <input
              value={password} onChange={e => setPassword(e.target.value)}
              type="password" required autoComplete="current-password"
              className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500"
              placeholder={t('admin_password')} />
            <button
              type="submit" disabled={loginLoading}
              className="w-full bg-purple-600 hover:bg-purple-700 disabled:opacity-50 text-white font-semibold py-3 rounded-lg transition">
              {loginLoading ? t('admin_signingIn') : t('admin_signIn')}
            </button>
          </form>
        </div>
      </div>
    );
  }

  /* ---- ADMIN SCREEN ---- */
  const activeCol = collections.find(c => c.slug === activeSlug);
  const dir = isRtl ? 'rtl' : 'ltr';

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex" dir={dir}>
      {/* Sidebar */}
      <aside className="w-64 shrink-0 border-e border-zinc-800 bg-zinc-900/50 p-4 flex flex-col gap-1 overflow-y-auto">
        <div className="flex items-center justify-between mb-2">
          <a href="/" className="px-3 py-2 text-purple-400 font-bold text-lg">{t('admin_backToSite')}</a>
          <button onClick={toggleLocale}
            className="px-2 py-1 rounded-md border border-zinc-700 text-xs text-zinc-400 hover:bg-zinc-800 hover:text-white transition">
            {locale === 'ar' ? 'EN' : 'عربي'}
          </button>
        </div>
        <button onClick={() => { setActiveSlug(null); setEditingDoc(null); }}
          className={`px-3 py-2 rounded-lg text-start text-sm transition ${!activeSlug ? 'bg-purple-600/20 text-purple-400' : 'text-zinc-400 hover:bg-zinc-800 hover:text-zinc-200'}`}>
          {t('admin_dashboard')}
        </button>
        <div className="mt-4 mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-zinc-500">{t('admin_collections')}</div>
        {collections.map(c => (
          <button key={c.slug} onClick={() => { setActiveSlug(c.slug); setEditingDoc(null); }}
            className={`px-3 py-2 rounded-lg text-start text-sm transition flex items-center gap-2 ${activeSlug === c.slug ? 'bg-purple-600/20 text-purple-400' : 'text-zinc-400 hover:bg-zinc-800 hover:text-zinc-200'}`}>
            <span>{c.icon}</span>
            <span className="flex-1">{t(c.labelKey)}</span>
            <span className="text-xs text-zinc-500">{counts[c.slug] || 0}</span>
          </button>
        ))}
        <div className="mt-auto pt-4">
          <button onClick={logout} className="w-full px-3 py-2 rounded-lg text-start text-sm text-zinc-500 hover:bg-zinc-800 hover:text-zinc-300 transition">
            {t('admin_signOut')}
          </button>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 overflow-y-auto">
        {/* Dashboard */}
        {!activeSlug && (
          <div className="p-8">
            <h1 className="text-2xl font-bold mb-6">{t('admin_dashboard')}</h1>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {collections.map(c => (
                <button key={c.slug} onClick={() => setActiveSlug(c.slug)}
                  className="group flex items-center gap-4 rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 text-start transition hover:border-purple-600/50 hover:bg-zinc-900">
                  <span className="text-2xl">{c.icon}</span>
                  <div className="flex-1">
                    <div className="font-medium">{t(c.labelKey)}</div>
                    <div className="text-sm text-zinc-500">{counts[c.slug] || 0} {t('admin_documents')}</div>
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
              <h2 className="text-xl font-bold">{activeCol.icon} {t(activeCol.labelKey)}</h2>
              <button onClick={startCreate} className="bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition">{t('admin_addNew')}</button>
            </div>
            {docs.length === 0 ? (
              <p className="text-zinc-500 py-10 text-center">{t('admin_noDocuments')}</p>
            ) : (
              <div className="border border-zinc-800 rounded-xl overflow-hidden">
                <table className="w-full text-sm">
                  <thead><tr className="border-b border-zinc-800 bg-zinc-900/50">
                    {activeCol.fields.slice(0, 3).map(f => (
                      <th key={f.name} className="text-start px-4 py-3 text-xs font-semibold uppercase tracking-wider text-zinc-500">{t(f.labelKey)}</th>
                    ))}
                    <th className="px-4 py-3 text-end text-xs font-semibold uppercase tracking-wider text-zinc-500">{t('admin_actions')}</th>
                  </tr></thead>
                  <tbody>
                    {docs.map(doc => (
                      <tr key={doc.id} className="border-b border-zinc-800/50 hover:bg-zinc-900/30">
                        {activeCol.fields.slice(0, 3).map(f => (
                          <td key={f.name} className="px-4 py-3 text-zinc-300 max-w-xs truncate">{f.type === 'checkbox' ? (doc[f.name] ? '✅' : '❌') : (doc[f.name] || '—')}</td>
                        ))}
                        <td className="px-4 py-3 text-end">
                          <button onClick={() => startEdit(doc)} className="text-purple-400 hover:text-purple-300 text-xs font-medium ms-3">{t('admin_edit')}</button>
                          <button onClick={() => deleteDoc(doc.id)} className="text-red-400 hover:text-red-300 text-xs font-medium">{t('admin_delete')}</button>
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
              <h2 className="text-xl font-bold">{editingDoc ? t('admin_editTitle') : t('admin_newTitle')} {t(activeCol.labelKey)}</h2>
              <button onClick={cancelEdit} className="text-sm text-zinc-400 hover:text-zinc-200">{t('admin_cancel')}</button>
            </div>
            <div className="max-w-2xl space-y-4">
              {activeCol.fields.map(f => (
                <div key={f.name}>
                  <label className="block text-sm font-medium text-zinc-400 mb-1.5">{t(f.labelKey)}</label>
                  {f.type === 'textarea' ? (
                    <textarea value={editData[f.name] || ''} onChange={e => setEditData({ ...editData, [f.name]: e.target.value })}
                      rows={4} className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 resize-none" />
                  ) : f.type === 'checkbox' ? (
                    <input type="checkbox" checked={!!editData[f.name]} onChange={e => setEditData({ ...editData, [f.name]: e.target.checked })}
                      className="w-5 h-5 accent-purple-600" />
                  ) : f.type === 'select' ? (
                    <select value={editData[f.name] || ''} onChange={e => setEditData({ ...editData, [f.name]: e.target.value })}
                      className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500">
                      {f.options?.map(opt => (
                        <option key={opt.value} value={opt.value}>{t(opt.labelKey)}</option>
                      ))}
                    </select>
                  ) : (
                    <input type="text" value={editData[f.name] || ''} onChange={e => setEditData({ ...editData, [f.name]: e.target.value })}
                      className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500" />
                  )}
                </div>
              ))}
              <button onClick={saveDoc} className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-lg transition">
                {editingDoc ? t('admin_update') : t('admin_create')}
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
