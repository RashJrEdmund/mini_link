<script lang="ts">
	import "./styles.css";
	import "../TailwindCSS.svelte";
	import { COLOR_PALETTE_STORE, CURRENT_USER, LINK_STORE, THEME } from "../store/store";

	import Header from "./Header.svelte";
	import Navbar from "$components/navbar/Navbar.svelte";
	import Footer from "$components/footer/Footer.svelte";
 
    import toast, { Toaster } from "svelte-french-toast";
    import type { LayoutData } from "./$types";
    import { invalidateAll } from "$app/navigation";
    import FingerPrintProvider from "$components/fingerprint/FingerPrintProvider.svelte";

	export let data: LayoutData;

	$: current_user = data.current_user

	// $: user_urls = data.user_urls

	$: (() => {
		if (current_user) CURRENT_USER.update(() => current_user);
		// if (user_urls) LINK_STORE.set(user_urls);
	})()
</script>

<FingerPrintProvider>
	<Toaster />

	<div
		id="header_text_2"
		style={`
			background-color: ${$COLOR_PALETTE_STORE[$THEME].app_bg};
			color: ${$COLOR_PALETTE_STORE[$THEME].text};
		`}
		class="app min-h-[100vh] h-fit"
	>
		<div class="w-full mx-auto min-h-[100vh]">
			<Navbar {current_user} />
			<!-- <Header /> -->

			<main
				class="w-res_width mx-auto border-app_border pb-10 min-h-[60vh]"
			>
				<slot />
			</main>

			<!-- <Footer  {current_user} /> -->
		</div>
	</div>
</FingerPrintProvider>

<style>
</style>
