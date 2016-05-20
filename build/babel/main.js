'use strict';

var _app = require('./app');

var _routes = require('./routes');

var _events = require('./helpers/events');

//setup the application as our event listener callback
var callback = function callback() {
	var app = new _app.App(_routes.routes);
	return app.run();
};

//on load run the app
var load = new _events.Load(window, function () {
	localStorage.clear();
	return callback();
});
load.listen();

//when the hash changes (route change) run the app
var hashchange = new _events.HashChange(window, callback);
hashchange.listen();