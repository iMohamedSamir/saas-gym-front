import type { CollectionConfig } from "payload";

export const ComparisonRowSection: CollectionConfig = {
  slug: "comparison-row-section",
  admin: {
    useAsTitle: "id",
    description: "Comparison Row section with tool prices.",
  },
  access: {
    read: () => true,
  },
  fields: [
    { name: "enable", type: "checkbox", defaultValue: true },
    { name: "badge", type: "text", localize: true },
    { name: "title", type: "text", required: true, localize: true },
    { name: "price_suffix", type: "text", localize: true },
    {
      name: "items",
      type: "array",
      localize: true,
      fields: [
        { name: "title", type: "text", required: true, localize: true },
        { name: "price", type: "text", required: true },
        {
          name: "images",
          type: "array",
          fields: [{ name: "image", type: "text" }],
        },
      ],
    },
  ],
};
