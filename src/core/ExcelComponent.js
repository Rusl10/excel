import {Domlistener} from './Domlistener'


export class ExcelComponent extends Domlistener{
	constructor($root, options){
		super($root, options.listeners)
		this.name = options.name
	}


	init(){
		this.initDOMListeners()
	}

	destroy(){
		this.removeDOMListeners()
	}
}