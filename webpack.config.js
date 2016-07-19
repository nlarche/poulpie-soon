var path = require('path');

var config = {
  entry: [
    './src/index.js',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: './dist/bundle.js',
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
    contentBase: "./",
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
    }
};
module.exports = config;
