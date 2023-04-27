import Option from "$lib/models/Option.js"

export function load() {

	let options = Option.STORE().get()

	return {
		subtitle: 'Opções',
		options
	}
}
