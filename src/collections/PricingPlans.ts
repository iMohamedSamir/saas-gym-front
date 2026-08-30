import { CollectionConfig } from "payload";

export const PricingPlans: CollectionConfig = {
  slug: "pricing-plans",
  admin: { useAsTitle: "title" },
  access: { read: () => true },
  fields: [
    { name: "title", type: "text", required: true, localized: true },
    { name: "price", type: "text", required: true },
    { name: "yearlyPrice", type: "text" },
    { name: "description", type: "textarea", localized: true },
    { name: "isFeatured", type: "checkbox", defaultValue: false, label: "Featured Plan" },
    { name: "offerText", type: "text", localized: true },
    { name: "buttonLabel", type: "text", defaultValue: "Start Free Trial", localized: true },
    { name: "buttonLink", type: "text", defaultValue: "/contact" },
    {
      name: "features",
      type: "array",
      fields: [
        { name: "label", type: "text", required: true, localized: true },
        { name: "included", type: "checkbox", defaultValue: true },
        { name: "tooltip", type: "text" },
      ],
    },
    { name: "sortOrder", type: "number", defaultValue: 0 },
  ],
};
