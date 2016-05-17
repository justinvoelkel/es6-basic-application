"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var routes = {};

function route(path, template, callback) {
	routes[path] = { template: template, controller: callback };
}

exports.routes = routes;
exports.route = route;