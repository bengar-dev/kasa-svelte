<script lang="ts">
	import Caroussel from '@/components/blocks/caroussel/Caroussel.svelte';
	import DetailsBanner from '@/components/blocks/DetailsBanner.svelte';
	import Header from '@/components/blocks/Header.svelte';
	import { getEstateData } from '@/stores/estates';
	import MainTemplate from '@/templates/MainTemplate.svelte';
	import type { EstateProps } from '@/types/datas';
	import { onMount } from 'svelte';

	export let data: { slug: string };
	export let estateData: EstateProps;

	onMount(async () => {
		const response = await getEstateData(data.slug);
		estateData = response;
	});
</script>

<svelte:head>
	<title>Kasa - {estateData?.title}</title>
</svelte:head>
<MainTemplate>
	<Header />
	{#if estateData}
		<Caroussel
			pictures={estateData.pictures}
			pic={estateData.pictures[0]}
			alt={`Photo ${estateData.title}`}
			actual={1}
			length={estateData.pictures.length}
		/>
		<DetailsBanner {estateData} />
	{/if}
</MainTemplate>
