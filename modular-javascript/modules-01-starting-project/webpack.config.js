const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/app.js",
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "assets", "scripts"),
    publicPath: "assets/scripts/",
  },
  // devServer: {
  //   port: 3000,
  //   writeToDisk: true,
  //   proxy: {
  //     "/": "http://localhost:8080",
  //   },
  // },
};
