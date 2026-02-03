/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  outputFileTracingRoot: __dirname,
  allowedDevOrigins: ["http://192.168.0.92:3000"],
  images: {
    unoptimized: true,
    domains: [],
  },
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },
}

module.exports = nextConfig
