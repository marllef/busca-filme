/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["m.media-amazon.com", "github.com", "image.tmdb.org"],
  },
};

module.exports = nextConfig;
