import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Explicitly set the workspace root to avoid
  // Turbopack guessing across multiple lockfiles.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
