<script lang="ts">
    import ATag from "$components/atoms/A_Tag.svelte";
    import Button from "$components/atoms/Button.svelte";
	import LogoutForm from "$components/modal_forms/LogoutForm.svelte"
	import LineSeperator from "$components/atoms/LineSeperator.svelte";
    import { onMount } from "svelte";
    import type { ActionData } from "./$types";
    import { goto } from "$app/navigation";
    import { enhance } from "$app/forms"
    import ProfileSection from "$components/user_components/ProfileSection.svelte";
	import SettingsSection from "$components/user_components/SettingsSection.svelte";
	import PageGaurd from "$components/gaurds/page_gaurd/PageGaurd.svelte";

	export let form: ActionData;

	export let data;

	let show_logout: boolean = false;

	$: current_user = data.current_user || null;

	$: (() => {
		if (form?.message === "LOGOUT") goto("/");
	})();

	const toggleLogout = () => {
		console.log(show_logout)
        show_logout = !show_logout;
    };

	onMount(() => {
		if (!current_user) goto("/");
    });
</script>

<PageGaurd bind:current_user >
	{#if show_logout}
		<LogoutForm bind:is_open={show_logout} />
	{/if}

	<div class="text-column">
		<LineSeperator header="Profile" />

		<ProfileSection {current_user} />

		<LineSeperator header="app settings" />

		<SettingsSection />

		<LineSeperator sx="mt-4"/>

		<div class="w-full flex flex-wrap items-center justify-end py-2 gap-2">
			<ATag path="/login" sx="ml-1">
				<Button>
					switch accounts
				</Button>
			</ATag>

			<!-- <form
				use:enhance
				action="?/logout"
				method="POST"
				class="ml-1"
			> -->
			<Button pure_black action={toggleLogout}>log me out</Button>

			<ATag sx="ml-1">
				<Button danger>
					Delete accounts
				</Button>
			</ATag>
		</div>
	</div>
</PageGaurd>

