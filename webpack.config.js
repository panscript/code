"use strict";

const path = require("path");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

const SRC = "src";
const BUILD = "docs";

module.exports = {
  mode: "production",
  context: __dirname,
  entry: "./src/index.tsx",
  target: "web",
  output: {
    filename: "[name].bundle.js",
    chunkFilename: "[name].bundle.js",
    path: path.join(__dirname, BUILD),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /\.test\.tsx?$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              cacheDirectory: true,
            },
          },
          {
            loader: "ts-loader",
            options: {
              onlyCompileBundledFiles: true,
              transpileOnly: true,
            },
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: [/\.test\.js$/, /node_modules/],
        loader: "babel-loader",
        options: {
          cacheDirectory: true,
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.pan$/,
        exclude: /node_modules/,
        loader: "raw-loader",
      },
    ],
  },
  resolve: {
    modules: [path.join(__dirname, SRC), "node_modules"],
    extensions: [".tsx", ".ts", ".js"],
    fallback: {
      fs: false,
    },
  },
  plugins: [new ForkTsCheckerWebpackPlugin()],
  devtool: false,
};
