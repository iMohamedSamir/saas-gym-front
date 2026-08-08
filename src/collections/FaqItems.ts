import { CollectionConfig } from "payload";

export const FaqItems: CollectionConfig = {
  slug: "faq-items",
  admin: { useAsTitle: "question" },
  access: { read: () => true },
  fields: [
    { name: "question", type: "text", required: true, localize: true },
    { name: "answer", type: "textarea", required: true, localize: true },
    { name: "sortOrder", type: "number", defaultValue: 0 },
  ],
};
