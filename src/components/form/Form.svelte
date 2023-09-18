<script lang="ts">
    import Button from "../atoms/Button.svelte";
    import SpanTag from "../atoms/SpanTag.svelte";
    import LinkIcon from "$lib/icons/link_icon.svg";
    import ScissorsIcon from "$lib/icons/scissors.png";
    import { COLOR_PALETTE_STORE, LINK_STORE, THEME } from "../../store/store";
    import type { LINK_OBJ } from "../../services/types";
    import { onDestroy, onMount } from "svelte";
    import { validateUrl } from "../../services/functions/validation";
    import { INVERT_THEME } from "../../services/functions/utils"
    import toast from "svelte-french-toast";
    import { nanoid } from "nanoid";
    import { BASE_URL, SHORTEN_LENGTH } from "../../services/constants/constants";

    let linkData: LINK_OBJ[] | null;

    const unsubscribe = LINK_STORE.subscribe((val) => {
        linkData = val;
    });

    let input_val = "";

    const hanldeSubmit = () => {
        // validate check input_val to match a url

        if(!input_val.trim()) return;

        console.log("input_val validation", validateUrl(input_val));
        console.log({ nanoid: nanoid(10) });

        const newLink: LINK_OBJ = {
            user_id: "1",
            _id: crypto.randomUUID(),
            original: input_val,
            short_link: BASE_URL + nanoid(SHORTEN_LENGTH), // https://mini-link.com/nanoid()
            clicks: 0,
            status: "Active",
            alias: "",
            createdAt: Date.now(),
        };

        LINK_STORE.update((currentData) => [...currentData, newLink]);

        input_val = "";

        toast.error("new link added",
            {
                icon: "✅",
                style: `border-radius: 10px; background: ${$COLOR_PALETTE_STORE[INVERT_THEME($THEME)].bg}; color: ${$COLOR_PALETTE_STORE[INVERT_THEME($THEME)].lite_gray};`
            }
        );

        console.log({ input_val });
    };

    onDestroy(() => unsubscribe());
</script>

<form
    on:submit|preventDefault={hanldeSubmit}
    class="flex items-center justify-center gap-1 border-[2px] border-app_border rounded-full p-[5px_9px] sm:p-1 sm:px-2"
>
    <SpanTag other_tags>
        <img src={LinkIcon} alt="link_icon" class="mr-[2px] hidden sm:inline" />
        <span class="hidden md:inline">Enter the link here</span>
    </SpanTag>

    <input
        type="text"
        name="form_field"
        placeholder="https://long_url_example.com..."
        style={`color: ${$COLOR_PALETTE_STORE[$THEME].lite_gray}`}
        class="border-l-2 border-l-main_blue bg-transparent p-1 rounded-none w-full sm:w-fit sm:min-w-[300px] md:min-w-[450px]"
        bind:value={input_val}
    />

    <Button text="" type="submit">
        <span class="hidden md:inline">Shorten</span>
        <img
            src={ScissorsIcon}
            draggable="false"
            alt="scissors icon"
            class="h-[30px] w-[30px]"
        />
    </Button>
</form>
