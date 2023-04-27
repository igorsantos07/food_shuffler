<script>
	import Option from "$lib/models/Option.js"
	import {error} from "@sveltejs/kit"
	export let data

	import { page } from '$app/stores'

	const optStore = Option.STORE()

	let option
	if ($page.params.id && Option.STORE.isAvailable()) {
		let options = []
		optStore.subscribe(v => options = v) //FIXME why this mess

		try {
			option = Option.find(options, $page.params.id)
		} catch {
			throw error(404)
		}
	} else {
		option = false
	}


	let name = ''
	let value =null

		$: name = option?.name || ''
		$: value = option?.value || null

	$: if (!option) {
		name = null
		value = null
	}

	function save() {
		const option = new Option({ name, value })
		optStore.update(list => {
			if (data.id) {
				list[data.id] = option
			} else {
				list.push(option)
			}
			return list
		})
		window.location = '/options'
	}
</script>

Nome: <input type="text" bind:value={name}/><br />
Valor: R$ <input type="number" bind:value/><br />
<button on:click={save}>Salvar</button>
