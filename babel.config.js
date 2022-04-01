module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    ["@babel/plugin-proposal-decorators", { legacy: true }],
    [
      require.resolve("babel-plugin-module-resolver"),
      {
        cwd: "babelrc",
        extensions: [".ts", ".tsx", ".js", ".ios.js", ".android.js"],
        alias: {
          "@assets": "./assets",
          "@components": "./src/components",
          "@db": "./src/db",
          "@validators": "./src/validators",
          "@src": "./src",
        },
      },
    ],
  ],
};
