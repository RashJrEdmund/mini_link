<script lang="ts">
    import Button from "$components/atoms/Button.svelte";
    import PTag from "$components/atoms/P_Tag.svelte";
    import SpanTag from "$components/atoms/SpanTag.svelte";
    import { onMount } from "svelte";
    import { goto } from "$app/navigation";
    import { enhance } from "$app/forms";
    import { user_display_fields } from "$services/constants/user_page";
    import HeaderText from "$components/atoms/HeaderText.svelte";
    import DefaultProfilePic from "$lib/icons/default_profile.png";

	export let current_user: any;

	// $: () => {
	// 	if (!current_user) goto("/");
	// }

	let profile_display_info: { key: string, val: string }[] = [];

	onMount(() => {
		if (current_user) {
		
		   profile_display_info = user_display_fields.map(({ ui_key, api_res }) => ({
				key: ui_key,
				val: current_user[api_res]
		   }));
		} else goto("/");
    });
</script>

<div class="text-column">
	<div class="flex flex-col md:flex-row gap-2 items-start justify-between py-2 mx-auto mb-4">
		<div
			style={`background-image: url(${ current_user?.profile_pic.trim() || DefaultProfilePic})`}
			class="bg-slate-600 bg-center bg-cover w-full md:w-[min(100%,_400px)] h-[min(350px,_50vh)]"
		/>

		<div class="w-full md:w-[calc(100%_-_10px)] flex flex-col items-start gap-2 py-2">
			<HeaderText
				small
				text="User details"
			/>

			{#each profile_display_info as {key, val} (key)}
				<PTag sx="flex gap-1">
					<SpanTag sx="font-bold underline">{key + " :"}</SpanTag>
					<SpanTag>{val}</SpanTag>
				</PTag>
			{/each}
		</div>
	</div>
</div>
