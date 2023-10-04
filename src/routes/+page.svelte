<script lang="ts">
    import { page } from "$app/stores";
    import type { PageData } from "./$types";
    import A_Tag from "$components/atoms/A_Tag.svelte";
    import HeaderText from "$components/atoms/HeaderText.svelte";
    import SpanTag from "$components/atoms/SpanTag.svelte";
    import Form from "$components/form/Form.svelte";
    import MiniLinkTable from "$components/mini_table/MiniLinkTable.svelte";
    import { APP_NAME } from "../store/store";
    import { onMount } from "svelte";

    let chances = "0" + 5;

    export let data: PageData; // page data

    const current_user = $page.data.current_user;

    onMount(() => {
        console.log("htis home page data", data)
        // TODO +=> check if data.current_user is a premium user and get his number of chances left;
    });
</script>

<svelte:head>
    <title>Home</title>
    <meta name="mini link" content="url shortener app" />
</svelte:head>

<section class="home">
    <section
        class="flex flex-col gap-6 items-center justify-center w-full pt-[90px] md:pt-[100px]"
    >
        <HeaderText text="Shorten Your Looong URL : )" />

        <SpanTag>
            {$APP_NAME} is an efficient and easy-to-use URL shortening service that
            boasts your online experience.
        </SpanTag>

        <!-- === Shortening form === -->
        <Form />

        {#if current_user}
            <SpanTag>
                You can create as many as <SpanTag success>unlimited</SpanTag> more links.
                previlages for logged in users only
            </SpanTag>
        {:else}
            <SpanTag>
                You can create <SpanTag pink_alert>{chances}</SpanTag> more links.
                <A_Tag is_link path="/login">Login</A_Tag>
                Now to enjoy Unlimited usage
            </SpanTag>
        {/if}
    </section>

    <section class="w-full pt-[90px] md:pt-[130px]">
        <MiniLinkTable />
    </section>
</section>

<style lang="scss">
</style>
