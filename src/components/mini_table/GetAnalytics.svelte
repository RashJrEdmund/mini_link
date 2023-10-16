<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import ATag from "$components/atoms/A_Tag.svelte";
    import PTag from "$components/atoms/P_Tag.svelte";
    import SpanTag from "$components/atoms/SpanTag.svelte";

    export let sx: string = ""; // for extra styles

    const dispatch = createEventDispatcher();

    let retrieve_links: boolean = false;
</script>

<div class={`w-[min(500px,_97vw)] mx-auto ${sx}`}>
    <PTag>
        <SpanTag>
            <ATag is_link path="/login" sx="font-bold mr-[3px]">Login</ATag>
            to get and see analytics for the links you shorten.
        </SpanTag>
    </PTag>
</div>
