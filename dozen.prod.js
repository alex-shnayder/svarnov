'use strict';

module.exports = {
  input: {
    path: __dirname + '/app',
    file: 'app.js'
  },
  output: {
    path: __dirname + '/build',
    file: null
  },
  server: {
    port: 3000,
    hotReload: false
  },
  scripts: {
    output: 'assets/client.js',
    compress: true,
    sourceMaps: false
  },
  templates: {
    compress: true
  },
  styles: {
    output: 'assets/styles.css',
    mode: 'extract',
    compress: true
    modules: true,
    postcss: [
      require('postcss-initial')(),
      require('postcss-extend')(),
      require('autoprefixer')()
    ]
  },
  images: {
    output: 'assets/[hash].[ext]',
    compress: true,
    makeProgressive: false
  },
  fonts: {
    output: 'assets/[hash].[ext]'
  },
  processWebpackConfig: function(webpackConfig) {
    return webpackConfig;
  }
};
