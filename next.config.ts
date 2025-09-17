import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/Sviluppatore',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
