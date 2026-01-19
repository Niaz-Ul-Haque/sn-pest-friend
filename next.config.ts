import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Enable static exports for deployment
  output: 'export',
  
  // Trailing slashes for compatibility with original URLs
  trailingSlash: true,
  
  // Image optimization configuration
  images: {
    unoptimized: true, // For static export
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
}

export default nextConfig
