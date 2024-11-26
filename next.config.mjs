/** @type {import('next').NextConfig} */
const nextConfig = {
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
      },
      {
        source: "/checkout",
        destination: "/component/page/checkout",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
