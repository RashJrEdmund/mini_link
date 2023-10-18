<script lang="ts">
    import { COLOR_PALETTE_STORE, THEME } from "../../store/store";

    export let box: boolean = false;
    export let box_transparent: boolean = false;
    export let fit: boolean = false;
    export let sx: string = ""; // add extra styling

    export let action = () => null;
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
    on:click={action}
    style={`background-color: ${$COLOR_PALETTE_STORE[$THEME].bg}`}
    class={`
        ${box && "border p-1"}
        ${box_transparent && "border border-transparent p-1"}
        ${fit && "w-fit"}
        ${sx}
    `}
    {...$$restProps}
>
    <slot />
</div>