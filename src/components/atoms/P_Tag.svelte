<script lang="ts">
    import { COLOR_PALETTE_STORE, THEME } from "../../store/store";

    export let box: boolean = false;
    export let box_transparent: boolean = false;
    export let other_tags: boolean = false;
    export let fit: boolean = false;
    export let sx: string = ""; // add extra styling
</script>

<p
    style={`color: ${$COLOR_PALETTE_STORE[$THEME].lite_gray};`}
    class={`
        $${other_tags && "flex items-center justify-center gap-[2px]"}
        ${box && "border p-1"}
        ${box_transparent && "border border-transparent p-1"}
        ${fit && "w-fit"}
        ${sx}
    `}
>
    <slot />
</p>
