import { App } from './app';
import { routes } from './routes';
import { Load, HashChange } from './helpers/events';

//setup the application as our event listener callback
var callback = function(){
	var app = new App(routes);
	return app.run();
}

//on load run the app
var load = new Load(window, function(){
	localStorage.clear();
	return callback();
});
load.listen();

//when the hash changes (route change) run the app
var hashchange = new HashChange(window, callback);
hashchange.listen();
