<script lang="ts">
    import PTag from "$components/atoms/P_Tag.svelte";
    import SpanTag from "$components/atoms/SpanTag.svelte";
    import ModalWrapper from "$components/modal/ModalWrapper.svelte";
    import type { LINK_OBJ } from "$services/types";

    export let is_open: boolean = false;

    export let link: LINK_OBJ | null = null;

    const handleClose = () => {
        is_open = false
    }

    let delete_data: any[];

    $: (() => {
        if (link) {
            delete_data = [
                {
                    key: "Alias",
                    val: link?.alias || "NO ALIAS WAS GIVEN"
                },
                {
                    key: "Clicks",
                    val: link?.clicks || 0
                },
                {
                    key: "Short",
                    val: link?.short_link || ""
                },
                {
                    key: "Original",
                    val: link?.original || ""
                }
            ];
        }
    })();
</script>

<ModalWrapper
    method="POST"
    form_action="?/delete_url"
    title="Your are about to delete a URL"
    {handleClose}
    bind:is_open
>
    <div>
        <input type="hidden" name="url_id" value={link?._id} > <!-- hidden field for url_id-->

        {#if delete_data}
            {#each delete_data as {key, val} (key)}
                <PTag>
                    <SpanTag pink_alert>{key}</SpanTag> : <SpanTag success>{val}</SpanTag>
                </PTag>
            {/each}
        {/if}
    </div>
</ModalWrapper>
