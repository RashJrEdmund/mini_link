<script lang="ts">
    import { page } from "$app/stores";
    import type { ActionData, PageData } from "./$types";
    import HeaderText from "$components/atoms/HeaderText.svelte";
    import SpanTag from "$components/atoms/SpanTag.svelte";
    import Form from "$components/form/Form.svelte";
    import { APP_NAME } from "../store/store";
    import { onMount } from "svelte";
    import VisitorMessage from "$components/visitormessage/VisitorMessage.svelte";
    import IncognitoGaurd from "$components/gaurds/incognito_gaurd/IncognitoGaurd.svelte";
    import TableGaurd from "$components/gaurds/table_gaurd/TableGaurd.svelte";
    import { handle_toast_alerts } from "$services/functions/toast_alerts";
    import toast from "svelte-french-toast";

    export let data: PageData; // page data

    export let form: ActionData;

    $: current_user = $page.data.current_user || null;
    $: visitor = $page.data.visitor || null;


    $: (async () => {
        if (form) {
            handle_toast_alerts(form);
        }
    })();

    onMount(() => {
        // TODO +=> check if data.current_user is a premium user he's extra aminities;
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
        <TableGaurd bind:current_user /> <!-- MINI-LINK TABLE -->
    </section>
</section>

<style lang="scss">
</style>
