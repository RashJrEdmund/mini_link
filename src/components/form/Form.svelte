<script lang="ts">
    import Button from "../atoms/Button.svelte";
    import SpanTag from "../atoms/SpanTag.svelte";
    import LinkIcon from "../../lib/icons/link_icon.svg";
    import ScissorsIcon from "../../lib/icons/scissors.png";
    import { COLOR_PALETTE_STORE, THEME } from "../../store/store";

    let input_val = "";

    const hanldeSubmit = () => {
        // check input_val

        console.log({ input_val });
    };
</script>

<form
    on:submit|preventDefault={hanldeSubmit}
    class="flex items-center justify-center gap-1 border-[2px] border-app_border rounded-full p-2"
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
    <Button text="" type="submit" action={hanldeSubmit}>
        <span class="hidden md:inline">Shorten</span>
        <img src={ScissorsIcon} draggable="false" alt="scissors icon" class="h-[30px] w-[30px]" />
    </Button>
</form>
