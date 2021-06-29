const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = (env) => {
  return {
    mode: 'development',
    resolve: {
      alias: {
        '@': path.join(__dirname, './src')
      },
      extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
    },
    entry: {
      index: './src/index.tsx',
    },
    output: {
      path: path.resolve(__dirname, 'dist/'),
    },
    devServer: {
      port: 8000,
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './build/index.html',
      }),
    ],
    module: {
      rules: [
        {
          test: /\.(jsx|js)?$/,
          use: ['babel-loader'],
          include: path.resolve(__dirname, 'src'),
        },
        {
          test: /\.(tsx|ts)?$/,
          use: ['ts-loader'],
          include: path.resolve(__dirname, 'src'),
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
          sideEffects: true,
        },
        {
          test: /\.less$/,
          use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader'],
          sideEffects: true,
        }
      ],
    },
  };
};
