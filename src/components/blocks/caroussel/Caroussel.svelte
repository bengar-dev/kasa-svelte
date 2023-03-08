<script lang="ts">
	import Arrow from '@/assets/kasa_arrow.png';

	export let pictures: string[];
	export let pic: string;
	export let alt: string;
	export let actual: number;
	export let length: number;

	const handleCarousselPic = (direction: 'next' | 'previous'): void => {
		const findIndexPic = pictures.findIndex((el) => el === pic);
		if (findIndexPic !== -1 && direction === 'previous') {
			const newIndex = findIndexPic - 1 >= 0 ? findIndexPic - 1 : pictures.length - 1;
			pic = pictures[newIndex];
			actual = newIndex + 1;
		}
		if (findIndexPic !== -1 && direction === 'next') {
			const newIndex = findIndexPic + 1 <= pictures.length - 1 ? findIndexPic + 1 : 0;
			pic = pictures[newIndex];
			actual = newIndex + 1;
		}
	};
</script>

<div class="caroussel-block">
	<img src={pic} {alt} />
	<div class="caroussel-buttons">
		<button on:click={() => handleCarousselPic('previous')}
			><img src={Arrow} alt="Left arrow" /></button
		>
		<button on:click={() => handleCarousselPic('next')}
			><img src={Arrow} alt="Right arrow" /></button
		>
	</div>
	<span class="caroussel-title">{actual}/{length}</span>
</div>

<style>
	.caroussel-block {
		position: relative;
		width: 100%;
		height: 415px;
		margin-top: 25px;
		border-radius: 25px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 25px;
	}

	.caroussel-buttons {
		position: absolute;
		width: 100%;
		display: flex;
		justify-content: space-between;
		padding: 0 25px;
	}

	button {
		background-color: transparent;
		border: 0;
		cursor: pointer;
	}

	button:nth-child(2) {
		transform: rotate(180deg);
	}

	.caroussel-title {
		position: absolute;
		z-index: 20;
		bottom: 25px;
		font-size: 18px;
		font-weight: 500;
		color: #fff;
	}
</style>
