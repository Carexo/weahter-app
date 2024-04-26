/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  env: {
    weatherApiUrl: "https://api.weatherapi.com/v1",
    weatherApiKey: "61a0653c712244238a9160422221706",
  },
  images: {
    domains: ["cdn.weatherapi.com"],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/London",
        permanent: true,
      },
    ];
  },
};
