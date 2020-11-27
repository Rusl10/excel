import './scss/index.scss'
import {Header} from '@/components/header/Header'
import {Toolbar} from '@/components/toolbar/Toolbar'
import {Formula} from '@/components/formula/Formula'
import {Table} from '@/components/table/Table'
import {Excel} from '@/components/excel/Excel'
import {rootReducer} from '@/redux/rootReducer'
import {createStore} from '@/core/createStore'
import {initialState} from '@/redux/initialState'
import {storage} from '@/core/utils'


const store = createStore(rootReducer, initialState)

store.subscribe(state => {
	storage('excel-state', state)
})

console.log('store', store)
window.store = store

const excel = new Excel('#app', {
	components: [
		Header,
		Formula,
		Toolbar,
		Table
	]
})

window.excel = excel

excel.render()

