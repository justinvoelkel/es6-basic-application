class User{
	constructor(name, id, email){
		this.name = name;
		this.id = id;
		this.email = email;
	}

	get User() {
		return [this.name, this.id, this.email];
	}
}

var user = new User('Justin', 1, 'justin@sloppyseconds.com');
console.log(user.User);

