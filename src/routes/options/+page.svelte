<script>
	import FMT from "$lib/FMT.js"
	import Option from "$lib/models/Option.js"

	export let data

	function remove(id) {
		Option.STORE().update(list => {
			return list.filter((_, i) => i != id)
		})
	}
</script>

<table border="1" cellpadding="5" cellspacing="0">
	<thead style="background: #CCC">
	<tr>
		<th>Nome</th>
		<th>Valor</th>
		<th/>
	</tr>
	</thead>
	<tbody>
	{#if !data.options.length}
		<tr><td colspan="2">Whoops, empty</td></tr>
	{:else}
		{#each data.options as option, id}
			<tr>
				<th>{option.name}</th>
				<td>{FMT.money(option.value)}</td>
				<td><a href={`/option/${id}`}>✏️</a> | <button on:click={() => remove(id)}>🚮</button></td>
			</tr>
		{/each}
	{/if}
	</tbody>
</table>
