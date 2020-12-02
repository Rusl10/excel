import {ExcelComponent} from '@/core/ExcelComponent'
import {$} from "@/core/Dom"
export class Formula extends ExcelComponent{
	static componentClass = 'excel__formula'
	constructor($root, options){
		super($root, {
			listeners: ['input'],
			name: 'Formula',
			subscribe: ['currentText'],
			...options
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
		this.$emit('formula:input', $(event.target).text())
	}
}