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
    'localhost',
    '127.0.0.1',
    'work-1-dntngjpbfipzafcv.prod-runtime.all-hands.dev',
    'work-2-dntngjpbfipzafcv.prod-runtime.all-hands.dev',
    'preview-e1fef3b9-9d41-43ce-a87d-9589e2fcb1b7.space-z.ai',
    '*.space-z.ai',
  ],
};

export default nextConfig;
