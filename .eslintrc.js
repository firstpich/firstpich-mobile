module.exports = {
  root: true,
  extends: "@react-native-community",
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "react", "react-hooks", "prettier"],
  singleQuote: false,
  trailingComma: "all",
  printWidth: 150,
  rules: {
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": ["error"],
    quotes: [2, "double", { avoidEscape: true }],
  },
};
