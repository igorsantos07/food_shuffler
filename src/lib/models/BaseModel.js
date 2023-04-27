import {store} from "$lib/store.js"
import {error} from "@sveltejs/kit"

export default class BaseModel {

	static #INITIAL = []

	//TODO wtf why isn't this working
	// constructor(attrs) {
	// 	Object.assign(this, attrs)
	// }

	map(entries) {
		return entries.map(attrs => new this(attrs))
	}

	static STORE() {
		const initial = Object.hasOwn(this, '#INITIAL')? this.#INITIAL : []
		return store(this.name.toLowerCase(), initial)
	}

	static find(list, id) {
		if (id >= list.length) {
			console.log(id, list)
			return false
		}
		return list[id]
	}

}

BaseModel.STORE.isAvailable = () => typeof window != 'undefined'
