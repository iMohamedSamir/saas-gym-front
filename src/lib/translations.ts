export type Locale = 'ar' | 'en';

const ar = {
  // Nav
  nav_features: 'المميزات',
  nav_about: 'من نحن',
  nav_pricing: 'الأسعار',
  nav_testimonials: 'آراء العملاء',
  nav_faq: 'الأسئلة الشائعة',
  nav_contact: 'اتصل بنا',
  nav_getTemplate: 'ابدأ التجربة المجانية',

  // Hero
  hero_title: 'النظام الشامل لإدارة <strong>صالات الألعاب الرياضية</strong>',
  hero_subtitle: 'من تسجيل الأعضاء وتجديد الاشتراكات، إلى الحضور والتحليلات — أدِر كل جانب من جوانب صالة الألعاب الرياضية الخاصة بك من لوحة تحكم واحدة قوية. توقف عن استخدام 5 أدوات مختلفة.',
  hero_primaryBtn: 'ابدأ فترة التجربة المجانية لمدة 14 يومًا',
  hero_secondaryBtn: 'شاهد جميع المميزات',

  // Stats
  stats_fallback: [
    { id: 's1', value: '61', label: 'ميزة متكاملة', sortOrder: 1 },
    { id: 's2', value: '800+', label: 'تمرين في المكتبة', sortOrder: 2 },
    { id: 's3', value: '102+', label: 'نقطة برمجة API', sortOrder: 3 },
    { id: 's4', value: '2', label: 'لغة مع دعم RTL', sortOrder: 4 },
  ],

  // Problem Section
  problem_title: 'هل تخسر أعضاء حقيقيين بسبب <strong>هذه المشاكل؟</strong>',
  problem_content: 'معظم أصحاب الصالات يواجهون نفس التحديات يوميًا.',
  problem_items: [
    'اشتراكات تنتهي وأنت لا تلاحظ حتى يغادروا',
    'قضاء ساعتين يوميًا على الحضور اليدوي والأوراق',
    'لا تعرف أي خدمة تحقق أكبر إيراد',
    'متابعة العملاء المحتملين تضيع بين الواتساب والإكسل',
  ],

  // Solution Intro
  solution_title: 'صالة الألعاب الرياضية الخاصة بك — <strong>مدارة بالكامل من مكان واحد</strong>',
  solution_content: 'نظام مصمم خصيصًا لصالات الألعاب الرياضية — ليس أداة أعمال عامة تم إعادة توجيهها. كل ميزة بُنيت لتحديداً لتشغيل صالة الألعاب الرياضية.',
  solution_values: [
    { icon: 'members', title: 'إدارة الأعضاء', desc: 'ملفات شاملة مع تتبع أعياد الميلاد والأكواد الفريدة' },
    { icon: 'attendance', title: 'الحضور والتسجيل', desc: 'تسجيل دخول فوري مع كشك خدمة ذاتية وقائمة حضور تلقائية' },
    { icon: 'billing', title: 'المبيعات والفواتير', desc: 'إنشاء مبيعات بنقرة واحدة وتتبع المدفوعات المعلقة وفواتير PDF' },
    { icon: 'scheduling', title: 'الجداول وال_CLASSES', desc: 'إدارة الفصول مع حجوزات متكررة وتقويم شهري بصري' },
  ],

  // Feature Pillars
  pillars_title: 'كل ما تحتاجه لإدارة <strong>صالة الألعاب الرياضية</strong>',
  pillars_content: '61 ميزة عبر 15 فئة — كلها مصممة خصيصًا لعمليات الصالات الرياضية.',

  // Pillar 1: Member Management
  pillar1_tagline: 'رحلة كل عضو — <strong>في شاشة واحدة</strong>',
  pillar1_points: [
    'ملفات أعضاء شاملة مع معلومات الاتصال والأكواد الفريدة وتتبع أعياد الميلاد',
    'بحث ذكي بالاسم أو الرمز مع تبويبات نشط/غير نشط',
    'تهاني أعياد الميلاد عبر واتساب مباشرة',
    'ملفات صحية وبدنية: الطول والوزن ونسبة الدهون والأهداف',
    'سجل CRM كامل: ملاحظات، مكالمات، رسائل بريد إلكتروني، واتساب',
  ],
  pillar1_image: 'https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/714ce578e627.jpeg',

  // Pillar 2: Attendance & Kiosk
  pillar2_tagline: 'سجّل الدخول في ثوانٍ — <strong>تتبّع كل شيء تلقائيًا</strong>',
  pillar2_points: [
    'تسجيل دخول فوري بالبحث عن الاسم أو الرمز بنقرة واحدة',
    'كشك خدمة ذاتية — حوّل أي جهاز لوحي إلى محطة تسجيل دخول',
    'قائمة حضور اليوم تتحديث تلقائيًا كل 30 ثانية',
    'سجل حضور تاريخي كامل مع إمكانية تسجيل الخروج',
  ],
  pillar2_image: 'https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/3c37015a87ec.png',

  // Pillar 3: Sales & Billing
  pillar3_tagline: 'احصل على أموالك أسرع — <strong>لا تفقد دولارًا واحدًا</strong>',
  pillar3_points: [
    'إنشاء مبيعات بنقرة واحدة: اختر العضو والخدمة وينتهي الأمر',
    'تتبع حالات الاشتراك: نشط / مجمّد / معلّق بألوان مميزة',
    'متابعات انتهاء الصلاحية: اليوم، غدًا، 5 أيام، 7 أيام، منتهية',
    'تذكيرات التجديد عبر واتساب بنقرة واحدة',
    'تتبع المدفوعات المعلقة مع إمكانية السداد الجزئي أو الكامل',
    'فواتير PDF احترافية مع دعم عملات متعددة',
  ],
  pillar3_image: 'https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/d42a31c39a08.jpg',

  // Pillar 4: Scheduling & Classes
  pillar4_tagline: 'املأ كل فصل — <strong>لا مزيد من الغيابات</strong>',
  pillar4_points: [
    'إنشاء فصول مع مدربين ومواقع محددة وسعة محددة',
    'دعم الجلسات المتكررة: يومي / أسبوعي / نصف شهري / شهري حتى 52 حدث',
    'تقويم شهري بصري يعرض كل الجلسات والمدربين والمقاعد المتاحة',
    'إدارة الاشتراكات مع إمكانية إلغاء التجديد التلقائي',
  ],
  pillar4_image: 'https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/08d55eb6c1a5.jpg',

  // Pillar 5: Leads & CRM
  pillar5_tagline: 'حوّل كل زائر إلى <strong>عضو يدفع</strong>',
  pillar5_points: [
    'التقاط الاستفسارات من: زيارات مباشرة، مكالمات، إنستجرام، واتساب',
    'قمع تقييم العملاء المحتملين: جديد → تم التواصل → محوّل → فقد',
    'متابعات بالتاريخ لتعرف من يجب الاتصال به اليوم',
    'حملات تسويقية مع قوالب مخصصة باستخدام {{member_name}}',
    'سجل تفاعلات كامل: مكالمة / بريد / رسالة / واتساب / شخصي',
  ],
  pillar5_image: 'https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/cebe0b40b2c1.jpg',

  // Pillar 6: Member Portal
  pillar6_tagline: 'أعضاؤك سيعشقون <strong>هذه المنصة</strong>',
  pillar6_points: [
    'لوحة تحكم شخصية: الاشتراكات والحضور والفصول القادمة',
    'مكتبة تمارين تضم 800+ تمرين مع صور وتعليمات خطوة بخطوة',
    'حاسبات اللياقة: BMI و BMR ونسبة الخصر إلى الورك',
    'عرض فواتير عامة مع زر الطباعة والمشاركة',
  ],
  pillar6_image: 'https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/5293270e4501.jpg',

  // Pillar 7: Analytics
  pillar7_tagline: 'قرارات مبنية على البيانات — <strong>ليس التخمين</strong>',
  pillar7_points: [
    '6 مؤشرات أداء رئيسية: الإيرادات والمدفوعات المعلقة والأعضاء النشطين والاحتفاظ والحضور والفقد',
    'رسوم بيانية للإيرادات والحضور والخدمات',
    'مقارنة أداء الفروع ومقاييس أداء الموظفين',
    'تصدير بتقنية واحدة إلى CSV أو JSON لأي تقرير',
  ],
  pillar7_image: 'https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/f494a18a6e38.png',

  // Additional Features Grid
  moreFeatures_title: 'المزيد من المميزات <strong>القوية</strong>',
  moreFeatures_grid: [
    { icon: 'shield', title: 'أدوار وصلاحيات', desc: '5 أدوار مع أكثر من 40 صلاحية. كل دور يرى فقط ما يسمح له' },
    { icon: 'globe', title: 'دعم اللغات', desc: 'عربي وإنجليزي مع تخطيط RTL كامل — 726+ سطر ترجمة' },
    { icon: 'currency', title: 'عملات متعددة', desc: 'كل منظمة تضع عملتها الخاصة. الفواتير والتقارير تتكيف تلقائيًا' },
    { icon: 'building', title: 'فروع متعددة', desc: 'أدِر عددة مواقع من تسجيل دخول واحد مع تحليلات لكل فرع' },
    { icon: 'utensils', title: 'النظام الغذائي', desc: 'قاعدة بيانات أطعمة مع سعرات وبروتين ودهون. خطط غذائية لكل عضو' },
    { icon: 'trophy', title: 'نظام الرتب', desc: 'أنشئ رتبًا مخصصة ومنحها للأعضاء لزيادة الدافع والاحتفاظ' },
    { icon: 'webhook', title: 'API وتكاملات', desc: 'مفاتيح API وويب هوكس مع تتبع النجاح والفشل' },
    { icon: 'filetext', title: 'سجل مراجعة كامل', desc: 'كل عملية مسجلة: من فعلها ومتى ولأي سجل' },
  ],

  // How It Works
  howItWorks_title: 'ابدأ في <strong>3 خطوات</strong>',
  howItWorks_steps: [
    { stepNumber: '1', title: 'سجّل صالتك', content: 'أدخل اسم صالة الألعاب الرياضية وبيانات المالك واختر خطة. يُنشئ النظام تلقائيًا حسابك مع تجربة 14 يومًا.' },
    { stepNumber: '2', title: 'أضف فريقك وأعضاءك', content: 'أنشئ حسابات للموظفين بأدوار مختلفة. أضف الأعضاء وابدأ تسجيل الحضور والمبيعات.' },
    { stepNumber: '3', title: 'شاهد صالتك تنمو', content: 'تتبع الإيرادات والحضور والتحويلات من لوحة التحليلات. كامباتات واتساب للتجديد والمتابعة.' },
  ],
  howItWorks_btn: 'ابدأ فترة التجربة المجانية لمدة 14 يومًا',

  // Testimonials
  testimonial_title: 'أصحاب الصالات الرياضية <strong>يثقون بنا</strong>',
  testimonial_quote: 'كنت أخسر أعضاء لأن اشتراكاتهم تنتهي ولا أنتبه. الآن النظام يُعلمني بالمنتهية قبل أسبوع وأرسل تذكير واتساب بنقرة واحدة. معدل التجديد ارتفع بنسبة 40%.',
  singleTestimonial_name: 'أحمد محمود',
  singleTestimonial_company: 'مدير صالة الألعاب الرياضية — القاهرة',
  singleTestimonial_stats: [
    { value: '40%', label: 'زيادة في التجديد' },
    { value: '3 ساعات', label: 'موفر يوميًا' },
    { value: '500+', label: 'عضو نشط' },
  ],
  testimonials_fallback: [
    { id: 't1', name: 'محمد علي', designation: 'صاحب صالة رياضية', content: 'كنت أستخدم Excel وواتساب لإدارة كل شيء. الآن كل شيء في مكان واحد — الأعضاء والحضور والفواتير. وفّرت 3 ساعات يوميًا على الأقل.', avatar: '/images/testimonials/1.png', sortOrder: 1 },
    { id: 't2', name: 'خالد إبراهيم', designation: 'مدرب لياقة معتمد', content: 'لوحة التحكم الخاصة بالمدرب تجعلني أرى أعضائي المعينين وحضورهم مباشرة. لم أعد أحتاج لسؤال الإدارة عن أي شيء.', avatar: '/images/testimonials/2.png', sortOrder: 2 },
    { id: 't3', name: 'عمر حسن', designation: 'مالك 3 فروع', content: 'إدارة 3 فروع من لوحة تحكم واحدة غيرت قواعد اللعبة. التحليلات تُظهرني أي فرع يحقق إيراد أكبر وأي فرع يحتاج اهتمام.', avatar: '/images/testimonials/3.png', sortOrder: 3 },
  ],

  // FAQ
  faq_title: 'أسئلة شائعة',
  faq_content: 'إجابات لأهم الأسئلة حول منصة إدارة الصالات الرياضية.',
  faq_fallback: [
    { id: 'q1', question: 'هل المنصة صعبة الإعداد؟', answer: 'لا. سجّل بأسم الصالة وبيانات المالك واختر الخطة — يُنشئ النظام كل شيء تلقائيًا مع تجربة 14 يومًا مجانية.' },
    { id: 'q2', question: 'هل تدعم اللغة العربية؟', answer: 'نعم! دعم كامل للعربي والإنجليزي مع تخطيط RTL. كل شاشة وتقرير وفاتورة يعمل باللغتين.' },
    { id: 'q3', question: 'هل يمكنني إدارة أكثر من فرع؟', answer: 'نعم. أنشئ مواقع متعددة ونسب الأعضاء والموظفين لكل فرع. التحليلات والحضور تكون لكل فرع على حدة مع إمكانية المقارنة.' },
    { id: 'q4', question: 'كيف تعمل متابعات التجديد؟', answer: 'تبويبات مخصصة تعرض الاشتراكات المنتهية اليوم وغدًا و5 أيام و7 أيام. أرسل تذكير تجديد عبر واتساب بنقرة واحدة.' },
    { id: 'q5', question: 'هل بيانات صالتي آمنة؟', answer: 'كل صالة معزولة تمامًا بـ 37 نموذج قاعدة بيانات محدود بالمنظمة. 5 أدوار مع أكثر من 40 صلاحية. سجل مراجعة كامل لكل عملية.' },
    { id: 'q6', question: 'ما هي طرق الدفع المدعومة؟', answer: 'نظام الدفع يدعم: نقدي، UPI، بطاقة، تحويل بنكي، وغيرها. مع تتبع المدفوعات المعلقة وإمكانية السداد الجزئي أو الكامل.' },
  ],

  // Pricing (keeping existing - not touching)
  pricing_title: 'خطط أسعار <strong>معقولة</strong>',
  pricing_content: 'اختر الخطة المناسبة لصالتك الرياضية.',
  pricing_monthly: '/ شهريًا',
  pricing_yearly: '/ سنويًا',
  pricing_fallback: [
    {
      id: 'p1', title: 'الأساسيات', price: '97', yearlyPrice: '970',
      description: 'الأساسيات لإدارة صالتك الرياضية.',
      isFeatured: false, buttonLabel: 'ابدأ التجربة المجانية', buttonLink: '#contact',
      features: [
        { label: 'إدارة الأعضاء والتسجيل', included: true },
        { label: 'تتبع الحضور والسجلات', included: true },
        { label: 'المبيعات والفواتير PDF', included: true },
        { label: 'إدارة الفصول والجداول', included: false },
        { label: 'كشك تسجيل الدخول الذاتي', included: false },
      ],
    },
    {
      id: 'p2', title: 'النمو', price: '297', yearlyPrice: '2970',
      description: 'كل ما تحتاجه لتشغيل صالة كاملة.',
      isFeatured: true, offerText: 'الأكثر شعبية', buttonLabel: 'ابدأ التجربة المجانية', buttonLink: '#contact',
      features: [
        { label: 'كل شيء في الأساسيات', included: true },
        { label: 'إدارة الفصول والجداول المتكررة', included: true },
        { label: 'كشك تسجيل الدخول الذاتي', included: true },
        { label: 'تتبع العملاء المحتملين والتحويلات', included: true },
        { label: 'لوحة التحليلات الكاملة', included: true },
      ],
    },
    {
      id: 'p3', title: 'التوسع', price: '497', yearlyPrice: '4970',
      description: 'تحكم كامل لعدة فروع مع كل المميزات.',
      isFeatured: false, buttonLabel: 'ابدأ التجربة المجانية', buttonLink: '#contact',
      features: [
        { label: 'كل شيء في خطة النمو', included: true },
        { label: 'دعم فروع متعددة', included: true },
        { label: 'مفاتيح API والويب هوكس', included: true },
        { label: 'نظام الرتب والتقدم', included: true },
        { label: 'النظام الغذائي وإدارة الأطعمة', included: true },
      ],
    },
  ] as any[],

  // CTA
  cta_title: 'جاهز لإدارة صالتك الرياضية <strong>بذكاء؟</strong>',
  cta_description: '61 ميزة. لوحة تحكم واحدة. كل ما تحتاجه لتشغيل صالة الألعاب الرياضية الخاصة بك.',
  cta_button: 'ابدأ فترة التجربة المجانية لمدة 14 يومًا',

  // Footer
  footer_description: 'النظام الشامل لإدارة صالات الألعاب الرياضية.',
  footer_product: 'المنتج',
  footer_company: 'الشركة',
  footer_support: 'الدعم',
  footer_legal: 'قانوني',
  footer_privacy: 'سياسة الخصوصية',
  footer_terms: 'الشروط والأحكام',
  footer_allRights: 'جميع الحقوق محفوظة.',
  footer_copyright: '© 2026 GymPro.',
  footer_contact: 'اتصل بنا',

  // Contact
  contact_title: 'تواصل معنا',
  contact_subtitle: 'هل لديك سؤال؟ نحن هنا لمساعدتك.',
  contact_name: 'الاسم الكامل',
  contact_email: 'البريد الإلكتروني',
  contact_phone: 'رقم الهاتف',
  contact_message: 'رسالتك',
  contact_send: 'أرسل الرسالة',
  contact_info: 'معلومات الاتصال',
  contact_address: 'العنوان',
  contact_addressValue: 'القاهرة، مصر',

  // Features (legacy - kept for compatibility)
  features_title: 'كل ما تحتاجه لإدارة <strong>صالتك الرياضية</strong>',
  features_content: '61 ميزة مصممة خصيصًا لعمليات الصالات الرياضية.',
  features_fallback: [] as any[],

  // Legacy kept for compatibility
  mainFeatures_title: '',
  mainFeatures_content: '',
  mainFeatures_items: [] as string[],
  valueProps_title: '',
  valueProps_content: '',
  valueProps_values: [] as string[],
  ourStory_title: '',
  ceo_letter: '',
  ceo_name: '',
  ceo_role: '',
  ceo_letterPoints: [] as string[],
  growthProcess_title: '',
  growthProcess_steps: [] as any[],
  growthProcess_btn: '',
  integrations_title: '',
  singleTestimonial_quote: '',

  // Misc
  monthly: 'شهري',
  yearly: 'سنوي',
  switchLang: 'English',
  readMore: 'اقرأ المزيد',

  // Admin
  admin_panelTitle: 'لوحة الإدارة',
  admin_signIn: 'تسجيل الدخول',
  admin_signInTo: 'سجّل الدخول لإدارة المحتوى',
  admin_email: 'البريد الإلكتروني',
  admin_password: 'كلمة المرور',
  admin_signingIn: 'جارٍ تسجيل الدخول...',
  admin_backToSite: '← العودة للموقع',
  admin_dashboard: 'لوحة التحكم',
  admin_collections: 'المجموعات',
  admin_signOut: 'تسجيل الخروج',
  admin_documents: 'مستند',
  admin_addNew: '+ إضافة جديد',
  admin_noDocuments: 'لا توجد مستندات بعد.',
  admin_actions: 'الإجراءات',
  admin_edit: 'تعديل',
  admin_delete: 'حذف',
  admin_editTitle: 'تعديل',
  admin_newTitle: 'جديد',
  admin_cancel: '← إلغاء',
  admin_update: 'تحديث',
  admin_create: 'إنشاء',
  admin_deleteConfirm: 'هل تريد حذف هذا المستند؟',
  admin_tooManyAttempts: 'محاولات تسجيل دخول كثيرة. حاول مرة أخرى لاحقًا.',
  admin_invalidCredentials: 'بيانات الدخول غير صحيحة',
  admin_networkError: 'خطأ في الشبكة',
  admin_testimonials: 'آراء العملاء',
  admin_faqItems: 'الأسئلة الشائعة',
  admin_teamMembers: 'أعضاء الفريق',
  admin_pricingPlans: 'خطط الأسعار',
  admin_features: 'المميزات',
  admin_stats: 'الإحصائيات',
  admin_fieldName: 'الاسم',
  admin_fieldDesignation: 'المسمى الوظيفي',
  admin_fieldContent: 'المحتوى',
  admin_fieldAvatar: 'رابط الصورة',
  admin_fieldQuestion: 'السؤال',
  admin_fieldAnswer: 'الإجابة',
  admin_fieldRole: 'الدور',
  admin_fieldImage: 'رابط الصورة',
  admin_fieldTitle: 'العنوان',
  admin_fieldPrice: 'السعر',
  admin_fieldYearlyPrice: 'السعر السنوي',
  admin_fieldDescription: 'الوصف',
  admin_fieldFeatured: 'مميز',
  admin_fieldOfferText: 'نص العرض',
  admin_fieldButtonLabel: 'نص الزر',
  admin_fieldStarred: 'مميز بنجمة',
  admin_fieldCategory: 'الفئة',
  admin_fieldValue: 'القيمة',
  admin_fieldLabel: 'التسمية',
  admin_catMain: 'المميزات الرئيسية',
  admin_catValues: 'القيم الأساسية',
  admin_catValueProps: 'عروض القيمة',
};

const en: typeof ar = {
  nav_features: 'Features',
  nav_about: 'About',
  nav_pricing: 'Pricing',
  nav_testimonials: 'Testimonials',
  nav_faq: 'FAQ',
  nav_contact: 'Contact',
  nav_getTemplate: 'Start Free Trial',

  hero_title: 'The All-In-One <strong>Gym Management Platform</strong>',
  hero_subtitle: 'From member sign-ups to renewals, attendance to analytics — manage every aspect of your gym from a single powerful dashboard. Stop juggling spreadsheets and WhatsApp groups.',
  hero_primaryBtn: 'Start Your 14-Day Free Trial',
  hero_secondaryBtn: 'See All Features',

  stats_fallback: [
    { id: 's1', value: '61', label: 'Integrated Features', sortOrder: 1 },
    { id: 's2', value: '800+', label: 'Exercise Library', sortOrder: 2 },
    { id: 's3', value: '102+', label: 'API Endpoints', sortOrder: 3 },
    { id: 's4', value: '2', label: 'Languages with RTL', sortOrder: 4 },
  ],

  problem_title: 'Are You Losing Real Members to <strong>These Problems?</strong>',
  problem_content: 'Most gym owners face the same challenges every single day.',
  problem_items: [
    'Memberships expire and you don\'t notice until they\'re gone',
    'Spending 2 hours daily on manual check-ins and paperwork',
    'No idea which service generates the most revenue',
    'Lead follow-ups get lost between WhatsApp and Excel',
  ],

  solution_title: 'Your Gym — <strong>Fully Managed From One Place</strong>',
  solution_content: 'Built specifically for gyms — not a generic business tool repurposed for fitness. Every feature was designed to run gym operations.',
  solution_values: [
    { icon: 'members', title: 'Member Management', desc: 'Complete profiles with birthday tracking and unique member codes' },
    { icon: 'attendance', title: 'Attendance & Check-In', desc: 'Instant check-in with self-service kiosk and auto-refreshing attendance list' },
    { icon: 'billing', title: 'Sales & Billing', desc: 'One-click sale creation, pending payment tracking, and PDF invoices' },
    { icon: 'scheduling', title: 'Scheduling & Classes', desc: 'Class management with recurring sessions and visual monthly calendar' },
  ],

  pillars_title: 'Everything You Need to Run <strong>Your Gym</strong>',
  pillars_content: '61 features across 15 categories — all designed specifically for gym operations.',

  pillar1_tagline: 'Every Member\'s Journey — <strong>One Screen</strong>',
  pillar1_points: [
    'Complete member profiles with contact info, unique codes (MEM######), and birthday tracking',
    'Smart search by name or code with active/inactive tabs',
    'Birthday greetings sent directly via WhatsApp',
    'Health & fitness profiles: height, weight, body fat, goals, and diet preferences',
    'Full CRM log: notes, calls, emails, WhatsApp, and in-person interactions',
  ],
  pillar1_image: 'https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/714ce578e627.jpeg',

  pillar2_tagline: 'Check Members In In Seconds — <strong>Track Everything Automatically</strong>',
  pillar2_points: [
    'Instant check-in — search by name or code, one click',
    'Self-service kiosk — turn any tablet into a check-in station',
    'Today\'s check-in list auto-refreshes every 30 seconds',
    'Full attendance history with check-out per record',
  ],
  pillar2_image: 'https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/3c37015a87ec.png',

  pillar3_tagline: 'Get Paid Faster — <strong>Never Lose Track Of A Dollar</strong>',
  pillar3_points: [
    'One-click sale creation — select member, pick service, done',
    'Membership status tracking: active, frozen, or suspended with color badges',
    'Expiry follow-ups: Today, Tomorrow, 5 days, 7 days, Expired tabs',
    'WhatsApp renewal reminders sent in one click',
    'Pending payment tracking with partial or full payment recording',
    'Professional PDF invoices with multi-currency support',
  ],
  pillar3_image: 'https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/d42a31c39a08.jpg',

  pillar4_tagline: 'Fill Every Class — <strong>No More No-Shows</strong>',
  pillar4_points: [
    'Create classes with trainers, locations, and capacity limits',
    'Recurring sessions: daily, weekly, biweekly, or monthly up to 52 occurrences',
    'Visual monthly calendar showing every session, trainer, and available slots',
    'Subscription management with auto-renewal toggle',
  ],
  pillar4_image: 'https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/08d55eb6c1a5.jpg',

  pillar5_tagline: 'Turn Every Walk-In Into A <strong>Paying Member</strong>',
  pillar5_points: [
    'Capture enquiries from: walk-ins, phone calls, Instagram, WhatsApp',
    'Lead scoring funnel: New → Contacted → Converted → Lost',
    'Date-based follow-ups so you know who to call today',
    'Marketing campaigns with personalized templates using {{member_name}}',
    'Full interaction log: call, email, SMS, WhatsApp, in-person',
  ],
  pillar5_image: 'https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/cebe0b40b2c1.jpg',

  pillar6_tagline: 'Your Members Will Love <strong>This Platform</strong>',
  pillar6_points: [
    'Personal dashboard: active memberships, attendance, and upcoming classes',
    '800+ exercise library with images and step-by-step instructions',
    'Fitness calculators: BMI, BMR, and Waist-to-Hip Ratio',
    'Public invoice view with print and share buttons',
  ],
  pillar6_image: 'https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/5293270e4501.jpg',

  pillar7_tagline: 'Make Data-Driven Decisions — <strong>Not Guesses</strong>',
  pillar7_points: [
    '6 KPI cards: revenue, outstanding, active members, retention, attendance, churn',
    'Revenue, attendance, and service breakdown charts',
    'Multi-location comparison and staff performance metrics',
    'One-click export to CSV or JSON for any report',
  ],
  pillar7_image: 'https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/f494a18a6e38.png',

  moreFeatures_title: 'More <strong>Powerful Features</strong>',
  moreFeatures_grid: [
    { icon: 'shield', title: 'Roles & Permissions', desc: '5 roles with 40+ permission keys. Each role sees only what it should' },
    { icon: 'globe', title: 'Language Support', desc: 'English and Arabic with full RTL layout — 726+ translation lines' },
    { icon: 'currency', title: 'Multi-Currency', desc: 'Each organization sets its own currency. Invoices and reports adapt automatically' },
    { icon: 'building', title: 'Multi-Location', desc: 'Manage multiple locations from one login with per-branch analytics' },
    { icon: 'utensils', title: 'Diet & Nutrition', desc: 'Food database with calories, protein, fats. Diet plans per member' },
    { icon: 'trophy', title: 'Rank System', desc: 'Create custom ranks and award to members to boost motivation and retention' },
    { icon: 'webhook', title: 'API & Webhooks', desc: 'API keys and webhooks with success/fail tracking' },
    { icon: 'filetext', title: 'Full Audit Trail', desc: 'Every operation logged: who did what, when, and to which record' },
  ],

  howItWorks_title: 'Get Started in <strong>3 Steps</strong>',
  howItWorks_steps: [
    { stepNumber: '1', title: 'Register Your Gym', content: 'Enter your gym name, owner details, and pick a plan. The system creates your account with a 14-day trial automatically.' },
    { stepNumber: '2', title: 'Add Your Team & Members', content: 'Create staff accounts with different roles. Add members and start tracking attendance and sales.' },
    { stepNumber: '3', title: 'Watch Your Gym Grow', content: 'Track revenue, attendance, and conversions from the analytics dashboard. WhatsApp campaigns for renewals and follow-ups.' },
  ],
  howItWorks_btn: 'Start Your 14-Day Free Trial',

  testimonial_title: 'Gym Owners <strong>Trust Us</strong>',
  testimonial_quote: 'I was losing members because their subscriptions would expire and I wouldn\'t notice. Now the system alerts me a week before and I send a WhatsApp reminder in one click. Renewal rate jumped 40%.',
  singleTestimonial_name: 'Ahmed Mahmoud',
  singleTestimonial_company: 'Gym Manager — Cairo',
  singleTestimonial_stats: [
    { value: '40%', label: 'Renewal Increase' },
    { value: '3 hours', label: 'Saved Daily' },
    { value: '500+', label: 'Active Members' },
  ],
  testimonials_fallback: [
    { id: 't1', name: 'Mohamed Ali', designation: 'Gym Owner', content: 'I used to manage everything with Excel and WhatsApp. Now it\'s all in one place — members, attendance, and invoices. I save at least 3 hours a day.', avatar: '/images/testimonials/1.png', sortOrder: 1 },
    { id: 't2', name: 'Khaled Ibrahim', designation: 'Certified Personal Trainer', content: 'The trainer dashboard lets me see my assigned members and their attendance right away. I don\'t need to ask management for anything anymore.', avatar: '/images/testimonials/2.png', sortOrder: 2 },
    { id: 't3', name: 'Omar Hassan', designation: '3-Branch Owner', content: 'Managing 3 branches from one dashboard changed the game. The analytics show me which branch generates more revenue and which one needs attention.', avatar: '/images/testimonials/3.png', sortOrder: 3 },
  ],

  faq_title: 'Frequently Asked Questions',
  faq_content: 'Answers to the most common questions about our gym management platform.',
  faq_fallback: [
    { id: 'q1', question: 'Is the platform hard to set up?', answer: 'No. Register with your gym name, owner details, and pick a plan — the system creates everything automatically with a 14-day free trial.' },
    { id: 'q2', question: 'Does it support Arabic?', answer: 'Yes! Full bilingual support with Arabic RTL layout. Every screen, report, and invoice works in both English and Arabic.' },
    { id: 'q3', question: 'Can I manage multiple locations?', answer: 'Yes. Create multiple locations and assign members and staff per branch. Analytics and attendance are per-location with comparison views.' },
    { id: 'q4', question: 'How do renewal follow-ups work?', answer: 'Dedicated tabs show memberships expiring today, tomorrow, 5 days, 7 days, or already expired. Send a WhatsApp renewal reminder in one click.' },
    { id: 'q5', question: 'Is my gym data safe?', answer: 'Every gym is fully isolated with 37 database models scoped by organization. 5 roles with 40+ permissions. Full audit trail for every operation.' },
    { id: 'q6', question: 'What payment methods are supported?', answer: 'The payment system supports: cash, UPI, card, bank transfer, and others. Pending payment tracking with partial or full payment recording.' },
  ],

  pricing_title: 'Affordable <strong>Pricing Plans</strong>',
  pricing_content: 'Choose the plan that fits your gym.',
  pricing_monthly: '/month',
  pricing_yearly: '/year',
  pricing_fallback: [
    {
      id: 'p1', title: 'Essentials', price: '97', yearlyPrice: '970',
      description: 'The essentials to manage your gym.',
      isFeatured: false, buttonLabel: 'Start Free Trial', buttonLink: '#contact',
      features: [
        { label: 'Member Management & Profiles', included: true },
        { label: 'Attendance Tracking & History', included: true },
        { label: 'Sales & PDF Invoices', included: true },
        { label: 'Class & Session Scheduling', included: false },
        { label: 'Self-Service Check-In Kiosk', included: false },
      ],
    },
    {
      id: 'p2', title: 'Growth', price: '297', yearlyPrice: '2970',
      description: 'Everything to run a full gym operation.',
      isFeatured: true, offerText: 'Most Popular', buttonLabel: 'Start Free Trial', buttonLink: '#contact',
      features: [
        { label: 'Everything in Essentials', included: true },
        { label: 'Recurring Class & Session Scheduling', included: true },
        { label: 'Self-Service Check-In Kiosk', included: true },
        { label: 'Lead Tracking & Conversion Funnel', included: true },
        { label: 'Full Analytics Dashboard', included: true },
      ],
    },
    {
      id: 'p3', title: 'Scale', price: '497', yearlyPrice: '4970',
      description: 'Total control for multi-branch operations.',
      isFeatured: false, buttonLabel: 'Start Free Trial', buttonLink: '#contact',
      features: [
        { label: 'Everything in Growth', included: true },
        { label: 'Multi-Location Support', included: true },
        { label: 'API Keys & Webhooks', included: true },
        { label: 'Rank Progression System', included: true },
        { label: 'Diet & Nutrition Management', included: true },
      ],
    },
  ] as any[],

  cta_title: 'Ready to Manage Your Gym <strong>Smarter?</strong>',
  cta_description: '61 features. One dashboard. Everything you need to run your gym.',
  cta_button: 'Start Your 14-Day Free Trial',

  footer_description: 'The all-in-one gym management platform.',
  footer_product: 'Product',
  footer_company: 'Company',
  footer_support: 'Support',
  footer_legal: 'Legal',
  footer_privacy: 'Privacy Policy',
  footer_terms: 'Terms & Conditions',
  footer_allRights: 'All Rights Reserved.',
  footer_copyright: '© 2026 GymPro.',
  footer_contact: 'Contact Us',

  contact_title: 'Contact Us',
  contact_subtitle: 'Have a question? We\'re here to help.',
  contact_name: 'Full Name',
  contact_email: 'Email Address',
  contact_phone: 'Phone Number',
  contact_message: 'Your Message',
  contact_send: 'Send Message',
  contact_info: 'Contact Information',
  contact_address: 'Address',
  contact_addressValue: 'Cairo, Egypt',

  features_title: 'Everything You Need to Run <strong>Your Gym</strong>',
  features_content: '61 features designed specifically for gym operations.',
  features_fallback: [] as any[],

  mainFeatures_title: '',
  mainFeatures_content: '',
  mainFeatures_items: [] as string[],
  valueProps_title: '',
  valueProps_content: '',
  valueProps_values: [] as string[],
  ourStory_title: '',
  ceo_letter: '',
  ceo_name: '',
  ceo_role: '',
  ceo_letterPoints: [] as string[],
  growthProcess_title: '',
  growthProcess_steps: [] as any[],
  growthProcess_btn: '',
  integrations_title: '',
  singleTestimonial_quote: '',

  monthly: 'Monthly',
  yearly: 'Yearly',
  switchLang: 'العربية',
  readMore: 'Read More',

  admin_panelTitle: 'Admin Panel',
  admin_signIn: 'Sign In',
  admin_signInTo: 'Sign in to manage your content',
  admin_email: 'Email',
  admin_password: 'Password',
  admin_signingIn: 'Signing in...',
  admin_backToSite: '← Back to Site',
  admin_dashboard: 'Dashboard',
  admin_collections: 'Collections',
  admin_signOut: 'Sign Out',
  admin_documents: 'documents',
  admin_addNew: '+ Add New',
  admin_noDocuments: 'No documents yet.',
  admin_actions: 'Actions',
  admin_edit: 'Edit',
  admin_delete: 'Delete',
  admin_editTitle: 'Edit',
  admin_newTitle: 'New',
  admin_cancel: '← Cancel',
  admin_update: 'Update',
  admin_create: 'Create',
  admin_deleteConfirm: 'Delete this document?',
  admin_tooManyAttempts: 'Too many login attempts. Please try again later.',
  admin_invalidCredentials: 'Invalid credentials',
  admin_networkError: 'Network error',
  admin_testimonials: 'Testimonials',
  admin_faqItems: 'FAQ Items',
  admin_teamMembers: 'Team Members',
  admin_pricingPlans: 'Pricing Plans',
  admin_features: 'Features',
  admin_stats: 'Stats',
  admin_fieldName: 'Name',
  admin_fieldDesignation: 'Designation',
  admin_fieldContent: 'Content',
  admin_fieldAvatar: 'Avatar URL',
  admin_fieldQuestion: 'Question',
  admin_fieldAnswer: 'Answer',
  admin_fieldRole: 'Role',
  admin_fieldImage: 'Image URL',
  admin_fieldTitle: 'Title',
  admin_fieldPrice: 'Price',
  admin_fieldYearlyPrice: 'Yearly Price',
  admin_fieldDescription: 'Description',
  admin_fieldFeatured: 'Featured',
  admin_fieldOfferText: 'Offer Text',
  admin_fieldButtonLabel: 'Button Label',
  admin_fieldStarred: 'Starred',
  admin_fieldCategory: 'Category',
  admin_fieldValue: 'Value',
  admin_fieldLabel: 'Label',
  admin_catMain: 'Main Features',
  admin_catValues: 'Core Values',
  admin_catValueProps: 'Value Props',
};

export const translations = { ar, en } as const;
export type TranslationKey = keyof typeof ar;