<script lang="ts">
    import { COLOR_PALETTE_STORE, THEME } from "../../store/store";
    export let action = () => console.log("button clicked...");

    export let text: string = "Header text";
    export let sx: string = ""; // add custom styles

    export let minimal: boolean = false;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<header
    on:click={action}
    id="main_app_header"
    style={`background-image: linear-gradient(to right, ${$COLOR_PALETTE_STORE[$THEME].main_blue}, ${$COLOR_PALETTE_STORE[$THEME].main_pink})`}
    class={`py-1 w-fit ${
        minimal
            ? "font-semibold text-[1.9rem] sm:text-[2.2rem]"
            : "font-[900] text-[2rem] md:text-large"
    } ${sx}`}
>
    {text}
</header>

<style lang="scss">
    #main_app_header {
        background-clip: text;
        color: transparent;
    }
</style>
