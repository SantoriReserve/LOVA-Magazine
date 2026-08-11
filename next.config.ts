import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30,
    remotePatterns: [],
  },
  // Allow phone/tablet preview over LAN (same Wi‑Fi)
  allowedDevOrigins: ["192.168.4.36", "127.0.0.1", "localhost"],
};

export default nextConfig;
