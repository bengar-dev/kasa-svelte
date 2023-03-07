<script lang="ts">
	export let src: string;
	export let alt: string;
	export let title: string;
	export let target: string;
</script>

<a href={target}>
	<article>
		<div class="gradient-background" />
		<img {src} {alt} />
		<h2>{title}</h2>
	</article>
</a>

<style>
	article {
		margin-top: 50px;
		position: relative;
		width: 340px;
		height: 340px;
		border-radius: 10px;
	}
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 10px;
	}
	h2 {
		width: 30%;
		position: absolute;
		z-index: 20;
		left: 20px;
		bottom: 20px;
		font-weight: 500;
		font-size: 18px;
		color: #fff;
	}

	.gradient-background {
		position: absolute;
		z-index: 10;
		width: 100%;
		height: 100%;
		background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%);
		border-radius: 10px;
		transition: all 200ms ease-in-out;
	}

	.gradient-background:hover {
		opacity: 0;
	}
</style>
