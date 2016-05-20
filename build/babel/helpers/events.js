'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//concrete class - should never be invoked on it's own

var EventListener = function () {
	function EventListener(element, ev, callback) {
		_classCallCheck(this, EventListener);

		this.element = element;
		this.ev = ev;
		this.callback = callback;
	}

	_createClass(EventListener, [{
		key: 'execute',
		value: function execute() {
			this.element.addEventListener(this.ev, this.callback);
		}
	}]);

	return EventListener;
}();

var Load = function (_EventListener) {
	_inherits(Load, _EventListener);

	function Load(element, callback) {
		_classCallCheck(this, Load);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Load).call(this, element, 'load', callback));
	}

	_createClass(Load, [{
		key: 'listen',
		value: function listen() {
			_get(Object.getPrototypeOf(Load.prototype), 'execute', this).call(this);
		}
	}]);

	return Load;
}(EventListener);

var HashChange = function (_EventListener2) {
	_inherits(HashChange, _EventListener2);

	function HashChange(element, callback) {
		_classCallCheck(this, HashChange);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(HashChange).call(this, element, 'hashchange', callback));
	}

	_createClass(HashChange, [{
		key: 'listen',
		value: function listen() {
			_get(Object.getPrototypeOf(HashChange.prototype), 'execute', this).call(this);
		}
	}]);

	return HashChange;
}(EventListener);
//define our inherited classes as exports
//this allows us to keep our parent as a
//non-invokable concrete base class


exports.Load = Load;
exports.HashChange = HashChange;