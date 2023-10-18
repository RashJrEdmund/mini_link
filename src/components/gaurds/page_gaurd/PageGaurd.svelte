<script lang="ts">
    import PTag from "$components/atoms/P_Tag.svelte";
    import DivTag from "$components/atoms/Div_Tag.svelte";
    import { onMount } from "svelte";
    import { goto } from "$app/navigation";

	export let current_user: any;

	onMount(() => {
		console.clear();
		if (!current_user) goto("/");
    });
</script>

{#if current_user}
	<slot />
{:else}
	<DivTag
		sx="w-[min(97vw,_500px)] fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded flex items-center justify-center h-[min(60vh,_300px)]"
	>
		<PTag>Page Loadding...</PTag>
	</DivTag>
{/if}
