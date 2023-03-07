<script lang="ts">
	export let target: string;
	export let value: string;
</script>

<li><a href={target}>{value}</a></li>

<style>
	a {
		text-decoration: none;
		color: #ff6060;
		font-weight: 500;
	}

	a:hover {
		text-decoration: underline;
		text-underline-offset: 4px;
	}
</style>
