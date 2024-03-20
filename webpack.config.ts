import path from 'path';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import webpack, { Configuration as WebpackConfiguration } from 'webpack';
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}

import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';

const isDevelopment = process.env.NODE_ENV !== 'production';

const config: Configuration = {
  name: 'whack-a-mole-game',
  mode: isDevelopment ? 'development' : 'production',
  devtool: !isDevelopment ? 'hidden-source-map' : 'eval',
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.css', '.scss'],
    alias: {
      assets: path.resolve(__dirname, './src/assets'),
      components: path.resolve(__dirname, './src/components'),
      helpers: path.resolve(__dirname, './src/helpers'),
      pages: path.resolve(__dirname, './src/pages'),
      store: path.resolve(__dirname, './src/store'),
      styles: path.resolve(__dirname, './src/styles'),
      types: path.resolve(__dirname, './src/types'),
    },
  },
  stats: { children: true },
  entry: './src/index.tsx',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js',
    publicPath: './',
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
          env: {
            development: {
              plugins: [require.resolve('react-refresh/babel')],
            },
          },
        },
        exclude: path.join(__dirname, 'node_modules'),
      },
      {
        test: /\.(js|jsx|ts|tsx)$/,
        use: ['ts-loader'],
        exclude: path.join(__dirname, 'node_modules'),
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, { loader: 'css-loader', options: { url: false } }, , 'sass-loader'],
      },
      {
        test: /\.(jpg|jpeg|gif|png|svg|ico)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              url: false,
              name: '[name].[ext]?[hash]',
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: {
          loader: 'url-loader', // url 로더를 설정한다
          options: {
            name: '[name].[ext]?[hash]', // file-loader와 동일
            limit: 5000, // 5kb 미만 파일만 data url로 처리
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html',
      favicon: './public/favicon.ico',
    }),
    new ForkTsCheckerWebpackPlugin({
      async: false,
      // eslint: {
      //   files: "./src/**/*",
      // },
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['build/*'],
    }),
    new MiniCssExtractPlugin(),
    new webpack.EnvironmentPlugin({ NODE_ENV: isDevelopment ? 'development' : 'production' }),
  ],
  devServer: {
    historyApiFallback: true, // react router
    port: 3000,
    devMiddleware: { publicPath: '/' },
    static: { directory: path.resolve(__dirname) },
  },
};

if (isDevelopment && config.plugins) {
  config.plugins.push(new webpack.HotModuleReplacementPlugin());
  config.plugins.push(new ReactRefreshWebpackPlugin());
}

export default config;
