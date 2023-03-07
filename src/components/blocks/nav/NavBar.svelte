<script>
	import NavLink from './NavLink.svelte';
</script>

<nav>
	<ul>
		<NavLink target="/" value="Accueil" />
		<NavLink target="/about" value="A Propos" />
	</ul>
</nav>

<style>
	ul {
		display: flex;
		gap: 57px;
		list-style: none;
	}
</style>
