<script lang="ts">
    import { COLOR_PALETTE_STORE, THEME } from "../../store/store";
    import SpanTag from "./SpanTag.svelte";

    export let sx: string = ""; // add custom styles
    export let value: string = "";
    export let placeholder: string = "";

    export let success_message: string = "";

    export let error_message: string = "";
</script>

<span
    class={`flex flex-col items-center mt-[2.5rem] w-full min-h-[40px] ${sx}`}
>
    <span
        style={`border-bottom: 1px solid ${$COLOR_PALETTE_STORE[$THEME].lite_gray};`}
        class="w-full p-1 flex items-center "
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

    {#if error_message}
        <SpanTag pink_alert={!!error_message} sx="self-start mt-1">{error_message}</SpanTag>
    {/if}

    {#if success_message}
        <SpanTag success sx="self-start mt-1">{success_message}</SpanTag>
    {/if}
</span>
