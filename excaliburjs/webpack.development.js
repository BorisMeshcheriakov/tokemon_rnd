const { merge } = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    static: {
      directory: "example/",
    },
    compress: false,
    allowedHosts: "all",
    devMiddleware: {
      mimeTypeDefault: "text/xml",
      mimeTypes: {
        ".tmx": "text/xml",
        ".tsx": "text/xml",
        ".tx": "text/xml",
        ".tmj": "application/json",
        ".tsj": "application/json",
        ".tj": "application/json",
      },
    },
  },
});
