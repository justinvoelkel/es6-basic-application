var routes = {};

function route(path, template, callback){
	routes[path] = {template: template, controller: callback};
}

export { routes, route };