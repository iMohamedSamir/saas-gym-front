import payload from "payload";
import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";
import config from "./payload.config.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PUBLIC_DIR = path.join(__dirname, "../../public");

// Simple icon SVG map for react-icons referenced in features
const ICON_MAP: Record<string, string> = {
  FaBolt: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 text-[#937AFF]"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>`,
  FaBrain: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 text-[#937AFF]"><path d="M12 2a8 8 0 0 0-8 8c0 3.36 2.07 6.24 5 7.42V22h6v-4.58c2.93-1.18 5-4.06 5-7.42a8 8 0 0 0-8-8zm-2 18v-1h4v1h-4z"/><path d="M12 4a6 6 0 0 1 3.5 10.87V18h-7v-3.13A6 6 0 0 1 12 4z"/></svg>`,
  FaLock: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 text-[#937AFF]"><path d="M12 2a5 5 0 0 0-5 5v3H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-1V7a5 5 0 0 0-5-5zm-3 5a3 3 0 1 1 6 0v3H9V7zm4 9.73V20h-2v-3.27a2 2 0 1 1 2 0z"/></svg>`,
  FaCubes: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 text-[#937AFF]"><path d="M21 16.5c0 .38-.21.71-.53.88l-7.9 4.44c-.36.2-.8.2-1.14 0l-7.9-4.44A.99.99 0 0 1 3 16.5v-9c0-.38.21-.71.53-.88l7.9-4.44c.36-.2.8-.2 1.14 0l7.9 4.44c.32.17.53.5.53.88v9zM12 4.15L6.04 7.5 12 10.85l5.96-3.35L12 4.15zM5 15.91l6 3.38v-7.63L5 8.28v7.63zm14 0v-7.63l-6 3.38v7.63l6-3.38z"/></svg>`,
  FaChartSimple: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 text-[#937AFF]"><path d="M3 13h2v8H3v-8zm4-6h2v14H7V7zm4-4h2v18h-2V3zm4 8h2v10h-2V11zm4-3h2v13h-2V8z"/></svg>`,
  FaRocket: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 text-[#937AFF]"><path d="M12.5 2c-3.5 0-7 3-7 8.5 0 3.5 1.5 6 3.5 7.5V20h7v-2c2-1.5 3.5-4 3.5-7.5 0-5.5-3.5-8.5-7-8.5zm-2 18v1h4v-1h-4zM12 4c2.5 0 5 2 5 6.5 0 2.8-1.2 4.8-2.8 6H9.8C8.2 15.3 7 13.3 7 10.5 7 6 9.5 4 12 4z"/></svg>`,
  FaShieldHalved: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 text-[#937AFF]"><path d="M12 2L3 7v5c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5zm0 2.18l7 3.89v4.93c0 4.56-3.11 8.85-7 10.05-3.89-1.2-7-5.49-7-10.05V8.07l7-3.89z"/><path d="M12 7l-4 4h3v4h2v-4h3l-4-4z"/></svg>`,
  FaTableCellsLarge: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 text-[#937AFF]"><path d="M3 3h8v8H3V3zm2 2v4h4V5H5zm8-2h8v8h-8V3zm2 2v4h4V5h-4zM3 13h8v8H3v-8zm2 2v4h4v-4H5zm8 2h8v6h-8v-6zm2 2v2h4v-2h-4z"/></svg>`,
  FaEnvelope: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 text-[#937AFF]"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>`,
  FaPhone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 text-[#937AFF]"><path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.24 1.01l-2.2 2.2z"/></svg>`,
  FaCalendarCheck: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 text-[#937AFF]"><path d="M19 4h-1V2h-2v2H8V2H6v2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zm-7 5h5v5h-5v-5z"/></svg>`,
};

function icon(name: string): string {
  return ICON_MAP[name] || ICON_MAP.FaBolt;
}

function escHtml(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function allowHtml(s: string): string {
  // Content from DB already has HTML like <strong>, so just escape & then allow safe tags
  let out = s.replace(/&/g, "&amp;");
  // Don't double-escape existing HTML entities or tags
  // Actually the data comes with raw <strong> etc. So just return as-is but escape bare &
  return out;
}

// ====== DATA TYPES (simplified) ======
interface AnyData {
  [key: string]: any;
}

// ====== TRANSLATION STRINGS ======
const UI: Record<string, Record<string, string>> = {
  ar: {
    nav_features: "المميزات",
    nav_about: "عن الشركة",
    nav_pricing: "الأسعار",
    nav_testimonials: "آراء العملاء",
    nav_faq: "الأسئلة الشائعة",
    nav_contact: "تواصل معنا",
    nav_get_template: "احصل على القالب",
    contact_title: "لديك سؤال؟ <strong>أرسل لنا رسالة</strong>",
    contact_subtitle: "فريقنا هنا للمساعدة. سواء كنت تريد معرفة المزيد عن ميزة الرد التلقائي على المكالمات الفائتة، أو كيفية إعداد صندوق الوارد الموحد، فريق الدعم جاهز لمساعدتك.",
    form_name: "الاسم",
    form_email: "البريد الإلكتروني",
    form_phone: "الهاتف",
    form_message: "الرسالة",
    form_send: "إرسال الرسالة",
    form_name_ph: "اسمك",
    form_email_ph: "you@example.com",
    form_phone_ph: "+966 (50) 000-0000",
    form_message_ph: "كيف يمكننا مساعدتك؟",
    msg_sent: "تم إرسال الرسالة!",
    msg_sent_sub: "سنعود إليك قريبًا.",
    footer_desc: "النظام الآلي المتكامل المصمم لالتقاط المزيد من العملاء المحتملين، والمتابعة الفورية، وتنمية أعمالك المحلية.",
    footer_primary: "الرئيسية",
    footer_resources: "الموارد",
    footer_legal: "القانونية",
    footer_privacy: "سياسة الخصوصية",
    footer_terms: "الشروط والأحكام",
    footer_admin: "لوحة التحكم",
    footer_copy: "أوتوماتارك. جميع الحقوق محفوظة.",
    lang_switch: "EN",
    lang_switch_url: "?lang=en",
    title: "أوتوماتارك - برنامج النمو الشامل لأصحاب الأعمال المحلية",
    monthly: "/شهر",
  },
  en: {
    nav_features: "Features",
    nav_about: "About",
    nav_pricing: "Pricing",
    nav_testimonials: "Testimonials",
    nav_faq: "FAQ",
    nav_contact: "Contact",
    nav_get_template: "Get This Template",
    contact_title: "Have a question? <strong>Send us a message</strong>",
    contact_subtitle: "Our team is here to help. Whether you want to learn more about the Missed Call Auto-Responder, or how to set up your Unified Inbox, our support team is ready to assist you.",
    form_name: "Name",
    form_email: "Email",
    form_phone: "Phone",
    form_message: "Message",
    form_send: "Send Message",
    form_name_ph: "Your name",
    form_email_ph: "you@example.com",
    form_phone_ph: "+1 (800) 000-0000",
    form_message_ph: "How can we help you?",
    msg_sent: "Message Sent!",
    msg_sent_sub: "We'll get back to you shortly.",
    footer_desc: "The complete automated system designed to capture more leads, follow up instantly, and grow your local business.",
    footer_primary: "Primary",
    footer_resources: "Resources",
    footer_legal: "Legal",
    footer_privacy: "Privacy Policy",
    footer_terms: "Terms & Conditions",
    footer_admin: "Admin Panel",
    footer_copy: "Automark. All rights reserved.",
    lang_switch: "عربي",
    lang_switch_url: "?lang=ar",
    title: "Automark - All-In-One Growth Software for Local Business Owners",
    monthly: "/month",
  },
};

async function getCollection(payload: any, slug: string, locale?: string): Promise<AnyData | null> {
  try {
    const opts: any = { collection: slug, limit: 1, page: 1 };
    if (locale) opts.locale = locale;
    const result = await payload.find(opts);
    return result.docs[0] || null;
  } catch {
    return null;
  }
}

// ====== HTML GENERATION ======
function generatePage(d: {
  homepage: AnyData;
  about: AnyData;
  features: AnyData;
  contact: AnyData;
  pricing: AnyData;
  testimonials: AnyData;
  faq: AnyData;
  brands: AnyData;
  ourStory: AnyData;
  cta: AnyData;
  businessNeeds: AnyData;
  comparisonRow: AnyData;
}, lang: string): string {
  const h = d.homepage;
  const a = d.about;
  const f = d.features;
  const c = d.contact;
  const p = d.pricing;
  const t = d.testimonials;
  const fq = d.faq;
  const b = d.brands;
  const os = d.ourStory;
  const cta = d.cta;
  const bn = d.businessNeeds;
  const cr = d.comparisonRow;
  const u = UI[lang] || UI.ar;
  const isAr = lang === 'ar';
  const dir = isAr ? 'rtl' : 'ltr';
  const htmlLang = lang;

  return `<!DOCTYPE html>
<html lang="${htmlLang}" dir="${dir}" class="scroll-smooth">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${escHtml(u.title)}</title>
<link rel="icon" href="/images/favicon.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600&family=Urbanist:wght@500;700&display=swap" rel="stylesheet">
<script src="https://cdn.tailwindcss.com"></script>
<script>
tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: "#937AFF",
        "primary-light": "#4D36D0",
        secondary: "#FF5353",
        body: "#03010E",
        border: "#202128",
        light: "#0B0C17",
        dark: "#040404",
        "text-main": "#DAD4DE",
        "text-dark": "#817E84",
        "text-light": "#E5E5E5",
      },
      fontFamily: {
        primary: ["Inter Tight", "sans-serif"],
        secondary: ["Urbanist", "sans-serif"],
      },
    },
  },
};
</script>
<style>
  body { background: #03010E; color: #DAD4DE; font-family: 'Inter Tight', sans-serif; }
  .font-secondary { font-family: 'Urbanist', sans-serif; }
  ::selection { background: #937AFF; color: #fff; }
  .gradient-primary { background: linear-gradient(135deg, #937AFF 0%, #4D36D0 100%); }
  .gradient-text { background: linear-gradient(135deg, #937AFF, #4D36D0); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
  .hero-blob { position: absolute; width: 600px; height: 600px; background: radial-gradient(circle, rgba(147,122,255,0.15) 0%, transparent 70%); border-radius: 50%; filter: blur(80px); top: 10%; right: -10%; pointer-events: none; }
  .btn { display: inline-block; padding: 12px 32px; border-radius: 9999px; font-size: 14px; font-weight: 500; cursor: pointer; transition: all 0.3s; text-decoration: none; }
  .btn-primary { background: linear-gradient(135deg, #937AFF 0%, #4D36D0 100%); color: #fff; border: none; }
  .btn-primary:hover { filter: brightness(1.15); box-shadow: 0 0 30px rgba(147,122,255,0.4); }
  .btn-outline { background: transparent; color: #E5E5E5; border: 1px solid #202128; }
  .btn-outline:hover { border-color: #937AFF; color: #937AFF; }
  .section-ph { padding-top: 120px; }
  .perspective-near { perspective: 800px; }
  .perspective-dramatic { perspective: 400px; }
  @keyframes spin { to { transform: rotate(360deg); } }
  .animate-spin { animation: spin 3s linear infinite; }
  .hasHighlight strong { color: #937AFF; }
  .integration-overlap { margin-left: -16px; }
  .integration-overlap:first-child { margin-left: 0; }
  .faq-answer { max-height: 0; overflow: hidden; transition: max-height 0.3s ease; }
  .faq-item.active .faq-answer { max-height: 500px; }
  .faq-item.active .faq-chevron { transform: rotate(180deg); }
  .faq-chevron { transition: transform 0.3s ease; }
  .pain-line { position: relative; }
  .pain-line::after { content: ''; position: absolute; top: 50%; right: -12px; width: 24px; height: 1px; background: #202128; }
  .pain-line:nth-child(3n)::after { display: none; }
  .comparison-card:hover { border-color: #937AFF; transform: translateY(-2px); }
  .comparison-card { transition: all 0.3s ease; }
  @keyframes float { 0%,100%{ transform: translateY(0); } 50%{ transform: translateY(-10px); } }
  .float-anim { animation: float 3s ease-in-out infinite; }
  .nav-scroll { background: rgba(3,1,14,0.95); backdrop-filter: blur(12px); border-bottom: 1px solid #202128; }
</style>
</head>
<body class="antialiased">

<!-- ==================== HEADER / NAV ==================== -->
<header id="header" class="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-16 lg:h-20">
      <a href="/" class="text-2xl font-bold text-white">Automark</a>
      <nav class="hidden lg:flex items-center gap-8">
        <a href="#features" class="text-text-dark hover:text-primary transition-colors text-sm">${escHtml(u.nav_features)}</a>
        <a href="#about" class="text-text-dark hover:text-primary transition-colors text-sm">${escHtml(u.nav_about)}</a>
        <a href="#pricing" class="text-text-dark hover:text-primary transition-colors text-sm">${escHtml(u.nav_pricing)}</a>
        <a href="#testimonials" class="text-text-dark hover:text-primary transition-colors text-sm">${escHtml(u.nav_testimonials)}</a>
        <a href="#faq" class="text-text-dark hover:text-primary transition-colors text-sm">${escHtml(u.nav_faq)}</a>
        <a href="#contact" class="text-text-dark hover:text-primary transition-colors text-sm">${escHtml(u.nav_contact)}</a>
        <a href="${u.lang_switch_url}" class="text-text-dark hover:text-primary transition-colors text-sm font-medium border border-border rounded-full px-3 py-1">${escHtml(u.lang_switch)}</a>
      </nav>
      <div class="hidden lg:flex items-center gap-3">
        <a href="#pricing" class="gradient-primary text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity inline-block">${escHtml(u.nav_get_template)}</a>
      </div>
      <button id="mobile-menu-btn" class="lg:hidden text-white p-2">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
      </button>
    </div>
  </div>
  <!-- Mobile Menu -->
  <div id="mobile-menu" class="hidden lg:hidden bg-body border-t border-border">
    <div class="px-4 py-4 space-y-3">
      <a href="#features" class="block text-text-dark hover:text-primary text-sm py-2">${escHtml(u.nav_features)}</a>
      <a href="#about" class="block text-text-dark hover:text-primary text-sm py-2">${escHtml(u.nav_about)}</a>
      <a href="#pricing" class="block text-text-dark hover:text-primary text-sm py-2">${escHtml(u.nav_pricing)}</a>
      <a href="#testimonials" class="block text-text-dark hover:text-primary text-sm py-2">${escHtml(u.nav_testimonials)}</a>
      <a href="#faq" class="block text-text-dark hover:text-primary text-sm py-2">${escHtml(u.nav_faq)}</a>
      <a href="#contact" class="block text-text-dark hover:text-primary text-sm py-2">${escHtml(u.nav_contact)}</a>
      <a href="${u.lang_switch_url}" class="block text-text-dark hover:text-primary text-sm py-2 font-medium border border-border rounded-full px-3 py-1 text-center inline-block">${escHtml(u.lang_switch)}</a>
      <a href="#pricing" class="gradient-primary text-white px-5 py-2.5 rounded-lg text-sm font-medium text-center block mt-3">${escHtml(u.nav_get_template)}</a>
    </div>
  </div>
</header>

<!-- ==================== HERO ==================== -->
<section class="section-ph relative overflow-hidden">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
    <!-- Canvas Spore Animation -->
    <div class="absolute top-0 left-0 w-full pointer-events-none" style="height:400px;overflow:hidden;margin-top:-40px;">
      <canvas id="heroSporeCanvas" class="w-full" style="width:100%;height:100%;"></canvas>
    </div>
    <!-- Hero Content -->
    <div class="mb-10 lg:mb-16 text-center relative z-10" style="padding-top:40px;">
      <h1 class="mb-8 max-w-4xl mx-auto text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight hasHighlight">
        ${allowHtml(h?.banner?.title || '')}
      </h1>
      <p class="mb-10 max-w-2xl mx-auto text-text-dark text-lg sm:text-xl leading-relaxed">
        ${escHtml(h?.banner?.content || '')}
      </p>
      <div class="flex gap-4 justify-center items-center flex-wrap">
        <a href="${escHtml(h?.banner?.button_primary?.link || '#')}" class="btn btn-primary">${escHtml(h?.banner?.button_primary?.label || '')}</a>
        <a href="${escHtml(h?.banner?.button_secondary?.link || '#')}" class="btn btn-outline">${escHtml(h?.banner?.button_secondary?.label || '')}</a>
      </div>
    </div>
    <!-- Video Showcase -->
    <div class="flex justify-center w-full perspective-near xl:perspective-dramatic">
      <div class="relative w-full max-w-5xl mx-auto rounded-2xl overflow-hidden">
        <video id="videoPlayer" class="w-full aspect-video object-cover" autoplay muted loop playsinline preload="metadata">
          <source src="/showcase.mp4" type="video/mp4">
        </video>
        <button id="soundToggle" class="absolute inset-0 grid place-items-center bg-dark/40 cursor-pointer">
          <div class="bg-white/90 hover:bg-white rounded-full w-20 h-20 sm:w-24 sm:h-24 grid place-items-center relative">
            <div class="absolute inset-0 scale-90 w-full h-full rounded-full border-2 border-solid border-t-transparent border-b-transparent border-[#937AFF] animate-spin" style="animation-duration:3s;"></div>
            <svg width="32" height="32" viewBox="0 0 36 36" fill="none">
              <path d="M20.91 9.51C23.36 10.9 25.29 11.99 26.66 12.99C28.04 14 29.06 15.05 29.42 16.44C29.69 17.46 29.69 18.54 29.42 19.56C29.06 20.95 28.04 22 26.66 23.01C25.29 24.01 23.36 25.1 20.91 26.49C18.54 27.84 16.55 28.97 15.03 29.62C13.51 30.27 12.12 30.6 10.76 30.21C9.77 29.93 8.86 29.4 8.14 28.66C7.15 27.66 6.75 26.28 6.56 24.62C6.37 22.98 6.37 20.82 6.38 18.08V17.92C6.37 15.18 6.37 13.02 6.56 11.38C6.75 9.72 7.15 8.34 8.14 7.34C8.86 6.6 9.77 6.07 10.76 5.79C12.12 5.4 13.51 5.73 15.03 6.38C16.55 7.03 18.54 8.16 20.91 9.51Z" fill="url(#vs_gradient)"/>
              <defs><linearGradient id="vs_gradient" x1="18" y1="30.38" x2="18" y2="5.62" gradientUnits="userSpaceOnUse"><stop stop-color="#937AFF"/><stop offset="1" stop-color="#4D36D0"/></linearGradient></defs>
            </svg>
          </div>
        </button>
      </div>
    </div>
  </div>
</section>

<!-- ==================== MAIN FEATURES (Pain Points) ==================== -->
${h?.main_features?.enable ? `
<section id="features" class="py-16 lg:py-24">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center max-w-3xl mx-auto mb-12">
      ${h.main_features.badge ? `<span class="inline-block gradient-primary text-white text-xs font-medium px-4 py-1.5 rounded-full mb-4">The Follow-Up Gap</span>` : ''}
      <h2 class="text-3xl sm:text-4xl font-bold text-white mb-4">${allowHtml(h.main_features.title || '')}</h2>
      <p class="text-text-dark text-lg">${escHtml(h.main_features.content || '')}</p>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
      ${(h.main_features.items || []).map((item: any, i: number) => `
        <div class="flex items-center gap-3 bg-light border border-border rounded-xl px-5 py-4 pain-line ${i % 3 === 2 ? '' : ''}">
          <svg class="w-5 h-5 text-secondary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          <span class="text-text-light font-medium">${escHtml(item.value || '')}</span>
        </div>
      `).join('')}
    </div>
  </div>
</section>
` : ''}

<!-- ==================== VALUE PROPS ==================== -->
${h?.value_props?.enable ? `
<section class="py-16 lg:py-24">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center max-w-3xl mx-auto mb-12">
      ${h.value_props.badge ? `<span class="inline-block gradient-primary text-white text-xs font-medium px-4 py-1.5 rounded-full mb-4">${escHtml(h.value_props.badge)}</span>` : ''}
      <h2 class="text-3xl sm:text-4xl font-bold text-white mb-4">${allowHtml(h.value_props.title || '')}</h2>
      <p class="text-text-dark text-lg">${escHtml(h.value_props.content || '')}</p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      ${(h.value_props.items || []).map((item: any) => `
        <div class="bg-light border border-border rounded-2xl p-6 hover:border-primary/30 transition-colors">
          <img src="${escHtml(item.logo || '')}" alt="" class="w-12 h-12 mb-4">
          <h3 class="text-lg font-semibold text-white mb-3">${escHtml(item.title || '')}</h3>
          <ul class="space-y-2">
            ${(item.list || []).map((li: any) => `
              <li class="flex items-start gap-2 text-sm text-text-dark">
                <svg class="w-4 h-4 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                <span>${escHtml(li.value || '')}</span>
              </li>
            `).join('')}
          </ul>
        </div>
      `).join('')}
    </div>
  </div>
</section>
` : ''}

<!-- ==================== FEATURES GRID ==================== -->
${h?.our_features?.enable ? `
<section class="py-16 lg:py-24 bg-dark">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center max-w-3xl mx-auto mb-12">
      ${h.our_features.badge ? `<span class="inline-block gradient-primary text-white text-xs font-medium px-4 py-1.5 rounded-full mb-4">${escHtml(h.our_features.badge)}</span>` : ''}
      <h2 class="text-3xl sm:text-4xl font-bold text-white mb-4">${allowHtml(h.our_features.title || '')}</h2>
      ${h.our_features.content ? `<p class="text-text-dark text-lg">${escHtml(h.our_features.content)}</p>` : ''}
    </div>
    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
      ${(h.our_features.items || []).map((item: any) => `
        <div class="flex items-center gap-3 bg-light border ${item.is_starred ? 'border-primary/50' : 'border-border'} rounded-xl px-4 py-3.5 ${item.is_starred ? 'ring-1 ring-primary/20' : ''}">
          <img src="${escHtml(item.logo || '')}" alt="" class="w-5 h-5 flex-shrink-0">
          <span class="text-sm ${item.is_starred ? 'text-primary font-semibold' : 'text-text-light'}">${escHtml(item.title || '')}</span>
          ${item.is_starred ? '<svg class="w-3.5 h-3.5 text-primary flex-shrink-0 ml-auto" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>' : ''}
        </div>
      `).join('')}
    </div>
  </div>
</section>
` : ''}

<!-- ==================== SERVICE FEATURES ==================== -->
${f?.service_features?.enable ? `
<section class="py-16 lg:py-24">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
    ${(f.service_features.items || []).map((sec: any, idx: number) => `
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div class="${sec.reverse ? 'lg:order-2' : ''}">
          <img src="${escHtml(sec.image || '')}" alt="" class="w-full max-w-md mx-auto float-anim">
        </div>
        <div class="${sec.reverse ? 'lg:order-1' : ''}">
          <h2 class="text-2xl sm:text-3xl font-bold text-white mb-8">${allowHtml(sec.title || '')}</h2>
          <div class="space-y-5">
            ${(sec.items || []).map((item: any) => `
              <div class="flex gap-4">
                <div class="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  ${icon(item.icon || 'FaBolt')}
                </div>
                <div>
                  <h3 class="font-semibold text-white mb-1">${escHtml(item.title || '')}</h3>
                  <p class="text-text-dark text-sm leading-relaxed">${escHtml(item.content || '')}</p>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `).join('')}
  </div>
</section>
` : ''}

<!-- ==================== BUSINESS NEEDS ==================== -->
${bn?.enable ? `
<section class="py-16 lg:py-24 bg-dark">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center max-w-3xl mx-auto mb-12">
      ${bn.badge ? `<span class="inline-block gradient-primary text-white text-xs font-medium px-4 py-1.5 rounded-full mb-4">5 Steps Every Local Business Needs</span>` : ''}
      <h2 class="text-3xl sm:text-4xl font-bold text-white mb-4">${allowHtml(bn.title || '')}</h2>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
      ${(bn.items || []).map((item: any) => `
        <div class="bg-light border border-border rounded-2xl p-5 text-center hover:border-primary/30 transition-colors">
          <img src="${escHtml(item.image || '')}" alt="" class="w-full h-28 object-cover rounded-xl mb-4">
          <div class="text-primary font-bold text-2xl mb-1">${escHtml(item.number || '')}</div>
          <h3 class="font-semibold text-white mb-2">${escHtml(item.title || '')}</h3>
          <p class="text-text-dark text-sm leading-relaxed">${escHtml(item.content || '')}</p>
        </div>
      `).join('')}
    </div>
  </div>
</section>
` : ''}

<!-- ==================== COMPARISON ==================== -->
${cr?.enable ? `
<section class="py-16 lg:py-24">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center max-w-3xl mx-auto mb-12">
      <h2 class="text-3xl sm:text-4xl font-bold text-white mb-4">${allowHtml(cr.title || '')}</h2>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
      ${(cr.items || []).map((item: any) => `
        <div class="comparison-card bg-light border border-border rounded-xl p-5 text-center">
          <div class="flex flex-wrap justify-center gap-1 mb-3">
            ${(item.images || []).map((img: any) => `
              <img src="${escHtml(img.image || '')}" alt="" class="w-7 h-7 opacity-60">
            `).join('')}
          </div>
          <h3 class="text-sm font-medium text-text-light mb-2">${escHtml(item.title || '')}</h3>
          <div class="text-primary font-bold text-lg">${escHtml(item.price || '')}<span class="text-text-dark text-xs font-normal">${escHtml(cr.price_suffix || '')}</span></div>
        </div>
      `).join('')}
    </div>
  </div>
</section>
` : ''}

<!-- ==================== TESTIMONIAL QUOTE ==================== -->
${h?.testimonial_quote?.enable ? `
<section class="py-16 lg:py-24 bg-dark">
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <svg class="w-10 h-10 text-primary/30 mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
    <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6 leading-snug">${allowHtml(h.testimonial_quote.title || '')}</h2>
    <p class="text-text-dark text-lg italic leading-relaxed">${escHtml(h.testimonial_quote.quote || '')}</p>
  </div>
</section>
` : ''}

<!-- ==================== BRANDS CAROUSEL ==================== -->
${b?.enable ? `
<section class="py-16 lg:py-20">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <p class="text-text-dark text-sm mb-8 max-w-2xl mx-auto">${allowHtml(b.title || '')}</p>
    <div class="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
      ${(b.images || []).map((img: any) => `
        <img src="${escHtml(img.src || '')}" alt="${escHtml(img.alt || '')}" class="h-8 opacity-40 hover:opacity-70 transition-opacity">
      `).join('')}
    </div>
  </div>
</section>
` : ''}

<!-- ==================== SINGLE TESTIMONIAL ==================== -->
${h?.single_testimonial?.enable ? `
<section id="testimonials" class="py-16 lg:py-24 bg-dark">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
      ${(h.single_testimonial.stats || []).map((stat: any) => `
        <div class="text-center">
          <div class="text-3xl sm:text-4xl font-bold text-primary mb-1">${escHtml(stat.value || '')}</div>
          <div class="text-text-dark text-sm">${escHtml(stat.label || '')}</div>
        </div>
      `).join('')}
    </div>
    <div class="max-w-3xl mx-auto bg-light border border-border rounded-2xl p-8 sm:p-10 text-center">
      <svg class="w-8 h-8 text-primary/30 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
      <p class="text-text-light text-lg leading-relaxed mb-6 italic">${escHtml(h.single_testimonial.testimonial?.quote || '')}</p>
      <div class="flex items-center justify-center gap-3">
        <img src="${escHtml(h.single_testimonial.testimonial?.avatar || '')}" alt="" class="w-10 h-10 rounded-full">
        <div class="text-left">
          <div class="text-white font-medium text-sm">${escHtml(h.single_testimonial.testimonial?.name || '')}</div>
          <div class="text-text-dark text-sm">${escHtml(h.single_testimonial.testimonial?.company || '')}</div>
        </div>
      </div>
    </div>
  </div>
</section>
` : ''}

<!-- ==================== GROWTH PROCESS ==================== -->
${h?.growth_process?.enable ? `
<section class="py-16 lg:py-24">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center max-w-3xl mx-auto mb-12">
      ${h.growth_process.badge ? `<span class="inline-block gradient-primary text-white text-xs font-medium px-4 py-1.5 rounded-full mb-4">${escHtml(h.growth_process.badge)}</span>` : ''}
      <h2 class="text-3xl sm:text-4xl font-bold text-white mb-4">${allowHtml(h.growth_process.title || '')}</h2>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
      ${(h.growth_process.items || []).map((item: any) => `
        <div class="text-center">
          <img src="${escHtml(item.logo || '')}" alt="" class="w-14 h-14 mx-auto mb-5">
          <h3 class="text-lg font-semibold text-white mb-3">${escHtml(item.title || '')}</h3>
          <p class="text-text-dark text-sm leading-relaxed">${escHtml(item.content || '')}</p>
        </div>
      `).join('')}
    </div>
    ${h.growth_process.button?.enable ? `
      <div class="text-center mt-12">
        <a href="${escHtml(h.growth_process.button.link || '#')}" class="gradient-primary text-white px-8 py-3.5 rounded-lg font-medium hover:opacity-90 transition-opacity inline-block">${escHtml(h.growth_process.button.label || '')}</a>
      </div>
    ` : ''}
  </div>
</section>
` : ''}

<!-- ==================== ABOUT / STATS ==================== -->
${a?.stats?.enable ? `
<section id="about" class="py-16 lg:py-24 bg-dark">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-6">
      ${(a.stats.items || []).map((item: any) => `
        <div class="bg-primary/5 border border-primary/20 rounded-2xl p-6 text-center">
          <div class="text-3xl sm:text-4xl font-bold text-primary mb-2">${escHtml(item.value || '')}</div>
          <div class="text-text-dark text-sm">${escHtml(item.label || '')}</div>
        </div>
      `).join('')}
    </div>
  </div>
</section>
` : ''}

<!-- ==================== TEAM ==================== -->
${a?.our_team?.enable ? `
<section class="py-16 lg:py-24">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center max-w-3xl mx-auto mb-12">
      ${a.our_team.badge ? `<span class="inline-block gradient-primary text-white text-xs font-medium px-4 py-1.5 rounded-full mb-4">${escHtml(a.our_team.badge)}</span>` : ''}
      <h2 class="text-3xl sm:text-4xl font-bold text-white mb-4">${allowHtml(a.our_team.title || '')}</h2>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      ${(a.our_team.members || []).map((m: any) => `
        <div class="bg-light border border-border rounded-2xl overflow-hidden text-center group hover:border-primary/30 transition-colors">
          <div class="overflow-hidden"><img src="${escHtml(m.image || '')}" alt="${escHtml(m.name || '')}" class="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"></div>
          <div class="p-5">
            <h3 class="font-semibold text-white">${escHtml(m.name || '')}</h3>
            <p class="text-text-dark text-sm mt-1">${escHtml(m.role || '')}</p>
          </div>
        </div>
      `).join('')}
    </div>
  </div>
</section>
` : ''}

<!-- ==================== CORE VALUES ==================== -->
${a?.core_values?.enable ? `
<section class="py-16 lg:py-24 bg-dark">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center max-w-3xl mx-auto mb-12">
      ${a.core_values.badge ? `<span class="inline-block gradient-primary text-white text-xs font-medium px-4 py-1.5 rounded-full mb-4">${escHtml(a.core_values.badge)}</span>` : ''}
      <h2 class="text-3xl sm:text-4xl font-bold text-white mb-4">${allowHtml(a.core_values.title || '')}</h2>
      <p class="text-text-dark text-lg">${escHtml(a.core_values.subtitle || '')}</p>
    </div>
    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
      ${(a.core_values.items || []).map((item: any) => `
        <div class="flex items-center gap-3 bg-light border ${item.is_starred ? 'border-primary/50 ring-1 ring-primary/20' : 'border-border'} rounded-xl px-4 py-3.5">
          <img src="${escHtml(item.logo || '')}" alt="" class="w-6 h-6 flex-shrink-0">
          <span class="text-sm ${item.is_starred ? 'text-primary font-semibold' : 'text-text-light'}">${escHtml(item.title || '')}</span>
          ${item.is_starred ? '<svg class="w-3.5 h-3.5 text-primary flex-shrink-0 ml-auto" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>' : ''}
        </div>
      `).join('')}
    </div>
  </div>
</section>
` : ''}

<!-- ==================== OUR STORY ==================== -->
${os?.enable ? `
<section class="py-16 lg:py-24">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center max-w-3xl mx-auto mb-12">
      ${os.badge ? `<span class="inline-block gradient-primary text-white text-xs font-medium px-4 py-1.5 rounded-full mb-4">${escHtml(os.badge)}</span>` : ''}
      <h2 class="text-3xl sm:text-4xl font-bold text-white mb-4">${allowHtml(os.title || '')}</h2>
    </div>
    <div class="max-w-4xl mx-auto bg-light border border-border rounded-2xl p-8 sm:p-10">
      <div class="flex flex-col sm:flex-row items-center gap-6 mb-8">
        <img src="${escHtml(os.ceo?.image || '')}" alt="${escHtml(os.ceo?.name || '')}" class="w-20 h-20 rounded-full border-2 border-primary">
        <div>
          <div class="text-white font-semibold text-lg">${escHtml(os.ceo?.name || '')}</div>
          <div class="text-text-dark text-sm">${escHtml(os.ceo?.role || '')}</div>
        </div>
      </div>
      <div class="text-text-dark leading-relaxed space-y-4 mb-6">
        ${(os.letter || '').split('\n\n').map((p: string) => `<p>${escHtml(p)}</p>`).join('')}
      </div>
      <div class="mb-6">
        <h3 class="text-white font-semibold mb-3">${escHtml(os.letter_points_title || '')}</h3>
        <ul class="space-y-2">
          ${(os.letter_points || []).map((pt: any) => `
            <li class="flex items-center gap-2 text-text-dark text-sm">
              <svg class="w-4 h-4 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
              <span>${escHtml(pt.value || '')}</span>
            </li>
          `).join('')}
        </ul>
      </div>
      <p class="text-text-dark leading-relaxed mb-6">${escHtml(os.closing_content || '')}</p>
      ${os.button?.enable ? `
        <a href="${escHtml(os.button.link || '#')}" class="gradient-primary text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity inline-block">${escHtml(os.button.label || '')}</a>
      ` : ''}
    </div>
  </div>
</section>
` : ''}

<!-- ==================== INTEGRATIONS ==================== -->
${h?.integrations?.enable ? `
<section class="py-16 lg:py-24 bg-dark">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center max-w-3xl mx-auto mb-12">
      ${h.integrations.badge ? `<span class="inline-block gradient-primary text-white text-xs font-medium px-4 py-1.5 rounded-full mb-4">${escHtml(h.integrations.badge)}</span>` : ''}
      <h2 class="text-3xl sm:text-4xl font-bold text-white mb-4">${allowHtml(h.integrations.title || '')}</h2>
    </div>
    <div class="flex flex-wrap justify-center items-center">
      ${(h.integrations.items || []).map((item: any) => `
        <div class="integration-overlap w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-light border border-border p-1.5 hover:border-primary/50 transition-colors">
          <img src="${escHtml(item.image || '')}" alt="${escHtml(item.alt || '')}" class="w-full h-full rounded-full object-cover">
        </div>
      `).join('')}
    </div>
  </div>
</section>
` : ''}

<!-- ==================== LEAD GENERATION ==================== -->
${h?.lead_generation?.enable ? `
<section class="py-16 lg:py-24">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div>
        <h2 class="text-3xl sm:text-4xl font-bold text-white mb-4">${allowHtml(h.lead_generation.title || '')}</h2>
        <p class="text-primary font-medium mb-4">${escHtml(h.lead_generation.subtitle || '')}</p>
        <div class="text-text-dark leading-relaxed mb-6 space-y-3">
          ${(h.lead_generation.content || '').split('\n\n').map((p: string) => `<p>${allowHtml(p)}</p>`).join('')}
        </div>
        <ul class="space-y-3 mb-8">
          ${(h.lead_generation.list || []).map((li: any) => `
            <li class="flex items-start gap-2 text-sm text-text-dark">
              <svg class="w-4 h-4 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
              <span>${allowHtml(li.value || '')}</span>
            </li>
          `).join('')}
        </ul>
        ${h.lead_generation.button?.enable ? `
          <a href="${escHtml(h.lead_generation.button.link || '#')}" class="gradient-primary text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity inline-block">${escHtml(h.lead_generation.button.label || '')}</a>
        ` : ''}
      </div>
      <div class="flex justify-center">
        <img src="${escHtml(h.lead_generation.image || '')}" alt="Ebook" class="max-w-sm w-full rounded-2xl shadow-2xl">
      </div>
    </div>
  </div>
</section>
` : ''}

<!-- ==================== PRICING ==================== -->
${p?.page_header ? `
<section id="pricing" class="py-16 lg:py-24 bg-dark">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center max-w-3xl mx-auto mb-4">
      ${p.page_header.badge ? `<span class="inline-block gradient-primary text-white text-xs font-medium px-4 py-1.5 rounded-full mb-4">${escHtml(p.page_header.badge)}</span>` : ''}
      <h2 class="text-3xl sm:text-4xl font-bold text-white mb-4">${escHtml(p.page_header.title || '')}</h2>
      <p class="text-text-dark text-lg">${escHtml(p.page_header.content || '')}</p>
    </div>
    <!-- Toggle -->
    <div class="flex items-center justify-center gap-3 mb-12 mt-8">
      <span class="text-sm ${true ? 'text-white' : 'text-text-dark'}" id="toggle-monthly-label">${escHtml(p.toggler?.monthly_label || 'Monthly')}</span>
      <button id="pricing-toggle" class="relative w-12 h-6 bg-border rounded-full transition-colors">
        <span id="pricing-toggle-dot" class="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform"></span>
      </button>
      <span class="text-sm text-text-dark" id="toggle-yearly-label">${escHtml(p.toggler?.yearly_label || 'Yearly')}</span>
    </div>
    <!-- Plan Cards -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
      ${(p.plans || []).map((plan: any) => `
        <div class="relative bg-light border ${plan.is_featured ? 'border-primary ring-1 ring-primary/30' : 'border-border'} rounded-2xl p-6 sm:p-8 flex flex-col">
          ${plan.offer_text ? `<span class="absolute -top-3 left-1/2 -translate-x-1/2 gradient-primary text-white text-xs font-medium px-4 py-1 rounded-full">${escHtml(plan.offer_text)}</span>` : ''}
          <h3 class="text-xl font-bold text-white mb-2">${escHtml(plan.title || '')}</h3>
          <p class="text-text-dark text-sm mb-4">${escHtml(plan.description || '')}</p>
          <div class="mb-6">
            <span class="text-4xl font-bold text-white plan-price" data-monthly="\$${plan.price || '0'}" data-yearly="\$${plan.yearly_price || '0'}">\$${plan.price || '0'}</span>
            <span class="text-text-dark text-sm">${escHtml(u.monthly)}</span>
          </div>
          <ul class="space-y-3 mb-8 flex-1">
            ${(plan.features || []).map((feat: any) => `
              <li class="flex items-center gap-2 text-sm">
                ${feat.included
                  ? '<svg class="w-4 h-4 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>'
                  : '<svg class="w-4 h-4 text-text-dark/40 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>'}
                <span class="${feat.included ? 'text-text-light' : 'text-text-dark/40 line-through'}">${escHtml(feat.label || '')}</span>
                ${feat.tooltip ? `<span class="text-text-dark text-xs ml-1" title="${escHtml(feat.tooltip)}">(?)</span>` : ''}
              </li>
            `).join('')}
          </ul>
          <a href="${escHtml(plan.button?.link || '#')}" class="${plan.is_featured ? 'gradient-primary text-white' : 'border border-border text-white hover:border-primary hover:text-primary'} px-6 py-3 rounded-lg font-medium text-center transition-colors block">${escHtml(plan.button?.label || 'Start Free Trial')}</a>
        </div>
      `).join('')}
    </div>
    <!-- Comparison Table -->
    ${p.comparison?.enable ? `
      <div class="mt-20 max-w-5xl mx-auto">
        <div class="text-center mb-8">
          ${p.comparison.badge ? `<span class="inline-block gradient-primary text-white text-xs font-medium px-4 py-1.5 rounded-full mb-4">${escHtml(p.comparison.badge)}</span>` : ''}
          <h3 class="text-2xl font-bold text-white">${allowHtml(p.comparison.title || '')}</h3>
        </div>
        <div class="overflow-x-auto">
          <table class="w-full text-sm">
            <thead>
              <tr class="border-b border-border">
                ${(p.comparison.headers || []).map((hdr: any, i: number) => `
                  <th class="text-left py-3 px-4 ${i === 0 ? 'text-text-dark' : 'text-white font-medium'}">${escHtml(hdr.label || '')}</th>
                `).join('')}
              </tr>
            </thead>
            <tbody>
              ${(p.comparison.rows || []).map((row: any) => `
                <tr class="border-b border-border/50">
                  <td class="py-3 px-4 text-text-dark">${escHtml(row.feature || '')}</td>
                  ${(row.values || []).map((v: any) => `
                    <td class="py-3 px-4 text-text-light">
                      ${v.value === 'true' ? '<svg class="w-4 h-4 text-primary mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>' : v.value === 'false' ? '<svg class="w-4 h-4 text-text-dark/30 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>' : escHtml(v.value || '')}
                    </td>
                  `).join('')}
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    ` : ''}
  </div>
</section>
` : ''}

<!-- ==================== TESTIMONIALS ==================== -->
${t?.enable ? `
<section class="py-16 lg:py-24">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center max-w-3xl mx-auto mb-12">
      <h2 class="text-3xl sm:text-4xl font-bold text-white mb-4">${allowHtml(t.title || '')}</h2>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      ${(t.testimonials || []).map((tm: any) => `
        <div class="bg-light border border-border rounded-2xl overflow-hidden hover:border-primary/30 transition-colors">
          <img src="${escHtml(tm.poster || '')}" alt="${escHtml(tm.name || '')}" class="w-full h-48 object-cover">
          <div class="p-6">
            <svg class="w-6 h-6 text-primary/30 mb-3" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
            <p class="text-text-dark text-sm leading-relaxed mb-4">${escHtml(tm.content || '')}</p>
            <div>
              <div class="text-white font-medium text-sm">${escHtml(tm.name || '')}</div>
              <div class="text-text-dark text-xs">${escHtml(tm.designation || '')}</div>
            </div>
          </div>
        </div>
      `).join('')}
    </div>
  </div>
</section>
` : ''}

<!-- ==================== FAQ ==================== -->
${fq?.enable ? `
<section id="faq" class="py-16 lg:py-24 bg-dark">
  <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-12">
      <h2 class="text-3xl sm:text-4xl font-bold text-white mb-4">${allowHtml(fq.title || '')}</h2>
      <p class="text-text-dark">${escHtml(fq.description || '')}</p>
    </div>
    <div class="space-y-3">
      ${(fq.items || []).map((item: any, i: number) => `
        <div class="faq-item border border-border rounded-xl overflow-hidden">
          <button class="faq-toggle w-full flex items-center justify-between px-6 py-4 text-left" data-index="${i}">
            <span class="text-white font-medium text-sm pr-4">${escHtml(item.question || '')}</span>
            <svg class="faq-chevron w-5 h-5 text-text-dark flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
          </button>
          <div class="faq-answer px-6 pb-4">
            <p class="text-text-dark text-sm leading-relaxed">${escHtml(item.answer || '')}</p>
          </div>
        </div>
      `).join('')}
    </div>
    ${fq.button?.enable ? `
      <div class="text-center mt-10">
        <a href="${escHtml(fq.button.link || '#')}" class="gradient-primary text-white px-8 py-3.5 rounded-lg font-medium hover:opacity-90 transition-opacity inline-block">${escHtml(fq.button.label || '')}</a>
      </div>
    ` : ''}
  </div>
</section>
` : ''}

<!-- ==================== CONTACT ==================== -->
<section id="contact" class="py-16 lg:py-24">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center max-w-3xl mx-auto mb-12">
      <h2 class="text-3xl sm:text-4xl font-bold text-white mb-4">${allowHtml(c?.page_header?.title || u.contact_title)}</h2>
      <p class="text-text-dark text-lg">${escHtml(c?.page_header?.subtitle || u.contact_subtitle)}</p>
    </div>
    <!-- Contact Info Cards -->
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
      ${c?.contact_info?.items?.map((item: any) => `
        <div class="bg-light border border-border rounded-xl p-5 text-center hover:border-primary/30 transition-colors">
          <div class="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3">
            ${icon(item.icon || 'FaEnvelope')}
          </div>
          <h3 class="text-white font-medium text-sm mb-1">${escHtml(item.title || '')}</h3>
          ${item.link ? `<a href="${escHtml(item.link || '')}" class="text-primary text-sm hover:underline">${escHtml(item.detail || '')}</a>` : `<p class="text-text-dark text-sm">${escHtml(item.detail || '')}</p>`}
        </div>
      `).join('') || ''}
    </div>
    <!-- Contact Form -->
    <div class="max-w-2xl mx-auto">
      <form id="contact-form" class="bg-light border border-border rounded-2xl p-6 sm:p-8 space-y-5">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label class="block text-text-dark text-sm mb-1.5">${escHtml(u.form_name)}</label>
            <input type="text" name="name" required class="w-full bg-body border border-border rounded-lg px-4 py-3 text-white text-sm placeholder:text-text-dark focus:border-primary focus:outline-none transition-colors" placeholder="${escHtml(u.form_name_ph)}">
          </div>
          <div>
            <label class="block text-text-dark text-sm mb-1.5">${escHtml(u.form_email)}</label>
            <input type="email" name="email" required class="w-full bg-body border border-border rounded-lg px-4 py-3 text-white text-sm placeholder:text-text-dark focus:border-primary focus:outline-none transition-colors" placeholder="${escHtml(u.form_email_ph)}">
          </div>
        </div>
        <div>
          <label class="block text-text-dark text-sm mb-1.5">${escHtml(u.form_phone)}</label>
          <input type="tel" name="phone" class="w-full bg-body border border-border rounded-lg px-4 py-3 text-white text-sm placeholder:text-text-dark focus:border-primary focus:outline-none transition-colors" placeholder="${escHtml(u.form_phone_ph)}">
        </div>
        <div>
          <label class="block text-text-dark text-sm mb-1.5">${escHtml(u.form_message)}</label>
          <textarea name="message" required rows="5" class="w-full bg-body border border-border rounded-lg px-4 py-3 text-white text-sm placeholder:text-text-dark focus:border-primary focus:outline-none transition-colors resize-none" placeholder="${escHtml(u.form_message_ph)}"></textarea>
        </div>
        <button type="submit" class="w-full gradient-primary text-white py-3.5 rounded-lg font-medium hover:opacity-90 transition-opacity">${escHtml(u.form_send)}</button>
      </form>
    </div>
  </div>
</section>

<!-- ==================== CTA BANNER ==================== -->
${cta?.enable ? `
<section class="py-16 lg:py-24">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="gradient-primary rounded-2xl p-10 sm:p-16 text-center">
      <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">${allowHtml(cta.title || '')}</h2>
      <p class="text-white/80 text-lg max-w-2xl mx-auto mb-8">${escHtml(cta.description || '')}</p>
      ${cta.button?.enable ? `
        <a href="${escHtml(cta.button.link || '#')}" class="inline-block bg-white text-primary font-semibold px-8 py-3.5 rounded-lg hover:bg-gray-100 transition-colors">${escHtml(cta.button.label || '')}</a>
      ` : ''}
    </div>
  </div>
</section>
` : ''}

<!-- ==================== FOOTER ==================== -->
<footer class="border-t border-border py-12 lg:py-16 bg-dark">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
      <div>
        <a href="/" class="text-2xl font-bold text-white block mb-4">Automark</a>
        <p class="text-text-dark text-sm leading-relaxed">${escHtml(u.footer_desc)}</p>
      </div>
      <div>
        <h4 class="text-white font-semibold text-sm mb-4">${escHtml(u.footer_primary)}</h4>
        <ul class="space-y-2.5">
          <li><a href="#features" class="text-text-dark hover:text-primary text-sm transition-colors">${escHtml(u.nav_features)}</a></li>
          <li><a href="#pricing" class="text-text-dark hover:text-primary text-sm transition-colors">${escHtml(u.nav_pricing)}</a></li>
          <li><a href="#testimonials" class="text-text-dark hover:text-primary text-sm transition-colors">${escHtml(u.nav_testimonials)}</a></li>
          <li><a href="#faq" class="text-text-dark hover:text-primary text-sm transition-colors">${escHtml(u.nav_faq)}</a></li>
        </ul>
      </div>
      <div>
        <h4 class="text-white font-semibold text-sm mb-4">${escHtml(u.footer_resources)}</h4>
        <ul class="space-y-2.5">
          <li><a href="#about" class="text-text-dark hover:text-primary text-sm transition-colors">${escHtml(u.nav_about)}</a></li>
          <li><a href="#contact" class="text-text-dark hover:text-primary text-sm transition-colors">${escHtml(u.nav_contact)}</a></li>
          <li><a href="/admin" class="text-text-dark hover:text-primary text-sm transition-colors">${escHtml(u.footer_admin)}</a></li>
        </ul>
      </div>
      <div>
        <h4 class="text-white font-semibold text-sm mb-4">${escHtml(u.footer_legal)}</h4>
        <ul class="space-y-2.5">
          <li><a href="#" class="text-text-dark hover:text-primary text-sm transition-colors">${escHtml(u.footer_privacy)}</a></li>
          <li><a href="#" class="text-text-dark hover:text-primary text-sm transition-colors">${escHtml(u.footer_terms)}</a></li>
        </ul>
      </div>
    </div>
    <div class="border-t border-border pt-6 text-center">
      <p class="text-text-dark text-sm">\u00a9 ${new Date().getFullYear()} ${escHtml(u.footer_copy)}</p>
    </div>
  </div>
</footer>

<!-- ==================== SCRIPTS ==================== -->
<script>
(function() {
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(function(a) {
    a.addEventListener('click', function(e) {
      e.preventDefault();
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Close mobile menu
        var menu = document.getElementById('mobile-menu');
        if (menu) menu.classList.add('hidden');
      }
    });
  });

  // Mobile menu toggle
  var menuBtn = document.getElementById('mobile-menu-btn');
  var mobileMenu = document.getElementById('mobile-menu');
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', function() {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // Navbar scroll effect
  var header = document.getElementById('header');
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      header.classList.add('nav-scroll');
    } else {
      header.classList.remove('nav-scroll');
    }
  });

  // Pricing toggle
  var toggle = document.getElementById('pricing-toggle');
  var dot = document.getElementById('pricing-toggle-dot');
  var monthlyLabel = document.getElementById('toggle-monthly-label');
  var yearlyLabel = document.getElementById('toggle-yearly-label');
  var isYearly = false;
  if (toggle) {
    toggle.addEventListener('click', function() {
      isYearly = !isYearly;
      if (isYearly) {
        dot.style.transform = 'translateX(24px)';
        toggle.style.backgroundColor = '#937AFF';
        monthlyLabel.classList.remove('text-white');
        monthlyLabel.classList.add('text-text-dark');
        yearlyLabel.classList.remove('text-text-dark');
        yearlyLabel.classList.add('text-white');
      } else {
        dot.style.transform = 'translateX(0)';
        toggle.style.backgroundColor = '#202128';
        monthlyLabel.classList.remove('text-text-dark');
        monthlyLabel.classList.add('text-white');
        yearlyLabel.classList.remove('text-white');
        yearlyLabel.classList.add('text-text-dark');
      }
      document.querySelectorAll('.plan-price').forEach(function(el) {
        var price = isYearly ? el.dataset.yearly : el.dataset.monthly;
        el.textContent = price;
      });
    });
  }

  // FAQ accordion
  document.querySelectorAll('.faq-toggle').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var item = this.closest('.faq-item');
      var wasActive = item.classList.contains('active');
      document.querySelectorAll('.faq-item').forEach(function(el) { el.classList.remove('active'); });
      if (!wasActive) item.classList.add('active');
    });
  });

  // Video sound toggle
  var soundToggle = document.getElementById('soundToggle');
  var videoPlayer = document.getElementById('videoPlayer');
  if (soundToggle && videoPlayer) {
    soundToggle.addEventListener('click', function() {
      if (videoPlayer.muted) {
        videoPlayer.muted = false;
        soundToggle.style.opacity = '0';
        soundToggle.style.pointerEvents = 'none';
      }
    });
    videoPlayer.addEventListener('click', function() {
      videoPlayer.muted = !videoPlayer.muted;
      soundToggle.style.opacity = videoPlayer.muted ? '1' : '0';
      soundToggle.style.pointerEvents = videoPlayer.muted ? 'auto' : 'none';
    });
  }

  // Spore canvas particle animation
  (function() {
    var canvas = document.getElementById('heroSporeCanvas');
    if (!canvas) return;
    var ctx = canvas.getContext('2d');
    function resize() {
      canvas.width = canvas.offsetWidth * (window.devicePixelRatio || 1);
      canvas.height = canvas.offsetHeight * (window.devicePixelRatio || 1);
      ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1);
    }
    resize();
    window.addEventListener('resize', resize);
    var particles = [];
    var w = function() { return canvas.offsetWidth; };
    var h = function() { return canvas.offsetHeight; };
    function Particle() {
      this.x = Math.random() * w();
      this.y = h() + Math.random() * 20;
      this.r = Math.random() * 2 + 1;
      this.speed = Math.random() * 0.4 + 0.1;
      this.opacity = Math.random() * 0.6 + 0.2;
      this.drift = (Math.random() - 0.5) * 0.3;
      var colors = ['147,122,255', '255,255,255', '77,54,208'];
      this.color = colors[Math.floor(Math.random() * colors.length)];
    }
    for (var i = 0; i < 60; i++) {
      var p = new Particle();
      p.y = Math.random() * h();
      particles.push(p);
    }
    function animate() {
      ctx.clearRect(0, 0, w(), h());
      for (var i = 0; i < particles.length; i++) {
        var p = particles[i];
        p.y -= p.speed;
        p.x += p.drift;
        if (p.y < -10) {
          particles[i] = new Particle();
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(' + p.color + ',' + p.opacity + ')';
        ctx.shadowBlur = 8;
        ctx.shadowColor = 'rgba(' + p.color + ',0.4)';
        ctx.fill();
      }
      ctx.shadowBlur = 0;
      requestAnimationFrame(animate);
    }
    animate();
  })();

  // Contact form
  var form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      var data = new FormData(this);
      fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(data))
      }).then(function(r) { return r.json(); }).then(function(res) {
        if (res.success) {
          form.innerHTML = '<div class="text-center py-8"><svg class="w-12 h-12 text-primary mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg><h3 class="text-white text-xl font-semibold mb-2">${escHtml(u.msg_sent)}</h3><p class="text-text-dark">${escHtml(u.msg_sent_sub)}</p></div>';
        }
      }).catch(function() {
        alert('Something went wrong. Please try again.');
      });
    });
  }
})();
</script>

</body>
</html>`;
}

// ====== SERVER STARTUP ======
const start = async () => {
  const app = express();
  app.use(express.json());

  // Serve static files from public/
  app.use(express.static(PUBLIC_DIR));

  // POST /api/contact endpoint
  app.post("/api/contact", (req, res) => {
    const body = JSON.stringify(req.body);
    console.log("Contact form submission:", body);
    res.status(200).json({ success: true, message: "Message sent successfully!" });
  });

  // Init Payload in local mode for data access
  await payload.init({
    secret: process.env.PAYLOAD_SECRET || "gym-saas-secret-key-change-in-production",
    config,
    local: true,
  });

  // ─── REST API for admin panel ───
  // Session store (simple in-memory for admin)
  const sessions = new Map<string, boolean>();
  const AUTH_USER = "admin@admin.com";
  const AUTH_PASS = "admin123456";

  function authenticate(req: express.Request, res: express.Response, next: express.NextFunction) {
    const token = req.headers.authorization?.replace("Bearer ", "");
    if (token && sessions.has(token)) return next();
    res.status(401).json({ error: "Unauthorized" });
  }

  app.post("/api/auth/login", (req, res) => {
    const { email, password } = req.body || {};
    if (email === AUTH_USER && password === AUTH_PASS) {
      const token = Math.random().toString(36).slice(2);
      sessions.set(token, true);
      res.json({ token, user: { email } });
    } else {
      res.status(401).json({ error: "Invalid credentials" });
    }
  });

  app.get("/api/:collection", authenticate, async (req, res) => {
    try {
      const { collection } = req.params;
      const limit = parseInt(req.query.limit as string) || 10;
      const page = parseInt(req.query.page as string) || 1;
      const result = await payload.find({ collection, limit, page });
      res.json({
        docs: result.docs, totalDocs: result.totalDocs, limit: result.limit,
        totalPages: result.totalPages, page: result.page, pagingCounter: result.pagingCounter,
        hasPrevPage: result.hasPrevPage, hasNextPage: result.hasNextPage,
        prevPage: result.prevPage, nextPage: result.nextPage,
      });
    } catch (err: any) { res.status(500).json({ error: err.message }); }
  });

  app.get("/api/:collection/:id", authenticate, async (req, res) => {
    try {
      const result = await payload.findByID({ collection: req.params.collection, id: req.params.id });
      res.json(result);
    } catch (err: any) { res.status(500).json({ error: err.message }); }
  });

  app.put("/api/:collection/:id", authenticate, async (req, res) => {
    try {
      const result = await payload.update({ collection: req.params.collection, id: req.params.id, data: req.body });
      res.json(result);
    } catch (err: any) { res.status(400).json({ error: err.message }); }
  });

  app.post("/api/:collection", authenticate, async (req, res) => {
    try {
      const result = await payload.create({ collection: req.params.collection, data: req.body });
      res.json(result);
    } catch (err: any) { res.status(400).json({ error: err.message }); }
  });

  app.delete("/api/:collection/:id", authenticate, async (req, res) => {
    try {
      await payload.delete({ collection: req.params.collection, id: req.params.id });
      res.json({ success: true });
    } catch (err: any) { res.status(500).json({ error: err.message }); }
  });

  // Admin Panel (SPA)
  const ADMIN_DIR = path.join(__dirname);
  app.get("/admin", (req, res) => {
    res.sendFile(path.join(ADMIN_DIR, "admin-panel.html"));
  });
  app.get("/admin/*", (req, res) => {
    res.sendFile(path.join(ADMIN_DIR, "admin-panel.html"));
  });

  // GET / — serve the full single-page HTML
  app.get("/", async (req, res) => {
    try {
      const lang = (req.query.lang === 'en' || req.query.lang === 'ar') ? req.query.lang : 'ar';
      const [homepage, about, features, contact, pricing, testimonials, faq, brands, ourStory, cta, businessNeeds, comparisonRow] = await Promise.all([
        getCollection(payload, "homepage", lang),
        getCollection(payload, "about", lang),
        getCollection(payload, "features", lang),
        getCollection(payload, "contact", lang),
        getCollection(payload, "pricing", lang),
        getCollection(payload, "testimonial-section", lang),
        getCollection(payload, "faq-section", lang),
        getCollection(payload, "brands-section", lang),
        getCollection(payload, "our-story-section", lang),
        getCollection(payload, "call-to-action-section", lang),
        getCollection(payload, "business-needs-section", lang),
        getCollection(payload, "comparison-row-section", lang),
      ]);

      const html = generatePage({
        homepage: homepage || {},
        about: about || {},
        features: features || {},
        contact: contact || {},
        pricing: pricing || {},
        testimonials: testimonials || {},
        faq: faq || {},
        brands: brands || {},
        ourStory: ourStory || {},
        cta: cta || {},
        businessNeeds: businessNeeds || {},
        comparisonRow: comparisonRow || {},
      }, lang);

      res.status(200).type("html").send(html);
    } catch (err) {
      console.error("Error rendering / route:", err);
      res.status(500).send("Error rendering page");
    }
  });

  const PORT = 3000;
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`\nPayload CMS + Frontend running at http://localhost:${PORT}`);
    console.log(`Admin panel: http://localhost:${PORT}/admin`);
    console.log(`Public site:  http://localhost:${PORT}/`);
  });
};

start().catch((err) => {
  console.error("Failed to start:", err);
  process.exit(1);
});
