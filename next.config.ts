import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    localPatterns: [
      {
        pathname: "/projects/**",
      },
    ],
  },
};

export default nextConfig;
