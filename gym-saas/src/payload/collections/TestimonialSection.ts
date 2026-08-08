import type { CollectionConfig } from "payload";

export const TestimonialSection: CollectionConfig = {
  slug: "testimonial-section",
  admin: {
    useAsTitle: "id",
    description: "Testimonials section with multiple testimonial cards.",
  },
  access: {
    read: () => true,
  },
  fields: [
    { name: "enable", type: "checkbox", defaultValue: true },
    { name: "title", type: "text", required: true, localize: true },
    {
      name: "testimonials",
      type: "array",
      localize: true,
      fields: [
        { name: "name", type: "text", required: true, localize: true },
        { name: "designation", type: "text", required: true, localize: true },
        { name: "poster", type: "text", required: true },
        { name: "content", type: "textarea", required: true, localize: true },
        { name: "video", type: "text" },
      ],
    },
  ],
};
