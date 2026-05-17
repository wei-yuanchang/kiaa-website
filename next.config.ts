import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/kiaa-website",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  assetPrefix: "/kiaa-website",
};

export default nextConfig;