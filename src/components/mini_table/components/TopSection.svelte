<script lang="ts">
    import SpanTag from "$components/atoms/SpanTag.svelte";
    import { COLOR_PALETTE_STORE, CURRENT_USER, LINK_STORE, THEME } from "../../../store/store";

    let search_val: string = "";
    $: current_user = $CURRENT_USER;
    $: urls = $LINK_STORE
</script>

{#if current_user && urls.length > 0}
    <section class="bg-none m-0 flex items-center justify-between p-2">
        <form>
            <SpanTag>Search section</SpanTag>

            <input
                bind:value={search_val}
                type="text"
                name=""
                placeholder=" quickly search links"
                style={`color: ${$COLOR_PALETTE_STORE[$THEME].lite_gray}`}
                class="bg-transparent border-l-2 border-l-main_blue border-b-2 border-b-main_blue px-1 mt-1 md:mt-0"
            />
        </form>

        <div>
            sort
        </div>
    </section>
{/if}