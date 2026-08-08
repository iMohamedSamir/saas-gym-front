import { buildConfig } from "payload";
import { sqliteAdapter } from "@payloadcms/db-sqlite";
import path from "path";

import { Testimonials } from "./collections/Testimonials";
import { FaqItems } from "./collections/FaqItems";
import { TeamMembers } from "./collections/TeamMembers";
import { PricingPlans } from "./collections/PricingPlans";
import { Features } from "./collections/Features";
import { Stats } from "./collections/Stats";
import { Users } from "./collections/Users";
import { HomePage } from "./globals/HomePage";
import { SiteConfig } from "./globals/SiteConfig";

export default buildConfig({
  admin: {
    user: "users",
  },
  collections: [
    Users,
    Testimonials,
    FaqItems,
    TeamMembers,
    PricingPlans,
    Features,
    Stats,
  ],
  globals: [HomePage, SiteConfig],
  db: sqliteAdapter({
    client: {
      url: "file:payload.db",
    },
  }),
  secret: process.env.PAYLOAD_SECRET || "your-super-secret-key-change-in-production",
  access: {
    public: true,
  },
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
});
