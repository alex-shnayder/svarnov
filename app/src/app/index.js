'use strict';

var template = require('./template');

module.exports.page = function(page, layout, assets) {
  return template({
    layout: layout,
    page: page,
    assets: assets
  });
};
