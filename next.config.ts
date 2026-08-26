/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'example.com',
        pathname: '/**',
      },
      // Add Unsplash or Cloudinary here if you plan to use real images later:
      // {
      //   protocol: 'https',
      //   hostname: 'images.unsplash.com',
      //   pathname: '/**',
      // },
    ],
  },
};

export default nextConfig;