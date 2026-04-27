import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "activlab.com.mx",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;
