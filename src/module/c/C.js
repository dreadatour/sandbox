var a = require('a');
var b = require('b');

module.exports = function () {
  console.log('Call module B from module C');
  b();
  console.log('Module C called');
};
