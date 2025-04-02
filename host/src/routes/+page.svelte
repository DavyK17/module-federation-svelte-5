<script lang="ts">
	import { browser } from "$app/environment";

	let Header;
	if (browser)
		(async () => {
			// @ts-ignore
			const component = await import("remote/header");
			new component.default({ target: Header, props: { type: "host" } });
		})();
</script>

<header bind:this={Header}></header>
<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
