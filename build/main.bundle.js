'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var User = function () {
	function User(name, id, email) {
		_classCallCheck(this, User);

		this.name = name;
		this.id = id;
		this.email = email;
	}

	_createClass(User, [{
		key: 'User',
		get: function get() {
			return [this.name, this.id, this.email];
		}
	}]);

	return User;
}();

var user = new User('Justin', 1, 'justin@sloppyseconds.com');
console.log(user.User);
