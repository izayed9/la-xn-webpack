const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
require("dotenv").config();
const nodeEnv = process.env.NODE_ENV || "development";

const config = {
  mode: nodeEnv,
  // Rest of your configuration...
  devtool: "source-map",
  devServer: {
    static: path.resolve(__dirname, "dist"),
    hot:true,
  },
  resolve:{
    extensions: ['.js', '.jsx']
  },
  module :{
    rules :[
        {
            test: /\.jsx?$/, // Apply the loader to JavaScript files
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
            },
        },
          // Other rules for handling CSS, SCSS, etc.
        {
            test: /\.(s([ac]|c))ss$/, // Apply the loader to CSS or scss both files
            use: [
              MiniCssExtractPlugin.loader, // Extracts CSS into separate files
              "css-loader", // Translates CSS into CommonJS
              "postcss-loader",
              "sass-loader",
            ],
        },
    ]
  },
  plugins: [
    // MiniCssExtractPlugin to extract CSS into separate files
    new MiniCssExtractPlugin(),
    // Other plugins...
    
  ],
};

module.exports = config;