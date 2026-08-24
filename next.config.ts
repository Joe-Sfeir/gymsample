import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/samples/gym",
  turbopack: { root: __dirname },
  images: { formats: ["image/avif", "image/webp"] },
};

export default nextConfig;
