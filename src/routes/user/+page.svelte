<script lang="ts">
	import { navigating, page } from "$app/stores";
    import ATag from "$components/atoms/A_Tag.svelte";
    import Button from "$components/atoms/Button.svelte";
    import PTag from "$components/atoms/P_Tag.svelte";
    import SpanTag from "$components/atoms/SpanTag.svelte";
	import LineSeperator from "$components/atoms/LineSeperator.svelte";
    import { onMount } from "svelte";
    import type { ActionData } from "./$types";
    import { goto } from "$app/navigation";
    import { enhance } from "$app/forms"
    import ProfileSection from "$components/user_components/ProfileSection.svelte";
	import SettingsSection from "$components/user_components/SettingsSection.svelte";

	export let form: ActionData;

	export let data

	$: current_user = data.current_user || null;

	// $: () => {
	// 	if (!current_user) goto("/");
	// }

	onMount(() => {
		console.log("this user data in user route", data);
		if (!current_user) goto("/");
    });
</script>

<svelte:head>
	<title>User</title>
	<meta name="user" content="About current user" />
</svelte:head>

<div class="text-column">
	<!-- <SpanTag>
		<pre>
			{JSON.stringify({current_user}, null, 2)}
		</pre>
	</SpanTag> -->
	<LineSeperator header="Profile" />

	<ProfileSection {current_user} />

	<LineSeperator header="settings" />

	<SettingsSection />

	<LineSeperator sx="mt-4"/>

	<form
		use:enhance
		action="?/logout"
		method="post"
		class="mb-3"
	>
		<Button in_active type="submit" >log me out</Button>
	</form>

	<ATag path="/login">
		<Button>
			switch accounts
		</Button>
	</ATag>
</div>
