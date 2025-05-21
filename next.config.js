/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true, // disables build failure on lint errors
  },
  images: {
    domains: ['raw.githubusercontent.com'],
  },
};

module.exports = nextConfig;









