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
    hotReload: true,
    middleware: [
      function(req, res, next) {
        req.url = decodeURI(req.url);
        next();
      },
      require('hygienist-middleware')('build')
    ]
  },
  scripts: {
    output: 'assets/client.js',
    compress: false,
    sourceMaps: false
  },
  templates: {
    compress: false
  },
  styles: {
    output: 'assets/styles.css',
    mode: 'extract',
    compress: false,
    modules: true,
    postcss: function(webpack) {
      return [
        require('postcss-import')({
          addDependencyTo: webpack,
          resolve: function(id, opts) {
            var rootPath = webpack.options.dozen.config.input.path;
            var rootAlias = webpack.options.dozen.config.resolve.rootAlias;

            opts.extensions = webpack.options.resolve.extensions;

            if (id.substr(0, rootAlias.length) === rootAlias) {
              id = require('path').join(rootPath, id.substr(rootAlias.length));
            }

            return require('resolve').sync(id, opts);
          }
        }),
        require('postcss-advanced-variables')(),
        require('postcss-color-function')(),
        require('postcss-extend')(),
        require('postcss-nested')(),
        require('postcss-calc')(),
        require('postcss-initial')(),
        require('autoprefixer')()
      ];
    }
  },
  images: {
    output: 'assets/[name].[ext]',
    compress: false,
    makeProgressive: false
  },
  fonts: {
    output: 'assets/[name].[ext]'
  },
  processWebpackConfig: function(webpackConfig, config) {
    webpackConfig.module.loaders.push({
      test: /\.json$/,
      loader: 'json'
    });
    webpackConfig.resolve.extensions.push('.json');

    return webpackConfig;
  }
};
