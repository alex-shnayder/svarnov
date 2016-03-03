'use strict';

var fs = require('fs');
var Path = require('path');

module.exports.pages = function pages() {
  return require('./content/pages');
};

module.exports.categories = function categories() {
  return require('./content/categories');
};

module.exports.specialOffers = function specialOffers() {
  return require('./content/specialOffers');
};

module.exports.items = function items() {
  var categories = this.categories();
  return Object.keys(categories).reduce(function(items, categoryId) {
    var categoryPath = 'content/items/' + categoryId;

    items[categoryId] = [];

    try {
      items[categoryId] = fs.readdirSync(Path.join(__dirname, categoryPath)).map(function(itemId) {
        var item = require('./' + categoryPath + '/' + itemId + '/index');
        item.category = categories[categoryId];
        item.fullLink = item.category.link + '/' + item.link;
        return item;
      });
    } catch(err) {
      if (err.code !== 'ENOENT') {
        throw err;
      }
    }

    return items;
  }, {});
};
