/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Frozen at build time so the prerendered HTML and the client agree on the date (see src/utils/useNow.js)
  env: { NEXT_PUBLIC_BUILD_TIME: new Date().toISOString() },
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  webpack: (config, { isServer }) => {
    return config;
  },
};

module.exports = nextConfig;
