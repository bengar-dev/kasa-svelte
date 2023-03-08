<script lang="ts">
	import { onMount } from 'svelte';

	import { getEstateData } from '@/stores/estates';
	import type { EstateProps } from '@/types/datas';

	import MainTemplate from '@/templates/MainTemplate.svelte';
	import Caroussel from '@/components/blocks/caroussel/Caroussel.svelte';
	import DetailsBanner from '@/components/blocks/DetailsBanner.svelte';
	import Footer from '@/components/blocks/Footer.svelte';
	import Header from '@/components/blocks/Header.svelte';
	import DropDownComponent from '@/components/ui/DropDownComponent.svelte';

	import KasaLogoWhite from '@/assets/kasa_logo_white.svg';

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
		<section class="more-infos">
			<DropDownComponent title="Description">{estateData.description}</DropDownComponent>
			<DropDownComponent title="Equipments">
				<ul class="list-equipments">
					{#each estateData.equipments as equipment (equipment)}
						<li>
							{equipment}
						</li>
					{/each}
				</ul>
			</DropDownComponent>
		</section>
	{/if}
	<Footer src={KasaLogoWhite} alt="Logo Kasa Blanc" footerText="2020 Kasa. All rights reserved" />
</MainTemplate>

<style>
	.more-infos {
		margin-top: 30px;
		width: 100%;
		display: flex;
		gap: 70px;
	}

	.list-equipments {
		list-style: none;
	}
</style>
