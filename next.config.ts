import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
 
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "curtain.linooxel.com",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "curtain.linooxel.com",
        port: "5042", 
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
        pathname: "/**",
      },
    
    ],
  },
};

export default nextConfig;
