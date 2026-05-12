/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Izinkan gambar dari domain eksternal untuk mock data
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
