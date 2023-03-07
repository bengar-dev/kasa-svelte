<script lang="ts">
	export let src: string;
	export let alt: string;
	export let title: string;
</script>

<div class="banner-content">
	<div class="darken-filter" />
	<img {src} {alt} />
	<h1>{title}</h1>
</div>

<style>
	.banner-content {
		margin-top: 70px;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
	}

	.darken-filter {
		width: 100%;
		height: 100%;
		position: absolute;
		z-index: 10;
		background: #000000;
		opacity: 0.3;
		border-radius: 25px;
	}

	img {
		width: 100%;
		height: 220px;
		object-fit: cover;
		border-radius: 25px;
	}

	h1 {
		position: absolute;
		z-index: 20;
		font-weight: 500;
		font-size: 48px;
		color: #fff;
	}
</style>
