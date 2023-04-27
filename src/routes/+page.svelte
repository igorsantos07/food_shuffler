<script>
	export let data

	let selected = false

	//GCD functions taken from https://www.geeksforgeeks.org/how-to-calculate-greatest-common-divisor-of-two-or-more-numbers-arrays-in-javascript/
	function gcd(a, b) {
		if (a == 0) {
			return b
		}
		return gcd(b % a, a)
	}

	function gcdMany(list) {
		let result = list[0]
		for (let i = 1; i < list.length; i++) {
			result = gcd(list[i], result)
			if (result == 1) {
				return 1
			}
		}
		return result
	}

	function shuffle() {
		const values = data.options.map(opt => opt.value * 10)
		const factor = gcdMany(values) //probably 1 with monetary values, but... well, we tried!
		const pool = []
		data.options.forEach(opt => {
			const times = opt.value * factor
			for (let i = 0; i < times; i++) {
				pool.push(opt.name)
			}
		})
		const luckyOne = Math.round(Math.random() * pool.length)
		selected = pool[luckyOne]
	}
</script>

<button on:click={shuffle}>!! SHUFFLE !!</button>

{#if selected}
	<h2>Opção do dia: {selected}</h2>
{/if}
