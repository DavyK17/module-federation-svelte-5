import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
	plugins: [
		sveltekit(),
		federation({
			name: "host",
			filename: "remoteEntry.js",
			remotes: { remote: `http://localhost:4173/assets/remoteEntry.js` },
		}),
	],
});
