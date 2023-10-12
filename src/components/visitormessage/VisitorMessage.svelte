<script lang="ts">
    import A_Tag from "$components/atoms/A_Tag.svelte";
    import SpanTag from "$components/atoms/SpanTag.svelte";

    $: chances = "05";

    const parseChances = (value: number | string) => {
        if (+value > 9) return String(value);
        return "0" + value;
    }

    export let visitor: any;

    $: (() => {
        if (visitor) {
            console.log("this visitor in visitor message", visitor)
            chances = parseChances(visitor.chances);
        }
    })();
</script>

<SpanTag>
    You are limited to shortening only <SpanTag pink_alert>{chances}</SpanTag> links.
    <A_Tag is_link path="/login">Login</A_Tag> now or <A_Tag is_link path="/create-account">create an account</A_Tag>
    to enjoy an unlimited usage
</SpanTag>
