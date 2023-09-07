<script>
	import "./styles.css";

	import Header from "./Header.svelte";
	import "../TailwindCSS.svelte";
	import { COLOR_PALETTE_STORE, THEME } from "../store/store";
	import Navbar from "../components/navbar/Navbar.svelte";
	import Footer from "../components/footer/Footer.svelte";
</script>

<div
	id="header_text_2"
	style={`
		background-color: ${$COLOR_PALETTE_STORE[$THEME].app_bg};
		color: ${$COLOR_PALETTE_STORE[$THEME].text};
	`}
	class="app min-h-[100vh] h-fit"
>
	<div class="w-full mx-auto min-h-[100vh]">
		<Navbar />
		<!-- <Header /> -->

		<main
			class="w-res_width mx-auto border border-app_border pb-10 min-h-[60vh]"
		>
			<slot />
		</main>

		<Footer />
	</div>
</div>

<style>
</style>
