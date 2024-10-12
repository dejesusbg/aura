const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.js",

  output: {
    filename: "js/bundle.js",
    path: path.resolve(__dirname, "public"),
  },

  mode: "development",

  resolve: { modules: [path.resolve(__dirname, "src"), "node_modules"] },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: { loader: "babel-loader", options: { presets: ["@babel/preset-env"] } },
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },

  plugins: [new MiniCssExtractPlugin({ filename: "css/bundle.css" })],
};
