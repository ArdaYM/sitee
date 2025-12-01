/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/sitee",
  assetPrefix: "/sitee",
};

module.exports = nextConfig;
