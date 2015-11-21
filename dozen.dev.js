'use strict';

module.exports = {
  input: {
    path: __dirname + '/app',
    file: 'app.js'
  },
  output: {
    path: __dirname + '/build',
    file: 'app.js'
  },
  server: {
    port: 3000,
    hotReload: true
  },
  scripts: {
    output: 'assets/client.js',
    compress: false,
    sourceMaps: true
  },
  templates: {
    compress: false
  },
  styles: {
    output: 'assets/styles.css',
    mode: 'extract',
    compress: false,
    modules: true,
    postcss: [
      require('postcss-initial')(),
      require('postcss-extend')(),
      require('autoprefixer')()
    ]
  },
  images: {
    output: 'assets/[name].[ext]',
    compress: false,
    makeProgressive: false
  },
  fonts: {
    output: 'assets/[name].[ext]'
  },
  processWebpackConfig: function(webpackConfig) {
    return webpackConfig;
  }
};
