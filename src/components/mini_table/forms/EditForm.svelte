<script lang="ts">
    import PTag from "$components/atoms/P_Tag.svelte";
    import SpanTag from "$components/atoms/SpanTag.svelte";
    import TextField from "$components/atoms/TextField.svelte";
    import ModalWrapper from "$components/modal/ModalWrapper.svelte";
    import { shorten_text } from "$services/functions/utils";
    import type { LINK_OBJ } from "$services/types";

    export let is_open: boolean = false;

    export let link: LINK_OBJ | null = null;

    const handleClose = () => {
        is_open = false
    }

    let alias: string = "";

    $: (() => {
        if (link) {
            alias = link?.alias || "";
        }
    })();
</script>

<ModalWrapper
    method="POST"
    form_action="?/edit_url"
    title="Edit Url"
    {handleClose}
    bind:is_open
>
    <div>
        <input type="hidden" name="url_id" value={link?._id} > <!-- hidden field for url_id-->

        <PTag>
            <SpanTag pink_alert>Current Alias</SpanTag> : <SpanTag success>{link?.alias || "NO IS WAS GIVEN"}</SpanTag>
        </PTag>

        <TextField
            type="text"
            placeholder="Change link alias"
            name="alias"
        />
    </div>
</ModalWrapper>
