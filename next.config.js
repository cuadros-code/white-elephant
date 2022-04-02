/** @type {import('next').NextConfig} */
const withPwa = require('next-pwa');
const runtimeCaching = require('next-pwa/cache')

const nextConfig = {
  reactStrictMode: true,
  optimizeFonts: true,
  images: {
    domains: ['lh3.googleusercontent.com', 'via.placeholder.com', 'firebasestorage.googleapis.com'],
  },
  pwa: {
    dest: 'public',
    disable: true,
    runtimeCaching
  },
  async headers() {
    return [
      {
        source: '/assets/Dongle-Bold.ttf',
        headers: [
          {
            key: 'Cache-control',
            value: 'public, immutable, max-age=31536000',
          },
        ],
      },
      {
        source: '/assets/Dongle-Light.ttf',
        headers: [
          {
            key: 'Cache-control',
            value: 'public, immutable, max-age=31536000',
          },
        ],
      },
      {
        source: '/assets/Dongle-Regular.ttf',
        headers: [
          {
            key: 'Cache-control',
            value: 'public, immutable, max-age=31536000',
          },
        ],
      },
    ]
  }
}

module.exports = withPwa( nextConfig );
