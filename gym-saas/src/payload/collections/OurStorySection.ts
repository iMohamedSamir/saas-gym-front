import type { CollectionConfig } from "payload";

export const OurStorySection: CollectionConfig = {
  slug: "our-story-section",
  admin: {
    useAsTitle: "id",
    description: "Our Story / CEO letter section.",
  },
  access: {
    read: () => true,
  },
  fields: [
    { name: "enable", type: "checkbox", defaultValue: true },
    { name: "badge", type: "text", localize: true },
    { name: "title", type: "text", required: true, localize: true },
    {
      name: "ceo",
      type: "group",
      fields: [
        { name: "image", type: "text", required: true },
        { name: "name", type: "text", required: true, localize: true },
        { name: "role", type: "text", required: true, localize: true },
      ],
    },
    { name: "letter", type: "textarea", required: true, localize: true },
    { name: "letter_points_title", type: "text", localize: true },
    {
      name: "letter_points",
      type: "array",
      localize: true,
      fields: [{ name: "value", type: "text", localize: true }],
    },
    { name: "closing_content", type: "textarea", localize: true },
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
