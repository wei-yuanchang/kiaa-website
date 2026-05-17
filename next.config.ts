import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/kiaa-website",
  trailingSlash: true,
};

export default nextConfig;