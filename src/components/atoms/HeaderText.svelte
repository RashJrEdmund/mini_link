<script lang="ts">
    import { COLOR_PALETTE_STORE, THEME } from "../../store/store";

    export let text: string = "Header text";
</script>

<header
    id="main_app_header"
    style={`background-image: linear-gradient(${$COLOR_PALETTE_STORE[$THEME].main_blue}, ${$COLOR_PALETTE_STORE[$THEME].main_pink})`}
    class="py-1  text-medium w-fit"
>
    {text}
</header>

<style lang="scss">
    #main_app_header {
        background-clip: text;
        color: transparent;
    }
</style>
