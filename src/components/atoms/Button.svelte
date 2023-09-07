<script lang="ts">
    import { COLOR_PALETTE_STORE, THEME } from "../../store/store";

    export let type: "button" | "submit" | "reset" = "button";
    export let text: string = "Button Text";
    export let sx: string = ""; // add custom styles

    export let grayed: boolean = false;
    export let active: boolean = false;
    export let in_active: boolean = false;

    export let action = () => console.log("button clicked...");
</script>

<button
    on:click={action}
    {type}
    style={`
        background-color: ${
            grayed
                ? $COLOR_PALETTE_STORE[$THEME].bg_gray
                : active
                ? $COLOR_PALETTE_STORE[$THEME].active_link
                : in_active
                ? $COLOR_PALETTE_STORE[$THEME].inactive_link
                : $COLOR_PALETTE_STORE[$THEME].main_blue
        };
        color: ${$COLOR_PALETTE_STORE[$THEME].text}
    `}
    class={`flex items-center justify-center gap-[3px] py-1 px-3 rounded-full whitespace-nowrap ${sx}`}
>
    {text}
    <slot />
</button>

<!--py-[5px] px-[9px] sm:py-1 sm:px-3 rounded-full whitespace-nowrap -->
