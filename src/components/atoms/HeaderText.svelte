<script lang="ts">
    import { COLOR_PALETTE_STORE, THEME } from "../../store/store";
    export let action = () => console.log("button clicked...");

    export let text: string = "Header text";
    export let sx: string = ""; // add custom styles

    export let medium: boolean = false; // for medium Headers
    export let small: boolean = false; // for small Headers
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<header
    on:click={action}
    {...$$restProps}
    id="main_app_header"
    style={`background-image: linear-gradient(to right, ${$COLOR_PALETTE_STORE[$THEME].main_blue}, ${$COLOR_PALETTE_STORE[$THEME].main_pink})`}
    class={`py-1 w-fit ${
        medium
            ? "font-semibold text-[1.9rem] sm:text-[2.2rem]"
            : small
            ? "font-semibold text-[1.4rem] sm:text-[2rem]"
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
