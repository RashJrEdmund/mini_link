<script lang="ts">
    import SpanTag from "./SpanTag.svelte";
    export let sx: string = ""; // add extra styling

    export let header: string = ". . .";

    const capitalize = (text: string) => text.slice(0, 1).toUpperCase() + text.slice(1)
</script>

<div class={`w-full h-fit felx flex-col items-start justify-center my-2 ${sx}`}>
    <SpanTag sx="font-bold">{capitalize(header)}</SpanTag>
    <div
        class="w-full h-[1px] bg-lite_blue mt-1"
    />
</div>
