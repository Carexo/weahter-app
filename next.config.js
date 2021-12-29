/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  env: {
    weatherApiUrl: "https://www.metaweather.com/api",
    proxyUrl: "https://boiling-reaches-72231.herokuapp.com",
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
