/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    outputFileTracingIncludes: {
      "/api/count-pages": ["./node_modules/mupdf/lib/*.wasm"],
    },
  },
}

module.exports = nextConfig
