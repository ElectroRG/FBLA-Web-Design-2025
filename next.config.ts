import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  output: "export",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.aceternity.com",
        pathname: "/**", // Use the path pattern to match all image paths
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**", // Use the path pattern to match all image paths
      },
    ],
    unoptimized: true,
  },
};

export default nextConfig;
