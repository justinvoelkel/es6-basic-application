'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.App = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _user = require('./models/user');

var _router = require('./router');

var _tasks = require('./tasks');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = function () {
	function App(routes) {
		_classCallCheck(this, App);

		//construct the router with the existing routes
		this.router = new _router.Router(routes);

		//check for existing application state
		if (this.state) {

			var state = this.state;
			this.user = state.user;
			this.tasks = state.tasks;
			this.payload = {
				user: this.user,
				tasks: this.tasks
			};
		} else {
			//set up instance of user - logged in user
			this.user = new _user.User();

			//set up all other users
			var allUsers = this.user.generateUsers(5);

			//set up instance of task
			var task = new _tasks.Task();

			//set up all the listed tasks
			this.tasks = task.generateTasks(allUsers);

			this.payload = {
				user: this.user,
				tasks: this.tasks
			};

			this.state = this.payload;
		}
	}

	_createClass(App, [{
		key: 'run',
		value: function run() {
			//run the route to fill the partial
			this.route();
		}
	}, {
		key: 'route',
		value: function route() {
			this.router.dispatch(this.payload);
		}
	}, {
		key: 'state',
		set: function set(state) {
			localStorage.state = JSON.stringify(state);
		},
		get: function get() {
			if (localStorage.state) {
				return JSON.parse(localStorage.state);
			}
			return false;
		}
	}]);

	return App;
}();

exports.App = App;