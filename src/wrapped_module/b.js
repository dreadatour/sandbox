(function(){var a = require('a');

module.exports = function () {
  console.log('Call module A from module B');
  a();
  console.log('Module B called');
};modules['b'] = module.exports; module.exports = {};}());
