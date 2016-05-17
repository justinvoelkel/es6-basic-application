
class Router{
	constructor(routes){
		this.routes = routes;
	}

	dispatch(route = null){
		var url = location.hash.slice(1) || '/';
        // Get route by url:
        if(this.routes[url]){
        	route = this.routes[url];
        };

        var test = new route.controller;
        console.log(route.controller);
	}
}

export { Router };