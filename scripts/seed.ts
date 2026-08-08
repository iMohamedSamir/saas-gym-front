import { getPayload } from 'payload';
import config from '../src/payload.config';

async function seed() {
  const payload = await getPayload({ config });

  console.log("\nSeeding Payload CMS (bilingual AR/EN)...\n");

  // 1. Stats
  console.log('-> Stats...');
  const existingStats = await payload.find({ collection: 'stats' });
  if (existingStats.totalDocs === 0) {
    await payload.create({ collection: 'stats', data: {
      value: '10,000+',
      label: { ar: '+10,000 عمل محلي يخدمهم', en: 'Local Businesses Served' },
      sortOrder: 1,
    }});
    await payload.create({ collection: 'stats', data: {
      value: '5M+',
      label: { ar: 'عملاء محتملون تم التقاطهم', en: 'Leads Captured' },
      sortOrder: 2,
    }});
    await payload.create({ collection: 'stats', data: {
      value: '24/7',
      label: { ar: 'سير عمل آلي', en: 'Automated Workflows' },
      sortOrder: 3,
    }});
    await payload.create({ collection: 'stats', data: {
      value: '99%',
      label: { ar: 'وقت تشغيل المنصة', en: 'Platform Uptime' },
      sortOrder: 4,
    }});
  }

  // 2. Features
  console.log('-> Features...');
  const existingFeatures = await payload.find({ collection: 'features' });
  if (existingFeatures.totalDocs === 0) {
    const items = [
      { ar: 'التقاط العملاء المحتملين', en: 'Automated Customer Follow-up' },
      { ar: 'مولّد التقييمات التلقائي', en: 'Autopilot Review Generator' },
      { ar: 'الرد على المكالمات الفائتة', en: 'Missed Call Auto-Responder' },
      { ar: 'جدولة المواعيد على مدار الساعة', en: '24/7 Appointment Scheduler' },
      { ar: 'صندوق الوارد الموحّد', en: 'Unified Lead Inbox' },
      { ar: 'قاعدة بيانات العملاء الذكية', en: 'Smart Customer Database' },
      { ar: 'مواقع عالية التحويل', en: 'High-Converting Websites' },
      { ar: 'نماذج السحب والإفلات', en: 'Drag & Drop Forms' },
      { ar: 'حملات الرسائل النصية الآلية', en: 'Automated Text Campaigns' },
    ];
    const descs = [
      { ar: 'اجذب العملاء المحتملين تلقائيًا من جميع القنوات إلى مكان واحد.', en: 'Automatically capture leads from all channels into one place.' },
      { ar: 'احصل على تقييمات 5 نجوم تلقائيًا من عملائك السعداء.', en: 'Get 5-star reviews automatically from your happy customers.' },
      { ar: 'رد تلقائي فوري على المكالمات الفائتة بنصوص مخصصة.', en: 'Instantly auto-respond to missed calls with custom texts.' },
      { ar: 'دع العملاء يحجزون مواعيدهم بأنفسهم في أي وقت.', en: 'Let customers book appointments themselves, anytime.' },
      { ar: 'إدارة جميع الرسائل والمكالمات من مكان واحد.', en: 'Manage all messages and calls from one place.' },
      { ar: 'تتبع كل تفاعل مع العميل تلقائيًا.', en: 'Automatically track every customer interaction.' },
      { ar: 'أنشئ مواقع تحقق نتائج بدون معرفة تقنية.', en: 'Create result-getting websites without technical knowledge.' },
      { ar: 'ابنِ نماذج جميلة بسهولة دون كتابة كود.', en: 'Build beautiful forms easily without writing code.' },
      { ar: 'أرسل حملات تسويقية نصية مجدولة ومؤتمتة.', en: 'Send scheduled, automated SMS marketing campaigns.' },
    ];
    for (let i = 0; i < items.length; i++) {
      await payload.create({ collection: 'features', data: {
        title: items[i], description: descs[i],
        isStarred: i === 4, category: 'main', sortOrder: i + 1,
      }});
    }
  }

  // 3. Testimonials
  console.log('-> Testimonials...');
  const existingT = await payload.find({ collection: 'testimonials' });
  if (existingT.totalDocs === 0) {
    await payload.create({ collection: 'testimonials', data: {
      name: { ar: 'مارسف ماكينون', en: 'Marvin McKinney' },
      designation: { ar: 'صاحب شركة تسقيف', en: 'Roofing Company Owner' },
      content: { ar: 'كنا نفقد 3-4 وظائف أسبوعيًا لأننا لم نستطع الرد على الهاتف بينما كنا على السطح. نظام الرد على المكالمات الفائتة قلل ذلك فورًا إلى الصفر.', en: "We used to lose at least 3-4 jobs a week because we couldn't answer the phone while on a roof. The Missed Call Auto-Responder immediately cut that to zero." },
      avatar: '/images/testimonials/1.png', sortOrder: 1,
    }});
    await payload.create({ collection: 'testimonials', data: {
      name: { ar: 'سارة جينكينز', en: 'Sarah Jenkins' },
      designation: { ar: 'مديرة عيادة أسنان', en: 'Dental Practice Manager' },
      content: { ar: 'كان مكتب الاستقبال لدينا غارقًا في تذكيرات المواعيد وطلبات التقييم. أتمت هذا النظام كل شيء. ارتفع معدل الحضور بنسبة 40%.', en: 'Our front desk was overwhelmed with appointment reminders and review requests. This system automated everything. Our show-up rate increased by 40%.' },
      avatar: '/images/testimonials/2.png', sortOrder: 2,
    }});
    await payload.create({ collection: 'testimonials', data: {
      name: { ar: 'ديفيد ألابا', en: 'David Alaba' },
      designation: { ar: 'مقاول تكييف', en: 'HVAC Contractor' },
      content: { ar: 'أخيرًا ألغيت اشتراكي في 5 أدوات مختلفة. وجود صندوق الوارد الذكي والتقويم وحملات الرسائل النصية في لوحة تحكم واحدة وفر عليّ حوالي 600 دولار شهريًا.', en: 'I finally cancelled my subscription to 5 different tools. Having the Smart Inbox, calendar, and text campaigns in one dashboard saved me nearly $600 a month.' },
      avatar: '/images/testimonials/3.png', sortOrder: 3,
    }});
  }

  // 4. FAQ
  console.log('-> FAQ...');
  const existingF = await payload.find({ collection: 'faq-items' });
  if (existingF.totalDocs === 0) {
    const faqs = [
      { q: { ar: 'هل هذا البرنامج صعب الإعداد؟', en: 'Is this software hard to set up?' }, a: { ar: 'على الإطلاق. صممنا هذه المنصة خصيصًا لأصحاب الأعمال المحلية الذين ليسوا خبراء تقنيين.', en: "Not at all. We built this platform specifically for local business owners who aren't tech experts." } },
      { q: { ar: 'ماذا لو كان لديّ موقع إلكتروني بالفعل؟', en: 'What if I already have a website?' }, a: { ar: 'يمكنك الاحتفاظ بموقعك الحالي! أدواتنا تتكامل بسهولة مع ووردبريس وويكس وسكويرسبيس.', en: 'You can keep your existing website! Our tools easily integrate with WordPress, Wix, and Squarespace.' } },
      { q: { ar: 'هل يمكن أن يحل محل نظام إدارة العملاء أو ميلتشيمب الحالي؟', en: 'Can this replace my existing CRM or Mailchimp?' }, a: { ar: 'نعم. منصتنا تتضمن نظام إدارة عملاء كامل وتسويق بريد إلكتروني غير محدود وقدرات رسائل نصية.', en: 'Yes. Our platform includes a full CRM, unlimited email marketing, and SMS capabilities.' } },
      { q: { ar: 'كيف يعمل نظام الرد على المكالمات الفائتة؟', en: 'How does the Missed Call Auto-Responder work?' }, a: { ar: 'عندما يتصل عميل ولا ترد، يرسل النظام رسالة نصية فورية.', en: 'When a customer calls and you don\'t answer, the system instantly texts them back.' } },
      { q: { ar: 'هل هناك رسوم خفية؟', en: 'Are there any hidden fees?' }, a: { ar: 'لا توجد رسوم خفية. تدفع رسومًا شهرية بسيطة ثابتة.', en: 'No hidden fees. You pay a simple flat monthly rate.' } },
    ];
    for (let i = 0; i < faqs.length; i++) {
      await payload.create({ collection: 'faq-items', data: {
        question: faqs[i].q, answer: faqs[i].a, sortOrder: i + 1,
      }});
    }
  }

  // 5. Team
  console.log('-> Team...');
  const existingTm = await payload.find({ collection: 'team-members' });
  if (existingTm.totalDocs === 0) {
    const team = [
      { name: { ar: 'جوش وانغومبي', en: 'Josh Wangombe' }, role: { ar: 'مؤسس ومدير تقني', en: 'Co-Founder & CTO' }, image: '/images/peoples/Profile Image.png' },
      { name: { ar: 'دانيل جينسون', en: 'Daniel Jenson' }, role: { ar: 'مؤسس والمدير التنفيذي', en: 'Co-Founder & CEO' }, image: '/images/peoples/Profile Image-1.png' },
      { name: { ar: 'تون آلبرز', en: 'Toun Aalbers' }, role: { ar: 'مؤسس ومدير تقني', en: 'Co-Founder & CTO' }, image: '/images/peoples/Profile Image-2.png' },
      { name: { ar: 'بيتر فان أورسل', en: 'Peter van Ursel' }, role: { ar: 'مدير نجاح العملاء', en: 'Customer Success Director' }, image: '/images/peoples/Profile Image-3.png' },
    ];
    for (let i = 0; i < team.length; i++) {
      await payload.create({ collection: 'team-members', data: { ...team[i], sortOrder: i + 1 } });
    }
  }

  // 6. Pricing
  console.log('-> Pricing...');
  const existingP = await payload.find({ collection: 'pricing-plans' });
  if (existingP.totalDocs === 0) {
    await payload.create({ collection: 'pricing-plans', data: {
      title: { ar: 'الأساسيات', en: 'Essentials' }, price: '97', yearlyPrice: '970',
      description: { ar: 'الأساسيات الضرورية لتنظيم عملائك المحتملين.', en: 'The core necessities for organizing your leads.' },
      isFeatured: false,
      buttonLabel: { ar: 'ابدأ التجربة المجانية', en: 'Start Free Trial' }, buttonLink: '#contact',
      features: [
        { label: { ar: 'صندوق الوارد الموحّد', en: 'Unified Lead Inbox' }, included: true },
        { label: { ar: 'الرد على المكالمات الفائتة', en: 'Missed Call Auto-Responder' }, included: true },
        { label: { ar: 'مولّد التقييمات التلقائي', en: 'Autopilot Review Generator' }, included: true },
        { label: { ar: 'جدولة المواعيد على مدار الساعة', en: '24/7 Appointment Scheduler' }, included: false },
        { label: { ar: 'حملات المتابعة الآلية', en: 'Automated Follow-Up Campaigns' }, included: false },
      ],
      sortOrder: 1,
    }});
    await payload.create({ collection: 'pricing-plans', data: {
      title: { ar: 'النمو', en: 'Growth' }, price: '297', yearlyPrice: '2970',
      description: { ar: 'كل شيء للنمو الكامل على الطيار الآلي.', en: 'Everything for complete autopilot growth.' },
      isFeatured: true, offerText: { ar: 'الأكثر شعبية', en: 'Most Popular' },
      buttonLabel: { ar: 'ابدأ التجربة المجانية', en: 'Start Free Trial' }, buttonLink: '#contact',
      features: [
        { label: { ar: 'صندوق الوارد الموحّد والتقييمات', en: 'Unified Lead Inbox & Reviews' }, included: true },
        { label: { ar: 'جدولة المواعيد على مدار الساعة', en: '24/7 Appointment Scheduler' }, included: true },
        { label: { ar: 'حملات المتابعة الآلية', en: 'Automated Follow-Up Campaigns' }, included: true },
        { label: { ar: 'مواقع وقمع عالية التحويل', en: 'High-Converting Websites & Funnels' }, included: true },
        { label: { ar: 'تكاملات API متقدمة', en: 'Advanced API Integrations' }, included: false },
      ],
      sortOrder: 2,
    }});
    await payload.create({ collection: 'pricing-plans', data: {
      title: { ar: 'التوسع', en: 'Scale' }, price: '497', yearlyPrice: '4970',
      description: { ar: 'تحكم كامل لتوسيع مواقع متعددة.', en: 'Total control to scale multiple locations.' },
      isFeatured: false,
      buttonLabel: { ar: 'ابدأ التجربة المجانية', en: 'Start Free Trial' }, buttonLink: '#contact',
      features: [
        { label: { ar: 'كل شيء في خطة النمو', en: 'Everything in Growth' }, included: true },
        { label: { ar: 'نشر غير محدود على وسائل التواصل', en: 'Unlimited Social Media Posting' }, included: true },
        { label: { ar: 'تكاملات API متقدمة', en: 'Advanced API Integrations' }, included: true },
        { label: { ar: 'دعم مواقع متعددة', en: 'Multi-Location Support' }, included: true },
        { label: { ar: 'مدير حساب مخصص', en: 'Dedicated Account Manager' }, included: true },
      ],
      sortOrder: 3,
    }});
  }

  console.log('\nDone!\n');
  process.exit(0);
}

seed().catch((err) => { console.error('Seed error:', err); process.exit(1); });
