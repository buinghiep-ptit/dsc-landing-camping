/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // async rewrites() {
  //   return [
  //     {
  //       source: "/api/:path*",
  //       destination: "https://cahn-api.campdi.vn/cahnfc/api/:path*", // Proxy to Backend
  //     },
  //   ]
  // },
  webpack: config => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      net: false,
      tls: false,
      os: false,
    }
    return config
  },
}

module.exports = nextConfig
