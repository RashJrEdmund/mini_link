<script lang="ts">
    import type { LINK_OBJ } from "$services/types";
    import type { ActionData } from "../../routes/$types";

    import { page } from "$app/stores";
    import Button from "../atoms/Button.svelte";
    import SpanTag from "../atoms/SpanTag.svelte";
    import LinkIcon from "$lib/icons/link_icon.svg";
    import ScissorsIcon from "$lib/icons/scissors.png";
    import { COLOR_PALETTE_STORE, CURRENT_USER, LINK_STORE, THEME } from "../../store/store";
    import { onDestroy, onMount } from "svelte";
    import { INVERT_THEME, getUniqueArray } from "$services/functions/utils"
    import { validateUrl } from "$services/functions/validation";
    import toast from "svelte-french-toast";
    import getUserOrAgentId from "$services/functions/user_id";
    import TOAST_SERVICE from "$services/functions/toast";
    import TemporalLinkHolder from "./TemporalLinkHolder.svelte";
    import { enhance } from "$app/forms";

    import { useVisitorData } from '@fingerprintjs/fingerprintjs-pro-svelte';

    // Set to true fo fetch data when component is mounted

    const { getData, data: visitor_fingerprint, isLoading, error } = useVisitorData({ extendedResult: true }, { immediate: true });

    $: {
        if ($visitor_fingerprint) {
            console.log("form visitor", $visitor_fingerprint)
        }
    }

    let linkData: LINK_OBJ[] | null;

    const unsubscribe = LINK_STORE.subscribe((val) => {
        linkData = val;
    });

    $: current_user = $page.data.current_user || null;

    let visitor_data = $visitor_fingerprint || null;

    let temp_link: LINK_OBJ;

    export let form: ActionData;

    export let visitor: any;

    $: (() => {
        if (visitor) {
            visitor_data.chances = visitor.chances;
        }
    })();

    $: ( async () => {
        if (form?.data) {
            const my_toaster = new TOAST_SERVICE(toast);
            console.log({form});

            if (form.message === "NEW_LINK_ADDED") my_toaster.NEW_LINK_ADDED();
            else if (form.message === "NOT_A_VALID_URL") my_toaster.NOT_A_VALID_URL();
            else if (form.message === "STARE") my_toaster.STARE();
            else if (form.message === "OUT_OF_CHANCES") my_toaster.OUT_OF_CHANCES();

            temp_link = form.data;
        }
    })()

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
        class="border-l-2 border-l-main_blue bg-transparent p-1 rounded-none w-full sm:w-fit sm:min-w-[300px] md:min-w-[450px]"
    />

    <input
        type="hidden"
        name="visitor_data"
        value={JSON.stringify({ ...visitor_data })}
    />

    <Button type="submit">
        <span class="hidden md:inline">Shorten</span>
        <img
            src={ScissorsIcon}
            draggable="false"
            alt="scissors icon"
            class="h-[30px] w-[30px]"
        />
    </Button>
</form>

<TemporalLinkHolder {temp_link} />
