import Option from "$lib/models/Option.js"
import {error} from "@sveltejs/kit"
import {writable} from "svelte/store"

export function load({ params }) {

	console.log({id:params.id})

	let option = false
	if (params.id && Option.STORE.isAvailable()) {
		let options = Option.STORE().get()

		try {
			option = Option.find(options, params.id)
		} catch {
			throw error(404)
		}
	} else {
		option = false
	}

	return {
		subtitle: params.id? 'Editar opção' : 'Nova opção',
		id: params.id,
		option
	}
}
