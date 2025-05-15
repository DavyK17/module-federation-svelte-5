# Vite Module Federation with SvelteKit

I'm running a SvelteKit (Svelte 5) project and trying to expose a navigation bar to my other microservices. Builds for both the host and remote are completing successfully.

### Versions

- vite-plugin-federation: 1.4.0
- vite: 5.4.4

### Reproduction

https://github.com/DavyK17/module-federation-svelte-5

### Steps to reproduce

1. Open two terminals and move into each folder: `cd remote` (terminal 1) and `cd host` (terminal 2)
2. Install dependencies in both terminals with `npm install`
3. Use `npm run build && npm run preview` to build and serve the `remote` first, then the `host`
4. Visit the `remote` at http://localhost:4173 and the `host` at http://localhost:4174

### What is Expected?

1. The `remote` app to display a header with the text "This is my remote header"
2. The `host` app to display a header with the text "This is my host header"

### What is actually happening?

The `remote` header is rendered correctly. The `host` header is not rendered and the following error is logged to the browser's console:

```node
Uncaught (in promise) TypeError: Failed to resolve module specifier '${__federation_expose_./header}'
    at y (remoteEntry.js:1:1092)
    at ./header (remoteEntry.js:1:94)
    at Module.v (remoteEntry.js:1:1182)
    at 2.D2Y7IcEZ.js:1:1033
    at async 2.D2Y7IcEZ.js:1:1269
```
