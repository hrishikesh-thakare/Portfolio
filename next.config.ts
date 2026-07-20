import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { protocol: "https", hostname: "api.microlink.io" },
      { protocol: 'https', hostname: 'logo.clearbit.com' },
    ],
  },
  experimental: {
    optimizePackageImports: ['gsap', 'lenis'],
  },
};

export default nextConfig;
