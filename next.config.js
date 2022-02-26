/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  env: {
    weatherApiUrl: "https://www.metaweather.com/api",
    proxyUrl: "https://still-journey-55420.herokuapp.com",
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/44418",
        permanent: true,
      },
    ];
  },
};
