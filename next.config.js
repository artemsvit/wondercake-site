/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/wondercake-site',
  devIndicators: {
    buildActivityPosition: 'bottom-right',
    buildActivity: true,
  },
}

module.exports = nextConfig
