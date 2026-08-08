import payload from "payload";
import config from "./payload.config.js";

const seed = async () => {
  await payload.init({
    secret: process.env.PAYLOAD_SECRET || "gym-saas-secret-key-change-in-production",
    config,
    local: true,
  });

  // --- Homepage (English) ---
  await payload.create({
    collection: "homepage",
    locale: "en",
    data: {
      banner: {
        title:
          "The All-In-One Growth Software for <strong>Local Business Owners</strong>",
        content:
          "The complete automated system designed to capture more leads, follow up instantly, and grow your local business - all in one place.",
        button_primary: {
          enable: true,
          label: "Start Your 14-day Free Trial",
          link: "#pricing",
        },
        button_secondary: {
          enable: true,
          label: "Book a Demo",
          link: "#contact",
        },
      },
      main_features: {
        enable: true,
        title:
          "Are you losing real customers to the <strong>Follow-up Gap?</strong>",
        content:
          "Stop wasting money on marketing if you can't respond fast enough. Our system ensures every lead gets immediate attention.",
        items: [
          { value: "Wasted Ad Spend" },
          { value: "Expensive 'Franken-stack' of tools" },
          { value: "Scattered Customer Data" },
          { value: "Missed Calls Costing Thousands" },
          { value: "Lost Leads to Competitors" },
          { value: "Slow Response Times" },
        ],
      },
      value_props: {
        enable: true,
        title:
          "Replace Your Clunky Tools With A <strong>Smart, All-In-One System</strong>",
        content:
          "Log in to a single powerful dashboard to manage everything seamlessly.",
        items: [
          {
            logo: "/images/value-proposition/values-icon-1.svg",
            title: "Automated Customer Follow-Up",
            list: [
              { value: "Missed Call Auto-Responder" },
              { value: "24/7 Appointment Scheduler" },
              { value: "Instant SMS & Email Follow-Up" },
            ],
          },
          {
            logo: "/images/value-proposition/values-icon-2.svg",
            title: "Smart Customer Database",
            list: [
              { value: "Unified Lead Inbox" },
              { value: "Smart Pipeline Manager" },
              { value: "Client Notes & History" },
            ],
          },
          {
            logo: "/images/value-proposition/values-icon-3.svg",
            title: "Autopilot Review Generator",
            list: [
              { value: "Automated Review Requests" },
              { value: "Google & Facebook Integration" },
              { value: "Reputation Tracking" },
            ],
          },
          {
            logo: "/images/value-proposition/values-icon-4.svg",
            title: "High-Converting Websites",
            list: [
              { value: "Drag-and-Drop Landing Pages" },
              { value: "Lead Capture Forms" },
              { value: "Web Chat Widgets" },
            ],
          },
        ],
      },
      our_features: {
        enable: true,
        title:
          "Everything You Need To Put Growth On <strong>Autopilot</strong>",
        content:
          "From capturing the very first click to securing a 5-star review, we've got you covered.",
        items: [
          { logo: "/images/features-menu-icon.svg", title: "Automated Customer Follow-up", is_starred: false },
          { logo: "/images/features-menu-icon.svg", title: "Autopilot Review Generator", is_starred: false },
          { logo: "/images/features-menu-icon.svg", title: "Missed Call Auto-Responder", is_starred: false },
          { logo: "/images/features-menu-icon.svg", title: "24/7 Appointment Scheduler", is_starred: false },
          { logo: "/images/features-menu-icon.svg", title: "Unified Lead Inbox", is_starred: true },
          { logo: "/images/features-menu-icon.svg", title: "Smart Customer Database", is_starred: false },
          { logo: "/images/features-menu-icon.svg", title: "High-Converting Websites", is_starred: false },
          { logo: "/images/features-menu-icon.svg", title: "Drag & Drop Forms", is_starred: false },
          { logo: "/images/features-menu-icon.svg", title: "Automated Text Campaigns", is_starred: false },
        ],
      },
      testimonial_quote: {
        enable: true,
        title:
          "We know you didn't start your local business to become a full-time <strong>Software Engineer</strong>",
        quote:
          "Before this system, I was losing half my leads simply because I couldn't get to my phone fast enough while on jobs. Now, the system handles the follow-up for me, and I've seen a 300% jump in bookings.",
      },
      single_testimonial: {
        enable: true,
        stats: [
          { value: "10,000+", label: "Leads Captured" },
          { value: "5x Faster", label: "Response Time" },
          { value: "28hr/week", label: "Hours Saved" },
        ],
        testimonial: {
          quote:
            "This all-in-one software is exactly what our local business needed. It completely eliminated our need for 4 other separate platforms and organized our entire customer pipeline.",
          avatar: "/images/avatar.png",
          name: "Ronald Richards",
          company: "Local Services Co.",
        },
      },
      growth_process: {
        enable: true,
        title:
          'Your 3-Step Path to <strong class="italic">Automated Growth</strong>',
        items: [
          {
            logo: "/images/value-proposition/values-icon-2.svg",
            title: "1. Start Your Trial",
            content:
              "Sign up for a free trial and experience the power of the platform for yourself. No credit card required.",
          },
          {
            logo: "/images/value-proposition/values-icon-2.svg",
            title: "2. Connect Your Business",
            content:
              "Forward your calls, plug in your social accounts, and unify your inbox in a matter of clicks.",
          },
          {
            logo: "/images/value-proposition/values-icon-2.svg",
            title: "3. Scale on Autopilot",
            content:
              "Watch your calendar fill up and reviews come in automatically, so you can focus on serving your customers.",
          },
        ],
        button: {
          enable: true,
          label: "Start Your 14-Day Free Trial",
          link: "#pricing",
        },
      },
      integrations: {
        enable: true,
        title: "Connect all your <strong>Applications</strong>",
        items: [
          { image: "/images/integrations/snapchat.png", alt: "snapchat" },
          { image: "/images/integrations/fastapi.png", alt: "fastapi" },
          { image: "/images/integrations/youtube.png", alt: "youtube" },
          { image: "/images/integrations/airtable.png", alt: "airtable" },
          { image: "/images/integrations/zendesk.png", alt: "zendesk" },
          { image: "/images/integrations/slack.png", alt: "slack" },
          { image: "/images/integrations/mailchimp.png", alt: "mailchimp" },
          { image: "/images/integrations/asana.png", alt: "asana" },
        ],
      },
      lead_generation: {
        enable: true,
        title: "Free Resource for <strong>Local Business Owners</strong>",
        subtitle:
          "The \"Leaking Bucket\" Audit: 5 Ways You're Losing Local Leads (And How to Fix Them).",
        content:
          'Did you know that most small businesses lose up to 50% of their potential sales simply because of slow follow-up?\n\nDownload our <strong>FREE</strong> Checklist to identify the "lead leaks" in your current business and learn how to plug them with simple software automation.',
        list: [
          { value: "<strong>The Follow-Up Audit:</strong> A step-by-step guide to measuring your lead response time." },
          { value: "<strong>Automation Quick-Wins:</strong> 3 workflows you can set up today to start booking more local appointments." },
          { value: "<strong>The Tech Stack Check:</strong> Stop paying for 5 different software tools." },
        ],
        image: "/images/ebook.png",
        button: {
          enable: true,
          label: "Get Free Checklist",
          link: "#contact",
        },
      },
      pricing: {
        enable: true,
        title: "Affordable <strong>Pricing Plans</strong>",
        content:
          "Choose the plan that fits your local business and start growing automatically.",
      },
    },
  });

  // --- Homepage (Arabic) ---
  await payload.create({
    collection: "homepage",
    locale: "ar",
    data: {
      banner: {
        title:
          "برنامج النمو الشامل لأصحاب <strong>الأعمال المحلية</strong>",
        content:
          "النظام الآلي المتكامل المصمم لالتقاط المزيد من العملاء المحتملين، والمتابعة الفورية، وتنمية أعمالك المحلية - كل ذلك في مكان واحد.",
        button_primary: {
          enable: true,
          label: "ابدأ تجربتك المجانية لمدة 14 يومًا",
          link: "#pricing",
        },
        button_secondary: {
          enable: true,
          label: "احجز عرضًا توضيحيًا",
          link: "#contact",
        },
      },
      main_features: {
        enable: true,
        title:
          "هل تخسر عملاء حقيقيين بسبب <strong>فجوة المتابعة؟</strong>",
        content:
          "توقف عن هدر الأموال على التسويق إذا لم تكن تستطيع الرد بما يكفي من السرعة. نظامنا يضمن حصول كل عميل محتمل على اهتمام فوري.",
        items: [
          { value: "إهدار ميزانية الإعلانات" },
          { value: "مجموعة أدوات مكلفة ومشتتة" },
          { value: "بيانات عملاء متناثرة" },
          { value: "مكالمات فائتة تكلف الآلاف" },
          { value: "خسارة عملاء محتملين لصالح المنافسين" },
          { value: "أوقات استجابة بطيئة" },
        ],
      },
      value_props: {
        enable: true,
        title:
          "استبدل أدواتك المشتتة بـ <strong>نظام ذكي شامل</strong>",
        content:
          "سجّل الدخول إلى لوحة تحكم قوية واحدة لإدارة كل شيء بسلاسة.",
        items: [
          {
            logo: "/images/value-proposition/values-icon-1.svg",
            title: "متابعة العملاء الآلية",
            list: [
              { value: "الرد التلقائي على المكالمات الفائتة" },
              { value: "جدولة المواعيد على مدار الساعة" },
              { value: "متابعة فورية عبر الرسائل والبريد" },
            ],
          },
          {
            logo: "/images/value-proposition/values-icon-2.svg",
            title: "قاعدة بيانات العملاء الذكية",
            list: [
              { value: "صندوق وارد موحد للعملاء المحتملين" },
              { value: "مدير خطوط المبيعات الذكي" },
              { value: "ملاحظات وسجل العملاء" },
            ],
          },
          {
            logo: "/images/value-proposition/values-icon-3.svg",
            title: "مولّد التقييمات التلقائي",
            list: [
              { value: "طلبات تقييم آلية" },
              { value: "تكامل مع جوجل وفيسبوك" },
              { value: "تتبع السمعة" },
            ],
          },
          {
            logo: "/images/value-proposition/values-icon-4.svg",
            title: "مواقع ويب عالية التحويل",
            list: [
              { value: "صفحات هبوط بالسحب والإفلات" },
              { value: "نماذج التقاط العملاء المحتملين" },
              { value: "ويدجات الدردشة" },
            ],
          },
        ],
      },
      our_features: {
        enable: true,
        title:
          "كل ما تحتاجه لوضع النمو على <strong>الطيار الآلي</strong>",
        content:
          "من التقاط النقرة الأولى إلى الحصول على تقييم بخمسة نجوم، نحن نوفر لك كل شيء.",
        items: [
          { logo: "/images/features-menu-icon.svg", title: "متابعة العملاء الآلية", is_starred: false },
          { logo: "/images/features-menu-icon.svg", title: "مولّد التقييمات التلقائي", is_starred: false },
          { logo: "/images/features-menu-icon.svg", title: "الرد على المكالمات الفائتة", is_starred: false },
          { logo: "/images/features-menu-icon.svg", title: "جدولة المواعيد على مدار الساعة", is_starred: false },
          { logo: "/images/features-menu-icon.svg", title: "صندوق الوارد الموحد", is_starred: true },
          { logo: "/images/features-menu-icon.svg", title: "قاعدة بيانات العملاء الذكية", is_starred: false },
          { logo: "/images/features-menu-icon.svg", title: "مواقع ويب عالية التحويل", is_starred: false },
          { logo: "/images/features-menu-icon.svg", title: "نماذج بالسحب والإفلات", is_starred: false },
          { logo: "/images/features-menu-icon.svg", title: "حملات رسائل آلية", is_starred: false },
        ],
      },
      testimonial_quote: {
        enable: true,
        title:
          "نحن نعلم أنك لم تبدأ عملك المحلي لتصبح <strong>مهندس برمجيات</strong>",
        quote:
          "قبل هذا النظام، كنت أخسر نصف عمليائي ببساطة لأنني لم أستطع الرد على هاتفي بسرعة كافية أثناء العمل. الآن، النظام يتولى المتابعة نيابة عني، وشاهدت زيادة بنسبة 300% في الحجوزات.",
      },
      single_testimonial: {
        enable: true,
        stats: [
          { value: "+10,000", label: "عملاء محتملين تم التقاطهم" },
          { value: "5x أسرع", label: "وقت الاستجابة" },
          { value: "28 ساعة/أسبوع", label: "ساعات تم توفيرها" },
        ],
        testimonial: {
          quote:
            "هذا البرنامج الشامل هو بالضبط ما احتاجته أعمالنا المحلية. لقد ألغى تمامًا حاجتنا إلى 4 منصات منفصلة ونظّم خط أنابيب العملاء بالكامل.",
          avatar: "/images/avatar.png",
          name: "رونالد ريتشاردز",
          company: "شركة الخدمات المحلية",
        },
      },
      growth_process: {
        enable: true,
        title:
          "طريقك المكون من 3 خطوات نحو <strong class=\"italic\">النمو الآلي</strong>",
        items: [
          {
            logo: "/images/value-proposition/values-icon-2.svg",
            title: "1. ابدأ تجربتك المجانية",
            content:
              "سجّل في تجربة مجانية وتعرّف على قوة المنصة بنفسك. لا حاجة لبطاقة ائتمان.",
          },
          {
            logo: "/images/value-proposition/values-icon-2.svg",
            title: "2. اربط أعمالك",
            content:
              "حوّل مكالماتك، واربط حساباتك الاجتماعية، ووحّد صندوق الوارد بنقرات قليلة.",
          },
          {
            logo: "/images/value-proposition/values-icon-2.svg",
            title: "3. انمُ على الطيار الآلي",
            content:
              "شاهد تقويمك يمتلئ والتقييمات تتدفق تلقائيًا، حتى تتمكن من التركيز على خدمة عملائك.",
          },
        ],
        button: {
          enable: true,
          label: "ابدأ تجربتك المجانية لمدة 14 يومًا",
          link: "#pricing",
        },
      },
      integrations: {
        enable: true,
        title: "اربط جميع <strong>تطبيقاتك</strong>",
        items: [
          { image: "/images/integrations/snapchat.png", alt: "snapchat" },
          { image: "/images/integrations/fastapi.png", alt: "fastapi" },
          { image: "/images/integrations/youtube.png", alt: "youtube" },
          { image: "/images/integrations/airtable.png", alt: "airtable" },
          { image: "/images/integrations/zendesk.png", alt: "zendesk" },
          { image: "/images/integrations/slack.png", alt: "slack" },
          { image: "/images/integrations/mailchimp.png", alt: "mailchimp" },
          { image: "/images/integrations/asana.png", alt: "asana" },
        ],
      },
      lead_generation: {
        enable: true,
        title: "مصدر مجاني لأصحاب <strong>الأعمال المحلية</strong>",
        subtitle:
          "تدقيق \"الدلو المثقب\": 5 طرق تخسر بها عملاء محتملين (وكيفية إصلاحها).",
        content:
          "هل تعلم أن معظم الشركات الصغيرة تخسر ما يصل إلى 50% من مبيعاتها المحتملة ببساطة بسبب بطء المتابعة؟\n\nحمّل <strong>قائمتنا المجانية</strong> لتحديد \"تسربات العملاء المحتملين\" في عملك الحالي وتعلم كيفية سدها باستخدام أتمتة البرمجيات البسيطة.",
        list: [
          { value: "<strong>تدقيق المتابعة:</strong> دليل خطوة بخطوة لقياس وقت استجابتك للعملاء المحتملين." },
          { value: "<strong>انتصارات الأتمتة السريعة:</strong> 3 سير عمل يمكنك إعدادها اليوم لبدء حجز المزيد من المواعيد المحلية." },
          { value: "<strong>فحص مجموعة الأدوات:</strong> توقف عن الدفع مقابل 5 أدوات برمجية مختلفة." },
        ],
        image: "/images/ebook.png",
        button: {
          enable: true,
          label: "احصل على القائمة المجانية",
          link: "#contact",
        },
      },
      pricing: {
        enable: true,
        title: "<strong>خطط تسعير</strong> ميسورة",
        content:
          "اختر الخطة المناسبة لعملك المحلي وابدأ النمو تلقائيًا.",
      },
    },
  });

  // --- About (English) ---
  await payload.create({
    collection: "about",
    locale: "en",
    data: {
      title: "About Us",
      meta_title: "About Us - All-In-One Local Business Software",
      description: "Your System-Driven Growth Partner.",
      page_header: {
        title: "Your System-Driven <strong>Growth Partner.</strong>",
        subtitle:
          "We believe local businesses shouldn't have to hire a full-time IT department just to get more customers. We built this platform to put your growth on autopilot.",
        image: "/images/about_hero.png",
      },
      stats: {
        enable: true,
        items: [
          { value: "10,000+", label: "Local Businesses Served" },
          { value: "5M+", label: "Leads Captured" },
          { value: "24/7", label: "Automated Workflows" },
          { value: "99%", label: "Platform Uptime" },
        ],
      },
      our_team: {
        enable: true,
        badge: "Our Team",
        title: "Meet Our <strong>Team Of Experts</strong>",
        members: [
          { image: "/images/peoples/Profile Image.png", name: "Josh Wangombe", role: "Co-Founder & CTO" },
          { image: "/images/peoples/Profile Image-1.png", name: "Daniel Jenson", role: "Co-Founder & CEO" },
          { image: "/images/peoples/Profile Image-2.png", name: "Toun Aalbers", role: "Co-Founder & CTO" },
          { image: "/images/peoples/Profile Image-3.png", name: "Peter van Ursel", role: "Customer Success Director" },
        ],
      },
      core_values: {
        enable: true,
        badge: "Our Core Mission",
        title: "Empowering Local Businesses to <strong>Thrive and Scale</strong>",
        subtitle:
          "We replace the outdated, scattered tools with one powerful platform, so you can focus on what matters most: serving your clients and customers.",
        items: [
          { logo: "/images/icons/innovation.svg", title: "Simplicity First", is_starred: false },
          { logo: "/images/icons/security.svg", title: "Bank-Level Security", is_starred: false },
          { logo: "/images/icons/collaboration.svg", title: "Local Focus", is_starred: false },
          { logo: "/images/icons/result-driven.svg", title: "Results-Driven Tools", is_starred: false },
          { logo: "/images/icons/creativity.svg", title: "Automated Growth", is_starred: true },
          { logo: "/images/icons/innovation.svg", title: "Client-Centric", is_starred: false },
          { logo: "/images/icons/membership.svg", title: "No Hidden Fees", is_starred: false },
          { logo: "/images/icons/starred-folder.svg", title: "Reliable Support", is_starred: false },
          { logo: "/images/features-menu-icon.svg", title: "Continuous Updates", is_starred: false },
        ],
      },
    },
  });

  // --- About (Arabic) ---
  await payload.create({
    collection: "about",
    locale: "ar",
    data: {
      title: "عن الشركة",
      meta_title: "عن الشركة - برنامج النمو الشامل للأعمال المحلية",
      description: "شريكك في النمو المدعوم بالأنظمة.",
      page_header: {
        title: "شريكك في <strong>النمو المدعوم بالأنظمة.</strong>",
        subtitle:
          "نؤمن أن الأعمال المحلية لا ينبغي أن توظف قسم تكنولوجيا معلومات بدوام كامل只是为了 الحصول على المزيد من العملاء. بنينا هذه المنصة لوضع نموك على الطيار الآلي.",
        image: "/images/about_hero.png",
      },
      stats: {
        enable: true,
        items: [
          { value: "+10,000", label: "عمل محلي يتم خدمته" },
          { value: "+5M", label: "عملاء محتملين تم التقاطهم" },
          { value: "24/7", label: "سير عمل آلية" },
          { value: "99%", label: "وقت تشغيل المنصة" },
        ],
      },
      our_team: {
        enable: true,
        badge: "فريقنا",
        title: "تعرّف على <strong>فريق الخبراء</strong>",
        members: [
          { image: "/images/peoples/Profile Image.png", name: "جوش وانغومبي", role: "المؤسس المشارك والمدير التقني" },
          { image: "/images/peoples/Profile Image-1.png", name: "دانيال جينسون", role: "المؤسس المشارك والرئيس التنفيذي" },
          { image: "/images/peoples/Profile Image-2.png", name: "تون أالبرز", role: "المؤسس المشارك والمدير التقني" },
          { image: "/images/peoples/Profile Image-3.png", name: "بيتر فان أورسل", role: "مدير نجاح العملاء" },
        ],
      },
      core_values: {
        enable: true,
        badge: "مهمتنا الأساسية",
        title: "تمكين الأعمال المحلية من <strong>الازدهار والتوسع</strong>",
        subtitle:
          "نستبدل الأدوات القديمة والمشتتة بمنصة قوية واحدة، حتى تتمكن من التركيز على ما يهم أكثر: خدمة عملائك.",
        items: [
          { logo: "/images/icons/innovation.svg", title: "البساطة أولاً", is_starred: false },
          { logo: "/images/icons/security.svg", title: "أمان على مستوى البنوك", is_starred: false },
          { logo: "/images/icons/collaboration.svg", title: "التركيز المحلي", is_starred: false },
          { logo: "/images/icons/result-driven.svg", title: "أدوات موجهة بالنتائج", is_starred: false },
          { logo: "/images/icons/creativity.svg", title: "النمو الآلي", is_starred: true },
          { logo: "/images/icons/innovation.svg", title: "التركيز على العميل", is_starred: false },
          { logo: "/images/icons/membership.svg", title: "بدون رسوم خفية", is_starred: false },
          { logo: "/images/icons/starred-folder.svg", title: "دعم موثوق", is_starred: false },
          { logo: "/images/features-menu-icon.svg", title: "تحديثات مستمرة", is_starred: false },
        ],
      },
    },
  });

  // --- Features (English) ---
  await payload.create({
    collection: "features",
    locale: "en",
    data: {
      title: "Features",
      meta_title: "Features - The All-In-One Growth Software",
      description:
        "Everything your local business needs to attract, engage, convert, and retain customers automatically.",
      banner: {
        title: "Features That Turn <br /> Attention <strong>Into Revenue</strong>",
        content:
          "A single piece of software built to manage your entire business on autopilot. Say goodbye to scattered tools and forgotten leads.",
        image: "/images/automark_dashboard.png",
        button_primary: { enable: true, label: "Start Free Trial", link: "#pricing" },
        button_secondary: { enable: true, label: "Book a Demo", link: "#contact" },
      },
      partners: {
        enable: true,
        badge: "Trusted Platform",
        title: "Powering thousands of <strong>local businesses</strong> worldwide",
      },
      smart_platform: {
        enable: true,
        title: "Automate every part of your <br /> business with <strong>one smart platform.</strong>",
        cards: [
          { title: "Automated Customer Follow-Up", subtitle: "Never lose a lead again. Respond to inquiries instantly and automatically.", image: "/images/features/automated-marketing-visual.svg", classNames: "" },
          { title: "Autopilot Review Generator", subtitle: "Automatically request and track 5-star Google reviews from happy clients.", image: "/images/features/ai-powered-graph.svg", classNames: "" },
          { title: "Missed Call Auto-Responder", subtitle: "Turn missed calls into booked appointments with instant automated text messages.", image: "/images/features/grow-your-earnings.svg", classNames: "" },
          { title: "Unified Lead Inbox", subtitle: "Manage all your SMS, email, Facebook, and Instagram messages in one single dashboard.", image: "/images/features/turnover-table.svg", classNames: "md:col-span-2 lg:col-span-2" },
          { title: "24/7 Appointment Scheduler", subtitle: "Let customers book directly on your calendar, completely eliminating back-and-forth emails.", image: "/images/features/marketing-autopilot.svg", classNames: "" },
        ],
      },
      service_features: {
        enable: true,
        items: [
          {
            title: "Built specifically to grow <strong>your local business</strong>",
            image: "/images/features/service-feature-1.svg",
            reverse: false,
            items: [
              { icon: "FaBolt", title: "Setup in Minutes", content: "Get up and running immediately with our pre-built local business templates." },
              { icon: "FaBrain", title: "Automated Intelligence", content: "Smart workflows that automatically sort, nurture and follow up with your leads." },
              { icon: "FaLock", title: "Secure & Reliable", content: "Your client database and payment info is protected with bank-level encryption." },
              { icon: "FaCubes", title: "All Tools In One Place", content: "Replace your CRM, website builder, calendar, and email marketing software." },
            ],
          },
          {
            title: "The only software you need to <strong>scale predictably</strong>",
            image: "/images/features/service-feature-2.svg",
            reverse: true,
            items: [
              { icon: "FaChartSimple", title: "Clear ROI Tracking", content: "See exactly which campaigns and ads are generating the most revenue." },
              { icon: "FaRocket", title: "Easy to Use", content: "Designed for business owners, not IT professionals. Simple and intuitive." },
              { icon: "FaShieldHalved", title: "Complete Client History", content: "View every text, email, and phone call with a client in a single chronological feed." },
              { icon: "FaTableCellsLarge", title: "Mobile App Access", content: "Manage leads, reply to messages, and run your business from anywhere using our mobile app." },
            ],
          },
        ],
      },
    },
  });

  // --- Features (Arabic) ---
  await payload.create({
    collection: "features",
    locale: "ar",
    data: {
      title: "المميزات",
      meta_title: "المميزات - برنامج النمو الشامل",
      description:
        "كل ما يحتاجه عملك المحلي لجذب العملاء وإشراكهم وتحويلهم والاحتفاظ بهم تلقائيًا.",
      banner: {
        title: "مميزات تحوّل <br /> الانتباه <strong>إلى إيرادات</strong>",
        content:
          "برنامج واحد مبني لإدارة عملك بالكامل على الطيار الآلي. ودّع الأدوات المشتتة والعملاء المحتملين المنسيين.",
        image: "/images/automark_dashboard.png",
        button_primary: { enable: true, label: "ابدأ تجربة مجانية", link: "#pricing" },
        button_secondary: { enable: true, label: "احجز عرضًا توضيحيًا", link: "#contact" },
      },
      partners: {
        enable: true,
        badge: "منصة موثوقة",
        title: "نخدم آلاف <strong>الأعمال المحلية</strong> حول العالم",
      },
      smart_platform: {
        enable: true,
        title: "أتمت كل جزء من <br /> عملك بـ <strong>منصة ذكية واحدة.</strong>",
        cards: [
          { title: "متابعة العملاء الآلية", subtitle: "لا تخسر عملاء محتملين أبدًا. استجب للاستفسارات فورًا وآليًا.", image: "/images/features/automated-marketing-visual.svg", classNames: "" },
          { title: "مولّد التقييمات التلقائي", subtitle: "اطلب تقييمات جوجل بخمس نجوم تلقائيًا من العملاء السعداء وتابعها.", image: "/images/features/ai-powered-graph.svg", classNames: "" },
          { title: "الرد على المكالمات الفائتة", subtitle: "حوّل المكالمات الفائتة إلى مواعيد محجوزة برسائل نصية آلية فورية.", image: "/images/features/grow-your-earnings.svg", classNames: "" },
          { title: "صندوق الوارد الموحد", subtitle: "أدِر جميع رسائل SMS والبريد وفيسبوك وإنستغرام في لوحة تحكم واحدة.", image: "/images/features/turnover-table.svg", classNames: "md:col-span-2 lg:col-span-2" },
          { title: "جدولة المواعيد على مدار الساعة", subtitle: "دع العملاء يحجزون مباشرة في تقويمك، مع إلغاء رسائل البريد الإلكتروني المتكررة.", image: "/images/features/marketing-autopilot.svg", classNames: "" },
        ],
      },
      service_features: {
        enable: true,
        items: [
          {
            title: "مصمم خصيصًا لتنمية <strong>عملك المحلي</strong>",
            image: "/images/features/service-feature-1.svg",
            reverse: false,
            items: [
              { icon: "FaBolt", title: "إعداد في دقائق", content: "ابدأ العمل فورًا باستخدام قوالبنا الجاهزة للأعمال المحلية." },
              { icon: "FaBrain", title: "ذكاء آلي", content: "سير عمل ذكية تفرز تلقائيًا وترعى وتتابع مع عملائك المحتملين." },
              { icon: "FaLock", title: "آمن وموثوق", content: "قاعدة بيانات العملاء ومعلومات الدفع محمية بتشفير على مستوى البنوك." },
              { icon: "FaCubes", title: "جميع الأدوات في مكان واحد", content: "استبدل نظام CRM وبناء المواقع والتقويم وبرنامج التسويق بالبريد." },
            ],
          },
          {
            title: "البرنامج الوحيد الذي تحتاجه <strong>للتوسع بشكل متوقع</strong>",
            image: "/images/features/service-feature-2.svg",
            reverse: true,
            items: [
              { icon: "FaChartSimple", title: "تتبع واضح للعائد على الاستثمار", content: "شاهد بالضبط أي الحملات والإعلانات تولد أكبر إيرادات." },
              { icon: "FaRocket", title: "سهل الاستخدام", content: "مصمم لأصحاب الأعمال وليس لمتخصصي تكنولوجيا المعلومات. بسيط وبديهي." },
              { icon: "FaShieldHalved", title: "سجل العميل الكامل", content: "شاهد كل رسالة وبريد ومكالمة هاتفية مع عميل في تغذية واحدة ترتيبية." },
              { icon: "FaTableCellsLarge", title: "الوصول عبر تطبيق الجوال", content: "أدِر العملاء المحتملين ورد على الرسائل وأدرِ عملك من أي مكان." },
            ],
          },
        ],
      },
    },
  });

  // --- Contact (English) ---
  await payload.create({
    collection: "contact",
    locale: "en",
    data: {
      title: "Contact Us",
      meta_title: "Contact Us - All-In-One Local Business Software",
      description: "Have a question about streamlining your business? Send us a message.",
      page_header: {
        title: "Have a question? <strong>Send us a message</strong>",
        subtitle:
          "Our team is here to help. Whether you want to learn more about the Missed Call Auto-Responder, or how to set up your Unified Inbox, our support team is ready to assist you.",
      },
      contact_info: {
        enable: true,
        items: [
          { type: "email", title: "Email Us", detail: "hello@yoursoftware.com", link: "mailto:hello@yoursoftware.com", icon: "FaEnvelope" },
          { type: "phone", title: "Call or Text Us", detail: "+1 (800) 123-4567", link: "tel:+18001234567", icon: "FaPhone" },
          { type: "calendar", title: "Book A Demo", detail: "Schedule your one-on-one setup call", link: "#", icon: "FaCalendarCheck" },
        ],
      },
    },
  });

  // --- Contact (Arabic) ---
  await payload.create({
    collection: "contact",
    locale: "ar",
    data: {
      title: "تواصل معنا",
      meta_title: "تواصل معنا - برنامج النمو الشامل للأعمال المحلية",
      description: "لديك سؤال حول تحسين أعمالك؟ أرسل لنا رسالة.",
      page_header: {
        title: "لديك سؤال؟ <strong>أرسل لنا رسالة</strong>",
        subtitle:
          "فريقنا هنا للمساعدة. سواء كنت تريد معرفة المزيد عن ميزة الرد التلقائي على المكالمات الفائتة، أو كيفية إعداد صندوق الوارد الموحد، فريق الدعم جاهز لمساعدتك.",
      },
      contact_info: {
        enable: true,
        items: [
          { type: "email", title: "راسلنا", detail: "hello@yoursoftware.com", link: "mailto:hello@yoursoftware.com", icon: "FaEnvelope" },
          { type: "phone", title: "اتصل أو أرسل رسالة", detail: "+966 50 123 4567", link: "tel:+966501234567", icon: "FaPhone" },
          { type: "calendar", title: "احجز عرضًا توضيحيًا", detail: "جدول مكالمة الإعداد الخاصة بك", link: "#", icon: "FaCalendarCheck" },
        ],
      },
    },
  });

  // --- Pricing (English) ---
  await payload.create({
    collection: "pricing",
    locale: "en",
    data: {
      title: "Pricing",
      meta_title: "Pricing - All-In-One Local Business Software",
      description: "Simple, transparent pricing for every stage of your local business growth.",
      page_header: {
        badge: "Pricing",
        title: "Pricing Built For Local Business Growth",
        content: "Start your free 14-day trial, scale as you grow. No contracts. Cancel anytime.",
      },
      toggler: {
        monthly_label: "Monthly",
        yearly_label: "Yearly",
      },
      plans: [
        {
          title: "Essentials",
          price: "97",
          yearly_price: "970",
          is_featured: false,
          description: "The core necessities for organizing your leads and capturing more business.",
          button: { enable: true, label: "Start Free Trial", link: "#contact" },
          features: [
            { label: "Unified Lead Inbox", included: true },
            { label: "Missed Call Auto-Responder", included: true, tooltip: "Automatically text back missed calls." },
            { label: "Autopilot Review Generator", included: true },
            { label: "24/7 Appointment Scheduler", included: false },
            { label: "Automated Follow-Up Campaigns", included: false },
          ],
        },
        {
          title: "Growth",
          price: "297",
          yearly_price: "2970",
          is_featured: true,
          offer_text: "Most Popular",
          description: "Everything you need to put your business growth on complete autopilot.",
          button: { enable: true, label: "Start Free Trial", link: "#contact" },
          features: [
            { label: "Unified Lead Inbox & Reviews", included: true },
            { label: "24/7 Appointment Scheduler", included: true, tooltip: "Unlimited calendars and bookings." },
            { label: "Automated Follow-Up Campaigns", included: true },
            { label: "High-Converting Websites & Funnels", included: true },
            { label: "Advanced API Integrations", included: false },
          ],
        },
        {
          title: "Scale",
          price: "497",
          yearly_price: "4970",
          is_featured: false,
          description: "Total control and advanced tools to scale multiple locations seamlessly.",
          button: { enable: true, label: "Start Free Trial", link: "#contact" },
          features: [
            { label: "Everything in Growth", included: true },
            { label: "Unlimited Social Media Posting", included: true, tooltip: "Schedule content across all platforms." },
            { label: "Advanced API Integrations", included: true },
            { label: "Multi-Location Support", included: true },
            { label: "Dedicated Account Manager", included: true },
          ],
        },
      ],
      comparison: {
        enable: true,
        badge: "Plan Matrix",
        title: "Pricing Plans <strong>Comparison</strong>",
        headers: [
          { label: "Features" },
          { label: "Essentials" },
          { label: "Growth" },
          { label: "Scale" },
        ],
        rows: [
          { feature: "Monthly Price", values: [{ value: "$97" }, { value: "$297" }, { value: "$497" }] },
          { feature: "User Accounts", values: [{ value: "3" }, { value: "10" }, { value: "Unlimited" }] },
          { feature: "Unified Lead Inbox", values: [{ value: "true" }, { value: "true" }, { value: "true" }] },
          { feature: "Missed Call Auto-Responder", values: [{ value: "true" }, { value: "true" }, { value: "true" }] },
          { feature: "Autopilot Review Generator", values: [{ value: "true" }, { value: "true" }, { value: "true" }] },
          { feature: "24/7 Appointment Scheduler", values: [{ value: "false" }, { value: "true" }, { value: "true" }] },
          { feature: "Website & Funnel Builder", values: [{ value: "false" }, { value: "true" }, { value: "true" }] },
          { feature: "Automated SMS/Email Campaigns", values: [{ value: "false" }, { value: "true" }, { value: "true" }] },
          { feature: "Multi-Location Management", values: [{ value: "false" }, { value: "false" }, { value: "true" }] },
          { feature: "Support", values: [{ value: "Email Support" }, { value: "Priority Support" }, { value: "Dedicated Manager" }] },
        ],
      },
    },
  });

  // --- Pricing (Arabic) ---
  await payload.create({
    collection: "pricing",
    locale: "ar",
    data: {
      title: "الأسعار",
      meta_title: "الأسعار - برنامج النمو الشامل للأعمال المحلية",
      description: "تسعير بسيط وشفاف لكل مرحلة من مراحل نمو عملك المحلي.",
      page_header: {
        badge: "الأسعار",
        title: "تسعير مصمم لنمو الأعمال المحلية",
        content: "ابدأ تجربتك المجانية لمدة 14 يومًا، وتوسع مع نموك. بدون عقود. ألغِ في أي وقت.",
      },
      toggler: {
        monthly_label: "شهريًا",
        yearly_label: "سنويًا",
      },
      plans: [
        {
          title: "الأساسيات",
          price: "97",
          yearly_price: "970",
          is_featured: false,
          description: "الأساسيات الأساسية لتنظيم عملائك المحتملين والتقاط المزيد من الأعمال.",
          button: { enable: true, label: "ابدأ تجربة مجانية", link: "#contact" },
          features: [
            { label: "صندوق الوارد الموحد", included: true },
            { label: "الرد على المكالمات الفائتة", included: true, tooltip: "رسالة نصية تلقائية للمكالمات الفائتة." },
            { label: "مولّد التقييمات التلقائي", included: true },
            { label: "جدولة المواعيد على مدار الساعة", included: false },
            { label: "حملات المتابعة الآلية", included: false },
          ],
        },
        {
          title: "النمو",
          price: "297",
          yearly_price: "2970",
          is_featured: true,
          offer_text: "الأكثر شعبية",
          description: "كل ما تحتاجه لوضع نمو أعمالك على الطيار الآلي بالكامل.",
          button: { enable: true, label: "ابدأ تجربة مجانية", link: "#contact" },
          features: [
            { label: "صندوق الوارد الموحد والتقييمات", included: true },
            { label: "جدولة المواعيد على مدار الساعة", included: true, tooltip: "تقويمات وحجوزات غير محدودة." },
            { label: "حملات المتابعة الآلية", included: true },
            { label: "مواقع وقنوات عالية التحويل", included: true },
            { label: "تكاملات API متقدمة", included: false },
          ],
        },
        {
          title: "التوسع",
          price: "497",
          yearly_price: "4970",
          is_featured: false,
          description: "تحكم كامل وأدوات متقدمة لتوسيع مواقع متعددة بسلاسة.",
          button: { enable: true, label: "ابدأ تجربة مجانية", link: "#contact" },
          features: [
            { label: "كل ما في خطة النمو", included: true },
            { label: "نشر غير محدود على وسائل التواصل", included: true, tooltip: "جدولة المحتوى عبر جميع المنصات." },
            { label: "تكاملات API متقدمة", included: true },
            { label: "دعم مواقع متعددة", included: true },
            { label: "مدير حساب مخصص", included: true },
          ],
        },
      ],
      comparison: {
        enable: true,
        badge: "مصفوفة الخطط",
        title: "<strong>مقارنة</strong> خطط التسعير",
        headers: [
          { label: "المميزات" },
          { label: "الأساسيات" },
          { label: "النمو" },
          { label: "التوسع" },
        ],
        rows: [
          { feature: "السعر الشهري", values: [{ value: "$97" }, { value: "$297" }, { value: "$497" }] },
          { feature: "حسابات المستخدمين", values: [{ value: "3" }, { value: "10" }, { value: "غير محدود" }] },
          { feature: "صندوق الوارد الموحد", values: [{ value: "true" }, { value: "true" }, { value: "true" }] },
          { feature: "الرد على المكالمات الفائتة", values: [{ value: "true" }, { value: "true" }, { value: "true" }] },
          { feature: "مولّد التقييمات التلقائي", values: [{ value: "true" }, { value: "true" }, { value: "true" }] },
          { feature: "جدولة المواعيد على مدار الساعة", values: [{ value: "false" }, { value: "true" }, { value: "true" }] },
          { feature: "منشئ المواقع والقنوات", values: [{ value: "false" }, { value: "true" }, { value: "true" }] },
          { feature: "حملات الرسائل والبريد الآلية", values: [{ value: "false" }, { value: "true" }, { value: "true" }] },
          { feature: "إدارة مواقع متعددة", values: [{ value: "false" }, { value: "false" }, { value: "true" }] },
          { feature: "الدعم", values: [{ value: "دعم بالبريد" }, { value: "دعم ذو أولوية" }, { value: "مدير مخصص" }] },
        ],
      },
    },
  });

  // --- Testimonials (English) ---
  await payload.create({
    collection: "testimonial-section",
    locale: "en",
    data: {
      enable: true,
      title: "Real Stories From Local <strong>Business Owners</strong>",
      testimonials: [
        {
          name: "Marvin McKinney",
          designation: "Roofing Company Owner",
          poster: "/images/testimonials/1.png",
          content: "We used to lose at least 3-4 jobs a week because we couldn't answer the phone while on a roof. The Missed Call Auto-Responder immediately cut that to zero. This software pays for itself a hundred times over.",
          video: "/showcase.mp4",
        },
        {
          name: "Sarah Jenkins",
          designation: "Dental Practice Manager",
          poster: "/images/testimonials/2.png",
          content: "Our front desk was overwhelmed with appointment reminders and review requests. This system automated everything. Our show-up rate increased by 40% and our Google reviews doubled in two months.",
          video: "/showcase.mp4",
        },
        {
          name: "David Alaba",
          designation: "HVAC Contractor",
          poster: "/images/testimonials/3.png",
          content: "I finally cancelled my subscription to 5 different tools. Having the Smart Inbox, calendar, and text campaigns in one dashboard saved me nearly $600 a month and made my life so much simpler.",
        },
      ],
    },
  });

  // --- Testimonials (Arabic) ---
  await payload.create({
    collection: "testimonial-section",
    locale: "ar",
    data: {
      enable: true,
      title: "قصص حقيقية من <strong>أصحاب الأعمال المحلية</strong>",
      testimonials: [
        {
          name: "مارفين ماككيني",
          designation: "صاحب شركة تسقيف",
          poster: "/images/testimonials/1.png",
          content: "كنا نخسر ما لا يقل عن 3-4 وظائف أسبوعيًا لأننا لم نستطع الرد على الهاتف أثناء العمل على السطح. ميزة الرد على المكالمات الفائتة قللت ذلك فورًا إلى صفر. هذا البرنامج يدفع تكلفته مائة مرة.",
          video: "/showcase.mp4",
        },
        {
          name: "سارة جنكينز",
          designation: "مديرة عيادة أسنان",
          poster: "/images/testimonials/2.png",
          content: "كان مكتب الاستقبال لدينا مثقلاً بتذكيرات المواعيد وطلبات التقييم. هذا النظام أتمت كل شيء. ارتفعت نسبة الحضور بنسبة 40% وتضاعفت تقييماتنا على جوجل خلال شهرين.",
          video: "/showcase.mp4",
        },
        {
          name: "ديفيد ألابا",
          designation: "مقاول تكييف وتبريد",
          poster: "/images/testimonials/3.png",
          content: "ألغيت أخيرًا اشتراكي في 5 أدوات مختلفة. وجود صندوق الوارد الذكي والتقويم وحملات الرسائل في لوحة تحكم واحدة وفّر لي ما يقرب من 600 دولار شهريًا وجعل حياتي أسهل بكثير.",
        },
      ],
    },
  });

  // --- FAQ (English) ---
  await payload.create({
    collection: "faq-section",
    locale: "en",
    data: {
      enable: true,
      title: "Quick Answers for the Smart Investors",
      description: "Find answers to common questions about our product and services.",
      button: {
        enable: true,
        label: "Get This Template",
        link: "#",
      },
      items: [
        {
          question: "Is this software hard to set up?",
          answer: "Not at all. We built this platform specifically for local business owners who aren't tech experts. We provide templates and 1-on-1 support to get you running fast.",
        },
        {
          question: "What if I already have a website?",
          answer: "You can keep your existing website! Our tools (like the Web Chat Widget and Missed Call Text-Back) easily integrate with WordPress, Wix, and Squarespace with a simple line of code.",
        },
        {
          question: "Can this replace my existing CRM or Mailchimp?",
          answer: "Yes. Our platform includes a full CRM, unlimited email marketing, and SMS capabilities. Most of our clients cancel 3-5 other software subscriptions when they switch to us.",
        },
        {
          question: "How does the Missed Call Auto-Responder work?",
          answer: "When a customer calls your business number and you don't answer, the system instantly texts them back (e.g., 'Sorry we missed your call! How can we help you?'). This stops leads from calling your competitors.",
        },
        {
          question: "Are there any hidden fees?",
          answer: "No hidden fees. You pay a simple flat monthly rate. You may just pay fractional cents directly to telecom providers for your SMS usage, exactly what it costs.",
        },
      ],
    },
  });

  // --- FAQ (Arabic) ---
  await payload.create({
    collection: "faq-section",
    locale: "ar",
    data: {
      enable: true,
      title: "إجابات سريعة للمستثمرين الذكيين",
      description: "ابحث عن إجابات للأسئلة الشائعة حول منتجاتنا وخدماتنا.",
      button: {
        enable: true,
        label: "احصل على القالب",
        link: "#",
      },
      items: [
        {
          question: "هل هذا البرنامج صعب الإعداد؟",
          answer: "على الإطلاق. بنينا هذه المنصة خصيصًا لأصحاب الأعمال المحلية الذين ليسوا خبراء تقنيين. نقدم قوالب ودعم فردي للحصول عليك تعمل بسرعة.",
        },
        {
          question: "ماذا لو كان لدي موقع إلكتروني بالفعل؟",
          answer: "يمكنك الاحتفاظ بموقعك الحالي! أدواتنا (مثل ويدجت الدردشة والرد على المكالمات الفائتة) تدمج بسهولة مع ووردبريس وويكس وسكويرسبيس بسطر برمجي بسيط.",
        },
        {
          question: "هل يمكن أن يحل محل نظام CRM أو مايلشيمب الخاص بي؟",
          answer: "نعم. منصتنا تشمل نظام CRM كامل وتسويق بريد إلكتروني غير محدود وقدرات SMS. معظم عملائنا يلغون 3-5 اشتراكات برمجية أخرى عند التحول إلينا.",
        },
        {
          question: "كيف يعمل الرد التلقائي على المكالمات الفائتة؟",
          answer: "عندما يتصل عميل برقم عملك ولا تجيب، يرسل النظام رسالة نصية فورًا (مثلاً: 'نعتذر عن فوت مكالمتك! كيف يمكننا مساعدتك؟'). هذا يمنع العملاء المحتملين من الاتصال بمنافسيك.",
        },
        {
          question: "هل هناك أي رسوم خفية؟",
          answer: "لا توجد رسوم خفية. تدفع سعرًا شهريًا ثابتًا بسيطًا. قد تدفع فقط أجزاء سنت لمزودي الاتصالات مقابل استخدام الرسائل النصية، بالضبط ما يكلف.",
        },
      ],
    },
  });

  // --- Brands (English) ---
  await payload.create({
    collection: "brands-section",
    locale: "en",
    data: {
      enable: true,
      title: 'Trusted by <strong class="text-primary">10,000+</strong> local businesses to scale their bookings and growth automatically.',
      images: [
        { src: "/images/brands/dropbox-logo-svg-150px.svg", alt: "Dropbox" },
        { src: "/images/brands/hubspot-logo-svg-150.svg", alt: "HubSpot" },
        { src: "/images/brands/livechat-logo-svg-150px.svg", alt: "LiveChat" },
        { src: "/images/brands/pingdom-logo-svg-150px.svg", alt: "Pingdom" },
        { src: "/images/brands/scapic-logo-svg-150px.svg", alt: "Scapic" },
      ],
    },
  });

  // --- Brands (Arabic) ---
  await payload.create({
    collection: "brands-section",
    locale: "ar",
    data: {
      enable: true,
      title: 'موثوق من قبل <strong class="text-primary">+10,000</strong> عمل محلي لتوسيع حجوزاتهم ونموهم تلقائيًا.',
      images: [
        { src: "/images/brands/dropbox-logo-svg-150px.svg", alt: "Dropbox" },
        { src: "/images/brands/hubspot-logo-svg-150.svg", alt: "HubSpot" },
        { src: "/images/brands/livechat-logo-svg-150px.svg", alt: "LiveChat" },
        { src: "/images/brands/pingdom-logo-svg-150px.svg", alt: "Pingdom" },
        { src: "/images/brands/scapic-logo-svg-150px.svg", alt: "Scapic" },
      ],
    },
  });

  // --- Our Story (English) ---
  await payload.create({
    collection: "our-story-section",
    locale: "en",
    data: {
      enable: true,
      badge: "Our Philosophy",
      title: "Why We Do What We Do - A Letter From <strong>Our CEO</strong>",
      ceo: {
        image: "/images/avatar-lg.png",
        name: "Ronald Richards",
        role: "Founder & CEO",
      },
      letter: "At Automark, we know you started your local business to serve your community, not to become a software engineer. The problem is most modern marketing tools are too complex, scattered, and disconnected, which leaves you feeling overwhelmed and stuck in the daily admin grind.\n\nWe believe you shouldn't have to pay for five different subscriptions or spend your weekends sending emails just to grow your company. We understand how frustrating it is to watch hard-earned leads slip through the cracks, which is why we built a single, unified platform that puts your follow-ups, reviews, and bookings on complete autopilot.",
      letter_points_title: "Here's how we do it:",
      letter_points: [
        { value: "1. Plug In Your Business Data" },
        { value: "2. Activate Our Local Workflows" },
        { value: "3. Watch Your Bookings Grow" },
      ],
      closing_content: "Stop wasting money on scattered tools that don't talk to each other, and instead enjoy a streamlined business with consistent, predictable revenue growth.",
      button: {
        enable: true,
        label: "Start Your 14-Day Free Trial",
        link: "#pricing",
      },
    },
  });

  // --- Our Story (Arabic) ---
  await payload.create({
    collection: "our-story-section",
    locale: "ar",
    data: {
      enable: true,
      badge: "فلسفتنا",
      title: "لماذا نفعل ما نفعل - رسالة من <strong>الرئيس التنفيذي</strong>",
      ceo: {
        image: "/images/avatar-lg.png",
        name: "رونالد ريتشاردز",
        role: "المؤسس والرئيس التنفيذي",
      },
      letter: "في أوتوماتارك، نعلم أنك بدأت عملك المحلي لخدمة مجتمعك، وليس لتصبح مهندس برمجيات. المشكلة هي أن معظم أدوات التسويق الحديثة معقدة ومشتتة وغير متصلة، مما يجعلك تشعر بالإرهاق والتعثر في العمل الإداري اليومي.\n\nنؤمن أنه لا ينبغي أن تدفع مقابل خمس اشتراكات مختلفة أو تقضي عطلات نهاية الأسبوع في إرسال رسائل البريد الإلكتروني فقط لتنمية شركتك. نفهم مدى الإحباط في مشاهدة العملاء المحتملين التي كسبتها بصعوبة تتسرب من بين الأيدي، ولهذا السبب بنينا منصة موحدة واحدة تضع متابعتك وتقييماتك وحجوزاتك على الطيار الآلي بالكامل.",
      letter_points_title: "إليك كيف نفعل ذلك:",
      letter_points: [
        { value: "1. اربط بيانات أعمالك" },
        { value: "2. فعّل سير العمل المحلي لدينا" },
        { value: "3. شاهد حجوزاتك تنمو" },
      ],
      closing_content: "توقف عن هدر الأموال على أدوات مشتتة لا تتواصل مع بعضها، واستمتع بدلاً من ذلك بأعمال ميسرة مع نمو إيرادات متسق ومتوقع.",
      button: {
        enable: true,
        label: "ابدأ تجربتك المجانية لمدة 14 يومًا",
        link: "#pricing",
      },
    },
  });

  // --- CTA (English) ---
  await payload.create({
    collection: "call-to-action-section",
    locale: "en",
    data: {
      enable: true,
      title: "Ready to put Your Local Business Growth on <strong>Autopilot?</strong>",
      description: "Stop wasting thousands on scattered tools that don't convert and start enjoying streamlined, predictable growth.",
      button: {
        enable: true,
        label: "Start Your 14-Days Free Trial",
        link: "#pricing",
      },
    },
  });

  // --- CTA (Arabic) ---
  await payload.create({
    collection: "call-to-action-section",
    locale: "ar",
    data: {
      enable: true,
      title: "هل أنت مستعد لوضع نمو أعمالك المحلية على <strong>الطيار الآلي؟</strong>",
      description: "توقف عن هدر الآلاف على الأدوات المشتتة التي لا تحقق تحويلات وابدأ الاستمتاع بنمو ميسر ومتوقع.",
      button: {
        enable: true,
        label: "ابدأ تجربتك المجانية لمدة 14 يومًا",
        link: "#pricing",
      },
    },
  });

  // --- Business Needs (English) ---
  await payload.create({
    collection: "business-needs-section",
    locale: "en",
    data: {
      enable: true,
      badge: "",
      title: "The 5 things every <strong>Business Needs</strong>",
      items: [
        { image: "/images/brands-group-1.png", number: "01", title: "TRAFFIC", content: "Drive more high-quality local leads to your business through optimized Google search and social visibility." },
        { image: "/images/brands-group-2.png", number: "02", title: "CAPTURE", content: "Convert website visitors into real conversations using web chat widgets and fast lead capture forms." },
        { image: "/images/brands-group-3.png", number: "03", title: "NURTURING", content: "Automatically follow up with every lead via SMS and email so no one slips through the cracks." },
        { image: "/images/brands-group-4.png", number: "04", title: "CONVERT", content: "Turn prospects into paying customers by making appointment booking and payments incredibly simple." },
        { image: "/images/brands-group-5.png", number: "05", title: "REFER", content: "Automatically request 5-star Google reviews from happy customers to drive even more organic traffic." },
      ],
    },
  });

  // --- Business Needs (Arabic) ---
  await payload.create({
    collection: "business-needs-section",
    locale: "ar",
    data: {
      enable: true,
      badge: "",
      title: "5 أشياء يحتاجها كل <strong>عمل</strong>",
      items: [
        { image: "/images/brands-group-1.png", number: "01", title: "الزيارات", content: "اجذب المزيد من العملاء المحتملين المحليين عالي الجودة لعملك من خلال تحسين الظهور على جوجل ووسائل التواصل الاجتماعي." },
        { image: "/images/brands-group-2.png", number: "02", title: "الالتقاط", content: "حوّل زوار الموقع إلى محادثات حقيقية باستخدام ويدجات الدردشة ونماذج التقاط العملاء المحتملين السريعة." },
        { image: "/images/brands-group-3.png", number: "03", title: "الرعاية", content: "تابع تلقائيًا مع كل عميل محتمل عبر الرسائل والبريد الإلكتروني حتى لا يسقط أحد من القائمة." },
        { image: "/images/brands-group-4.png", number: "04", title: "التحويل", content: "حوّل المهتمين إلى عملاء يدفعون من خلال تسهيل حجز المواعيد والدفع إلى أقصى حد." },
        { image: "/images/brands-group-5.png", number: "05", title: "الإحالة", content: "اطلب تقييمات جوجل بخمس نجوم تلقائيًا من العملاء السعداء لجذب المزيد من الزيارات العضوية." },
      ],
    },
  });

  // --- Comparison Row (English) ---
  await payload.create({
    collection: "comparison-row-section",
    locale: "en",
    data: {
      enable: true,
      badge: "",
      title: "But It Used To Be <strong>Difficult</strong>",
      price_suffix: "/Per Month",
      items: [
        { title: "Social Media Platforms", price: "$99", images: [{ image: "/images/platforms-logo/ableton.svg" }, { image: "/images/platforms-logo/airbnb.svg" }] },
        { title: "Email Marketing Tools", price: "$149", images: [{ image: "/images/platforms-logo/facebook.svg" }, { image: "/images/platforms-logo/figma.svg" }, { image: "/images/platforms-logo/linkedin.svg" }] },
        { title: "CRM Software", price: "$199", images: [{ image: "/images/platforms-logo/scribd.svg" }] },
        { title: "Ad Platforms", price: "$249", images: [{ image: "/images/platforms-logo/slack.svg" }, { image: "/images/platforms-logo/soundcloud.svg" }, { image: "/images/platforms-logo/spotify.svg" }, { image: "/images/platforms-logo/swiftkey.svg" }] },
        { title: "Scheduling Tools", price: "$79", images: [{ image: "/images/platforms-logo/telegram.svg" }, { image: "/images/platforms-logo/ubuntu.svg" }, { image: "/images/platforms-logo/ableton.svg" }, { image: "/images/platforms-logo/airbnb.svg" }, { image: "/images/platforms-logo/basecamp.svg" }] },
        { title: "Analytics Platforms", price: "$129", images: [{ image: "/images/platforms-logo/docker.svg" }, { image: "/images/platforms-logo/dribbble.svg" }, { image: "/images/platforms-logo/github.svg" }] },
        { title: "Automation Tools", price: "$179", images: [{ image: "/images/platforms-logo/pinterest.svg" }, { image: "/images/platforms-logo/react.svg" }] },
        { title: "Project Management", price: "$59", images: [{ image: "/images/platforms-logo/safari.svg" }, { image: "/images/platforms-logo/scribd.svg" }] },
        { title: "Payment Gateways", price: "$89", images: [{ image: "/images/platforms-logo/swiftkey.svg" }, { image: "/images/platforms-logo/techcrunch.svg" }, { image: "/images/platforms-logo/telegram.svg" }, { image: "/images/platforms-logo/ableton.svg" }] },
        { title: "Customer Support", price: "$109", images: [{ image: "/images/platforms-logo/airbnb.svg" }, { image: "/images/platforms-logo/basecamp.svg" }] },
      ],
    },
  });

  // --- Comparison Row (Arabic) ---
  await payload.create({
    collection: "comparison-row-section",
    locale: "ar",
    data: {
      enable: true,
      badge: "",
      title: "لكن كان الأمر <strong>صعبًا</strong>",
      price_suffix: "/شهريًا",
      items: [
        { title: "منصات التواصل الاجتماعي", price: "$99", images: [{ image: "/images/platforms-logo/ableton.svg" }, { image: "/images/platforms-logo/airbnb.svg" }] },
        { title: "أدوات التسويق بالبريد", price: "$149", images: [{ image: "/images/platforms-logo/facebook.svg" }, { image: "/images/platforms-logo/figma.svg" }, { image: "/images/platforms-logo/linkedin.svg" }] },
        { title: "برنامج إدارة العملاء", price: "$199", images: [{ image: "/images/platforms-logo/scribd.svg" }] },
        { title: "منصات الإعلانات", price: "$249", images: [{ image: "/images/platforms-logo/slack.svg" }, { image: "/images/platforms-logo/soundcloud.svg" }, { image: "/images/platforms-logo/spotify.svg" }, { image: "/images/platforms-logo/swiftkey.svg" }] },
        { title: "أدوات الجدولة", price: "$79", images: [{ image: "/images/platforms-logo/telegram.svg" }, { image: "/images/platforms-logo/ubuntu.svg" }, { image: "/images/platforms-logo/ableton.svg" }, { image: "/images/platforms-logo/airbnb.svg" }, { image: "/images/platforms-logo/basecamp.svg" }] },
        { title: "منصات التحليلات", price: "$129", images: [{ image: "/images/platforms-logo/docker.svg" }, { image: "/images/platforms-logo/dribbble.svg" }, { image: "/images/platforms-logo/github.svg" }] },
        { title: "أدوات الأتمتة", price: "$179", images: [{ image: "/images/platforms-logo/pinterest.svg" }, { image: "/images/platforms-logo/react.svg" }] },
        { title: "إدارة المشاريع", price: "$59", images: [{ image: "/images/platforms-logo/safari.svg" }, { image: "/images/platforms-logo/scribd.svg" }] },
        { title: "بوابات الدفع", price: "$89", images: [{ image: "/images/platforms-logo/swiftkey.svg" }, { image: "/images/platforms-logo/techcrunch.svg" }, { image: "/images/platforms-logo/telegram.svg" }, { image: "/images/platforms-logo/ableton.svg" }] },
        { title: "دعم العملاء", price: "$109", images: [{ image: "/images/platforms-logo/airbnb.svg" }, { image: "/images/platforms-logo/basecamp.svg" }] },
      ],
    },
  });

  // --- Create admin user ---
  await payload.create({
    collection: "users",
    data: {
      email: "admin@admin.com",
      password: "admin123456",
      role: "admin",
    },
  });

  console.log("Seed completed successfully!");
  console.log("Admin user: admin@admin.com / admin123456");
  process.exit(0);
};

seed().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});
