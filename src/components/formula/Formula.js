import {ExcelComponent} from '@/core/ExcelComponent'

export class Formula extends ExcelComponent{
	static componentClass = 'excel__formula'
	constructor($root, options){
		super()
	}

	toHTML(){
		return `
			<div class="info">fx</div>
          	<div class="input" contenteditable spellcheck="false"></div>
		`
	}
}