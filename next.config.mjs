/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Disable trailing slash for better file handling
  trailingSlash: false,
  // Ensure static files are served properly
  experimental: {
    esmExternals: true,
  },
}

export default nextConfig