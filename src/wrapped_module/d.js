(function(){var a = require('a');

module.exports('d', function () {
  console.log('Call module A from module D');
  a();
  console.log('Module D called');
});}());
