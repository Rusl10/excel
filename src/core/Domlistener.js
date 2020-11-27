import {capitalize} from '@/core/utils'


export class Domlistener{
	constructor($root, listeners){

		if(!$root){
			throw new Error(`Error Domlistener`)
		}
		this.$root = $root
		this.listeners = listeners
	}

	initDOMListeners(){
		this.listeners.forEach(listener => {
			const method =  addOn(listener)
			if (!this[method]) {
				const name = this.name || ''
				throw new Error(`Method ${method} is not implemented in component ${name}`)
			}
			this[method] = this[method].bind(this)
			this.$root.on(listener, this[method])
		})
	}

	removeDOMListeners(){
		this.listeners.forEach(listener => {
			const method =  addOn(listener)
			this.$root.off(listener, this[method])
		})
	}
}

function addOn(listener){
	return 'on' + capitalize(listener)
}