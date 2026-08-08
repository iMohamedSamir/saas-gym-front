import { getPayload } from 'payload';
import config from '../src/payload.config';

async function seed() {
  const payload = await getPayload({ config });

  console.log("\nSeeding Payload CMS...\n");

  // 1. Stats
  console.log("-> Stats...");
  const existingStats = await payload.find({ collection: "stats" });
  if (existingStats.totalDocs === 0) {
    await payload.create({ collection: "stats", data: { value: "10,000+", label: "Local Businesses Served", sortOrder: 1 } });
    await payload.create({ collection: "stats", data: { value: "5M+", label: "Leads Captured", sortOrder: 2 } });
    await payload.create({ collection: "stats", data: { value: "24/7", label: "Automated Workflows", sortOrder: 3 } });
    await payload.create({ collection: "stats", data: { value: "99%", label: "Platform Uptime", sortOrder: 4 } });
  }

  // 2. Features
  console.log("-> Features...");
  const existingFeatures = await payload.find({ collection: "features" });
  if (existingFeatures.totalDocs === 0) {
    const names = ["Automated Customer Follow-up", "Autopilot Review Generator", "Missed Call Auto-Responder", "24/7 Appointment Scheduler", "Unified Lead Inbox", "Smart Customer Database", "High-Converting Websites", "Drag & Drop Forms", "Automated Text Campaigns"];
    for (let i = 0; i < names.length; i++) {
      await payload.create({ collection: "features", data: { title: names[i], icon: "/images/features-menu-icon.svg", isStarred: i === 4, category: "main", sortOrder: i + 1 } });
    }
  }

  // 3. Testimonials
  console.log("-> Testimonials...");
  const existingT = await payload.find({ collection: "testimonials" });
  if (existingT.totalDocs === 0) {
    await payload.create({ collection: "testimonials", data: { name: "Marvin McKinney", designation: "Roofing Company Owner", content: "We used to lose at least 3-4 jobs a week because we couldn't answer the phone while on a roof. The Missed Call Auto-Responder immediately cut that to zero.", avatar: "/images/testimonials/1.png", sortOrder: 1 } });
    await payload.create({ collection: "testimonials", data: { name: "Sarah Jenkins", designation: "Dental Practice Manager", content: "Our front desk was overwhelmed with appointment reminders and review requests. This system automated everything. Our show-up rate increased by 40%.", avatar: "/images/testimonials/2.png", sortOrder: 2 } });
    await payload.create({ collection: "testimonials", data: { name: "David Alaba", designation: "HVAC Contractor", content: "I finally cancelled my subscription to 5 different tools. Having the Smart Inbox, calendar, and text campaigns in one dashboard saved me nearly $600 a month.", avatar: "/images/testimonials/3.png", sortOrder: 3 } });
  }

  // 4. FAQ
  console.log("-> FAQ...");
  const existingF = await payload.find({ collection: "faq-items" });
  if (existingF.totalDocs === 0) {
    const faqs = [
      { q: "Is this software hard to set up?", a: "Not at all. We built this platform specifically for local business owners who aren't tech experts." },
      { q: "What if I already have a website?", a: "You can keep your existing website! Our tools easily integrate with WordPress, Wix, and Squarespace." },
      { q: "Can this replace my existing CRM or Mailchimp?", a: "Yes. Our platform includes a full CRM, unlimited email marketing, and SMS capabilities." },
      { q: "How does the Missed Call Auto-Responder work?", a: "When a customer calls and you don't answer, the system instantly texts them back." },
      { q: "Are there any hidden fees?", a: "No hidden fees. You pay a simple flat monthly rate." },
    ];
    for (let i = 0; i < faqs.length; i++) {
      await payload.create({ collection: "faq-items", data: { question: faqs[i].q, answer: faqs[i].a, sortOrder: i + 1 } });
    }
  }

  // 5. Team
  console.log("-> Team...");
  const existingTm = await payload.find({ collection: "team-members" });
  if (existingTm.totalDocs === 0) {
    const team = [
      { name: "Josh Wangombe", role: "Co-Founder & CTO", image: "/images/peoples/Profile Image.png" },
      { name: "Daniel Jenson", role: "Co-Founder & CEO", image: "/images/peoples/Profile Image-1.png" },
      { name: "Toun Aalbers", role: "Co-Founder & CTO", image: "/images/peoples/Profile Image-2.png" },
      { name: "Peter van Ursel", role: "Customer Success Director", image: "/images/peoples/Profile Image-3.png" },
    ];
    for (let i = 0; i < team.length; i++) {
      await payload.create({ collection: "team-members", data: { ...team[i], sortOrder: i + 1 } });
    }
  }

  // 6. Pricing
  console.log("-> Pricing...");
  const existingP = await payload.find({ collection: "pricing-plans" });
  if (existingP.totalDocs === 0) {
    await payload.create({ collection: "pricing-plans", data: { title: "Essentials", price: "97", yearlyPrice: "970", description: "The core necessities for organizing your leads.", isFeatured: false, buttonLabel: "Start Free Trial", buttonLink: "#contact", features: [{ label: "Unified Lead Inbox", included: true }, { label: "Missed Call Auto-Responder", included: true }, { label: "Autopilot Review Generator", included: true }, { label: "24/7 Appointment Scheduler", included: false }, { label: "Automated Follow-Up Campaigns", included: false }], sortOrder: 1 } });
    await payload.create({ collection: "pricing-plans", data: { title: "Growth", price: "297", yearlyPrice: "2970", description: "Everything for complete autopilot growth.", isFeatured: true, offerText: "Most Popular", buttonLabel: "Start Free Trial", buttonLink: "#contact", features: [{ label: "Unified Lead Inbox & Reviews", included: true }, { label: "24/7 Appointment Scheduler", included: true }, { label: "Automated Follow-Up Campaigns", included: true }, { label: "High-Converting Websites & Funnels", included: true }, { label: "Advanced API Integrations", included: false }], sortOrder: 2 } });
    await payload.create({ collection: "pricing-plans", data: { title: "Scale", price: "497", yearlyPrice: "4970", description: "Total control to scale multiple locations.", isFeatured: false, buttonLabel: "Start Free Trial", buttonLink: "#contact", features: [{ label: "Everything in Growth", included: true }, { label: "Unlimited Social Media Posting", included: true }, { label: "Advanced API Integrations", included: true }, { label: "Multi-Location Support", included: true }, { label: "Dedicated Account Manager", included: true }], sortOrder: 3 } });
  }

  // 7. Homepage Global
  console.log("-> Homepage...");
  try {
    await payload.updateGlobal({ slug: "homepage", data: {
      bannerTitle: "The All-In-One Growth Software for <strong>Local Business Owners</strong>",
      bannerContent: "The complete automated system designed to capture more leads, follow up instantly, and grow your local business - all in one place.",
      bannerPrimaryBtn: { label: "Start Your 14-day Free Trial", link: "#pricing" },
      bannerSecondaryBtn: { label: "Book a Demo", link: "#contact" },
      mainFeaturesTitle: "Are you losing real customers to the <strong>Follow-up Gap?</strong>",
      mainFeaturesContent: "Stop wasting money on marketing if you can't respond fast enough.",
      mainFeaturesItems: [{ text: "Wasted Ad Spend" }, { text: "Expensive Tools" }, { text: "Scattered Data" }, { text: "Missed Calls" }, { text: "Lost Leads" }, { text: "Slow Responses" }],
      valuePropsTitle: "Replace Your Clunky Tools With A <strong>Smart, All-In-One System</strong>",
      valuePropsContent: "Log in to a single powerful dashboard to manage everything seamlessly.",
      featuresTitle: "Everything You Need To Put Growth On <strong>Autopilot</strong>",
      featuresContent: "From capturing the very first click to securing a 5-star review.",
      testimonialQuoteTitle: "We know you didn't start your local business to become a full-time <strong>Software Engineer</strong>",
      testimonialQuote: "Before this system, I was losing half my leads simply because I couldn't get to my phone fast enough. Now, the system handles the follow-up for me, and I've seen a 300% jump in bookings.",
      singleTestimonialQuote: "This all-in-one software is exactly what our local business needed. It completely eliminated our need for 4 other separate platforms.",
      singleTestimonialName: "Ronald Richards",
      singleTestimonialCompany: "Local Services Co.",
      singleTestimonialAvatar: "/images/avatar.png",
      singleTestimonialStats: [{ value: "10,000+", label: "Leads Captured" }, { value: "5x Faster", label: "Response Time" }, { value: "28hr/week", label: "Hours Saved" }],
      growthProcessTitle: "Your 3-Step Path to <strong>Automated Growth</strong>",
      growthProcessSteps: [{ stepNumber: "1", title: "Start Your Trial", content: "Sign up for a free trial. No credit card required." }, { stepNumber: "2", title: "Connect Your Business", content: "Forward your calls, plug in your social accounts." }, { stepNumber: "3", title: "Scale on Autopilot", content: "Watch your calendar fill up and reviews come in automatically." }],
      growthProcessBtn: { label: "Start Your 14-Day Free Trial", link: "#pricing" },
      integrationsTitle: "Connect all your <strong>Applications</strong>",
      pricingTitle: "Affordable <strong>Pricing Plans</strong>",
      pricingContent: "Choose the plan that fits your local business.",
      faqTitle: "Quick Answers for the <strong>Smart Investors</strong>",
      faqContent: "Find answers to common questions about our product.",
      ctaTitle: "Ready to put Your Local Business Growth on <strong>Autopilot?</strong>",
      ctaDescription: "Stop wasting thousands on scattered tools that don't convert.",
      ctaButton: { label: "Start Your 14-Days Free Trial", link: "#pricing" },
      ourStoryTitle: "Why We Do What We Do - A Letter From <strong>Our CEO</strong>",
      ceoName: "Ronald Richards", ceoRole: "Founder & CEO", ceoImage: "/images/avatar-lg.png",
      ceoLetter: "At Automark, we know you started your local business to serve your community, not to become a software engineer. We built a single, unified platform that puts your follow-ups, reviews, and bookings on complete autopilot.",
      ceoLetterPoints: [{ point: "1. Plug In Your Business Data" }, { point: "2. Activate Our Local Workflows" }, { point: "3. Watch Your Bookings Grow" }],
    }});
  } catch (e) { console.log("  Homepage:", (e as Error).message); }

  // 8. Site Config
  console.log("-> Site Config...");
  try {
    await payload.updateGlobal({ slug: "site-config", data: {
      siteName: "Automark", tagline: "All-In-One Growth Software",
      footerTagline: "Empowering businesses through intelligent automation.",
      footerEmail: "contact@automark.com", footerPhone: "+1 (800) 123-4567",
      copyright: "Copyright 2026 Automark. All Rights Reserved.",
      contactEmail: "hello@yoursoftware.com", contactPhone: "+1 (800) 123-4567",
    }});
  } catch (e) { console.log("  SiteConfig:", (e as Error).message); }

  console.log("\nDone!\n");
  process.exit(0);
}

seed().catch((err) => { console.error("Seed error:", err); process.exit(1); });
