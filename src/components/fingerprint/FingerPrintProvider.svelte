<script lang="ts">
	import { FpjsProvider, /* defaultEndpoint, defaultScriptUrlPattern */  } from '@fingerprintjs/fingerprintjs-pro-svelte'

	const options = {
		loadOptions: {
		apiKey: "JnIYsUgDEHYHpfZkntGc",
		// region: 'eu',
		// endpoint: ['metrics.yourwebsite.com', defaultEndpoint],
		// scriptUrlPattern: ['metrics.yourwebsite.com/agent-path', defaultScriptUrlPattern],
		},
  	};
</script>

<FpjsProvider {options}>
	<slot />
</FpjsProvider>