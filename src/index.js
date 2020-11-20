import './scss/index.scss'
import {Header} from '@/components/header/Header'
import {Toolbar} from '@/components/toolbar/Toolbar'
import {Formula} from '@/components/formula/Formula'
import {Table} from '@/components/table/Table'
import {Excel} from '@/components/excel/Excel'

const excel = new Excel('#app', {
	components: [
		Header,
		Formula,
		Toolbar,
		Table
	]
})


excel.render()

