import type { CollectionConfig } from "payload";

export const Pricing: CollectionConfig = {
  slug: "pricing",
  admin: {
    useAsTitle: "id",
    description: "Pricing plans and comparison table.",
  },
  access: {
    read: () => true,
  },
  fields: [
    { name: "title", type: "text", required: true, localize: true },
    { name: "meta_title", type: "text", localize: true },
    { name: "description", type: "textarea", localize: true },
    // Page Header
    {
      name: "page_header",
      type: "group",
      localize: true,
      fields: [
        { name: "badge", type: "text", localize: true },
        { name: "title", type: "text", required: true, localize: true },
        { name: "content", type: "textarea", localize: true },
      ],
    },
    // Toggler
    {
      name: "toggler",
      type: "group",
      localize: true,
      fields: [
        { name: "monthly_label", type: "text", required: true, localize: true },
        { name: "yearly_label", type: "text", required: true, localize: true },
      ],
    },
    // Plans
    {
      name: "plans",
      type: "array",
      localize: true,
      fields: [
        { name: "title", type: "text", required: true, localize: true },
        { name: "price", type: "text", required: true },
        { name: "yearly_price", type: "text", required: true },
        { name: "is_featured", type: "checkbox", defaultValue: false },
        { name: "offer_text", type: "text", localize: true },
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
          name: "features",
          type: "array",
          localize: true,
          fields: [
            { name: "label", type: "text", required: true, localize: true },
            { name: "included", type: "checkbox", defaultValue: true },
            { name: "tooltip", type: "text" },
          ],
        },
      ],
    },
    // Comparison
    {
      name: "comparison",
      type: "group",
      localize: true,
      fields: [
        { name: "enable", type: "checkbox", defaultValue: true },
        { name: "badge", type: "text", localize: true },
        { name: "title", type: "text", required: true, localize: true },
        {
          name: "headers",
          type: "array",
          localize: true,
          fields: [{ name: "label", type: "text", required: true, localize: true }],
        },
        {
          name: "rows",
          type: "array",
          localize: true,
          fields: [
            { name: "feature", type: "text", required: true, localize: true },
            {
              name: "values",
              type: "array",
              fields: [{ name: "value", type: "text" }],
            },
          ],
        },
      ],
    },
  ],
};
