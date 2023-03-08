<script lang="ts">
	export let value: string;
</script>

<span>
	{value}
</span>

<style>
	span {
		padding: 3px 15px;
		background-color: #ff6060;
		color: #fff;
		border-radius: 10px;
		font-weight: 500;
		font-size: 14px;
		text-align: center;
	}

	span:hover {
		filter: brightness(85%);
	}
</style>
