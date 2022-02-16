const MiniCSsExtractPlugin = require("mini-css-extract-plugin");
let mode = "development";

if (process.env.NODE_ENV === "production") {
  mode = "production";
}

module.exports = {
  mode: mode,
  // entry: "./src/index.js",
  output: {
    assetModuleFilename: "images/[hash][ext][query]",
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset",
        // parser: {
        //   dataUrlCondition: {
        //     maxSize: 30 * 1024, // 30kb
        //   },
        // },
      },
      {
        test: /\.s?css$/i,
        use: [
          MiniCSsExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins: [new MiniCSsExtractPlugin()],
  devtool: "source-map",
  devServer: {
    static: "./dist",
    // hot: true
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
};
