import {ExcelComponent} from "@/core/ExcelComponent"

export class Table extends ExcelComponent{
	static componentClass = 'excel__table'
	constructor($root, options){
		super($root, {
      listeners: ['mousedown', 'keydown', 'input'],
      name: 'Table',
      ...options
    })
	}

  init(){
    super.init()
    this.$on('formula:input', text => console.log('text', text))
  }


	toHTML(){
		return `
          <div class="row">
            <div class="row-info"></div>
            <div class="row-data">
              <div class="column">A</div>
              <div class="column">B</div>
              <div class="column">C</div>
              <div class="column">A</div>
              <div class="column">B</div>
              <div class="column">C</div>
              <div class="column">A</div>
              <div class="column">B</div>
              <div class="column">C</div>
              <div class="column">A</div>
              <div class="column">B</div>
              <div class="column">C</div>
              <div class="column">A</div>
              <div class="column">B</div>
              <div class="column">C</div>
              <div class="column">A</div>
              <div class="column">B</div>
              <div class="column">C</div>
              <div class="column">A</div>
              <div class="column">B</div>
              <div class="column">C</div>
              <div class="column">A</div>
              <div class="column">B</div>
              <div class="column">C</div>
              <div class="column">A</div>
              <div class="column">B</div>
              <div class="column">C</div>
              <div class="column">A</div>
              <div class="column">B</div>
              <div class="column">C</div>
            </div>
          </div>
          <div class="row">
            <div class="row-info">1</div>
            <div class="row-data">
              <div class="cell selected" contenteditable="">A1</div>
              <div class="cell" contenteditable="">B2</div>
              <div class="cell" contenteditable="">C3</div>
            </div>
          </div>
          <div class="row">
            <div class="row-info">2</div>
            <div class="row-data">
              <div class="cell">A1</div>
              <div class="cell">B2</div>
              <div class="cell">C3</div>
            </div>
          </div>
		`
	}

  onMousedown(event){

  }

  onKeydown(event){

  }

  onInput(event){
    
  }
}