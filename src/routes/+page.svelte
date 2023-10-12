<script lang="ts">
    import { page } from "$app/stores";
    import type { ActionData, PageData } from "./$types";
    import A_Tag from "$components/atoms/A_Tag.svelte";
    import HeaderText from "$components/atoms/HeaderText.svelte";
    import SpanTag from "$components/atoms/SpanTag.svelte";
    import Form from "$components/form/Form.svelte";
    import MiniLinkTable from "$components/mini_table/MiniLinkTable.svelte";
    import { APP_NAME } from "../store/store";
    import { onMount } from "svelte";
    import GetAnalytics from "$components/mini_table/GetAnalytics.svelte";
    import VisitorMessage from "$components/visitormessage/VisitorMessage.svelte";
    import IncognitoGaurd from "$components/incognito_gaurd/IncognitoGaurd.svelte";

    export let data: PageData; // page data

    export let form: ActionData;

    $: current_user = $page.data.current_user || null;
    $: visitor = $page.data.visitor || null;

    onMount(() => {
        console.log("this home page data", $page)
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
        <IncognitoGaurd>
            <Form {form} />

            {#if !current_user}
                <VisitorMessage bind:visitor={visitor} /> <!-- the visitor message-->
            {/if}
        </IncognitoGaurd>
    </section>

    <section class="w-full pt-[90px] md:pt-[130px]">
        {#if current_user}
            <MiniLinkTable />
        {:else}
            <GetAnalytics />
        {/if}
    </section>
</section>

<style lang="scss">
</style>
