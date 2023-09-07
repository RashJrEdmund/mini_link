<script lang="ts">
    export let headers: string[] = [
        "Mini link",
        "Original",
        "Click",
        "Status",
        "Date",
        "Action",
    ];
</script>

<main>
    {#each headers as header (header)}
        <h2>
            {header}
        </h2>
    {/each}
</main>
