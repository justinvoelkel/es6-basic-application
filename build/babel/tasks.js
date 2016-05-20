'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Task = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _generators = require('./helpers/generators');

var _user = require('./models/user');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Task = function () {
	function Task() {
		_classCallCheck(this, Task);

		this.generate = new _generators.Generators();
		this.num = this.generate.randomNum(15);
		this.filler = this.generateContent(5);

		this.task = {};
		this.task.prefix = ['advertainment', 'clickbait', 'disruptor', 'freemium', 'gamification', 'hyperlocal', 'ideation', 'netiquette', 'synergy'];
		this.task.suffix = ['modulator', 'generator', 'accenturator', 'accelerator', 'cannon', 'trebuchet', 'gobbler', 'chomper', 'distributationor', 'flange'];
		this.task.verbs = ['hork', 'spew', 'goose', 'synergize', 'complicate', 'meet about', 'meet about the meeting for', 'planning meeting for the meeting for'];
	}

	_createClass(Task, [{
		key: 'createTask',
		value: function createTask(users) {
			var prefix = this.task.prefix[this.generate.randomNum(this.task.prefix.length)];
			var suffix = this.task.suffix[this.generate.randomNum(this.task.suffix.length)];
			var verb = this.task.verbs[this.generate.randomNum(this.task.verbs.length)];
			var user = users[this.generate.randomNum(users.length)];
			var description = this.filler[this.generate.randomNum(this.filler.length)];
			var obj = {
				title: verb + " the " + prefix + " " + suffix,
				assignee: user.results[0].name.first + " " + user.results[0].name.last,
				thumb: user.results[0].picture.thumbnail,
				description: description
			};
			return obj;
		}
	}, {
		key: 'generateTasks',
		value: function generateTasks(users) {
			var arr = [];
			for (var i = 0; i < this.num; i++) {
				arr.push(this.createTask(users));
			}
			return arr;
		}
	}, {
		key: 'generateContent',
		value: function generateContent(n) {
			var arr = [];
			for (var i = 0; i < this.num; i++) {
				arr.push(this.generate.content(1));
			}
			return arr;
		}
	}, {
		key: 'all',
		get: function get() {
			return this.tasks;
		}
	}]);

	return Task;
}();

exports.Task = Task;