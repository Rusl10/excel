import {Domlistener} from './Domlistener'


export class ExcelComponent extends Domlistener{
	constructor($root, options){
		super($root, options.listeners)
		this.name = options.name
		this.subscribe = options.subscribe
		this.emitter = options.emitter
		this.store = options.store
		this.unsubscribers = []
	}

	$on(event, fn){
		const unsub = this.emitter.subscribe(event, fn)
		this.unsubscribers.push(unsub)
	}

	$emit(event, ...args){
		this.emitter.emit(event, ...args)
	}

	init(){
		this.initDOMListeners()
	}

	destroy(){
		this.removeDOMListeners()
		this.unsubscribers.forEach(unsub => unsub())
	}

	isWatching(key){
		return this.subscribe.includes(key)
	}
}