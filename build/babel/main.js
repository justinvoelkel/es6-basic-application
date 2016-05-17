'use strict';

var _app = require('./app');

var _routes = require('./routes');

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Setup the User Object
var user = {
	id: 1,
	name: 'Justin',
	email: 'justin@budgetdumpster.com'
};

//setup our routes
//Import all of the useful modules
(0, _routes.route)('/', 'home', function () {
	(0, _jquery2.default)('body').append('home page');
});

(0, _routes.route)('/test', 'test', function () {
	(0, _jquery2.default)('body').append('this is just a testing page');
});

var app = new _app.App(user, _routes.routes);
app.run();

// window.addEventListener('hashchange', app.route());