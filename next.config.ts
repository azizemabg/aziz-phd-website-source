import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Remove static export for dynamic features
  // output: "export",
  trailingSlash: true,
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
