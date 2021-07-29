module.exports = {
  images: {
    domains: [
      "links.papareact.com",
      "m.media-amazon.com",
      "images-na.ssl-images-amazon.com",
      "images-fe.ssl-images-amazon.com",
    ],
  },
  webpack: (config) => {
    // Important: return the modified config
    return config;
  },
};
