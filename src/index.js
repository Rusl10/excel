import './scss/index.scss'
import {Header} from '@/components/header/Header'
import {Toolbar} from '@/components/toolbar/Toolbar'
import {Formula} from '@/components/formula/Formula'
import {Table} from '@/components/table/Table'
import {Excel} from '@/components/excel/Excel'
import {rootReducer} from '@/redux/rootReducer'
import {createStore} from '@/core/createStore'
import {initialState} from '@/redux/initialState'

debugger
const store = createStore(rootReducer, initialState)
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


excel.render()

