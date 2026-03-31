/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  assetPrefix: '/',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        hostname: 'www.google.com',
      },
    ],
  },
};

export default nextConfig;
