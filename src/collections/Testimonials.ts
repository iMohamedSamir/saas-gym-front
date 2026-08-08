import { CollectionConfig } from "payload";

export const Testimonials: CollectionConfig = {
  slug: "testimonials",
  admin: { useAsTitle: "name" },
  access: { read: () => true },
  fields: [
    { name: "name", type: "text", required: true, localize: true },
    { name: "designation", type: "text", required: true, localize: true },
    { name: "content", type: "textarea", required: true, localize: true },
    { name: "avatar", type: "text", defaultValue: "/images/avatar.png" },
    { name: "sortOrder", type: "number", defaultValue: 0 },
  ],
};
