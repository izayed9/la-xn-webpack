const path = require("path");
require("dotenv").config();
const nodeEnv = process.env.NODE_ENV || "development";

const config = {
  mode: nodeEnv,
  // Rest of your configuration...
  devtool: "source-map",
  devServer: {
    static: path.resolve(__dirname, "dist"),
  },
  module :{
    rules :[
        {
            test: /\.js$/, // Apply the loader to JavaScript files
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
            },
        },
          // Other rules for handling CSS, SCSS, etc.
    ]
  }
};

module.exports = config;