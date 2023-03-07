<script>
	import LogoKasa from '@/assets/kasa_logo.svg';
	import NavBar from './nav/NavBar.svelte';
</script>

<header>
	<img src={LogoKasa} alt="Logo kasa" />
	<NavBar />
</header>

<style>
	header {
		margin-top: 40px;
		width: 100%;
		display: flex;
		justify-content: space-between;
	}

	img {
		width: auto;
		height: 63px;
	}
</style>
