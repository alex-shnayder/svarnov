'use strict';

var template = require('./template');

module.exports.page = function(locals) {
  return template(locals);
};
