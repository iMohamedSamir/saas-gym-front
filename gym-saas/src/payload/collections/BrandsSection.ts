import type { CollectionConfig } from "payload";

export const BrandsSection: CollectionConfig = {
  slug: "brands-section",
  admin: {
    useAsTitle: "id",
    description: "Brands/trusted-by logo carousel.",
  },
  access: {
    read: () => true,
  },
  fields: [
    { name: "enable", type: "checkbox", defaultValue: true },
    { name: "title", type: "text", localize: true },
    {
      name: "images",
      type: "array",
      fields: [
        { name: "src", type: "text", required: true },
        { name: "alt", type: "text", required: true },
      ],
    },
  ],
};
