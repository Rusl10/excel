import {ExcelComponent} from "@/core/ExcelComponent"

export class Header extends ExcelComponent{
	static componentClass = 'excel__header'
	constructor($root, options){
		super($root, {
			listeners: ['input'],
			name: 'Header'
		})

	}

	toHTML(){
		return `
		<input type="text" class="input" value="Новая таблица"/>
		<div>
		<div class="button">
		<i class="material-icons">delete</i>
		</div>
		<div class="button">
		<i class="material-icons">exit_to_app</i>
		</div>
		</div>
		`
	}

	onInput(event){
		console.log('this.$root', this.$root)
		console.log('Header event', event)
	}
}