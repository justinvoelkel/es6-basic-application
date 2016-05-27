import $ from 'jquery';

class Generators{

	content(p = 4){
		return $.ajax({
			type:'GET',
			url:'http://hipsterjesus.com/api/',
			data:{paras:p},
			async:false
		}).responseJSON;
	}

	user(){
		return $.ajax({
			type:'GET',
			url:'http://api.randomuser.me/?nat=us',
			async:false
		}).responseJSON;
	}

	randomNum(n = 100){
		return Math.floor((Math.random() * n));
	}

}

export { Generators };