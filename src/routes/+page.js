import Option from "$lib/models/Option.js"

export function load() {

	let options = []
	Option.STORE().subscribe(v => options = v) //FIXME why this mess

	return {
		options
	}
}
