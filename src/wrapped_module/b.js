(function(){var a = require('a');

module.exports('b', function () {
  console.log('Call module A from module B');
  a();
  console.log('Module B called');
})}());
