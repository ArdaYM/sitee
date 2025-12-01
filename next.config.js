/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/sitee", // <-- senin repository adı
  assetPrefix: "/sitee", // <-- aynı isim
};

module.exports = nextConfig;
