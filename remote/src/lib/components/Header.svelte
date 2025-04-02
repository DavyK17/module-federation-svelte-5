<script lang="ts">
	interface Props {
		[key: string]: any;
		type: "remote" | "host";
	}

	let { type, ...props }: Props = $props();
</script>

<header {...props}>
	<p>This is my {type} header</p>
</header>

<style>
	header {
		background-color: #f00;
		color: #fff;
		padding: 1rem;
	}

	p {
		font-size: 1.5rem;
		font-weight: bold;
	}
</style>
