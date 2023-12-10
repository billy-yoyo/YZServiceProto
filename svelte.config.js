import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

const APP_ROUTE = "yzproto";
const SERVICE_IDS = [1, 2, 3];

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			precompress: false,
			strict: true,
		}),
		prerender: {
			entries: SERVICE_IDS.map(sid => [
				`/${APP_ROUTE}/survey/${sid}`,
				`/${APP_ROUTE}/service/${sid}`,
			]).flat().concat([
				"/",
				`/${APP_ROUTE}`,
				`/${APP_ROUTE}/home`,
				`/${APP_ROUTE}/consent-form`,
				`/${APP_ROUTE}/info`,
			])
		}
	}
};

export default config;
