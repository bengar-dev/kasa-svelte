<script lang="ts">
	export let name: string;
	export let picture: string;
</script>

<div class="autor-details">
	<span>{name}</span>
	<div>
		<img src={picture} alt={`avatar ${name}`} />
	</div>
</div>

<style>
	.autor-details {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 200px;
	}

	span {
		font-weight: 500;
		font-size: 18px;
		color: #ff6060;
		text-align: right;
	}

	div {
		width: max-content;
		display: flex;
		justify-content: flex-end;
	}

	img {
		width: 64px;
		height: 64px;
		object-fit: cover;
		border-radius: 50%;
	}
</style>
