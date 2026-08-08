import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  serverExternalPackages: ['@libsql/hrana-client', 'libsql', 'better-sqlite3', 'drizzle-kit', '@payloadcms/db-sqlite'],
  turbopack: {},
};

export default nextConfig;
