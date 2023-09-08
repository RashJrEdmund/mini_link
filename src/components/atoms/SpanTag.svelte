<script lang="ts">
    import { COLOR_PALETTE_STORE, THEME } from "../../store/store";

    export let pink_alert: boolean = false;
    export let is_link: boolean = false;
    export let other_tags: boolean = false;
    export let box: boolean = false;
    export let sx: string = ""; // add extra styling

    export let action = () => console.log("button clicked...");
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<span
    on:click={action}
    style={`color: ${
        pink_alert
            ? $COLOR_PALETTE_STORE[$THEME].main_pink
            : is_link
            ? $COLOR_PALETTE_STORE[$THEME].lite_blue
            : $COLOR_PALETTE_STORE[$THEME].lite_gray
    };
    `}
    class={`
        $${other_tags && "flex items-center justify-center gap-[2px]"}
        ${is_link && "underline cursor-pointer"}
        ${box && "border p-1"}
        ${sx}
    `}
>
    <slot />
</span>
