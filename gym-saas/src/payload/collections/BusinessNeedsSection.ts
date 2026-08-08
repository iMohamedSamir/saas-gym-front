import type { CollectionConfig } from "payload";

export const BusinessNeedsSection: CollectionConfig = {
  slug: "business-needs-section",
  admin: {
    useAsTitle: "id",
    description: "Business Needs section with numbered steps.",
  },
  access: {
    read: () => true,
  },
  fields: [
    { name: "enable", type: "checkbox", defaultValue: true },
    { name: "badge", type: "text", localize: true },
    { name: "title", type: "text", required: true, localize: true },
    {
      name: "items",
      type: "array",
      localize: true,
      fields: [
        { name: "image", type: "text", required: true },
        { name: "number", type: "text", required: true },
        { name: "title", type: "text", required: true, localize: true },
        { name: "content", type: "textarea", required: true, localize: true },
      ],
    },
  ],
};
