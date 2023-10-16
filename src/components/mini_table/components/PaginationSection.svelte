<script lang="ts">
    import Button from "$components/atoms/Button.svelte";
    import SpanTag from "$components/atoms/SpanTag.svelte";
    import { LINKS_PER_PAGE as LPP } from "$services/constants/tableConstansts";
    import { onMount } from "svelte";
    import { LINK_STORE } from "../../../store/store";

    export let user_urls: any[] = [];

    $: start = 0;
    $: end = user_urls.length >= LPP ? LPP : user_urls.length; // LINKS_PER_PAGE

    $: current_display = user_urls.slice(start, end);

    const handlePrev = () => {
        if (start <= 0) return;

        end = start;
        start -= LPP;
        current_display = user_urls.slice(start, end);

        LINK_STORE.set(current_display);
    }

    const handleNext = () => {
        if (end >= user_urls.length) return;

        start = end;
        end += LPP;
        current_display = user_urls.slice(start, end);

        LINK_STORE.set(current_display);
    }

    $: (() => {
        if (current_display) LINK_STORE.set(current_display);
    })()
</script>

{#if user_urls.length > 0}
    <section class=" w-full flex items-center justify-end mx-auto">
        <SpanTag sx="mx-1">
            showing {start} - {end <= user_urls.length ? end : user_urls.length} of {user_urls.length}
        </SpanTag>

        {#if user_urls.length > LPP}
            <Button
                in_active={start <= 0}
                sx="mr-1 cursor-pointer"
                action={handlePrev}
            >
                Prev
            </Button>

            <Button
                in_active={end >= user_urls.length}
                sx="cursor-pointer"
                action={handleNext}
            >
                Next
            </Button>
        {/if}
    </section>
{/if}