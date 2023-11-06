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

    const MAX_ALIAS_LENGTH = 30;

    $: new_alias = "";

    let alias: string = "";

    $: (() => {
        if (new_alias.length > MAX_ALIAS_LENGTH) {
            new_alias = new_alias.slice(0, MAX_ALIAS_LENGTH);
        }
    })();

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
    <div class="flex flex-col items-end justify-end">
        <input type="hidden" name="url_id" value={link?._id} > <!-- hidden field for url_id-->

        <PTag>
            <SpanTag pink_alert>Current Alias</SpanTag> : <SpanTag success>{link?.alias || "NO ALIAS IS WAS GIVEN"}</SpanTag>
        </PTag>

        <TextField
            type="text"
            placeholder="Change link alias"
            name="alias"
            sx="min-w-[100%]"
            sx_2="min-w-full"
            bind:value={new_alias}
        >
            <SpanTag
                sx="whitespace-nowrap w-fit"
                success={new_alias.trim().length <= MAX_ALIAS_LENGTH}
                pink_alert={new_alias.trim().length >= MAX_ALIAS_LENGTH}
            >
                {`${MAX_ALIAS_LENGTH - new_alias.trim().length}`}
            </SpanTag>
        </TextField>
    </div>
</ModalWrapper>
