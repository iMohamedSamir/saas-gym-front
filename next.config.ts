import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  serverExternalPackages: ['@libsql/hrana-client', 'libsql', 'better-sqlite3', 'drizzle-kit', '@payloadcms/db-sqlite'],
  turbopack: {},
  allowedDevOrigins: [
    'work-1-kalrhzussvoofeuo.prod-runtime.all-hands.dev',
    'work-2-kalrhzussvoofeuo.prod-runtime.all-hands.dev',
  ],
};

export default nextConfig;
