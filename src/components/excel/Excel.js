import {$} from "@/core/Dom"
import {StoreSubscriber} from "@/redux/StoreSubscriber"
import {Emitter} from "@core/Emitter"
export class Excel{
	constructor(el, options){
		this.$el = $(el)
		this.components = options.components
		this.store = options.store
		this.emitter = new Emitter()
		this.storeSubscriber = new StoreSubscriber(this.store)
	}

	getRoot(){
		const $root = $.create('div', 'excel')

		this.components = this.components.map(Component => {
			/* В объект componentOptions мы кладем инстанс эмиттера
			и стор. Передаем этот объект вторым параметром, при 
			создании инстанса класса компонента. В конструкторе компонента прокидываем эмиттер и стор
			, через super() в родительский класс ExcelComponent, где используем их в методах $dispatch(метод стора), 
			$on и $emit(методы для вызова методов класса Emitter)  - пока не готово */
			const componentOptions = {
				emitter: this.emitter,
				store: this.store
			}
			const componentWrapper = $.create('div', Component.componentClass)
			const component = new Component(componentWrapper, componentOptions)
			componentWrapper.html(component.toHTML())
			$root.append(componentWrapper)
			return component
		})
		return $root
	}	

	render(){
		this.$el.append(this.getRoot())

		this.storeSubscriber.subscribeComponents(this.components)

		this.components.forEach(component => component.init())
	}

	destroy(){
		this.components.forEach(component => component.destroy())
	}
}


