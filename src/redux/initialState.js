import {defaultStyles, defaultTitle} from '@/constants'
import {storage} from '@/core/utils'
const defaultState = {
	colState: {},
	rowState: {},
	dataState: {}, // {'0:1': 'adadadafvs'},
	currentText: '',
	// Стили из тулбара для выбранных ячеек по id
	stylesState: {},
	/*текущий Объект стилей тулбара {
	textAlign: 'left',
	fontWeight: 'normal',
	fontStyle: 'normal',
	textDecoration: 'none'
	} к примеру*/
	currentStyles: defaultStyles,
	title: defaultTitle

}

const normalize = state => ({
	...state,
	currentStyles: defaultStyles,
	currentText: '',
	// headerState: ''
})


export const initialState = normalize(storage('excel-state')) ? storage('excel-state') : pushDefaultStateToLocalStorage()
console.log('initialState', initialState)
function pushDefaultStateToLocalStorage(){
	storage('excel-state', defaultState)
	return defaultState
}

// export const initialState = normalize(storage('excel-state')) ? storage('excel-state') : pushDefaultStateToLocalStorage()

// function pushDefaultStateToLocalStorage(){
// 	storage('excel-state', defaultState)
// 	return defaultState
// }