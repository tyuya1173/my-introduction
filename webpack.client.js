const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/client.tsx", // クライアントエントリーポイント
  output: {
    path: path.resolve(__dirname, "dist/public"),
    filename: "client.js",
    publicPath: "/"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};