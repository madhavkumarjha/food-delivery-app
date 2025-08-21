const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

// ✅ Fix for rxjs resolution issue with Sanity client
config.resolver.extraNodeModules = {
  ...config.resolver.extraNodeModules,
  rxjs: require.resolve("rxjs"),
};

module.exports = withNativeWind(config, { input: "./global.css" });
