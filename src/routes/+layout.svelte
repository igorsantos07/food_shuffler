<script>
	import { base } from '$app/paths'
	import { page } from '$app/stores'
</script>

<h1>Food Shuffler {$page.data.hasOwnProperty('subtitle')? ` - ${$page.data.subtitle}` : ''}</h1>

<nav>
<a href={base}>Home</a> |
<a href="{base}/options">Opções</a> |
	<a href="{base}/option">Criar nova opção</a>
</nav>
<hr/>

<slot/>
