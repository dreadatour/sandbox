var require = function (name) {
  return modules[name];
};

var module = {
  exports: function (name, impl) {
    modules[name] = impl;
  }
};

var modules = {};
