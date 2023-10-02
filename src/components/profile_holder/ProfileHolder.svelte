<script lang="ts">
    import SpanTag from "../atoms/SpanTag.svelte";
    import A_Tag from "../atoms/A_Tag.svelte";
    import DefaultProfilePic from "$lib/icons/default_profile.png";
    import { shorten_text } from "$services/functions/utils";
    import type { USER } from "$services/types";

    export let current_user: USER | null = null;
</script>

<A_Tag sx="w-7 h-7 relative translate-x-[-50%]" path="/user" title="go to profile">
    <div
        style={`background-image: url(${ current_user?.profile_pic.trim() || DefaultProfilePic})`}
        class="absolute top-0 left-[50%] translate-x-[-50%] translate-y-[-5px] w-fit bg-white cursor-pointer m-0 p-3 rounded-full bg-center bg-cover"
    />

    <SpanTag success sx="absolute bottom-0 left-[50%] translate-x-[-50%]  translate-y-[10px]">
        {shorten_text(current_user?.username)}
    </SpanTag>
</A_Tag>
