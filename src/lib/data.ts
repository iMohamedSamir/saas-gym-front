import { getPayload } from "payload";
import config from "@/payload.config";

export async function getData() {
  let payload;
  try {
    payload = await getPayload({ config });
  } catch (e) {
    console.error("Failed to init Payload:", e);
    return null;
  }

  const [testimonials, faqItems, teamMembers, pricingPlans, features, stats, homepage, siteConfig] =
    await Promise.all([
      payload.find({ collection: "testimonials", sort: "sortOrder" }).catch(() => ({ docs: [] })),
      payload.find({ collection: "faq-items", sort: "sortOrder" }).catch(() => ({ docs: [] })),
      payload.find({ collection: "team-members", sort: "sortOrder" }).catch(() => ({ docs: [] })),
      payload.find({ collection: "pricing-plans", sort: "sortOrder" }).catch(() => ({ docs: [] })),
      payload.find({ collection: "features", sort: "sortOrder" }).catch(() => ({ docs: [] })),
      payload.find({ collection: "stats", sort: "sortOrder" }).catch(() => ({ docs: [] })),
      payload.findGlobal({ slug: "homepage" }).catch(() => ({ doc: {} })),
      payload.findGlobal({ slug: "site-config" }).catch(() => ({ doc: {} })),
    ]);

  return {
    testimonials: testimonials.docs || [],
    faqItems: faqItems.docs || [],
    teamMembers: teamMembers.docs || [],
    pricingPlans: pricingPlans.docs || [],
    features: features.docs || [],
    stats: stats.docs || [],
    homepage: homepage.doc || {},
    siteConfig: siteConfig.doc || {},
  };
}
