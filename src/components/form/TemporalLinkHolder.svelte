<script lang="ts">
    import CopyIcon from "$lib/icons/copy_icon.svg";
    import DivTag from "$components/atoms/Div_Tag.svelte";
    import ImgTag from "$components/atoms/Img_Tag.svelte";
    import PTag from "$components/atoms/P_Tag.svelte";
    import type { LINK_OBJ } from "$services/types";
    import { copyLink } from "$services/functions/utils";
    import SpanTag from "$components/atoms/SpanTag.svelte";

    export let temp_link: LINK_OBJ | null;
</script>

<DivTag
    sx="min-w-[min(340px,_97vw)] min-h-[2.5rem] rounded flex items-center justify-between p-2"
>
    <PTag>
        <SpanTag success={!!temp_link?.short_link}>{temp_link?.short_link ?? "shorten and copy here"}</SpanTag>
    </PTag>

    {#if temp_link?.short_link}
        <ImgTag
            action={() => copyLink(temp_link?.short_link ?? "")}
            src={CopyIcon}
            alt="copy icon"
            title={`copy link ${temp_link?.alias ? 'to '+ temp_link.alias : ""}`}
            sx="ml-2 md:ml-3 inline cursor-pointer"
        />
    {/if}
</DivTag>
