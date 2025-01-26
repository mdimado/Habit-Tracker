import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable experimental features for appDir support
  experimental: {
    appDir: true,
  },
  // Disable static exports since you're deploying to Vercel
  output: 'standalone',
  // Enable React strict mode for better development
  reactStrictMode: true,
  // Explicitly set the directory where pages are located
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  // Set the default build directory
  distDir: '.next'
};

export default nextConfig;
