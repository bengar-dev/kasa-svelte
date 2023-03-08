<script lang="ts">
	import type { EstateProps } from '@/types/datas';
	import AutorDetails from '../ui/AutorDetails.svelte';
	import BadgeDetails from '../ui/BadgeDetails.svelte';
	import RatingDetails from '../ui/RatingDetails.svelte';
	import TitleDetails from '../ui/TitleDetails.svelte';

	export let estateData: EstateProps;
</script>

<section>
	<div class="details-banner-left">
		<TitleDetails location={estateData?.location} title={estateData?.title} />
		<div class="estate-tags">
			{#if estateData}
				{#each estateData.tags as tag (tag)}
					<BadgeDetails value={tag} />
				{/each}
			{/if}
		</div>
	</div>
	<div class="details-banner-right">
		<AutorDetails name={estateData?.host?.name} picture={estateData?.host?.picture} />
		<RatingDetails rating={estateData?.rating} />
	</div>
</section>

<style>
	section {
		margin-top: 30px;
		width: 100%;
		display: flex;
		justify-content: space-between;
	}

	.details-banner-left {
		display: flex;
		flex-direction: column;
	}

	.details-banner-right {
		display: flex;
		flex-direction: column;
	}

	.estate-tags {
		display: flex;
		gap: 10px;
	}
</style>
