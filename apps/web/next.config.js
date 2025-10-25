/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enable static export for GitHub Pages
  images: {
    domains: ['localhost'],
    unoptimized: true, // Required for static export
  },
  trailingSlash: true, // Required for static export
}

module.exports = nextConfig