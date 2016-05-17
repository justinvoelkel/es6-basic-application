'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.App = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); //Import all of the useful modules


var _user = require('./models/user');

var _router = require('./router');

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = function () {
	function App(user, routes) {
		_classCallCheck(this, App);

		this.user = new _user.User(user);
		this.router = new _router.Router(routes);
	}

	_createClass(App, [{
		key: 'run',
		value: function run() {
			(0, _jquery2.default)(window).on('hashchange', this.router.dispatch());
			(0, _jquery2.default)(window).on('load', this.router.dispatch());
		}
	}]);

	return App;
}();

exports.App = App;