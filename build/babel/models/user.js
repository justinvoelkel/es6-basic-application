"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.User = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _generators = require("../helpers/generators");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var User = function () {
	function User() {
		_classCallCheck(this, User);

		this.generate = new _generators.Generators();

		var user = this.generate.user();
		this.name = user.results[0].name.first + " " + user.results[0].name.last;
		this.email = user.results[0].email;
		this.id = user.results[0].id.value;
		this.thumb = user.results[0].picture.thumbnail;
	}

	_createClass(User, [{
		key: "generateUsers",
		value: function generateUsers(n) {
			var arr = [];
			for (var i = 0; i < n; i++) {
				arr.push(this.generate.user());
			}
			return arr;
		}
	}, {
		key: "User",
		get: function get() {
			return this.user;
		}
	}]);

	return User;
}();

exports.User = User;