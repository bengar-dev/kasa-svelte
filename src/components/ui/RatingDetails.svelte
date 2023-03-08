<script lang="ts">
	import { onMount } from 'svelte';

	export let rating: string;
	let stars: number;

	onMount(() => {
		stars = Number(rating);
	});

	const handleRatingsStars = (stars: number) => {};
</script>

<span>{stars}</span>
