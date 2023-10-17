<script lang="ts">
    import type { LINK_OBJ } from "$services/types";
    import type { ActionData } from "../../routes/$types";

    import { page } from "$app/stores";
    import Button from "../atoms/Button.svelte";
    import SpanTag from "../atoms/SpanTag.svelte";
    import LinkIcon from "$lib/icons/link_icon.svg";
    import ScissorsIcon from "$lib/icons/scissors.png";
    import { COLOR_PALETTE_STORE, CURRENT_USER, LINK_STORE, THEME } from "../../store/store";
    import { onDestroy } from "svelte";
    import { INVERT_THEME, getUniqueArray } from "$services/functions/utils"
    import toast from "svelte-french-toast";
    import TOAST_SERVICE from "$services/functions/toast";
    import TemporalLinkHolder from "./TemporalLinkHolder.svelte";
    import { enhance } from "$app/forms";

    import { useVisitorData } from '@fingerprintjs/fingerprintjs-pro-svelte';

    // Set to true fo fetch data when component is mounted

    const { getData, data: visitor_data, isLoading, error } = useVisitorData({ extendedResult: true }, { immediate: true });

    let linkData: LINK_OBJ[] | null;

    const unsubscribe = LINK_STORE.subscribe((val) => {
        linkData = val;
    });

    let temp_link: LINK_OBJ | null;

    $: current_user = $page.data.current_user || null;
    $: visitor = $page.data.visitor || null;

    export let form: ActionData;

    $: (() => {
        if (form) {
            if (form.message === "NEW_LINK_ADDED") temp_link = form?.data;
        }
    })();

    onDestroy(() => unsubscribe());
</script>

<form
    action="?/newLink"
    method="POST"
    use:enhance
    class="flex items-center justify-center gap-1 border-[2px] border-app_border rounded-full p-[5px_9px] sm:p-1 sm:px-2"
>
    <SpanTag other_tags>
        <img src={LinkIcon} alt="link_icon" class="mr-[2px] hidden sm:inline" />
        <span class="hidden md:inline">Enter the link here</span>
    </SpanTag>

    <input
        type="text"
        name="input_val"
        placeholder="https://long_url_example.com..."
        style={`color: ${$COLOR_PALETTE_STORE[$THEME].lite_gray}`}
        class="md:border-l-2 border-l-main_blue bg-transparent p-1 rounded-none w-full sm:w-fit sm:min-w-[300px] md:min-w-[450px]"
    />

    <input
        type="hidden"
        name="visitor_data"
        value={JSON.stringify({ ...$visitor_data })}
    />

    <Button type="submit">
        <span class="hidden md:inline">Shorten</span>
        <img
            src={ScissorsIcon}
            draggable="false"
            alt="scissors icon"
            class="h-[17px] w-[20px]"
        />
    </Button>
</form>

<TemporalLinkHolder {temp_link} />
