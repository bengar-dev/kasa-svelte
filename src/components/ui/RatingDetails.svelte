<script lang="ts">
	import StarRed from '@/assets/starRed.svg';
	import StarGrey from '@/assets/starGray.svg';
	import { onMount } from 'svelte';

	export let rating: string;
	let ratingArray: number[] = [];
	let restArray: number[] = [];

	onMount(() => {
		for (let i = 0; i < Number(rating); i++) {
			ratingArray.push(i);
		}
		ratingArray = ratingArray;
		if (Number(rating) < 5) {
			for (let i = 0; i < 5 - Number(rating); i++) {
				restArray.push(i);
			}
			restArray = restArray;
		}
	});
</script>

{#each ratingArray as ra, i (i)}
	<img src={StarRed} alt="Etoile rouge" />
{/each}
{#each restArray as rest, i (`rest-${i}`)}
	<img src={StarGrey} alt="Etoile grise" />
{/each}
