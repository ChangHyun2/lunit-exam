const webpack = require('webpack');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const paths = require('./paths.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CaseSensitivePathsWebpackPlugin = require('case-sensitive-paths-webpack-plugin');
const IMAGE_INLINE_SIZE_LIMIT = '10000';

// redirect cannot get issue
// https://dev.to/tylermcginnis/fixing-the-cannot-get-url-error-on-refresh-with-react-router-or-how-client-side-routers-work-4ho9
const devConfig = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  output: {
    path: paths.appBuild,
    filename: 'static/js/[name].js',
    publicPath: '/',
    chunkFilename: 'static/js/[name].chunk.js',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        // https://stackoverflow.com/a/52961891/12694425
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            // get the name. E.g. node_modules/packageName/not/this/part.js
            // or node_modules/packageName
            const packageName = module.context.match(
              /[\\/]node_modules[\\/](.*?)([\\/]|$)/
            )[1];

            // npm package names are URL-safe, but some servers don't like @ symbols
            return `npm.${packageName.replace('@', '')}`;
          },
        },
      },
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
            use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
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
      filename: 'index.html',
    }),
    new CaseSensitivePathsWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    hot:true,
    port: 5000,
    index: 'index.html',
    compress: true,
    stats: 'errors-only',
    historyApiFallback: true,
  },
  target: 'web',
};

module.exports = merge(baseConfig, devConfig);

// https://stackoverflow.com/questions/39066298/webpack-dev-server-hot-reload-not-working
