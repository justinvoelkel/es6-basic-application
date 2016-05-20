'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.route = exports.routes = undefined;

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = {};

function route(path, template, callback) {
	routes[path] = { template: template, controller: callback };
}

//setup our routes with ultra basic routing and closures
route('/', 'home', function (payload) {

	(0, _jquery2.default)('#name').text(payload.user.name);
	(0, _jquery2.default)('#thumb').attr('src', payload.user.thumb);
	(0, _jquery2.default)('#main').empty();
});

route('/tasks', 'tasks', function (payload) {
	(0, _jquery2.default)('#main').empty();
	(0, _jquery2.default)('#main').html('<h1>Tasks</h1>');
	_jquery2.default.each(payload.tasks, function (key, value) {
		(0, _jquery2.default)('#main').append('<h3>' + value.title + '</h3>' + '<p><img src="' + value.thumb + '"> ' + value.assignee + '</p>' + '<p>' + value.description.text + '</p>' + '<hr/>');
	});
});

exports.routes = routes;
exports.route = route;