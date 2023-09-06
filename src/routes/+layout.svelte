<script>
	import "./styles.css";

	import Header from "./Header.svelte";
	import "../TailwindCSS.svelte";
	import { COLOR_PALETTE_STORE, THEME } from "../store/store";
	import Navbar from "../components/organisms/Navbar.svelte";
</script>

<div
	id="header_text_2"
	style={`
		background-color: ${$COLOR_PALETTE_STORE[$THEME].bg};
		color: ${$COLOR_PALETTE_STORE[$THEME].text};
	`}
	class="app text-orange-500 min-h-[100vh]"
>
	<div class="w-res_width mx-auto">
		<Navbar />
		<Header />

		<main class="w-full bg-orange-400">
			<slot />
		</main>
	</div>
</div>

<style>
</style>
