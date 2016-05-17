//Import all of the useful modules
import { User } from './models/user';
import { Router } from './router';
import $ from 'jquery';

class App{

	constructor(user, routes){
		this.user = new User(user);
		this.router = new Router(routes);
	}

	run(){
		$(window).on('hashchange', this.router.dispatch());
		$(window).on('load', this.router.dispatch());
	}
}

export { App };