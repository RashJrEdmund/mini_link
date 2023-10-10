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

    const { getData, data: visitor_data, isLoading, error } = useVisitorData({ extendedResult: true }, { immediate: true });

    $: {
        if ($visitor_data) {
            console.log("form visitor", $visitor_data)
        }
    }

    let linkData: LINK_OBJ[] | null;

    const unsubscribe = LINK_STORE.subscribe((val) => {
        linkData = val;
    });

    const { current_user } = $page.data

    let input_val = "";

    let temp_link: LINK_OBJ;

    const hanldeSubmit = async (e) => {
        const formEl = e.target as HTMLFormElement;

        const my_toaster = new TOAST_SERVICE(toast);
    
        if (!input_val.trim()) return my_toaster.STARE(); // 👀

        if (!validateUrl(input_val)) {
            input_val = "";
            return my_toaster.NOT_A_VALID_URL();
        }

        const user_id = getUserOrAgentId(current_user);

        console.log("input_val validation", validateUrl(input_val));

        const newLink: LINK_OBJ = {
            user_id,
            original: input_val, // short_link generated in the backend
            clicks: 0,
            status: "Active",
            alias: "",
            createdAt: new Date().toDateString(),
        };

        fetch(formEl.action, {
            method: "POST",
            body: JSON.stringify(newLink)
        }).then(_ => _.json())
            .then(({ data }) => {
                LINK_STORE.update((currentData) => getUniqueArray(currentData, data));
                my_toaster.NEW_LINK_ADDED();
                temp_link = data;
            })
            .catch(() => my_toaster.AN_ERROR_OCCURE());

        input_val = "";
    };

    export let form: ActionData;

    $: ( async () => {
        if (form?.data) {
            console.log({form});
            temp_link = form.data
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
        bind:value={input_val}
    />

    <input
        type="hidden"
        name="visitor_data"
        value={JSON.stringify($visitor_data)}
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
