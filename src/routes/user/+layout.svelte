<script lang="ts">
    import { goto } from "$app/navigation";
	import { page } from "$app/stores";
    import PTag from "$components/atoms/P_Tag.svelte";
    import { onMount } from "svelte";
    import type { ActionData } from "./$types";
    import { COLOR_PALETTE_STORE, THEME } from "../../store/store";

	const current_user = $page.data.current_user || null;

    onMount(() => {
        // if (!current_user) goto("/")
    })
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="text-column">
    {#if current_user}
        <slot />
    {:else}
        <div
            style={`background-color: ${$COLOR_PALETTE_STORE[$THEME].bg}`}
            class="w-[min(97vw,_500px)] fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded flex items-center justify-center h-[min(60vh,_300px)]"
        >
            <PTag>Page Loadding...</PTag>
        </div>
    {/if}
</div>