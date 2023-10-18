<script lang="ts">
    import PTag from '$components/atoms/P_Tag.svelte';
    import SpanTag from '$components/atoms/SpanTag.svelte';
    import { useVisitorData } from '@fingerprintjs/fingerprintjs-pro-svelte';

    // Set to true fo fetch data when component is mounted

    const { getData, data: visitor_data, isLoading, error } = useVisitorData({ extendedResult: true }, { immediate: true });
    
    $: incognitor_active = false;

    $: loading = true;

    $: (() => {
        if ($visitor_data)  {
            incognitor_active = $visitor_data.incognito
            loading = $isLoading;
        }
    })()
</script>

{#if incognitor_active}
    <PTag>
        This <SpanTag success>service</SpanTag> is not avalaible on your
        <SpanTag pink_alert>current browser mode</SpanTag>
    </PTag>
{:else}
    {#if loading}
        <SpanTag success>Loading service...</SpanTag>
    {:else}
        <slot />
    {/if}
{/if}
