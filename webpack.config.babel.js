const path = require('path');
const webpack = require('webpack');

const production = process.env.NODE_ENV === "production";

const config = {
  entry: [
    './src/index.js',
  ],
  output: {
    path: path.join(__dirname, 'www'),
    filename: './bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel', 'eslint'],
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss',
      },
      { test: /\.svg/, loader: 'svg-url-loader' },
      {
        test: /\.(html|ico|jpe?g|png|gif)$/,
        loader: "file"
      },
    ],
  },
  resolve: {
    root: [
      path.join(__dirname, 'node_modules'),
    ],
  },
  devtool: 'source-map',
  devServer: {
    contentBase: "./www",
    colors: true,
    historyApiFallback: true,
    inline: true,
    port: 3002,
    host: "0.0.0.0",
  },
  postcss: function () {
    return [
      require('stylelint'),
      require("postcss-cssnext")({ browsers: "last 2 versions" })
    ];
  },
  plugins: [
    ...production && [
      new webpack.DefinePlugin({
        "process.env": {
          NODE_ENV: JSON.stringify("production")
        }
      }),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false,
        },
      }),
    ]

  ]
};
module.exports = config;
