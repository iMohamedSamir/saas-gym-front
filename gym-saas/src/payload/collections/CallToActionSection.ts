import type { CollectionConfig } from "payload";

export const CallToActionSection: CollectionConfig = {
  slug: "call-to-action-section",
  admin: {
    useAsTitle: "id",
    description: "CTA banner section.",
  },
  access: {
    read: () => true,
  },
  fields: [
    { name: "enable", type: "checkbox", defaultValue: true },
    { name: "badge", type: "text", localize: true },
    { name: "title", type: "text", required: true, localize: true },
    { name: "description", type: "textarea", required: true, localize: true },
    {
      name: "button",
      type: "group",
      fields: [
        { name: "enable", type: "checkbox", defaultValue: true },
        { name: "label", type: "text", required: true, localize: true },
        { name: "link", type: "text", required: true },
      ],
    },
  ],
};
