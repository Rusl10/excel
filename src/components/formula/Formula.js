import {ExcelComponent} from '@/core/ExcelComponent'

export class Formula extends ExcelComponent{
	static componentClass = 'excel__formula'
	constructor($root, options){
		super($root, {
			listeners: ['input'],
			name: 'Formula',
			subscribe: ['currentText']
		})
	}

	toHTML(){
		return `
			<div class="info">fx</div>
          	<div class="input" contenteditable spellcheck="false"></div>
		`
	}

	onInput(event){
		console.log('Formula event', event)
	}
}