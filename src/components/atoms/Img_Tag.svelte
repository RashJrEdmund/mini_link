<script lang="ts">
    export let sx: string = ""; // add extra styling
    export let src: string = ""; // image path
    export let alt: string = "image text"; // alt text
    export let draggable: "true" | "false" = "false";

    export let circle: boolean = false;
</script>

<img
    {src}
    {alt}
    {draggable}
    class={`
        ${circle && "rounded-full"}
        ${sx}
    `}
/>
