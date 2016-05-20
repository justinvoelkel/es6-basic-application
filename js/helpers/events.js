//concrete class - should never be invoked on it's own
class EventListener{
	constructor(element, ev, callback){
		this.element = element;
		this.ev = ev;
		this.callback = callback;
	}

	execute(){
		this.element.addEventListener(this.ev, this.callback);
	}
}

class Load extends EventListener{
	constructor(element, callback){
		super(element, 'load', callback);
	}

	listen(){
		super.execute();
	}
}

class HashChange extends EventListener{
	constructor(element, callback){
		super(element, 'hashchange', callback);
	}

	listen(){
		super.execute();
	}
}
//define our inherited classes as exports
//this allows us to keep our parent as a
//non-invokable concrete base class
export { Load, HashChange };