import adapter from '@sveltejs/adapter-auto';
import vercel_adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: vercel_adapter({
			runtime: "nodejs18.x" // specifies 'nodejs18.x' as runtime
		}),
		alias: {
			$db: "src/backend/db",
			$backend: "src/backend",
			$services: "src/services",
			$components: "src/components",
		}
	}
};

export default config;
