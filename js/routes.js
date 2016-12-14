import $ from 'jquery';
import { render } from './helpers/templates';

var routes = {};

function route(path, template, callback){
    routes[path] = {template: template, controller: callback};
}

//setup our routes with ultra basic routing and closures
route('/', 'home', function(payload){
    
    $('#name').text(payload.user.name);
    $('#thumb').attr('src',payload.user.thumb);

    render('home.html', payload);    
    
});

route('/tasks', 'tasks', function(payload){

    $('#name').text(payload.user.name);
    $('#thumb').attr('src',payload.user.thumb);

    render('tasks.html', payload);

    $(function(){
        setTimeout(function(){
            $('#email.modal').fadeIn('slow');
        }, 5000);
    });

})

export { routes, route };