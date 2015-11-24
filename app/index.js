'use strict';

var app = require('./src/app');

module.exports = function(assets, stats, cb) {
  var pages = {
    'index.html': app.page('main', 'common', assets)
  };
  return cb(null, pages);
};
