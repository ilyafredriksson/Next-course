module.exports = {
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      dns: false, // Disable 'dns' module for browser compatibility
      fs: false, // Added fallback for 'fs' module
    };
    return config;
  },
  turbopack: {}, // Added empty Turbopack configuration to silence the error
};