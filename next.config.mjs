/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: "images.unsplash.com",
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: "images.pexels.com",
            pathname: '/images/**',
          },
        ],
      },
      images: {
        domains: ['res.cloudinary.com'],
      },
};

export default nextConfig;
