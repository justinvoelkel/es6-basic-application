"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var User = function User(user) {
	_classCallCheck(this, User);

	this.id = user.id;
	this.name = user.name;
	this.email = user.email;
};

exports.User = User;