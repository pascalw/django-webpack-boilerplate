const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const exclusions = /node_modules/;

module.exports = [
  {
    entry: {
      app: "./assets/app.js",
    },
    output: {
      path: path.resolve(__dirname, "boilerplate/static"),
      publicPath: "/static/",
      filename: "[name].js",
      chunkFilename: "[id]-[chunkhash].js",
    },
    devServer: {
      port: 8081,
      writeToDisk: true,
    },
    module: {
      rules: [
        {
          test: /.*/,
          include: path.resolve(__dirname, "assets/img"),
          exclude: exclusions,
          options: {
            context: path.resolve(__dirname, "assets/"),
            name: "[path][name].[ext]",
          },
          loader: "file-loader",
        },
        {
          test: /\.css$/,
          exclude: exclusions,
          use: [
            MiniCssExtractPlugin.loader,
            { loader: "css-loader" },
          ],
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
      new MiniCssExtractPlugin(),
    ],
  },
];
