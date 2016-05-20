import $ from 'jquery';

var routes = {};

function route(path, template, callback){
	routes[path] = {template: template, controller: callback};
}

//setup our routes with ultra basic routing and closures
route('/', 'home', function(payload){
	
	$('#name').text(payload.user.name);
	$('#thumb').attr('src',payload.user.thumb);
	$('#main').empty();
});

route('/tasks', 'tasks', function(payload){
	$('#main').empty();
	$('#main').html('<h1>Tasks</h1>')
	$.each(payload.tasks, function(key, value){
		$('#main').append(
			'<h3>'+value.title+'</h3>'+
			'<p><img src="'+value.thumb+'"> '+value.assignee+'</p>'+
			'<p>'+value.description.text+'</p>'+
			'<hr/>'
		);
	});
})

export { routes, route };