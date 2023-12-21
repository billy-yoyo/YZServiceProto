import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

const SERVICE_IDS = [["information", 1], ["2", 2], ["3", 3]];
const INFORMATION_SECTIONS = [
	"preArrival",
	"settleDown",
	"onCampus",
	"offCampus"
];

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
		paths: {
			base: process.env.NODE_ENV === "production" ? "/YZServiceProto" : "", 
		},
		prerender: {
			entries: SERVICE_IDS.map(([path, id]) => [
				`/survey/${id}`,
				`/service/${path}`,
			]).flat().concat([
				"/",
				`/home`,
				`/consent-form`,
				`/info`,
			]).concat(INFORMATION_SECTIONS.map(section => `/service/information/${section}`))
		}
	}
};

export default config;
