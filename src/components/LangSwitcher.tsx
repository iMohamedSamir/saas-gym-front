'use client';

import { useEffect, useState } from 'react';
import { Locale } from '@/lib/translations';

export default function LangSwitcher() {
  const [locale, setLocale] = useState<Locale | null>(null);

  useEffect(() => {
    const saved = (localStorage.getItem('locale') || 'ar') as Locale;
    setLocale(saved);
    applyLocale(saved);
  }, []);

  function applyLocale(loc: Locale) {
    const html = document.documentElement;
    if (loc === 'ar') {
      html.setAttribute('dir', 'rtl');
      html.setAttribute('lang', 'ar');
    } else {
      html.setAttribute('dir', 'ltr');
      html.setAttribute('lang', 'en');
    }
    // Dispatch custom event for page content to react
    window.dispatchEvent(new CustomEvent('localechange', { detail: loc }));
  }

  function toggle() {
    const next: Locale = locale === 'ar' ? 'en' : 'ar';
    setLocale(next);
    localStorage.setItem('locale', next);
    applyLocale(next);
  }

  if (!locale) return null;

  return (
    <button
      onClick={toggle}
      className="inline-flex items-center gap-1.5 text-sm text-[#817E84] hover:text-[#E5E5E5] transition-colors duration-200 px-3 py-1.5 rounded-lg border border-[#202128] hover:border-[#937AFF]/50"
    >
      <span>{locale === 'ar' ? '🇸🇦' : '🇬🇧'}</span>
      <span>{locale === 'ar' ? 'English' : 'العربية'}</span>
    </button>
  );
}
