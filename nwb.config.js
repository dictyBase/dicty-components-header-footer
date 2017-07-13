var eslintWebpack = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        enforce: "pre",
        use: [
          {
            options: {
              formatter: require("react-dev-utils/eslintFormatter"),
            },
            loader: require.resolve("eslint-loader"),
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
}

module.exports = {
  type: "react-component",
  npm: {
    esModules: true,
    umd: false,
  },
  webpack: {
    extra: eslintWebpack,
  },
  babel: {
    plugins: "transform-export-extensions",
  },
}
