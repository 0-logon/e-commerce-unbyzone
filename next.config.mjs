/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true, // This option suppresses informative 404 errors
  images: {
    unoptimized: true,
  }
};

export default nextConfig;
