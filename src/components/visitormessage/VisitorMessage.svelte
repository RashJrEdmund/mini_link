<script lang="ts">
    import A_Tag from "$components/atoms/A_Tag.svelte";
    import SpanTag from "$components/atoms/SpanTag.svelte";

    let chances = "0" + 5;

    export let visitor: any;

    $: (() => {
        if (visitor) {
            chances = visitor.chances
        }
    })();

    console.log("visitor", visitor);
</script>

<SpanTag>
    You can create <SpanTag pink_alert>{chances}</SpanTag> more links.
    <A_Tag is_link path="/login">Login</A_Tag>
    Now to enjoy Unlimited usage
</SpanTag>
