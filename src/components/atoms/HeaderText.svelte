<script lang="ts">
    import { COLOR_PALETTE_STORE, THEME } from "../../store/store";

    export let text: string = "Header text";
    export let sx: string = ""; // add custom styles

    export let minimal: boolean = false;
</script>

<header
    id="main_app_header"
    style={`background-image: linear-gradient(to right, ${$COLOR_PALETTE_STORE[$THEME].main_blue}, ${$COLOR_PALETTE_STORE[$THEME].main_pink})`}
    class={`py-1  text-medium w-fit ${minimal ? "font-semibold text-[1.4rem] sm:text-medium": "font-[900] text-[2rem] md:text-large"} ${sx}`}
>
    {text}
</header>

<style lang="scss">
    #main_app_header {
        background-clip: text;
        color: transparent;
    }
</style>
