const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const cssnext = require('postcss-cssnext');
const values = require('postcss-modules-values');

exports.devServer = function(options) {
  return {
    devServer: {
      // Enable history API fallback so HTML5 History API based
      // routing works. This is a good default that will come
      // in handy in more complicated setups.
      historyApiFallback: true,

      // Unlike the cli flag, this doesn't set
      // HotModuleReplacementPlugin!
      hot: true,
      inline: true,
      
      // Display only errors to reduce the amount of output.
      stats: 'errors-only',

      // Parse host and port from env to allow customization.
      //
      // If you use Vagrant or Cloud9, set
      // host: options.host || '0.0.0.0';
      //
      // 0.0.0.0 is available to all network devices unlike default `localhost`.
      host: options.host,  // Defaults to `localhost`
      port: options.port   // Defaults to 8080
    }, plugins: [
      // Enable multi-pass compilation for enhanced performance in larger projects. Good default.
      new webpack.HotModuleReplacementPlugin({
        multiStep: true })
    ]
  };
};

exports.setupCSS = function(paths) {
  return {
    module: {
      loaders: [
        {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader'),
          include: paths
        }
      ]
    },
    plugins: [
      new ExtractTextPlugin('style.css', { allChunks: true }),
    ],
    // PostCSS plugins go here, make sure you required them up top!
    postcss: function () {
      return [cssnext, values];
    }
  };
};

exports.setupBabelReactES6 = function(paths) {
  return {
    module: {
      loaders: [
        {
          test: /\.js$/,
          loader: 'babel',
          query: {
            cacheDirectory: true,
            presets: ['react', 'es2015']
          },
          include: paths
        }
      ]
    }
  };
};
