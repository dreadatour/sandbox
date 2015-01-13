(function () {module.exports = function () {
  console.log('Module A called');
};modules['module_a'] = module.exports; module.exports = {};}());
