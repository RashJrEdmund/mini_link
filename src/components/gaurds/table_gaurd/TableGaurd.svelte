<script lang="ts">
    import { page } from "$app/stores";
    import PTag from '$components/atoms/P_Tag.svelte';
    import SpanTag from '$components/atoms/SpanTag.svelte';
    import GetAnalytics from '$components/mini_table/GetAnalytics.svelte';
    import MiniLinkTable from '$components/mini_table/MiniLinkTable.svelte';

    // Set to true fo fetch data when component is mounted

    export let current_user: any;

    $: user_urls = $page.data.user_urls || [];

    $: visitor_urls = $page.data.visitor?.links || [];

    let allow_anlytics_view = true;
</script>

{#if current_user && allow_anlytics_view}
    <MiniLinkTable bind:user_urls allow_anlytics_view />
{:else}
    <GetAnalytics sx="mb-4"/>

    <MiniLinkTable bind:user_urls={visitor_urls} />
{/if}
