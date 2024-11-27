/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  async redirects() {
    return [
      {
        source: "/home",
        destination: "/component/page/home",
        permanent: true,
      },
      {
        source: "/catalogue",
        destination: "/component/page/catalogue",
        permanent: true,
      }
    ];
  },
};

export default nextConfig;
