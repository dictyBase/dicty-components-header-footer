module.exports = {
  styleguideDir: "docs",
  components: "src/**/[A-Z]*.js",
  ignore: ["**/*.test.{js,jsx,ts,tsx}", "src/styles/**"],
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: "babel-loader",
          options: {
            babelrc: false,
            presets: ["react-app"],
            plugins: ["transform-export-extensions"],
          },
        },
        {
          test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: "url-loader",
        },
        {
          test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: "file-loader",
        },
        {
          test: /\.(jpg|png)$/,
          exclude: /node_modules/,
          loader: "url-loader",
          options: {
            limit: 25000,
          },
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
      ],
    },
  },
}
