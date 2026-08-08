import type { CollectionConfig } from "payload";

export const Contact: CollectionConfig = {
  slug: "contact",
  admin: {
    useAsTitle: "id",
    description: "Contact page info: email, phone, booking.",
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
        { name: "title", type: "text", required: true, localize: true },
        { name: "subtitle", type: "textarea", localize: true },
      ],
    },
    // Contact Info
    {
      name: "contact_info",
      type: "group",
      localize: true,
      fields: [
        { name: "enable", type: "checkbox", defaultValue: true },
        {
          name: "items",
          type: "array",
          localize: true,
          fields: [
            { name: "type", type: "text", required: true },
            { name: "title", type: "text", required: true, localize: true },
            { name: "detail", type: "text", required: true, localize: true },
            { name: "link", type: "text" },
            { name: "icon", type: "text" },
          ],
        },
      ],
    },
  ],
};
