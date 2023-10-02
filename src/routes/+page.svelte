<script lang="ts">
    import type { PageData } from "./$types";
    import A_Tag from "../components/atoms/A_Tag.svelte";
    import HeaderText from "../components/atoms/HeaderText.svelte";
    import SpanTag from "../components/atoms/SpanTag.svelte";
    import Form from "../components/form/Form.svelte";
    import MiniLinkTable from "../components/mini_table/MiniLinkTable.svelte";
    import { APP_NAME } from "../store/store";
    import { onMount } from "svelte";

    let chances = "0" + 5;

    export let data: PageData; // page data

    onMount(() => {
        // TODO +=> check if data.current_user is a premium user and get his number of chances left;
    });
</script>

<svelte:head>
    <title>Home</title>
    <meta name="mini link" content="url shortener app" />
</svelte:head>

<section class="home" let:current_user >
    <section
        class="flex flex-col gap-6 items-center justify-center w-full pt-[90px] md:pt-[100px]"
    >
        <HeaderText text="Shorten Your Looong URL : )" />

        <SpanTag>
            {$APP_NAME} is an efficient and easy-to-use URL shortening service that
            boasts your online experience.

            <pre>
                {JSON.stringify(current_user)}
            </pre>
        </SpanTag>

        <!-- === Shortening form === -->
        <Form />

        <SpanTag>
            You can create <SpanTag pink_alert>{chances}</SpanTag> more links.
            <A_Tag is_link path="/login">Login</A_Tag>
            Now to enjoy Unlimited usage
        </SpanTag>
    </section>

    <section class="w-full pt-[90px] md:pt-[130px]">
        <MiniLinkTable />
    </section>
</section>

<style lang="scss">
</style>
