<script lang="ts">
    export let sx: string = ""; // add extra styling
    export let src: string = ""; // image path
    export let alt: string = "image text"; // alt text
    export let draggable: "true" | "false" = "false";

    export let action = () => null;

    export let circle: boolean = false;
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
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
