'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Features', href: '#features' },
  { label: 'About', href: '#about' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setOpen(true)}
        className="text-[#E5E5E5] p-2 hover:text-[#937AFF] transition-colors"
        aria-label="Open menu"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-300 ${
          open
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />

        {/* Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-72 bg-[#0B0C17] border-l border-[#202128] transition-transform duration-300 ease-in-out ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between p-6 border-b border-[#202128]">
            <span className="text-[#937AFF] font-bold text-lg">Automark</span>
            <button
              onClick={() => setOpen(false)}
              className="text-[#E5E5E5] p-1 hover:text-[#FF5353] transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="flex flex-col p-6 gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="text-[#E5E5E5] hover:text-[#937AFF] hover:bg-[#937AFF]/10 px-4 py-3 rounded-lg transition-colors duration-200 font-medium"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-4 pt-4 border-t border-[#202128]">
              <a
                href="/admin"
                className="block text-center bg-[#937AFF] hover:bg-[#7d5ff0] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
              >
                Get This Template
              </a>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
