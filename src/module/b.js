var a = require('a');

exports = function () {
  console.log('Call module A from module B');
  a();
  console.log('Module B called');
};
