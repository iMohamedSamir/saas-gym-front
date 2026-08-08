import type { CollectionConfig } from "payload";

export const FaqSection: CollectionConfig = {
  slug: "faq-section",
  admin: {
    useAsTitle: "id",
    description: "FAQ section with question/answer pairs.",
  },
  access: {
    read: () => true,
  },
  fields: [
    { name: "enable", type: "checkbox", defaultValue: true },
    { name: "badge", type: "text", localize: true },
    { name: "title", type: "text", required: true, localize: true },
    { name: "description", type: "textarea", localize: true },
    {
      name: "button",
      type: "group",
      fields: [
        { name: "enable", type: "checkbox", defaultValue: true },
        { name: "label", type: "text", required: true, localize: true },
        { name: "link", type: "text", required: true },
      ],
    },
    {
      name: "items",
      type: "array",
      localize: true,
      fields: [
        { name: "question", type: "text", required: true, localize: true },
        { name: "answer", type: "textarea", required: true, localize: true },
      ],
    },
  ],
};
