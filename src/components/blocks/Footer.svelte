<script lang="ts">
	export let src: string;
	export let alt: string;
	export let footerText: string;
</script>

<footer>
	<img {src} {alt} />
	<p>&copy; {footerText}</p>
</footer>

<style>
	footer {
		margin-top: 43px;
		background-color: black;
		color: white;
		padding: 39px;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 30px;
	}

	img {
		margin-top: 30px;
	}

	p {
		font-size: 24px;
		font-weight: 500;
	}
</style>
