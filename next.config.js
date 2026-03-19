/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/EmmerskeSoftwareVision',
  assetPrefix: '/EmmerskeSoftwareVision/',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig;
