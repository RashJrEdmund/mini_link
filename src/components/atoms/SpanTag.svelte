<script lang="ts">
    import { page } from "$app/stores";
    import { COLOR_PALETTE_STORE, THEME } from "../../store/store";

    // $: theme = $page.data.theme;

    // console.log("this theme in span", theme) TODO +=> CHECK THIS OUT

    export let pink_alert: boolean = false;
    export let success: boolean = false;
    export let is_link: boolean = false;
    export let other_tags: boolean = false;
    export let no_wrap: boolean = false;
    export let box: boolean = false;
    export let sx: string = ""; // add extra styling

    export let icon: string = "";

    export let action: () => void = () => null;
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<span
    {...$$restProps}
    on:click={action}
    style={`color: ${
        pink_alert
            ? $COLOR_PALETTE_STORE[$THEME].main_pink
            : success
            ? $COLOR_PALETTE_STORE[$THEME].lite_blue
            : is_link
            ? $COLOR_PALETTE_STORE[$THEME].lite_blue
            : $COLOR_PALETTE_STORE[$THEME].lite_gray
    };
       ${icon && `background-image: Url('${icon}')`};
    `}
    class={`
        $${other_tags && "flex items-center justify-center gap-[2px]"}
        $${
            no_wrap &&
            "flex items-center justify-center flex-nowrap whitespace-nowrap gap-[2px]"
        }
        ${is_link && "underline cursor-pointer"}
        ${box && "border p-1"}
        ${sx}
    `}
>
    <slot />
</span>
