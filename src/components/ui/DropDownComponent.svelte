<script lang="ts">
	import Arrow from '@/assets/kasa_arrow.png';

	export let title: string;
	let toggle: boolean = true;

	const handleToggle = () => {
		toggle = !toggle;
	};
</script>

<article>
	<div class="head-drop">
		<h2>
			{title}
		</h2>
		<button on:click={handleToggle}><img src={Arrow} alt="Drop" /></button>
	</div>
	{#if toggle}
		<div class="content-drop">
			<slot />
		</div>
	{/if}
</article>

<style>
	article {
		position: relative;
		width: 100%;
		margin-bottom: 30px;
	}

	.head-drop {
		position: absolute;
		z-index: 20;
		width: 100%;
		padding: 0 20px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		background-color: #ff6060;
		height: 52px;
		border-radius: 10px;
		color: #fff;
	}

	.head-drop h2 {
		font-weight: 500;
		font-size: 18px;
	}

	.content-drop {
		position: relative;
		top: 30px;
		width: 100%;
		padding: 40px 10px;
		background-color: #f7f7f7;
		border-radius: 10px;
		color: #ff6060;
		font-weight: 400;
		font-size: 18px;
	}

	button {
		background-color: transparent;
		border: 0;
		transform: rotate(90deg);
		cursor: pointer;
	}

	img {
		width: 15.56px;
		height: 26.4px;
	}
</style>
