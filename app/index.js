'use strict';

var app = require('./src/app');
var store = require('./store');

module.exports = function(assets, stats, cb) {
  var pages = {
    'index.html': app.page('main', 'common', assets, store)
  };
  return cb(null, pages);
};
