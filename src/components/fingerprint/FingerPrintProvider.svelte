<script lang="ts">
  import { PUBLIC_FINGER_PRINT_API_KEY } from '$env/static/public';
	import { FpjsProvider, /* defaultEndpoint, defaultScriptUrlPattern */  } from '@fingerprintjs/fingerprintjs-pro-svelte'

	const options = {
		loadOptions: {
		apiKey: PUBLIC_FINGER_PRINT_API_KEY || "",
		// region: 'eu',
		// endpoint: ['metrics.yourwebsite.com', defaultEndpoint],
		// scriptUrlPattern: ['metrics.yourwebsite.com/agent-path', defaultScriptUrlPattern],
		},
  	};
</script>

<FpjsProvider {options}>
	<slot />
</FpjsProvider>