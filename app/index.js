'use strict';

var app = require('./src/app');
var store = require('./store');

module.exports = function(assets, stats, cb) {
  var pages = store.pages();
  var categories = store.categories();
  var endpoints = {};

  Object.keys(pages).forEach(function(pageId) {
    var page = pages[pageId];
    endpoints[(page.link || 'index') + '.html'] = app.page({
      page: pageId,
      layout: 'common',
      assets: assets,
      store: store
    });
  });

  Object.keys(categories).forEach(function(categoryId) {
    var category = categories[categoryId];
    endpoints[category.link + '.html'] = app.page({
      page: 'category',
      layout: 'common',
      assets: assets,
      store: store,
      category: categoryId
    });
  });

  return cb(null, endpoints);
};
