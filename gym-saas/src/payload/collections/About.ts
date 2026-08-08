import type { CollectionConfig } from "payload";

export const About: CollectionConfig = {
  slug: "about",
  admin: {
    useAsTitle: "id",
    description: "About page: stats, team members, core values.",
  },
  access: {
    read: () => true,
  },
  fields: [
    { name: "title", type: "text", required: true, localize: true },
    { name: "meta_title", type: "text", localize: true },
    { name: "description", type: "textarea", localize: true },
    { name: "image", type: "text" },
    // Page Header
    {
      name: "page_header",
      type: "group",
      localize: true,
      fields: [
        { name: "title", type: "text", required: true, localize: true },
        { name: "subtitle", type: "textarea", required: true, localize: true },
        { name: "image", type: "text", required: true },
      ],
    },
    // Stats
    {
      name: "stats",
      type: "group",
      fields: [
        { name: "enable", type: "checkbox", defaultValue: true },
        {
          name: "items",
          type: "array",
          fields: [
            { name: "value", type: "text", required: true },
            { name: "label", type: "text", required: true, localize: true },
          ],
        },
      ],
    },
    // Our Team
    {
      name: "our_team",
      type: "group",
      localize: true,
      fields: [
        { name: "enable", type: "checkbox", defaultValue: true },
        { name: "badge", type: "text", localize: true },
        { name: "title", type: "text", required: true, localize: true },
        {
          name: "members",
          type: "array",
          fields: [
            { name: "image", type: "text", required: true },
            { name: "name", type: "text", required: true, localize: true },
            { name: "role", type: "text", required: true, localize: true },
          ],
        },
      ],
    },
    // Core Values
    {
      name: "core_values",
      type: "group",
      localize: true,
      fields: [
        { name: "enable", type: "checkbox", defaultValue: true },
        { name: "badge", type: "text", localize: true },
        { name: "title", type: "text", required: true, localize: true },
        { name: "subtitle", type: "textarea", localize: true },
        {
          name: "items",
          type: "array",
          localize: true,
          fields: [
            { name: "logo", type: "text", required: true },
            { name: "title", type: "text", required: true, localize: true },
            { name: "is_starred", type: "checkbox", defaultValue: false },
          ],
        },
      ],
    },
  ],
};
