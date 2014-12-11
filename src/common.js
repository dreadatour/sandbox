var require = function (name) {
  return modules[name];
};

var module = {
  exports: null
};

var modules = {};
