'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Router = function () {
  function Router(routes) {
    _classCallCheck(this, Router);

    this.routes = routes;
  }

  _createClass(Router, [{
    key: 'dispatch',
    value: function dispatch() {
      var payload = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

      var url = location.hash.slice(1) || '/';
      // Get route by url:
      if (this.routes[url]) {
        var route = this.routes[url];
        //execute the controller
        return new route.controller(payload);
      }
    }
  }]);

  return Router;
}();

exports.Router = Router;