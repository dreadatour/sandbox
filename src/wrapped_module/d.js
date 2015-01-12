(function(){var a = require('a');

module.exports = function () {
  console.log('Call module A from module D');
  a();
  console.log('Module D called');
}; modules['d'] = module.exports; module.exports = {};}());
