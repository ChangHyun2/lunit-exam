const baseConfig = require('./webpack.base.js');
const { merge } = require('webpack-merge');
const paths = require('./paths.js');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const IMAGE_INLINE_SIZE_LIMIT = '10000';

// redirect cannot get issue
// https://dev.to/tylermcginnis/fixing-the-cannot-get-url-error-on-refresh-with-react-router-or-how-client-side-routers-work-4ho9
const devConfig = {
  mode: 'production',
  devtool: 'source-map',
  output: {
    path: paths.appDist,
    filename: 'static/js/[name].[contenthash:8].js',
    chunkFilename: 'static/js/[name].[contenthash:8].chunk.js',
    publicPath: paths.publicPath,
  },
  optimization: {
    minimize: true, // prod,
    minimizer: [
      // prod에서만 적용됨
      new TerserWebpackPlugin({
        terserOptions: {
          parse: {
            // ecma 8만 minification 적용
            ecma: 8,
          },
          compress: {
            ecma: 5,
            warnings: false, // Uglify issue : breaking valid code
            comparisons: false, // Terser issue : breaking valid code
            inline: 2,
          },
        },
      }),
    ],
    splitChunks: {
      chunks: 'all',
      name: false,
    },
  },
  module: {
    rules: [
      {
        oneOf: [
          // 리스트에서 일치하는 항목이 발견되면 곧바로 탐색 종료. fallback으로 로드 리스트 마지막에 위치하는 "file" 로더를 사용
          {
            test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
            use: {
              loader: 'url-loader',
              options: {
                limit: IMAGE_INLINE_SIZE_LIMIT,
                name: 'static/media/[name].[hash:8].[ext]',
              },
            },
          },
          {
            test: /\.(js|ts|tsx)$/,
            include: paths.appSrc,
            use: {
              loader: 'babel-loader',
              options: {
                cacheDirectory: true,
                cacheCompression: false,
              },
            },
          },
          {
            // node_modules 중 최신 문법으로 작성된 모듈만 트랜스파일링
            test: /\.(js|mjs)$/,
            exclude: /@babel(?:\/|\\{1,2})runtime/,
            use: {
              loader: 'babel-loader',
              options: {
                cacheDirectory: true,
                cacheCompression: false,
              },
            },
          },
          {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader'],
          },
          {
            loader: require.resolve('file-loader'),
            exclude: [/\.(js|mjs|jsx|ts|tsx)$/, /\.html$/, /\.json$/],
            options: {
              name: 'static/media/[name].[hash:8].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: paths.appHtml,
      filename: 'public/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),
    new MiniCssExtractPlugin({
      filename: 'static/css/[name].[contenthash:8].css',
      chunkFilename: 'static/css/[name].[contenthash:8].chunk.css',
    }),
    new BundleAnalyzerPlugin(),
  ],
};

module.exports = merge(baseConfig, devConfig);
