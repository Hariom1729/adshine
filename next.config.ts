import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 85, 90],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pinimg.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    // Supabase storage images are served unoptimized (see FounderMessage.tsx)
    // to avoid Next.js server-side proxy resolving to a private IP.
    // So Supabase hostname is intentionally not listed here.
  },
  reactCompiler: true,
};

export default nextConfig;
