<script lang="ts">
	export let title: string;
	export let location: string;
</script>

<div>
	<h1>{title}</h1>
	<p>{location}</p>
</div>

<style>
	div {
		width: 100%;
		margin-bottom: 20px;
		color: #ff6060;
		font-weight: 500;
	}

	h1 {
		font-size: 36px;
		line-height: 142.6%;
	}
	p {
		font-size: 18px;
	}
</style>
