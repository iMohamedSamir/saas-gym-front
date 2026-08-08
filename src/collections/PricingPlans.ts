import { CollectionConfig } from "payload";

export const PricingPlans: CollectionConfig = {
  slug: "pricing-plans",
  admin: { useAsTitle: "title" },
  access: { read: () => true },
  fields: [
    { name: "title", type: "text", required: true, localize: true },
    { name: "price", type: "text", required: true },
    { name: "yearlyPrice", type: "text" },
    { name: "description", type: "textarea", localize: true },
    { name: "isFeatured", type: "checkbox", defaultValue: false, label: "Featured Plan" },
    { name: "offerText", type: "text", localize: true },
    { name: "buttonLabel", type: "text", defaultValue: "Start Free Trial", localize: true },
    { name: "buttonLink", type: "text", defaultValue: "/contact" },
    {
      name: "features",
      type: "array",
      fields: [
        { name: "label", type: "text", required: true, localize: true },
        { name: "included", type: "checkbox", defaultValue: true },
        { name: "tooltip", type: "text" },
      ],
    },
    { name: "sortOrder", type: "number", defaultValue: 0 },
  ],
};
