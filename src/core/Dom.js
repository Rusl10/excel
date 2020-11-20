class Dom {
	constructor(selector){
		this.$el = typeof selector === 'string'
		? document.querySelector(selector)
		: selector
	}

	html(html) {
		if (typeof html === 'string') {
			this.$el.innerHTML = html
			return this
		}
		return this.$el.outerHTML.trim()
	}

	clear() {
		this.html('')
		return this
	}

	on(eventType, callback) {
		this.$el.addEventListener(eventType, callback)
	}

	off(eventType, callback) {
		this.$el.removeEventListener(eventType, callback)
	}

	find(selector){
		return $(this.$el.querySelector(selector))
	}

	append(node) {
		if (node instanceof Dom) {
			node = node.$el
		}
		if (Element.prototype.append) {
			this.$el.append(node)
		} else {
			this.$el.appendChild(node)
		}
		return this
	}

	closest(selector) {
		return $(this.$el.closest(selector))
	}

	get data() {
		return this.$el.dataset
	}

	findAll(selector) {
		return this.$el.querySelectorAll(selector)
	}

	getCoords() {
		return this.$el.getBoundingClientRect()
	}

	css(styles = {}) {
		Object.keys(styles).forEach(key => this.$el.style[key] = styles[key])
	}

	getStyles(styles = []) {
		return styles.reduce((res, s) => {
		
			res[s] = this.$el.style[s]
			return res
		}, {})
	}

	addClass(className) {
		this.$el.classList.add(className)
		return this
	}

	removeClass(className) {
		this.$el.classList.remove(className)
		return this
	}

	id(parse) {
		if (parse) {
			const parsed = this.id().split(':')
			return {
				row: parseInt(parsed[0]),
				col: parseInt(parsed[1]) 
			}
		}
		return this.data.id
	}

	focus() {
		this.$el.focus()
		return this
	}

	text(text){
		if (typeof text === 'string') {
			this.$el.textContent = text

		}
		if (this.$el.tagName.toLowerCase() === 'input') {
			return this.$el.value.trim()
		}
		return this.$el.textContent.trim()
	}

}

export function $(selector) {
	return new Dom(selector)
}

$.create = (tagName, classes = '') => {
	const el = document.createElement(tagName)
	if (classes) {
		el.classList.add(classes)
	}
	return $(el)
}