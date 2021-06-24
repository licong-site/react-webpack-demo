const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = (env) => {
  return {
    mode: "development",
    entry: {
      index: './src/index.js',
    },
    output: {
      path: path.resolve(__dirname, "dist/"),
    },
    devServer: {
      port: 8000,
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: "index.html",
        template: "./build/index.html",
      }),
    ],
    module: {
      rules: [
        {
          test: /\.(jsx|js)?$/,
          use: ["babel-loader"],
          include: path.resolve(__dirname, "src"),
        },
        {
          test: /\.less$/,
          use: ["style-loader", "css-loader", "postcss-loader", "less-loader"],
          sideEffects: true,
        }
      ],
    },
  };
};
