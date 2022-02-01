module.exports = {
  // reactStrictMode: true,
    webpack5: false,
  images: {
    domains: [
      "images.unsplash.com",
      "raw.githubusercontent.com",
      "media-exp1.licdn.com",
      "img.youtube.com",
      "i.ytimg.com",
      "www.w3.org",
      "drive.google.com",
      "static.toiimg.com",
      "encrypted-tbn0.gstatic.com",
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};
