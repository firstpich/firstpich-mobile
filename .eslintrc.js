module.exports = {
  root: true,
  extends: "@react-native-community",
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "react", "react-hooks", "prettier"],
  rules: {
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": ["error"],
    quotes: [2, "double", { avoidEscape: true }],
    "prettier/prettier": ["error", { singleQuote: false }],
    "react-native/no-inline-styles": "off",
  },
};
