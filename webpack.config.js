const webpack = require('webpack');
const merge = require('webpack-merge');
const validate = require('webpack-validator');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const cssnext = require('postcss-cssnext');
const values = require('postcss-modules-values');

// Set up separate paths to our app and build directories
const path = require('path');
const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build')
};

// Shared configuration variables for both deveopment and production environments
const common = {
  entry: {
    app: PATHS.app
  },
  output: {
    path: PATHS.build,
    // for deployment to gh-pages:
    publicPath: '/',
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader'),
        include: PATHS.app
      },
      {
        test: /\.js$/,
        loader: 'babel',
        query: {
          cacheDirectory: true,
          presets: ['react', 'es2015', 'es2016', {plugins: ['transform-class-properties', 'transform-object-rest-spread']}]
        },
        include: PATHS.app
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ title: 'Cider Apple Data' }), // Title of the index.html page for our app
    new ExtractTextPlugin('style.css', { allChunks: true })
  ],
  postcss: function () {
    return [cssnext, values];
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};


// Detect how npm is run and branch based on that

var config;
// Production Mixins
if (process.env.npm_lifecycle_event === 'build') {
  config = merge(
    common,
    {
      devtool: 'source-map',
      plugins: [
        new webpack.DefinePlugin({'process.env' : {'NODE_ENV': "'production'"}}),
        new CleanWebpackPlugin([PATHS.build], {root: process.cwd()}),
        new webpack.optimize.UglifyJsPlugin({ compress: {warnings: false}})
      ]
    }
  );
} else {
  // Development Mixins
  config = merge(
    common,
    { devtool: 'eval-source-map',
      devServer: {
        historyApiFallback: true,
        //contentBase: './',
        hot: true,
        inline: true,
        stats: 'errors-only',
        // Customize host/port here if needed
        host: process.env.host,  // Defaults to `localhost`
        port: process.env.port   // Defaults to 8080
      }, plugins: [
        new webpack.HotModuleReplacementPlugin({
          multiStep: true })
      ]
    }
  );
}

module.exports = validate(config);
