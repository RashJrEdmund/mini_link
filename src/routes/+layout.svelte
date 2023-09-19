<script>
	import "./styles.css";
	import "../TailwindCSS.svelte";
	import { COLOR_PALETTE_STORE, THEME } from "../store/store";

    import { onMount } from "svelte";

	import Header from "./Header.svelte";
	import Navbar from "../components/navbar/Navbar.svelte";
	import Footer from "../components/footer/Footer.svelte";


    import toast, { Toaster } from "svelte-french-toast";

	onMount(async () => {
		fetch("http://localhost:5173/api/urls")
			.then((data) => data.json())
			.then((data) => console.log("this is data \n", data))
			.catch((err) => console.warn("and error occured", err));
	})
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
		<Navbar />
		<!-- <Header /> -->

		<main
			class="w-res_width mx-auto border-app_border pb-10 min-h-[60vh]"
		>
			<slot />
		</main>

		<Footer />
	</div>
</div>

<style>
</style>
