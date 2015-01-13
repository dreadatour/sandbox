(function(){var a = require('module_a');

module.exports = function () {
  console.log('Call module A from module D');
  a();
  console.log('Module D called');
};modules['module_d'] = module.exports; module.exports = {};}());
