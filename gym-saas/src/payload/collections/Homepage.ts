import type { CollectionConfig } from "payload";

export const Homepage: CollectionConfig = {
  slug: "homepage",
  admin: {
    useAsTitle: "id",
    description: "Homepage sections: banner, features, testimonials, pricing, etc.",
  },
  access: {
    read: () => true,
  },
  fields: [
    // Banner
    {
      name: "banner",
      type: "group",
      localize: true,
      fields: [
        { name: "badge", type: "text", localize: true },
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
    // Main Features
    {
      name: "main_features",
      type: "group",
      localize: true,
      fields: [
        { name: "enable", type: "checkbox", defaultValue: true },
        { name: "badge", type: "text", localize: true },
        { name: "title", type: "text", required: true, localize: true },
        { name: "content", type: "textarea", required: true, localize: true },
        {
          name: "items",
          type: "array",
          localize: true,
          fields: [{ name: "value", type: "text", required: true, localize: true }],
        },
      ],
    },
    // Value Props
    {
      name: "value_props",
      type: "group",
      localize: true,
      fields: [
        { name: "enable", type: "checkbox", defaultValue: true },
        { name: "badge", type: "text", localize: true },
        { name: "title", type: "text", required: true, localize: true },
        { name: "content", type: "textarea", required: true, localize: true },
        {
          name: "items",
          type: "array",
          localize: true,
          fields: [
            { name: "logo", type: "text", required: true },
            { name: "title", type: "text", required: true, localize: true },
            {
              name: "list",
              type: "array",
              localize: true,
              fields: [{ name: "value", type: "text", localize: true }],
            },
          ],
        },
      ],
    },
    // Our Features
    {
      name: "our_features",
      type: "group",
      localize: true,
      fields: [
        { name: "enable", type: "checkbox", defaultValue: true },
        { name: "badge", type: "text", localize: true },
        { name: "title", type: "text", required: true, localize: true },
        { name: "content", type: "textarea", localize: true },
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
    // Testimonial Quote
    {
      name: "testimonial_quote",
      type: "group",
      localize: true,
      fields: [
        { name: "enable", type: "checkbox", defaultValue: true },
        { name: "badge", type: "text", localize: true },
        { name: "title", type: "text", required: true, localize: true },
        { name: "quote", type: "textarea", required: true, localize: true },
      ],
    },
    // Single Testimonial
    {
      name: "single_testimonial",
      type: "group",
      localize: true,
      fields: [
        { name: "enable", type: "checkbox", defaultValue: true },
        {
          name: "stats",
          type: "array",
          localize: true,
          fields: [
            { name: "value", type: "text", required: true },
            { name: "label", type: "text", required: true, localize: true },
          ],
        },
        {
          name: "testimonial",
          type: "group",
          fields: [
            { name: "quote", type: "textarea", required: true, localize: true },
            { name: "avatar", type: "text", required: true },
            { name: "name", type: "text", required: true, localize: true },
            { name: "company", type: "text", required: true, localize: true },
          ],
        },
      ],
    },
    // Growth Process
    {
      name: "growth_process",
      type: "group",
      localize: true,
      fields: [
        { name: "enable", type: "checkbox", defaultValue: true },
        { name: "badge", type: "text", localize: true },
        { name: "title", type: "text", required: true, localize: true },
        {
          name: "items",
          type: "array",
          localize: true,
          fields: [
            { name: "logo", type: "text", required: true },
            { name: "title", type: "text", required: true, localize: true },
            { name: "content", type: "textarea", required: true, localize: true },
          ],
        },
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
    },
    // Integrations
    {
      name: "integrations",
      type: "group",
      fields: [
        { name: "enable", type: "checkbox", defaultValue: true },
        { name: "badge", type: "text" },
        { name: "title", type: "text", required: true },
        {
          name: "items",
          type: "array",
          fields: [
            { name: "image", type: "text", required: true },
            { name: "alt", type: "text", required: true },
          ],
        },
      ],
    },
    // Lead Generation
    {
      name: "lead_generation",
      type: "group",
      localize: true,
      fields: [
        { name: "enable", type: "checkbox", defaultValue: true },
        { name: "badge", type: "text", localize: true },
        { name: "title", type: "text", required: true, localize: true },
        { name: "subtitle", type: "text", localize: true },
        { name: "content", type: "textarea", localize: true },
        {
          name: "list",
          type: "array",
          localize: true,
          fields: [{ name: "value", type: "text", localize: true }],
        },
        { name: "image", type: "text" },
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
    },
    // Pricing teaser
    {
      name: "pricing",
      type: "group",
      localize: true,
      fields: [
        { name: "enable", type: "checkbox", defaultValue: true },
        { name: "title", type: "text", required: true, localize: true },
        { name: "content", type: "textarea", localize: true },
      ],
    },
  ],
};
