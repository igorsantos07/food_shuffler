<script>
	import { page } from '$app/stores'
</script>

<h1>Food Shuffler {$page.data.hasOwnProperty('subtitle')? ` - ${$page.data.subtitle}` : ''}</h1>

<nav>
<a href="/">Home</a> |
<a href="/options">Opções</a> |
	<a href="/option">Criar nova opção</a>
</nav>
<hr/>

<slot/>
