module.exports = {
  images: {
    domains: [
      "links.papareact.com",
      "m.media-amazon.com",
      "images-na.ssl-images-amazon.com",
    ],
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Important: return the modified config
    return config;
  },
};
