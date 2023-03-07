<script lang="ts">
	import { getEstateData } from '@/stores/estates';
	import type { EstateProps } from '@/types/datas';
	import { onMount } from 'svelte';

	export let data: { slug: string };
	export let estateData: EstateProps;

	onMount(async () => {
		const response = await getEstateData(data.slug);
		estateData = response;
	});
</script>

<h1>{estateData?.title}</h1>
