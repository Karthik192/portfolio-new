/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.simpleicons.org", // 👈 change this to your image host
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
