<script lang="ts">
    //

    import ATag from "$components/atoms/A_Tag.svelte";
import PTag from "$components/atoms/P_Tag.svelte";
    import SpanTag from "$components/atoms/SpanTag.svelte";

</script>

<div class="w-[min(500px,_97vw)] mx-auto">
    <PTag>
        <SpanTag>
            <ATag is_link path="/login" sx="font-bold mr-[3px]">Login</ATag>
            to get and see analytics for the links you shorten.
        </SpanTag>
    </PTag>
</div>
