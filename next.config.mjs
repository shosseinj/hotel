// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   eslint: {
//     ignoreDuringBuilds: true,
//   },

//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "kapumuyablpuibhumzdj.supabase.co",
//         port: "",
//         pathname: "/storage/v1/object/public/rooms-imgs/**",
//       },
//     ],
//   },
// };

// export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "kapumuyablpuibhumzdj.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/rooms-imgs/**",
      },
      // Specific path for your media files
      {
        protocol: "http",
        hostname: "127.0.0.1",
        port: "7000",
        pathname: "/media/**", // Only allows /media/... paths
      },
      // Allow all localhost URLs for development flexibility
      {
        protocol: "http",
        hostname: "localhost",
        port: "**", // Allows any port
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
