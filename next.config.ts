import type { NextConfig } from 'next';
import createMDX from '@next/mdx';

const withMDX = createMDX({
  // Remark and Rehype plugins are applied server-side via gray-matter + custom rendering
  // Advanced plugins (rehype-pretty-code etc.) are handled in the MDX rendering component
  // to avoid Turbopack serialization issues
  extension: /\.mdx?$/,
});

const nextConfig: NextConfig = {
  // Enable MDX support
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],

  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
  },

  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ];
  },

  // Redirects
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ];
  },

  // Performance
  compress: true,

  // Experimental
  experimental: {
    // optimizePackageImports helps with tree-shaking large icon libraries
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
};

export default withMDX(nextConfig);
