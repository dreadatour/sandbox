(function(){var a = require('module_a');
var b = require('module_b');

module.exports = function () {
  console.log('Call module B from module C');
  b();
  console.log('Module C called');
};modules['module_c'] = module.exports; module.exports = {};}());
