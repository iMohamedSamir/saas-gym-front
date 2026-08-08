'use client';

import { useEffect, useState, useCallback } from 'react';
import { Mail, Phone, Calendar, Check, X, Star, ArrowRight } from 'lucide-react';
import FaqAccordion from '@/components/FaqAccordion';
import MobileNav from '@/components/MobileNav';
import LangSwitcher from '@/components/LangSwitcher';
import { translations, Locale } from '@/lib/translations';

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

interface PricingFeature {
  label?: string;
  included?: boolean;
  tooltip?: string;
}

interface PricingPlan {
  id: string;
  title?: string;
  price?: string;
  yearlyPrice?: string;
  description?: string;
  isFeatured?: boolean;
  offerText?: string;
  buttonLabel?: string;
  buttonLink?: string;
  features?: PricingFeature[];
}

interface Feature {
  id: string;
  title?: string;
  isStarred?: boolean;
  description?: string;
}

interface Stat {
  id: string;
  value?: string;
  label?: string;
}

interface FaqItem {
  id: string;
  question?: string;
  answer?: string;
}

export default function HomeContent() {
  const [locale, setLocale] = useState<Locale>('ar');
  const [mounted, setMounted] = useState(false);

  const t = translations[locale];

  const updateLocale = useCallback((loc: Locale) => {
    setLocale(loc);
  }, []);

  useEffect(() => {
    const saved = (localStorage.getItem('locale') || 'ar') as Locale;
    setLocale(saved);
    setMounted(true);

    const handler = (e: Event) => {
      updateLocale((e as CustomEvent).detail);
    };
    window.addEventListener('localechange', handler);
    return () => window.removeEventListener('localechange', handler);
  }, [updateLocale]);

  if (!mounted) {
    // SSR placeholder — matches the Arabic layout
    return (
      <div className="min-h-screen bg-[#03010E] text-[#E5E5E5]">
        <div className="flex items-center justify-center h-screen">
          <div className="h-8 w-8 border-2 border-[#937AFF] border-t-transparent rounded-full animate-spin" />
        </div>
      </div>
    );
  }

  const isRTL = locale === 'ar';

  const navLinks = [
    { label: t.nav_features, href: '#features' },
    { label: t.nav_about, href: '#about' },
    { label: t.nav_pricing, href: '#pricing' },
    { label: t.nav_testimonials, href: '#testimonials' },
    { label: t.nav_faq, href: '#faq' },
    { label: t.nav_contact, href: '#contact' },
  ];

  const features: Feature[] = t.features_fallback as unknown as Feature[];
  const stats: Stat[] = t.stats_fallback as unknown as Stat[];
  const testimonials = t.testimonials_fallback;
  const faqItems: FaqItem[] = t.faq_fallback as unknown as FaqItem[];
  const pricingPlans: PricingPlan[] = t.pricing_fallback as unknown as PricingPlan[];

  return (
    <div className="min-h-screen bg-[#03010E] text-[#E5E5E5]">
      {/* ============================================================ */}
      {/* 1. HEADER                                                    */}
      {/* ============================================================ */}
      <header className="sticky top-0 z-40 w-full border-b border-[#202128] bg-[#03010E]/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 sm:h-18">
          {/* Logo */}
          <a href="/" className="text-[#937AFF] font-bold text-xl tracking-tight select-none">
            Automark
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-[#817E84] hover:text-[#E5E5E5] transition-colors duration-200"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <LangSwitcher />
            {/* Desktop CTA */}
            <a
              href="/admin"
              className="hidden lg:inline-flex items-center gap-2 bg-[#937AFF] hover:bg-[#7d5ff0] text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors duration-200"
            >
              {t.nav_getTemplate}
            </a>
          </div>

          {/* Mobile nav */}
          <MobileNav />
        </div>
      </header>

      <main>
        {/* ============================================================ */}
        {/* 2. HERO                                                     */}
        {/* ============================================================ */}
        <section className="relative overflow-hidden py-24 sm:py-32 lg:py-40">
          {/* Radial glow */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="h-[600px] w-[600px] rounded-full bg-[#937AFF]/15 blur-[140px]" />
          </div>

          <div className="relative max-w-7xl mx-auto px-6 text-center">
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight text-white"
              dangerouslySetInnerHTML={{ __html: t.hero_title }}
            />
            <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-[#817E84] leading-relaxed">
              {t.hero_subtitle}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 bg-[#937AFF] hover:bg-[#7d5ff0] text-white font-semibold px-8 py-3.5 rounded-lg transition-colors duration-200 shadow-lg shadow-[#937AFF]/25"
              >
                {t.hero_primaryBtn}
                <ArrowRight className={isRTL ? 'rotate-180 w-4 h-4' : 'w-4 h-4'} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 border border-[#202128] hover:border-[#937AFF]/50 text-white font-semibold px-8 py-3.5 rounded-lg transition-colors duration-200"
              >
                {t.hero_secondaryBtn}
              </a>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 3. STATS                                                     */}
        {/* ============================================================ */}
        {stats.length > 0 && (
          <section className="py-16 border-y border-[#202128] bg-[#0B0C17]/50">
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {stats.map((s) => (
                  <div key={s.id} className="text-center">
                    <div className="text-3xl sm:text-4xl font-bold text-[#937AFF]">{s.value}</div>
                    <div className="mt-2 text-sm text-[#817E84]">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ============================================================ */}
        {/* 4. MAIN FEATURES — "Follow-up Gap"                          */}
        {/* ============================================================ */}
        <section className="py-20 sm:py-28">
          <div className="max-w-7xl mx-auto px-6">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center"
              dangerouslySetInnerHTML={{ __html: t.mainFeatures_title }}
            />
            <p className="mt-6 text-lg text-[#817E84] text-center max-w-3xl mx-auto">
              {t.mainFeatures_content}
            </p>

            <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {t.mainFeatures_items.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-[#0B0C17] border border-[#202128] rounded-lg px-4 py-3"
                >
                  <X className="w-5 h-5 text-red-400 shrink-0" />
                  <span className="text-sm text-[#E5E5E5]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 5. VALUE PROPS                                               */}
        {/* ============================================================ */}
        <section className="py-20 sm:py-28 bg-[#0B0C17]/30">
          <div className="max-w-7xl mx-auto px-6">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center"
              dangerouslySetInnerHTML={{ __html: t.valueProps_title }}
            />
            <p className="mt-6 text-lg text-[#817E84] text-center max-w-3xl mx-auto">
              {t.valueProps_content}
            </p>

            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {t.valueProps_values.map((val, i) => {
                const icons = ['/images/value-proposition/values-icon-1.svg', '/images/value-proposition/values-icon-2.svg', '/images/value-proposition/values-icon-3.svg', '/images/value-proposition/values-icon-4.svg'];
                return (
                  <div
                    key={i}
                    className="group relative bg-[#0B0C17] border border-[#202128] rounded-2xl p-6 hover:border-[#937AFF]/50 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-lg bg-[#937AFF]/10 flex items-center justify-center mb-4">
                      <img src={icons[i]} alt="" className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">{val}</h3>
                  </div>
                );
              })}
            </div>

            {/* Dashboard mockup */}
            <div className="mt-16 relative rounded-2xl overflow-hidden border border-[#202128]">
              <img
                src="/images/features/dashboard-mockup.png"
                alt="Dashboard"
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 6. FEATURES GRID                                             */}
        {/* ============================================================ */}
        <section id="features" className="py-20 sm:py-28 bg-zinc-900/30">
          <div className="max-w-7xl mx-auto px-6">
            <h2
              className="text-3xl sm:text-4xl font-bold text-white text-center"
              dangerouslySetInnerHTML={{ __html: t.features_title }}
            />
            <p className="mt-4 text-[#817E84] text-center max-w-2xl mx-auto">
              {t.features_content}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {(features.length
                ? features
                : [
                    { id: 'f1', title: 'Lead Capture', isStarred: true, description: 'Automatically capture leads from all channels.' },
                    { id: 'f2', title: 'Review Generator', isStarred: false, description: 'Get 5-star reviews automatically.' },
                    { id: 'f3', title: 'Missed Call Responder', isStarred: false, description: 'Instant auto-respond to missed calls.' },
                    { id: 'f4', title: 'Appointment Scheduler', isStarred: false, description: 'Let customers book 24/7.' },
                    { id: 'f5', title: 'Unified Inbox', isStarred: true, description: 'All messages in one place.' },
                    { id: 'f6', title: 'Smart Database', isStarred: false, description: 'Track every interaction.' },
                  ]
              ).map((f: Feature) => (
                <div
                  key={f.id}
                  className={`relative bg-[#0B0C17] border rounded-2xl p-6 transition-all duration-300 hover:border-[#937AFF]/50 ${f.isStarred ? 'border-[#937AFF]/30' : 'border-[#202128]'}`}
                >
                  {f.isStarred && (
                    <span className="absolute top-4 end-4">
                      <Star className="w-4 h-4 text-[#937AFF] fill-[#937AFF]" />
                    </span>
                  )}
                  <div className="w-10 h-10 rounded-lg bg-[#937AFF]/10 flex items-center justify-center mb-4">
                    <img src="/images/features-menu-icon.svg" alt="" className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{f.title}</h3>
                  <p className="text-sm text-[#817E84]">{(f as any).description || ''}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 7. OUR STORY / TEAM                                          */}
        {/* ============================================================ */}
        <section id="about" className="py-20 sm:py-28">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-white text-center" dangerouslySetInnerHTML={{ __html: t.ourStory_title }} />
            <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-[#817E84] leading-relaxed">{t.ceo_letter}</p>
                <ul className="mt-8 space-y-4">
                  {t.ceo_letterPoints.map((pt, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-[#937AFF] shrink-0" />
                      <span className="text-white">{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <img
                  src="/images/avatar-lg.png"
                  alt={t.ceo_name}
                  className="w-full max-w-sm mx-auto rounded-2xl"
                />
                <div className="mt-4 text-center">
                  <p className="font-semibold text-white text-lg">{t.ceo_name}</p>
                  <p className="text-sm text-[#817E84]">{t.ceo_role}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 8. PRICING                                                   */}
        {/* ============================================================ */}
        <section id="pricing" className="py-20 sm:py-28 bg-[#0B0C17]/30">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-white text-center" dangerouslySetInnerHTML={{ __html: t.pricing_title }} />
            <p className="mt-4 text-[#817E84] text-center max-w-2xl mx-auto">{t.pricing_content}</p>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              {(pricingPlans.length
                ? pricingPlans
                : [
                    {
                      id: 'p1', title: 'Essentials', price: '97', yearlyPrice: '970',
                      description: 'Core necessities for organizing leads.',
                      isFeatured: false, buttonLabel: 'Start Free Trial', buttonLink: '#contact',
                      features: [
                        { label: 'Unified Lead Inbox', included: true },
                        { label: 'Missed Call Auto-Responder', included: true },
                        { label: 'Autopilot Review Generator', included: true },
                        { label: '24/7 Appointment Scheduler', included: false },
                        { label: 'Automated Follow-Up Campaigns', included: false },
                      ],
                    },
                    {
                      id: 'p2', title: 'Growth', price: '297', yearlyPrice: '2970',
                      description: 'Everything for complete autopilot growth.',
                      isFeatured: true, offerText: 'Most Popular', buttonLabel: 'Start Free Trial', buttonLink: '#contact',
                      features: [
                        { label: 'Unified Lead Inbox & Reviews', included: true },
                        { label: '24/7 Appointment Scheduler', included: true },
                        { label: 'Automated Follow-Up Campaigns', included: true },
                        { label: 'High-Converting Websites & Funnels', included: true },
                        { label: 'Advanced API Integrations', included: false },
                      ],
                    },
                    {
                      id: 'p3', title: 'Scale', price: '497', yearlyPrice: '4970',
                      description: 'Total control to scale multiple locations.',
                      isFeatured: false, buttonLabel: 'Start Free Trial', buttonLink: '#contact',
                      features: [
                        { label: 'Everything in Growth', included: true },
                        { label: 'Unlimited Social Media Posting', included: true },
                        { label: 'Advanced API Integrations', included: true },
                        { label: 'Multi-Location Support', included: true },
                        { label: 'Dedicated Account Manager', included: true },
                      ],
                    },
                  ]
              ).map((plan: PricingPlan) => (
                <div
                  key={plan.id}
                  className={`relative rounded-2xl p-8 border transition-all duration-300 ${
                    plan.isFeatured
                      ? 'bg-[#937AFF]/10 border-[#937AFF]/50 shadow-lg shadow-[#937AFF]/10'
                      : 'bg-[#0B0C17] border-[#202128] hover:border-[#937AFF]/30'
                  }`}
                >
                  {plan.offerText && (
                    <span className="absolute -top-3 start-4 bg-[#937AFF] text-white text-xs font-bold px-3 py-1 rounded-full">
                      {plan.offerText}
                    </span>
                  )}
                  <h3 className="text-xl font-bold text-white">{plan.title}</h3>
                  <p className="mt-2 text-sm text-[#817E84]">{plan.description}</p>
                  <div className="mt-6 flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-white">${plan.price}</span>
                    <span className="text-sm text-[#817E84]">{t.pricing_monthly}</span>
                  </div>
                  <ul className="mt-8 space-y-3">
                    {plan.features?.map((feat, fi) => (
                      <li key={fi} className="flex items-center gap-3">
                        {feat.included ? (
                          <Check className="w-5 h-5 text-[#937AFF] shrink-0" />
                        ) : (
                          <X className="w-5 h-5 text-[#817E84] shrink-0" />
                        )}
                        <span className={`text-sm ${feat.included ? 'text-[#E5E5E5]' : 'text-[#817E84]'}`}>{feat.label}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={plan.buttonLink || '#contact'}
                    className={`mt-8 block text-center font-semibold py-3 rounded-lg transition-colors duration-200 ${
                      plan.isFeatured
                        ? 'bg-[#937AFF] hover:bg-[#7d5ff0] text-white'
                        : 'border border-[#202128] hover:border-[#937AFF]/50 text-white'
                    }`}
                  >
                    {plan.buttonLabel}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 9. TESTIMONIAL QUOTE                                         */}
        {/* ============================================================ */}
        <section id="testimonials" className="py-20 sm:py-28">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white" dangerouslySetInnerHTML={{ __html: t.testimonial_title }} />
            <blockquote className="mt-12">
              <p className="text-2xl sm:text-3xl font-medium text-[#E5E5E5] leading-relaxed italic">
                &ldquo;{t.testimonial_quote}&rdquo;
              </p>
              {t.singleTestimonial_name && (
                <div className="mt-8 flex flex-col items-center">
                  <img src="/images/avatar.png" alt={t.singleTestimonial_name} className="w-14 h-14 rounded-full" />
                  <p className="mt-3 font-semibold text-white">{t.singleTestimonial_name}</p>
                  <p className="text-sm text-[#817E84]">{t.singleTestimonial_company}</p>
                </div>
              )}
              {t.singleTestimonial_stats && t.singleTestimonial_stats.length > 0 && (
                <div className="mt-10 grid grid-cols-3 gap-6">
                  {t.singleTestimonial_stats.map((stat, i) => (
                    <div key={i}>
                      <div className="text-2xl sm:text-3xl font-bold text-[#937AFF]">{stat.value}</div>
                      <div className="text-sm text-[#817E84]">{stat.label}</div>
                    </div>
                  ))}
                </div>
              )}
            </blockquote>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 10. TESTIMONIALS CARDS                                       */}
        {/* ============================================================ */}
        <section className="py-20 sm:py-28 bg-[#0B0C17]/30">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((tm: any) => (
                <div key={tm.id} className="bg-[#0B0C17] border border-[#202128] rounded-2xl p-6 hover:border-[#937AFF]/30 transition-all duration-300">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-[#E5E5E5] leading-relaxed">{tm.content}</p>
                  <div className="mt-6 flex items-center gap-3">
                    <img src={tm.avatar} alt={tm.name} className="w-10 h-10 rounded-full" />
                    <div>
                      <p className="font-semibold text-white text-sm">{tm.name}</p>
                      <p className="text-xs text-[#817E84]">{tm.designation}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 11. GROWTH PROCESS / HOW IT WORKS                            */}
        {/* ============================================================ */}
        <section className="py-20 sm:py-28">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-white text-center" dangerouslySetInnerHTML={{ __html: t.growthProcess_title }} />
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              {(t.growthProcess_steps.length
                ? t.growthProcess_steps
                : [
                    { stepNumber: '1', title: 'Start Your Trial', content: 'Sign up for a free trial.' },
                    { stepNumber: '2', title: 'Connect Your Business', content: 'Forward your calls, plug in social accounts.' },
                    { stepNumber: '3', title: 'Scale on Autopilot', content: 'Watch your calendar fill up.' },
                  ]
              ).map((step: any, i: number) => (
                <div key={i} className="relative bg-[#0B0C17] border border-[#202128] rounded-2xl p-8 text-center hover:border-[#937AFF]/30 transition-all duration-300">
                  <div className="w-12 h-12 rounded-full bg-[#937AFF]/20 text-[#937AFF] flex items-center justify-center mx-auto text-xl font-bold">
                    {step.stepNumber}
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-white">{step.title}</h3>
                  <p className="mt-3 text-[#817E84]">{step.content}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 bg-[#937AFF] hover:bg-[#7d5ff0] text-white font-semibold px-8 py-3.5 rounded-lg transition-colors duration-200 shadow-lg shadow-[#937AFF]/25"
              >
                {t.growthProcess_btn}
                <ArrowRight className={isRTL ? 'rotate-180 w-4 h-4' : 'w-4 h-4'} />
              </a>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 12. FAQ                                                      */}
        {/* ============================================================ */}
        <section id="faq" className="py-20 sm:py-28 bg-[#0B0C17]/30">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-white text-center" dangerouslySetInnerHTML={{ __html: t.faq_title }} />
            <p className="mt-4 text-[#817E84] text-center">{t.faq_content}</p>

            <div className="mt-12">
              <FaqAccordion
                items={faqItems.length
                  ? faqItems
                  : t.faq_fallback as unknown as FaqItem[]}
              />
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 13. INTEGRATIONS                                             */}
        {/* ============================================================ */}
        <section className="py-20 sm:py-28">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white" dangerouslySetInnerHTML={{ __html: t.integrations_title }} />
            <div className="mt-12 flex flex-wrap items-center justify-center gap-8 opacity-60">
              {['slack', 'youtube', 'mailchimp', 'snapchat', 'fastapi', 'airtable', 'asana', 'zendesk'].map((name) => (
                <img
                  key={name}
                  src={`/images/integrations/${name}.png`}
                  alt={name}
                  className="h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                />
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 14. CTA                                                      */}
        {/* ============================================================ */}
        <section className="py-20 sm:py-28 bg-[#0B0C17]/30">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white" dangerouslySetInnerHTML={{ __html: t.cta_title }} />
            <p className="mt-6 text-lg text-[#817E84] max-w-2xl mx-auto">{t.cta_description}</p>
            <a
              href="#pricing"
              className="mt-10 inline-flex items-center gap-2 bg-[#937AFF] hover:bg-[#7d5ff0] text-white font-semibold px-8 py-3.5 rounded-lg transition-colors duration-200 shadow-lg shadow-[#937AFF]/25"
            >
              {t.cta_button}
              <ArrowRight className={isRTL ? 'rotate-180 w-4 h-4' : 'w-4 h-4'} />
            </a>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 15. CONTACT                                                  */}
        {/* ============================================================ */}
        <section id="contact" className="py-20 sm:py-28">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white">{t.contact_title}</h2>
                <p className="mt-4 text-[#817E84]">{t.contact_subtitle}</p>

                <div className="mt-10 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#937AFF]/10 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-[#937AFF]" />
                    </div>
                    <div>
                      <p className="text-sm text-[#817E84]">{t.contact_email}</p>
                      <p className="text-white">hello@automark.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#937AFF]/10 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-[#937AFF]" />
                    </div>
                    <div>
                      <p className="text-sm text-[#817E84]">{t.contact_phone}</p>
                      <p className="text-white" dir="ltr">+1 (800) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#937AFF]/10 flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-[#937AFF]" />
                    </div>
                    <div>
                      <p className="text-sm text-[#817E84]">{t.contact_address}</p>
                      <p className="text-white">{t.contact_addressValue}</p>
                    </div>
                  </div>
                </div>
              </div>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm text-[#817E84] mb-2">{t.contact_name}</label>
                  <input
                    type="text"
                    className="w-full bg-[#0B0C17] border border-[#202128] rounded-lg px-4 py-3 text-white placeholder-[#817E84] focus:outline-none focus:border-[#937AFF] transition-colors"
                    placeholder={t.contact_name}
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-[#817E84] mb-2">{t.contact_email}</label>
                    <input
                      type="email"
                      className="w-full bg-[#0B0C17] border border-[#202128] rounded-lg px-4 py-3 text-white placeholder-[#817E84] focus:outline-none focus:border-[#937AFF] transition-colors"
                      placeholder={t.contact_email}
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-[#817E84] mb-2">{t.contact_phone}</label>
                    <input
                      type="tel"
                      className="w-full bg-[#0B0C17] border border-[#202128] rounded-lg px-4 py-3 text-white placeholder-[#817E84] focus:outline-none focus:border-[#937AFF] transition-colors"
                      placeholder={t.contact_phone}
                      dir="ltr"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-[#817E84] mb-2">{t.contact_message}</label>
                  <textarea
                    rows={5}
                    className="w-full bg-[#0B0C17] border border-[#202128] rounded-lg px-4 py-3 text-white placeholder-[#817E84] focus:outline-none focus:border-[#937AFF] transition-colors resize-none"
                    placeholder={t.contact_message}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#937AFF] hover:bg-[#7d5ff0] text-white font-semibold py-3.5 rounded-lg transition-colors duration-200"
                >
                  {t.contact_send}
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* ============================================================ */}
      {/* FOOTER                                                       */}
      {/* ============================================================ */}
      <footer className="border-t border-[#202128] bg-[#03010E] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="md:col-span-1">
              <a href="/" className="text-[#937AFF] font-bold text-xl">Automark</a>
              <p className="mt-4 text-sm text-[#817E84]">{t.footer_description}</p>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-semibold text-white mb-4">{t.footer_product}</h4>
              <ul className="space-y-2">
                {navLinks.map((l) => (
                  <li key={l.href}><a href={l.href} className="text-sm text-[#817E84] hover:text-[#937AFF] transition-colors">{l.label}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">{t.footer_company}</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="text-sm text-[#817E84] hover:text-[#937AFF] transition-colors">{t.nav_about}</a></li>
                <li><a href="#contact" className="text-sm text-[#817E84] hover:text-[#937AFF] transition-colors">{t.footer_contact}</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">{t.footer_legal}</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-[#817E84] hover:text-[#937AFF] transition-colors">{t.footer_privacy}</a></li>
                <li><a href="#" className="text-sm text-[#817E84] hover:text-[#937AFF] transition-colors">{t.footer_terms}</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-[#202128] text-center text-sm text-[#817E84]">
            {t.footer_copyright} {t.footer_allRights}
          </div>
        </div>
      </footer>
    </div>
  );
}
