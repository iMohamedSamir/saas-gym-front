import { CollectionConfig } from "payload";

export const Features: CollectionConfig = {
  slug: "features",
  admin: { useAsTitle: "title" },
  access: { read: () => true },
  fields: [
    { name: "title", type: "text", required: true, localize: true },
    { name: "description", type: "textarea", localize: true },
    { name: "icon", type: "text", defaultValue: "/images/features-menu-icon.svg" },
    { name: "isStarred", type: "checkbox", defaultValue: false },
    {
      name: "category",
      type: "select",
      options: [
        { label: "Main Features", value: "main" },
        { label: "Core Values", value: "values" },
        { label: "Value Props", value: "value-props" },
      ],
      defaultValue: "main",
    },
    { name: "sortOrder", type: "number", defaultValue: 0 },
  ],
};
