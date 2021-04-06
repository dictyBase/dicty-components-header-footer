module.exports = {
  styleguideDir: "styleguide",
  components: "src/**/[A-Z]*.js",
  ignore: ["**/*.test.{js,jsx,ts,tsx}", "src/styles/**"],
  webpackConfig: require("react-scripts/config/webpack.config")("development"),
}
