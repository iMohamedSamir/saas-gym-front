import type { CollectionConfig } from "payload";

export const Features: CollectionConfig = {
  slug: "features",
  admin: {
    useAsTitle: "id",
    description: "Features page: smart platform cards, service features.",
  },
  access: {
    read: () => true,
  },
  fields: [
    { name: "title", type: "text", required: true, localize: true },
    { name: "meta_title", type: "text", localize: true },
    { name: "description", type: "textarea", localize: true },
    // Banner
    {
      name: "banner",
      type: "group",
      localize: true,
      fields: [
        { name: "title", type: "text", required: true, localize: true },
        { name: "content", type: "textarea", required: true, localize: true },
        { name: "image", type: "text" },
        {
          name: "button_primary",
          type: "group",
          fields: [
            { name: "enable", type: "checkbox", defaultValue: true },
            { name: "label", type: "text", required: true, localize: true },
            { name: "link", type: "text", required: true },
          ],
        },
        {
          name: "button_secondary",
          type: "group",
          fields: [
            { name: "enable", type: "checkbox", defaultValue: true },
            { name: "label", type: "text", required: true, localize: true },
            { name: "link", type: "text", required: true },
          ],
        },
      ],
    },
    // Partners
    {
      name: "partners",
      type: "group",
      localize: true,
      fields: [
        { name: "enable", type: "checkbox", defaultValue: true },
        { name: "badge", type: "text", localize: true },
        { name: "title", type: "text", localize: true },
      ],
    },
    // Smart Platform
    {
      name: "smart_platform",
      type: "group",
      localize: true,
      fields: [
        { name: "enable", type: "checkbox", defaultValue: true },
        { name: "badge", type: "text" },
        { name: "title", type: "text", required: true, localize: true },
        { name: "content", type: "textarea", localize: true },
        {
          name: "cards",
          type: "array",
          localize: true,
          fields: [
            { name: "title", type: "text", required: true, localize: true },
            { name: "subtitle", type: "text", localize: true },
            { name: "logo", type: "text" },
            { name: "image", type: "text" },
            { name: "classNames", type: "text" },
          ],
        },
      ],
    },
    // Service Features
    {
      name: "service_features",
      type: "group",
      fields: [
        { name: "enable", type: "checkbox", defaultValue: true },
        {
          name: "items",
          type: "array",
          fields: [
            { name: "title", type: "text", required: true, localize: true },
            { name: "image", type: "text", required: true },
            { name: "reverse", type: "checkbox", defaultValue: false },
            {
              name: "items",
              type: "array",
              fields: [
                { name: "icon", type: "text", required: true },
                { name: "title", type: "text", required: true, localize: true },
                { name: "content", type: "textarea", required: true, localize: true },
              ],
            },
          ],
        },
      ],
    },
  ],
};
