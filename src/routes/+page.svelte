<script lang="ts">
	import MainTemplate from '@/templates/MainTemplate.svelte';
	import Header from '@/components/blocks/Header.svelte';
	import Banner from '@/components/blocks/Banner.svelte';
	import SectionTemplate from '@/templates/SectionTemplate.svelte';
	import ThumbCard from '@/components/ui/ThumbCard.svelte';
	import Footer from '@/components/blocks/Footer.svelte';

	import KasaLogoWhite from '@/assets/kasa_logo_white.svg';
	import KasaBanner from '@/assets/kasa_banner.png';

	import '@/style/main.css';
	import { onMount } from 'svelte';
	import { estates, getEstatesDatas } from '@/stores/estates';
	import type { EstateProps } from '@/types/datas';

	let estatesDatas: EstateProps[] = [];

	onMount(async () => {
		const datas = await getEstatesDatas();
		estates.set(datas);

		estates.subscribe((value) => {
			estatesDatas = value;
		});
	});
</script>

<svelte:head>
	<title>Kasa - Location immobilière</title>
</svelte:head>
<MainTemplate>
	<Header />
	<Banner src={KasaBanner} alt="Beautifull banner" title="Chez vous, partout et ailleurs" />
	<SectionTemplate>
		{#each estatesDatas as data (data.id)}
			<ThumbCard target={`/details/${data.id}`} src={data.cover} alt="testt" title={data.title} />
		{/each}
	</SectionTemplate>
	<Footer src={KasaLogoWhite} alt="Logo Kasa Blanc" footerText="2020 Kasa. All rights reserved" />
</MainTemplate>
