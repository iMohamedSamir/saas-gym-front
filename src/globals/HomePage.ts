import { GlobalConfig } from "payload";

export const HomePage: GlobalConfig = {
  slug: "homepage",
  label: "Homepage",
  access: {
    read: () => true,
  },
  fields: [
    // Banner
    {
      name: "bannerTitle",
      type: "text",
      required: true,
      label: "Banner Title",
    },
    {
      name: "bannerContent",
      type: "textarea",
      label: "Banner Subtitle",
    },
    {
      name: "bannerPrimaryBtn",
      type: "group",
      fields: [
        { name: "label", type: "text" },
        { name: "link", type: "text" },
      ],
    },
    {
      name: "bannerSecondaryBtn",
      type: "group",
      fields: [
        { name: "label", type: "text" },
        { name: "link", type: "text" },
      ],
    },

    // Main Features
    {
      name: "mainFeaturesTitle",
      type: "text",
      label: "Main Features Title",
    },
    {
      name: "mainFeaturesContent",
      type: "textarea",
    },
    {
      name: "mainFeaturesItems",
      type: "array",
      fields: [
        { name: "text", type: "text", required: true },
      ],
    },

    // Value Props
    {
      name: "valuePropsTitle",
      type: "text",
      label: "Value Props Title",
    },
    {
      name: "valuePropsContent",
      type: "textarea",
    },

    // Features Section
    {
      name: "featuresTitle",
      type: "text",
      label: "Features Section Title",
    },
    {
      name: "featuresContent",
      type: "textarea",
    },

    // Testimonial Quote
    {
      name: "testimonialQuoteTitle",
      type: "text",
      label: "Testimonial Quote Title",
    },
    {
      name: "testimonialQuote",
      type: "textarea",
      label: "Testimonial Quote Text",
    },

    // Single Testimonial
    {
      name: "singleTestimonialQuote",
      type: "textarea",
    },
    {
      name: "singleTestimonialName",
      type: "text",
    },
    {
      name: "singleTestimonialCompany",
      type: "text",
    },
    {
      name: "singleTestimonialAvatar",
      type: "text",
    },
    {
      name: "singleTestimonialStats",
      type: "array",
      fields: [
        { name: "value", type: "text", required: true },
        { name: "label", type: "text", required: true },
      ],
    },

    // Growth Process
    {
      name: "growthProcessTitle",
      type: "text",
      label: "Growth Process Title",
    },
    {
      name: "growthProcessSteps",
      type: "array",
      fields: [
        { name: "stepNumber", type: "text" },
        { name: "title", type: "text", required: true },
        { name: "content", type: "textarea", required: true },
      ],
    },
    {
      name: "growthProcessBtn",
      type: "group",
      fields: [
        { name: "label", type: "text" },
        { name: "link", type: "text" },
      ],
    },

    // Integrations
    {
      name: "integrationsTitle",
      type: "text",
      label: "Integrations Title",
    },

    // Pricing
    {
      name: "pricingTitle",
      type: "text",
      label: "Pricing Section Title",
    },
    {
      name: "pricingContent",
      type: "textarea",
    },

    // FAQ Section
    {
      name: "faqTitle",
      type: "text",
      label: "FAQ Section Title",
    },
    {
      name: "faqContent",
      type: "textarea",
    },

    // CTA
    {
      name: "ctaTitle",
      type: "text",
      label: "Call To Action Title",
    },
    {
      name: "ctaDescription",
      type: "textarea",
    },
    {
      name: "ctaButton",
      type: "group",
      fields: [
        { name: "label", type: "text" },
        { name: "link", type: "text" },
      ],
    },

    // Our Story
    {
      name: "ourStoryTitle",
      type: "text",
    },
    {
      name: "ceoName",
      type: "text",
    },
    {
      name: "ceoRole",
      type: "text",
    },
    {
      name: "ceoImage",
      type: "text",
    },
    {
      name: "ceoLetter",
      type: "textarea",
    },
    {
      name: "ceoLetterPoints",
      type: "array",
      fields: [
        { name: "point", type: "text" },
      ],
    },
  ],
};
