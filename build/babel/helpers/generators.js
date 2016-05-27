'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Generators = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Generators = function () {
	function Generators() {
		_classCallCheck(this, Generators);
	}

	_createClass(Generators, [{
		key: 'content',
		value: function content() {
			var p = arguments.length <= 0 || arguments[0] === undefined ? 4 : arguments[0];

			return _jquery2.default.ajax({
				type: 'GET',
				url: 'http://hipsterjesus.com/api/',
				data: { paras: p },
				async: false
			}).responseJSON;
		}
	}, {
		key: 'user',
		value: function user() {
			return _jquery2.default.ajax({
				type: 'GET',
				url: 'http://api.randomuser.me/?nat=us',
				async: false
			}).responseJSON;
		}
	}, {
		key: 'randomNum',
		value: function randomNum() {
			var n = arguments.length <= 0 || arguments[0] === undefined ? 100 : arguments[0];

			return Math.floor(Math.random() * n);
		}
	}]);

	return Generators;
}();

exports.Generators = Generators;