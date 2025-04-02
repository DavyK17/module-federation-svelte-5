import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
	plugins: [
		sveltekit(),
		federation({
			name: "remote",
			filename: "remoteEntry.js",
			exposes: {
				"./header": "./src/lib/components/Header.svelte",
			},
		}),
	],
});
