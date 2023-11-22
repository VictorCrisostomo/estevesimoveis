/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'esteves-db.vercel.app',
      },
    ]
  }
}

module.exports = nextConfig
