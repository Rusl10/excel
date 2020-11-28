import {Domlistener} from './Domlistener'


export class ExcelComponent extends Domlistener{
	constructor($root, options){
		super($root, options.listeners)
		this.name = options.name
		this.subscribe = options.subscribe
	}


	init(){
		this.initDOMListeners()
	}

	destroy(){
		this.removeDOMListeners()
	}

	isWatching(key){
		return this.subscribe.includes(key)
	}
}