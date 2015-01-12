var a = require('a');

exports = function () {
  console.log('Call module A from module D');
  a();
  console.log('Module D called');
};
