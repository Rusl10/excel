export class Emitter{
	constructor(){
		this.listeners = {}
	}

	emit(event, ...args){
		/* Проверяем, есть ли подписчики на
		данное передаваемое событие - есть ли такой ключ в объекте 
		this.listeners с массивом внутри */
		if (!Array.isArray(this.listeners[event])) {
			return
		}
		this.listeners[event].forEach(listener => listener(...args))
	}

	subscribe(event, fn){
		this.listeners[event] = this.listeners[event] || []
		this.listeners[event].push(fn)
		return () => {
			this.listeners[event] = this.listeners[event].filter(listener => listener !== fn)
		}
	}
}