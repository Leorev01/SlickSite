/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
   async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "script-src 'self' https://widget.trustpilot.com;",
          },
        ],
      },
    ];
  },

  // Updated to use remotePatterns instead of domains
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },

  // Enable SWC minification (if supported)
  compiler: {
    removeConsole: true, // Optional: Removes console.logs in production
  },

  // Resolve caching issues and optimize performance
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = { fs: false };
    }
    return config;
  },
};

module.exports = nextConfig;
