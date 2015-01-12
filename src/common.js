var require = function (name) {
  return modules[name];
};

var module = {
  exports: {}
};

var modules = {};
