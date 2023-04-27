//based on https://svelte.dev/repl/e6c0e3db7d064d43a7e4559b2862e1f7?version=3.48.0

import { writable, get } from 'svelte/store'

export function store(name, initial) {
	const storable = writable(initial)
	const { subscribe, set, update } = storable
	const IS_BROWSER = (typeof window != 'undefined')

	//initialize localStorage shenanigans
	let STRG = {}
	if (IS_BROWSER) {
		if (localStorage.STRG == undefined) {
			localStorage.STRG = '{}'
		} else {
			STRG = JSON.parse(localStorage.STRG)
			if (STRG.hasOwnProperty(name)) {
				set(STRG[name])
			}
		}
	}

	//prepare the storage function
	const save = newValue => {
		if (!IS_BROWSER) {
			return
		}
		STRG[name] = newValue
		localStorage.STRG = JSON.stringify(STRG)
	}

	//run that storage function whenever the Svelte Store value gets changed
	const unsubscribe = subscribe(save)

	return {
		get: () => get(storable),
		//pass on the Svelte Store update method - the subscription above will take care of the localStorage side
		update,
		//pass on an option to subscribe further to value changes
		subscribe,
		//used on svelte.onDestroy() calls,but without the meaning of DESTROYING THE DATASET
		off: unsubscribe,
		//whenever the value needs to be changed, we need to replace it both on Svelte and localStorage
		set: value => {
			set(value)
			save(value)
		},
	}
}
