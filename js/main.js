//Import all of the useful modules
import { App } from './app';
import { route, routes } from './routes';
import $ from 'jquery';

//Setup the User Object
let user = {
	id:1,
	name:'Justin',
	email:'justin@budgetdumpster.com'
};

//setup our routes
route('/', 'home', function(){
	$('body').append('home page');
});

route('/test', 'test', function(){
	$('body').append('this is just a testing page');
})

var app = new App(user, routes);
app.run();

// window.addEventListener('hashchange', app.route());
