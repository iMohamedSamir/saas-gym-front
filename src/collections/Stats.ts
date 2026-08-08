import { CollectionConfig } from "payload";

export const Stats: CollectionConfig = {
  slug: "stats",
  admin: {
    useAsTitle: "label",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "value",
      type: "text",
      required: true,
    },
    {
      name: "label",
      type: "text",
      required: true,
    },
    {
      name: "sortOrder",
      type: "number",
      defaultValue: 0,
    },
  ],
};
