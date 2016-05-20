import { Generators } from '../helpers/generators';
class User{
	constructor(){
		this.generate = new Generators();

		let user = this.generate.user();
		this.name = user.results[0].name.first+" "+user.results[0].name.last;
		this.email = user.results[0].email;
		this.id = user.results[0].id.value;
		this.thumb = user.results[0].picture.thumbnail;

	}

	get User(){
		return this.user;
	}

	generateUsers(n){
		var arr = [];
		for(let i=0; i<n ; i++){
			arr.push(this.generate.user());
		}
		return arr;
	}
}

export { User };