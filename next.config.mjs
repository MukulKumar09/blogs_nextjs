/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s0girxs4cdjh3ldc.public.blob.vercel-storage.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
