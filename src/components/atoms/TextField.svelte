<script lang="ts">
    import { COLOR_PALETTE_STORE, THEME } from "../../store/store";

    export let sx: string = ""; // add custom styles
    export let value: string = "";
    export let placeholder: string = "";
</script>

<!-- <input
    bind:value
    {...$$restProps}
    {placeholder}
    style={`
        border-bottom: 1px solid ${$COLOR_PALETTE_STORE[$THEME].lite_gray};
        color: ${$COLOR_PALETTE_STORE[$THEME].lite_gray}
    `}
    class={`bg-transparent mt-[2.5rem] p-1 w-full min-h-[40px] ${sx}`}
/> -->

<span
    style={`border-bottom: 1px solid ${$COLOR_PALETTE_STORE[$THEME].lite_gray};`}
    class={`flex items-center mt-[2.5rem] p-1 w-full min-h-[40px] ${sx}`}
>
    <input
        bind:value
        {...$$restProps}
        {placeholder}
        style={`color: ${$COLOR_PALETTE_STORE[$THEME].lite_gray}`}
        class={`bg-transparent w-[90%] min-h-[40px]`}
    />

    <span class="ml-1 h-fit w-fit">
        <slot />
    </span>
</span>
