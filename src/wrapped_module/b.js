(function(){var a = require('module_a');

module.exports = function () {
  console.log('Call module A from module B');
  a();
  console.log('Module B called');
};modules['module_b'] = module.exports; module.exports = {};}());
