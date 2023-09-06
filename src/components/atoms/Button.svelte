<script lang="ts">
    import { COLOR_PALETTE_STORE, THEME } from "../../store/store";

    const { log } = console;
    export let text: string = "Button Text";
    export let action = () => {
        log("clicked Button");
    };

    export let grayed: boolean = false;
</script>

<button
    on:click={action}
    style={`
        background-color: ${
            grayed ? $COLOR_PALETTE_STORE[$THEME].bg_gray : $COLOR_PALETTE_STORE[$THEME].main_blue
        };
        color: ${$COLOR_PALETTE_STORE[$THEME].text}
    `}
    class="py-1 px-3 rounded-full"
>
    {text}
</button>
