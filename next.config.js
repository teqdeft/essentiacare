/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  async rewrites() {
    return [
      {
        source: "/api/search-medication",
        destination: "https://dev.iwilltilimwell.com/api/medical/search-medication",
      },
    ];
  },
};

module.exports = nextConfig;