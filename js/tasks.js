import { Generators } from './helpers/generators';
import { User } from './models/user';

class Task{
	constructor(){
		this.generate = new Generators();
		this.num = this.generate.randomNum(15);
		this.filler = this.generateContent(5);

		this.task = {};
		this.task.prefix = ['advertainment','clickbait','disruptor','freemium','gamification','hyperlocal','ideation','netiquette','synergy'];
		this.task.suffix = ['modulator','generator','accenturator','accelerator','cannon','trebuchet','gobbler','chomper','monitizer','flange'];
		this.task.verbs = ['hork','spew','goose','synergize','complicate','meet about','meet about the meeting for','planning meeting for the meeting for'];
	}

	createTask(users){
		var prefix = this.task.prefix[this.generate.randomNum(this.task.prefix.length)];
		var suffix = this.task.suffix[this.generate.randomNum(this.task.suffix.length)];
		var verb = this.task.verbs[this.generate.randomNum(this.task.verbs.length)];
		var user = users[this.generate.randomNum(users.length)];
		var description = this.filler[this.generate.randomNum(this.filler.length)];
		var obj = {
			title: verb+" the "+prefix+" "+suffix,
			assignee:user.results[0].name.first+" "+user.results[0].name.last,
			thumb:user.results[0].picture.thumbnail,
			description: description
		};
		return obj;
	}

	get all(){
		return this.tasks;
	}

	generateTasks(users){
		var arr = [];
		for(let i=0; i<this.num ; i++){
			arr.push(this.createTask(users));
		}
		return arr;
	}

	generateContent(n){
		var arr = [];
		for(let i=0; i<this.num ; i++){
			arr.push(this.generate.content(1));
		}
		return arr;
	}

}

export { Task };