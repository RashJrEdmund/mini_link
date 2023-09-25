<script>
	import "./styles.css";
	import "../TailwindCSS.svelte";
	import { COLOR_PALETTE_STORE, THEME } from "../store/store";

    import { onMount } from "svelte";

	import Header from "./Header.svelte";
	import Navbar from "../components/navbar/Navbar.svelte";
	import Footer from "../components/footer/Footer.svelte";


    import toast, { Toaster } from "svelte-french-toast";

	export let data;

	const { current_user } = data;

	console.log("this current user", data);
</script>

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

		<Footer {current_user} />
	</div>
</div>

<style>
</style>
