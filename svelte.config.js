// import adapter from '@sveltejs/adapter-auto';
// import vercel_adapter from '@sveltejs/adapter-vercel';
import netlify_adapter from "@sveltejs/adapter-netlify"
import { vitePreprocess } from '@sveltejs/kit/vite';
import { resolve } from 'path'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: netlify_adapter({
			runtime: "nodejs18.x", // specifies 'nodejs18.x' as runtime
			// if true, will create a Netlify Edge Function rather
			// than using standard Node-based functions
			edge: false,

			// if true, will split your app into multiple functions
			// instead of creating a single one for the entire app.
			// if `edge` is true, this option cannot be used
			split: false
		}),
		// adapter: vercel_adapter({
		// 	runtime: "nodejs18.x", // specifies 'nodejs18.x' as runtime
		// 	edge: false,
		// 	split: false
		// }),
		alias: {
			$db: "src/backend/db",
			$backend: "src/backend",
			$services: "src/services",
			$components: "src/components",
		},
	},
	vite: {
		optimizeDeps: {
			exclude: ['bcrypt']
		},
		ssr: {
			external: [
				'mock-aws-s3',
				'aws-sdk',
				'nock',
				'node-pre-gyp',

				'kerberos',
				'gcp-metadata',
				'snappy',
				'socks',
				'aws4',
				'mongodb-client-encryption',
				'@mongodb-js/zstd',
				'@aws-sdk/credential-providers',

				'node-gyp',

				'encoding',

				'/package.json',

				'bluebird'
			],
			// noExternal: ['@googlemaps/js-api-loader']
		},
		resolve: {
			alias: {
				$lib: resolve('src/lib'),
				$db: resolve("src/backend/db"),
				$backend: resolve("src/backend"),
				$services: resolve("src/services"),
				$components: resolve("src/components"),
			}
		}
	}
};

export default config;
