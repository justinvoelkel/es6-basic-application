class Router{
    constructor(routes){
        this.routes = routes;
    }

    dispatch(payload = null){
        var url = location.hash.slice(1) || '/';
        // Get route by url:
        if(this.routes[url]){
            let route = this.routes[url];
            //execute the controller
            return new route.controller(payload);
        }
    }
}

export { Router };