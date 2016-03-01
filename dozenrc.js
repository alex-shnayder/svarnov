'use strict';

var prod = (process.env.NODE_ENV === 'production');

module.exports = {
  hotReload: false,
  input: {
    path: __dirname + '/app',
    file: 'app.js'
  },
  output: {
    path: __dirname + '/build',
    file: prod ? null : 'app.js'
  },
  server: {
    port: prod ? 80 : 3000,
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
    compress: prod,
    sourceMaps: false
  },
  templates: {
    compress: prod
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
    output: prod ? 'assets/[hash].[ext]' : 'assets/[name].[ext]',
    compress: prod,
    makeProgressive: false
  },
  fonts: {
    output: prod ? 'assets/[hash].[ext]' : 'assets/[name].[ext]'
  }
};
