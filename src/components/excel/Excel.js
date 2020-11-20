import {$} from "@/core/Dom"

export class Excel{
	constructor(el, options){
		this.$el = $(el)
		this.components = options.components
	}

	getRoot(){
		const $root = $.create('div', 'excel')

		this.components = this.components.map(Component => {
			/* В объект componentOptions мы кладем инстанс эмиттера
			и стор. Передаем этот объект вторым параметром, при 
			создании инстанса класса компонента. В конструкторе компонента прокидываем эмиттер и стор
			, через super() в родительский класс ExcelComponent, где используем их в методах $dispatch(метод стора), 
			$on и $emit(методы для вызова методов класса Emitter)  - пока не готово */
			const componentOptions = {}
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
	}
}


