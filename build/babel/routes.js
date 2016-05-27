'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.route = exports.routes = undefined;

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _templates = require('./helpers/templates');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = {};

function route(path, template, callback) {
	routes[path] = { template: template, controller: callback };
}

//setup our routes with ultra basic routing and closures
route('/', 'home', function (payload) {

	(0, _jquery2.default)('#name').text(payload.user.name);
	(0, _jquery2.default)('#thumb').attr('src', payload.user.thumb);

	(0, _templates.render)('home.html', payload);
});

route('/tasks', 'tasks', function (payload) {

	(0, _jquery2.default)('#name').text(payload.user.name);
	(0, _jquery2.default)('#thumb').attr('src', payload.user.thumb);

	(0, _templates.render)('tasks.html', payload);

	(0, _jquery2.default)(function () {
		setTimeout(function () {
			(0, _jquery2.default)('#email.modal').fadeIn('slow');
		}, 5000);
	});
});

exports.routes = routes;
exports.route = route;