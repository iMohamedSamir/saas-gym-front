import path from "node:path";
import { fileURLToPath } from "node:url";
import { buildConfig } from "payload";
import { sqliteAdapter } from "@payloadcms/db-sqlite";
import { Homepage } from "./collections/Homepage";
import { About } from "./collections/About";
import { Features } from "./collections/Features";
import { Contact } from "./collections/Contact";
import { Pricing } from "./collections/Pricing";
import { TestimonialSection } from "./collections/TestimonialSection";
import { FaqSection } from "./collections/FaqSection";
import { BrandsSection } from "./collections/BrandsSection";
import { OurStorySection } from "./collections/OurStorySection";
import { CallToActionSection } from "./collections/CallToActionSection";
import { Users } from "./collections/Users";
import { BusinessNeedsSection } from "./collections/BusinessNeedsSection";
import { ComparisonRowSection } from "./collections/ComparisonRowSection";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  serverURL: "http://localhost:3000",
  allowedHosts: [
    "ws-bdd-bb-cabff-ogvwmgyzxv.cn-hongkong-vpc.fcapp.run",
  ],
  localization: {
    fallbackLocale: "ar",
    locales: [
      { code: "ar", label: "العربية", direction: "rtl" },
      { code: "en", label: "English", direction: "ltr" },
    ],
  },
  admin: {
    user: "users",
  },
  collections: [
    Users,
    Homepage,
    About,
    Features,
    Contact,
    Pricing,
    TestimonialSection,
    FaqSection,
    BrandsSection,
    OurStorySection,
    CallToActionSection,
    BusinessNeedsSection,
    ComparisonRowSection,
  ],
  endpoints: [
    {
      method: "post",
      path: "/api/contact",
      handler: async (req, res) => {
        // Accept the contact form submission and return success
        let body = "";
        req.on("data", (chunk: Buffer) => { body += chunk.toString(); });
        req.on("end", () => {
          console.log("Contact form submission:", body);
          res.status(200).json({ success: true, message: "Message sent successfully!" });
        });
      },
    },
  ],
  db: sqliteAdapter({
    client: {
      url: "file:/home/z/my-project/gym-saas/src/payload/payload.db",
    },
  }),
  secret: process.env.PAYLOAD_SECRET || "gym-saas-secret-key-change-in-production",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
});
