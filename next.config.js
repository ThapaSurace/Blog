/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'http',
          hostname: 'res.cloudinary.com',
        },
      ],
    },
    env: {
      BASE_URL: 'https://blog-five-indol-85.vercel.app/',
    },
  }