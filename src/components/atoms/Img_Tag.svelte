<script lang="ts">
    export let sx: string = ""; // add extra styling
    export let src: string = ""; // image path
    export let alt: string = "image text"; // alt text
    export let draggable: "true" | "false" = "false";

    export let action: () => void = () => null;

    export let circle: boolean = false;
</script>

<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->

<img
    {src}
    {alt}
    {draggable}
    {...$$restProps}
    on:click={action}
    class={`
        ${circle && "rounded-full"}
        ${sx}
    `}
/>
