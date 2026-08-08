import { GlobalConfig } from "payload";

export const SiteConfig: GlobalConfig = {
  slug: "site-config",
  label: "Site Config",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "siteName",
      type: "text",
      required: true,
      defaultValue: "Automark",
    },
    {
      name: "tagline",
      type: "text",
      defaultValue: "All-In-One Growth Software",
    },
    {
      name: "footerTagline",
      type: "textarea",
    },
    {
      name: "footerEmail",
      type: "email",
    },
    {
      name: "footerPhone",
      type: "text",
    },
    {
      name: "copyright",
      type: "textarea",
    },
    {
      name: "contactEmail",
      type: "email",
    },
    {
      name: "contactPhone",
      type: "text",
    },
    {
      name: "contactCalendarLink",
      type: "text",
    },
  ],
};
