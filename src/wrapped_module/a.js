(function () {module.exports = function () {
  console.log('Module A called');
};modules['a'] = module.exports; module.exports = null;}());
