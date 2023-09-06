<script lang="ts">
	import HeaderText from "../components/atoms/HeaderText.svelte";
	import SpanTag from "../components/atoms/SpanTag.svelte";
	import Form from "../components/organisms/Form.svelte";
	import Navbar from "../components/organisms/Navbar.svelte";
    import { APP_NAME } from "../store/store";

	const toRegister = () => console.log("to register")

	let chances = "0" + 5
</script>

<svelte:head>
	<title>Home</title>
	<meta name="shortLink" content="url shortener app" />
</svelte:head>

<section class="home">
	<section
		class="flex flex-col gap-6 items-center justify-center w-full pt-[90px] md:pt-[130px]"
	>
		<HeaderText text="Shorten Your Looong URL : )" />

		<SpanTag>
			{$APP_NAME} is an efficient and easy-to-use URL shortening service that
			streamlines your online experience.
		</SpanTag>

		<!-- === Shortening form === -->
		<Form />

		<SpanTag>
			You can create <SpanTag pink_alert>{chances}</SpanTag> more links. <SpanTag is_link action={toRegister}>Register</SpanTag>
			Now to enjoy Unlimited usage
		</SpanTag>
	</section>
	<!-- home -->
</section>

<style lang="scss">
</style>
